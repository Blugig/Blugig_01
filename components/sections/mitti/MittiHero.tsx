import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";
import { SplitWords } from "@/components/motion/SplitWords";
import { HeroMotion } from "@/components/sections/home/HeroMotion";
import { HeroBackdrop, HeroParticles } from "@/components/sections/service/ServiceHero";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import type { ShapeName } from "@/lib/three/shapes";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

type Crumb = { name: string; path: string };
type HeroLink = { label: string; href: string; external?: boolean };

const linkProps = ({ href, external }: HeroLink) =>
  external ? { href, target: "_blank" as const, rel: "noopener noreferrer" } : { href };

/**
 * Hero for the Mitti landing pages. Same layout pieces as the service hero.
 * The H1 is only the lead and accent, so an eyebrow is not folded into the heading.
 */
export function MittiHero({
  crumbs,
  h1Lead,
  h1Accent = "",
  summary,
  primary,
  secondary,
  shape = "mitti",
  children,
}: {
  crumbs: Crumb[];
  h1Lead: string;
  h1Accent?: string;
  summary: string;
  primary: HeroLink;
  secondary: HeroLink;
  shape?: ShapeName;
  children?: ReactNode;
}) {
  const leadCount = h1Lead.split(/\s+/).filter(Boolean).length;

  return (
    <>
      <HeroMotion
        gridClassName="pt-28 pb-16 lg:min-h-[50rem] lg:pt-24 lg:pb-10"
        background={<HeroBackdrop />}
        copy={
          <div className="flex max-w-[46.5rem] flex-col gap-[2.625rem]">
            <div className="flex flex-col gap-6">
              <nav aria-label="Breadcrumb" className="enter-fade">
                <ol className="text-s flex flex-wrap items-center gap-2 text-gray-500">
                  {crumbs.map((c, i) => {
                    const last = i === crumbs.length - 1;
                    return (
                      <Fragment key={c.path}>
                        {i > 0 ? <li aria-hidden>/</li> : null}
                        <li aria-current={last ? "page" : undefined} className={last ? "text-ink" : undefined}>
                          {last ? (
                            c.name
                          ) : (
                            <Link href={c.path} className="hover:text-ink">
                              {c.name}
                            </Link>
                          )}
                        </li>
                      </Fragment>
                    );
                  })}
                </ol>
              </nav>
              <h1 className="title-xl">
                <SplitWords text={h1Lead} />
                {h1Accent ? (
                  <>
                    {" "}
                    <SplitWords text={h1Accent} offset={leadCount} wordClassName="text-grad" />
                  </>
                ) : null}
              </h1>
              <p className="enter-fade text-l max-w-[36rem]" style={d(0.5)}>
                {summary}
              </p>
            </div>
            <div className="enter-fade flex flex-wrap items-center gap-3" style={d(0.65)}>
              <ButtonLink {...linkProps(primary)}>
                {primary.label}
                {primary.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </ButtonLink>
              <ButtonLink {...linkProps(secondary)} variant="outline">
                {secondary.label}
                {secondary.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </ButtonLink>
            </div>
            {children ? (
              <div className="enter-fade" style={d(0.8)}>
                {children}
              </div>
            ) : null}
          </div>
        }
        visual={<HeroParticles shape={shape} />}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
