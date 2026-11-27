import type { Metadata } from "next";
import Link from "next/link";
import { HashScroll } from "@/components/layout/HashScroll";
import { FaqSection } from "@/components/sections/FaqSection";
import { AgentSpotlight } from "@/components/sections/home/AgentSpotlight";
import { Approach } from "@/components/sections/home/Approach";
import { Expertise } from "@/components/sections/home/Expertise";
import { Gap } from "@/components/sections/home/Gap";
import { Hero } from "@/components/sections/home/Hero";
import { Impact } from "@/components/sections/home/Impact";
import { Integrations } from "@/components/sections/home/Integrations";
import { Momentum } from "@/components/sections/home/Momentum";
import { TrustedBy } from "@/components/sections/home/TrustedBy";
import { Statement } from "@/components/sections/home/Statement";
import { Related } from "@/components/sections/service/Related";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Wins } from "@/components/sections/home/Wins";
import { approach, expertise, explore, gap, homeFaqs } from "@/content/home";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Avantra Technologies | Mitti (SafetyCulture) Experts",
  description:
    "Avantra Technologies is a Bengaluru team of Mitti (SafetyCulture) experts. We help you plan, set up, and run Mitti by SafetyCulture, which many teams still call iAuditor.",
  path: "/",
});

/**
 * Section order follows zig.ai: hero → before/after → scrubbed statement →
 * logo loop → bento → impact circles → integrations (Avantra) → wins venn
 * (ink) → steps (brand blue) → wheel → navy band → FAQ → footer CTA.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Gap
        chip={gap.chip}
        lead={gap.titleLead}
        accent={gap.titleAccent}
        sub={gap.sub}
        lists={[
          { label: "Before", items: gap.before, kind: "before", withLogo: true },
          { label: "After", items: gap.after, kind: "after", withLogo: true },
        ]}
      />
      <Statement />
      <TrustedBy />
      <Expertise
        chip={expertise.chip}
        lead={expertise.titleLead}
        accent={expertise.titleAccent}
        sub={expertise.sub}
        items={services.map((s) => ({
          key: s.slug,
          href: `/services#${s.slug}`,
          number: s.number,
          title: s.focus,
          body: s.cardLine,
          illustration: s.illustration,
        }))}
      />
      <Related
        id="explore"
        chip={explore.chip}
        lead={explore.titleLead}
        accent={explore.titleAccent}
        sub={explore.sub}
        columns={4}
        cards={explore.cards.map((card) => ({ ...card }))}
        footer={
          <p className="mt-10 max-w-[40rem] text-l text-gray-800">
            Planning a first site or a wider rollout? Our{" "}
            <Link
              href="/mitti-experts"
              className="font-medium text-blue-700 underline decoration-sky-500 decoration-2 underline-offset-4 hover:text-blue-800"
            >
              Mitti implementation experts
            </Link>{" "}
            scope the account, run a pilot, and train each role.
          </p>
        }
      />
      <Impact />
      <Integrations />
      <Wins />
      <Approach data={approach} />
      <Momentum />
      <AgentSpotlight />
      <Testimonials />
      <FaqSection items={homeFaqs} />
      <HashScroll />
    </>
  );
}
