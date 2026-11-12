"use client";

import { ArrowRight, CirclePlay } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useLayoutEffect, useRef, useState, type CSSProperties, type Ref } from "react";
import { SplitChars } from "@/components/motion/SplitChars";
import { HeroWheel, STACKED_ZONE } from "@/components/sections/home/HeroWheel";
import { ButtonLink } from "@/components/ui/Button";
import { hero } from "@/content/home";
import { useScrollChoreography } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import salesforceLogo from "@/public/brand/apps/salesforce.png";
import sapLogo from "@/public/brand/apps/sap.png";
import servicenowLogo from "@/public/brand/apps/servicenow.png";
import slackLogo from "@/public/brand/apps/slack.png";
import teamsLogo from "@/public/brand/apps/teams.png";
import mittiLogo from "@/public/brand/mitti-logo.png";
import workatoBadge from "@/public/brand/workato-silver-partner.png";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

/** Desktop hero height — the same clamp as the grid's h-screen / min-h / max-h. */
const HERO_H = "clamp(54.375rem, 100vh, 56.25rem)";
/** Extra scroll the desktop hero stays pinned for, so the second stage is seen before it leaves. */
const PIN = "60vh";
/** Scroll depth, as a fraction of the viewport, that switches to the integration stage. */
const SWITCH_AT = 0.12;
/** Head start the outgoing headline gets before the incoming letters start to form. */
const SWAP_LAG = 0.28;

const BUTTON_ICONS = { arrow: ArrowRight, play: CirclePlay } as const;

type Stage = (typeof hero.stages)[number];
type Swap = "in" | "out" | "idle";

/**
 * zig hero (`.hero_container-new`): copy column over a full-bleed animation
 * layer. Desktop: 100vh clamped to 54.375–56.25rem, columns 1fr 1fr (1.4fr 1fr
 * from 1280px). ≤991px: stacked and centred; the wheel sits at the bottom under
 * a top fade, and the copy is followed by a spacer as tall as the wheel's card
 * band (`--hero-zone`, from HeroWheel's geometry), so the hero grows with its
 * copy and the cards always start below it.
 * Two stages share the layout: a short scroll swaps the inspection copy for the
 * integration copy — the headline letter by letter, the wheel turning to the
 * next set of cards — and scrolling back swaps it back. The credential badges
 * stay put. On desktop the hero pins for PIN of scroll so the swap plays in place.
 * Choreography (≤1.5s): badges 0s → letters 0.1s (+15ms each) → sub 0.5s → CTAs 0.65s.
 */
export function Hero() {
  const pinned = useScrollChoreography();
  const { scrollY } = useScroll();
  // seen[i]: stage i has been shown, so leaving it plays the exit (a never-shown stage stays idle).
  const [{ stage, dir, seen }, setState] = useState({ stage: 0, dir: 1, seen: [true, false] });

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > window.innerHeight * SWITCH_AT ? 1 : 0;
    setState((prev) =>
      prev.stage === next
        ? prev
        : { stage: next, dir: next > prev.stage ? 1 : -1, seen: prev.seen.map((s, i) => s || i === next) },
    );
  });
  const swapped = seen.every(Boolean);

  // Both stages share one grid cell, so the shorter stage (the first: it has no app chips) ends above the
  // cell's foot. lift[i] is that shortfall; stacked, the wheel rides up by it so the cards sit under the copy
  // that is showing. Layout offsets, so the copy's entrance transforms don't skew it.
  const copyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lift, setLift] = useState<number[]>([]);
  useLayoutEffect(() => {
    const els = copyRefs.current.filter((el): el is HTMLDivElement => !!el);
    const measure = () => {
      const ends = els.map((el) => {
        const last = el.lastElementChild as HTMLElement | null;
        return last ? last.offsetTop + last.offsetHeight : 0;
      });
      const max = Math.max(...ends);
      setLift((prev) => {
        const next = ends.map((end) => Math.round(max - end));
        return next.length === prev.length && next.every((v, i) => v === prev[i]) ? prev : next;
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    els.forEach((el) => [...el.children].forEach((child) => ro.observe(child)));
    return () => ro.disconnect();
  }, []);

  return (
    <section className="relative" style={pinned ? { height: `calc(${HERO_H} + ${PIN})` } : undefined}>
      <div
        className={cn(
          "@container relative isolate overflow-hidden max-[992px]:[--hero-zone:var(--zone-tablet)] max-[480px]:[--hero-zone:var(--zone-mobile)]",
          pinned && "sticky",
        )}
        style={
          {
            "--zone-tablet": STACKED_ZONE.tablet,
            "--zone-mobile": STACKED_ZONE.mobile,
            ...(pinned ? { top: `min(0px, calc(100vh - ${HERO_H}))` } : null),
          } as CSSProperties
        }
      >
        <HeroWheel stage={stage} lift={lift[stage] ?? 0} animateLift={swapped} />
        <div className="shell relative z-10">
          <div className="grid items-center gap-5 min-[992px]:h-screen min-[992px]:max-h-[56.25rem] min-[992px]:min-h-[54.375rem] min-[992px]:grid-cols-2 min-[1280px]:grid-cols-[1.4fr_1fr] max-[992px]:flex max-[992px]:flex-col max-[992px]:gap-0 max-[992px]:pt-[8.125rem] max-[480px]:pt-[7.25rem]">
            <div className="flex w-full max-w-[46.5rem] flex-col gap-6 max-[992px]:items-center max-[992px]:text-center">
              <div className="enter-fade max-[768px]:max-w-[24rem]" style={d(0)}>
                <Badges badges={hero.badges} />
              </div>
              <div className="grid w-full" style={{ "--dir": dir } as CSSProperties}>
                {hero.stages.map((copy, i) => (
                  <HeroCopy
                    key={i}
                    ref={(el) => {
                      copyRefs.current[i] = el;
                    }}
                    copy={copy}
                    heading={i === 0 ? "h1" : "h2"}
                    swap={i === stage ? "in" : seen[i] ? "out" : "idle"}
                    lag={swapped ? SWAP_LAG : 0.1}
                    entering={!swapped}
                  />
                ))}
              </div>
            </div>
            {/* Stacked: room for the wheel's cards, which HeroWheel pins to the hero's foot. */}
            <div aria-hidden className="h-(--hero-zone) w-full shrink-0 mt-8 max-[480px]:mt-6 min-[992px]:hidden" />
          </div>
          {hero.stages.map((copy, i) =>
            copy.apps.length ? (
              <AppChips
                key={i}
                apps={copy.apps}
                visible={i === stage}
                className="absolute right-[var(--gutter)] bottom-8 justify-end max-[992px]:hidden"
              />
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * One stage's copy. Stages stack in a single grid cell so swapping never shifts
 * the layout; the headline letters and the rest of the copy animate from
 * `swap` (see .split-char / .hero-swap in globals.css). `entering` marks the
 * first load, before any swap, when the letters must paint visibly for LCP.
 */
function HeroCopy({
  ref,
  copy,
  heading: Heading,
  swap,
  lag,
  entering,
}: {
  ref?: Ref<HTMLDivElement>;
  copy: Stage;
  heading: "h1" | "h2";
  swap: Swap;
  lag: number;
  entering: boolean;
}) {
  const leadCount = copy.titleLead.replace(/\s+/g, "").length;
  const sd = (s: number) => ({ "--sd": `${s + lag}s` }) as CSSProperties;
  return (
    <div
      ref={ref}
      data-swap={swap}
      data-enter={entering || undefined}
      inert={swap !== "in"}
      className="flex flex-col gap-[2.625rem] [grid-area:1/1] max-[992px]:items-center"
      style={{ "--lag": `${lag}s` } as CSSProperties}
    >
      <div className="flex flex-col gap-6 max-[992px]:items-center max-[768px]:max-w-[24rem]">
        {/* The kicker opens the heading with the page's search phrase in plain text. Lead and accent then
            each own a line (balanced when the accent wraps), as in the mockups. The letters are the only
            copy of the headline (crawlers read it once); the colon and spaces keep the parts apart, and
            aria-label spares screen readers the letter spans. */}
        <Heading
          className="flex flex-col gap-5 max-[992px]:items-center"
          aria-label={`${copy.kicker}: ${copy.titleLead} ${copy.titleAccent}`}
        >
          <span aria-hidden className="hero-swap block" style={sd(0.3)}>
            <span className="eyebrow enter-fade block text-gray-600" style={d(0.05)}>
              {copy.kicker}
            </span>
          </span>
          <span aria-hidden className="sr-only">
            :{" "}
          </span>
          <span className="title-xl block">
            <span aria-hidden className="block text-balance">
              <SplitChars text={copy.titleLead} />
            </span>{" "}
            <span aria-hidden className="block text-balance">
              <SplitChars text={copy.titleAccent} offset={leadCount} gradient />
            </span>
          </span>
        </Heading>
        <div className="hero-swap" style={sd(0.4)}>
          <p className="enter-fade text-l max-w-[33.75rem]" style={d(0.5)}>
            {copy.sub}
          </p>
        </div>
      </div>
      <div className="hero-swap max-[480px]:w-full" style={sd(0.5)}>
        <div
          className="enter-fade flex flex-wrap items-center gap-3 max-[992px]:justify-center max-[480px]:w-full max-[480px]:flex-col max-[480px]:items-stretch"
          style={d(0.65)}
        >
          <ButtonLink href={copy.primary.href}>
            {copy.primary.label}
            <ButtonIcon name={"icon" in copy.primary ? copy.primary.icon : undefined} />
          </ButtonLink>
          <ButtonLink href={copy.secondary.href} variant="outline">
            {copy.secondary.label}
            <ButtonIcon name={"icon" in copy.secondary ? copy.secondary.icon : undefined} />
          </ButtonLink>
        </div>
      </div>
      {copy.apps.length ? (
        <div className="hero-swap" style={sd(0.65)}>
          <AppChips apps={copy.apps} className="justify-center min-[992px]:hidden" />
        </div>
      ) : null}
    </div>
  );
}

function ButtonIcon({ name }: { name?: keyof typeof BUTTON_ICONS }) {
  if (!name) return null;
  const Icon = BUTTON_ICONS[name];
  return <Icon aria-hidden className="size-5 shrink-0" strokeWidth={1.8} />;
}

/** Partner credentials as small cards: Mitti shows its wordmark, Workato its badge. */
function Badges({ badges }: { badges: typeof hero.badges }) {
  return (
    <ul className="flex flex-wrap gap-3 max-[992px]:justify-center">
      {badges.map((badge) => (
        <li
          key={badge.name}
          className={cn(
            "flex items-center gap-3 rounded-2xl bg-white py-2.5 pr-5 shadow-[0_14px_30px_-18px_rgba(6,69,148,0.28)]",
            badge.kind === "mitti" ? "pl-5" : "pl-3",
          )}
        >
          {badge.kind === "mitti" ? (
            // The wordmark stands in for the name line.
            <span className="flex flex-col items-start gap-1 text-left">
              <Image src={mittiLogo} alt={badge.name} width={60} height={23} className="h-auto w-15" />
              <span className="text-sm leading-[1.3] text-gray-600">{badge.line}</span>
            </span>
          ) : (
            <>
              <Image src={workatoBadge} alt="Workato Silver Partner" width={44} height={44} className="size-11" />
              <span className="flex flex-col text-left">
                <span className="text-base leading-[1.2] font-semibold text-ink">{badge.name}</span>
                <span className="text-sm leading-[1.3] text-gray-600">{badge.line}</span>
              </span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

/** App logos for the integration stage's chips; `h` (px) evens out their optical sizes. */
const APP_LOGOS: Record<string, { src: StaticImageData; h: number }> = {
  Salesforce: { src: salesforceLogo, h: 30 },
  SAP: { src: sapLogo, h: 22 },
  ServiceNow: { src: servicenowLogo, h: 16 },
  Slack: { src: slackLogo, h: 18 },
  Teams: { src: teamsLogo, h: 24 },
};

/** Systems the integration stage connects to: a logo chip per app, a text chip for anything without one. */
function AppChips({ apps, visible = true, className }: { apps: readonly string[]; visible?: boolean; className?: string }) {
  return (
    <ul
      aria-label="Connects with"
      className={cn(
        "flex flex-wrap gap-2.5 transition-[opacity,translate,visibility] duration-500",
        visible ? "delay-500" : "invisible translate-y-3 opacity-0",
        className,
      )}
    >
      {apps.map((app) => {
        const logo = APP_LOGOS[app];
        return (
          <li
            key={app}
            className="flex h-11 items-center rounded-xl bg-white px-4 text-sm leading-none font-medium tracking-[-0.02em] text-gray-600 shadow-[0_10px_24px_-16px_rgba(6,69,148,0.3)]"
          >
            {logo ? (
              <Image
                src={logo.src}
                alt={app}
                height={logo.h}
                width={Math.round((logo.h * logo.src.width) / logo.src.height)}
              />
            ) : (
              app
            )}
          </li>
        );
      })}
    </ul>
  );
}
