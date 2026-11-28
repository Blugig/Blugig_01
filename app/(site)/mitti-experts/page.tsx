import type { Metadata } from "next";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { FaqSection } from "@/components/sections/FaqSection";
import { IndustryLinks } from "@/components/sections/mitti/IndustryLinks";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { Capabilities } from "@/components/sections/service/Capabilities";
import { CtaBand } from "@/components/sections/service/CtaBand";
import { Delivery } from "@/components/sections/service/Delivery";
import {
  mittiCta,
  mittiExpertsHero,
  mittiExpertsMeta,
  mittiFaqs,
  mittiIncluded,
  mittiOnboarding,
  mittiProcess,
  mittiRename,
  mittiSituations,
  mittiTeam,
  mittiTheWork,
  mittiWhoWeHelp,
} from "@/content/mittiExperts";
import { site } from "@/content/site";
import { serviceJsonLd } from "@/lib/mittiJsonLd";
import { JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: mittiExpertsMeta.title,
  description: mittiExpertsMeta.description,
  path: mittiExpertsMeta.path,
});

const textLink =
  "font-medium text-blue-700 underline decoration-sky-500 decoration-2 underline-offset-4 hover:text-blue-800";

function Paragraph({ text }: { text: string }) {
  return <p className="text-l text-gray-800">{text}</p>;
}

function Prose({
  id,
  title,
  paragraphs,
  className = "section-y scroll-mt-20",
}: {
  id: string;
  title: string;
  paragraphs: readonly { text: string; link?: { href: string; label: string; external?: boolean } }[];
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <div className="shell flex max-w-[46rem] flex-col gap-6">
        <h2 className="title-l">{title}</h2>
        {paragraphs.map((paragraph) => (
          <Paragraph key={paragraph.text} text={paragraph.text} />
        ))}
      </div>
    </section>
  );
}

export default function MittiExpertsPage() {
  return (
    <>
      <ScrollProgress />
      <MittiHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: mittiExpertsHero.crumb, path: mittiExpertsMeta.path },
        ]}
        h1Lead={mittiExpertsHero.h1Lead}
        h1Accent={mittiExpertsHero.h1Accent}
        summary={mittiExpertsHero.summary}
        primary={{ label: mittiExpertsHero.primaryLabel, href: site.calendlyUrl, external: true }}
        secondary={{ label: mittiExpertsHero.secondaryLabel, href: `mailto:${site.email}` }}
      />

      <Prose id={mittiTheWork.id} title={mittiTheWork.title} paragraphs={mittiTheWork.paragraphs} />

      <Delivery
        id={mittiProcess.id}
        chip={mittiProcess.chip}
        title={mittiProcess.title}
        sub={mittiProcess.sub}
        steps={mittiProcess.steps.map((step) => ({ ...step }))}
      />

      <Capabilities
        id={mittiIncluded.id}
        chip={mittiIncluded.chip}
        lead={mittiIncluded.title}
        items={mittiIncluded.items.map((item) => ({ ...item }))}
        feature={false}
      />

      <Prose id={mittiRename.id} title={mittiRename.title} paragraphs={mittiRename.paragraphs} className="section-y scroll-mt-20 bg-white" />

      <Prose id={mittiOnboarding.id} title={mittiOnboarding.title} paragraphs={mittiOnboarding.paragraphs} />

      <Prose id={mittiTeam.id} title={mittiTeam.title} paragraphs={mittiTeam.paragraphs} className="section-y scroll-mt-20 bg-white" />

      <section id={mittiSituations.id} className="section-y scroll-mt-20">
        <div className="shell flex flex-col gap-10">
          <h2 className="title-l max-w-[40rem]">{mittiSituations.title}</h2>
          <RevealGroup className="grid gap-4 lg:grid-cols-3">
            {mittiSituations.cards.map((card) => (
              <RevealItem key={card.title} className="flex flex-col gap-4 rounded-[1.25rem] bg-white px-6 py-7">
                <h3 className="title-s">{card.title}</h3>
                <p className="text-m text-gray-800">{card.body}</p>
                {card.external ? (
                  <a href={card.href} className={textLink} target="_blank" rel="noopener noreferrer">
                    {card.anchor}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <p className="text-m text-gray-800">{card.anchor}</p>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <IndustryLinks
        id="who-we-help"
        chip={mittiWhoWeHelp.chip}
        lead={mittiWhoWeHelp.title}
        sub={mittiWhoWeHelp.sub}
        more={{ href: "/industries", label: "All industries" }}
      />

      <div id="faq">
        <FaqSection items={mittiFaqs} title="Mitti implementation questions" />
      </div>
      <CtaBand
        title={mittiCta.title}
        sub={mittiCta.sub}
        label={mittiCta.label}
        href={site.calendlyUrl}
        secondary={{ label: mittiCta.secondaryLabel, href: `mailto:${site.email}` }}
      />

      <JsonLd
        data={serviceJsonLd({
          name: "Mitti (SafetyCulture) implementation and consulting",
          serviceType: "Mitti implementation",
          description: mittiExpertsMeta.description,
          path: mittiExpertsMeta.path,
          alternateName: ["SafetyCulture implementation", "iAuditor implementation", "Mitti setup", "Mitti consultant"],
        })}
      />
    </>
  );
}
