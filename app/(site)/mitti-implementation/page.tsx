import type { Metadata } from "next";
import Link from "next/link";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { FaqSection } from "@/components/sections/FaqSection";
import { GuideLinks } from "@/components/sections/GuideLinks";
import { IndustryLinks } from "@/components/sections/mitti/IndustryLinks";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { Capabilities } from "@/components/sections/service/Capabilities";
import { CtaBand } from "@/components/sections/service/CtaBand";
import { Delivery } from "@/components/sections/service/Delivery";
import {
  mittiImplementationConsultant,
  mittiImplementationCta,
  mittiImplementationFaqs,
  mittiImplementationHero,
  mittiImplementationIncluded,
  mittiImplementationIndustries,
  mittiImplementationMeta,
  mittiImplementationPartner,
  mittiImplementationProcess,
  mittiImplementationSituations,
  mittiImplementationStory,
  mittiImplementationTiming,
} from "@/content/mittiImplementation";
import { site } from "@/content/site";
import { serviceJsonLd } from "@/lib/mittiJsonLd";
import { JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: mittiImplementationMeta.title,
  description: mittiImplementationMeta.description,
  path: mittiImplementationMeta.path,
});

const textLink =
  "font-medium text-blue-700 underline decoration-sky-500 decoration-2 underline-offset-4 hover:text-blue-800";

function LinkedText({ text, link }: { text: string; link: { href: string; label: string } }) {
  const at = text.indexOf(link.label);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <Link href={link.href} className={textLink}>
        {link.label}
      </Link>
      {text.slice(at + link.label.length)}
    </>
  );
}

export default function MittiImplementationPage() {
  return (
    <>
      <ScrollProgress />
      <MittiHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: mittiImplementationHero.crumb, path: mittiImplementationMeta.path },
        ]}
        h1Lead={mittiImplementationHero.h1Lead}
        h1Accent={mittiImplementationHero.h1Accent}
        summary={mittiImplementationHero.summary}
        primary={{ label: mittiImplementationHero.primaryLabel, href: site.calendlyUrl, external: true }}
        secondary={{ label: mittiImplementationHero.secondaryLabel, href: `mailto:${site.email}` }}
      />

      <section id="partner" className="section-y scroll-mt-20">
        <div className="shell flex max-w-[46rem] flex-col gap-6">
          <h2 className="title-l">{mittiImplementationPartner.title}</h2>
          {mittiImplementationPartner.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-l text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section id="story" className="section-y scroll-mt-20 bg-white">
        <div className="shell flex max-w-[46rem] flex-col gap-6">
          <h2 className="title-l">{mittiImplementationStory.title}</h2>
          {mittiImplementationStory.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-l text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <Delivery
        id={mittiImplementationProcess.id}
        chip={mittiImplementationProcess.chip}
        title={mittiImplementationProcess.title}
        steps={[...mittiImplementationProcess.steps]}
        more={mittiImplementationProcess.more}
      />

      <section id="timing" className="section-y scroll-mt-20">
        <div className="shell flex max-w-[46rem] flex-col gap-6">
          <h2 className="title-l">{mittiImplementationTiming.title}</h2>
          <p className="text-l text-gray-800">{mittiImplementationTiming.body}</p>
        </div>
      </section>

      <Capabilities
        id={mittiImplementationIncluded.id}
        chip={mittiImplementationIncluded.chip}
        lead={mittiImplementationIncluded.title}
        items={mittiImplementationIncluded.items.map((item) => ({ ...item }))}
        feature={false}
      />

      <section id="where-you-are" className="section-y scroll-mt-20 bg-white">
        <div className="shell flex flex-col gap-10">
          <h2 className="title-l max-w-[40rem]">{mittiImplementationSituations.title}</h2>
          <RevealGroup className="grid gap-4 lg:grid-cols-3">
            {mittiImplementationSituations.cards.map((card) => (
              <RevealItem key={card.title} className="flex flex-col gap-4 rounded-[1.25rem] bg-canvas px-6 py-7">
                <h3 className="title-s">{card.title}</h3>
                <p className="text-m text-gray-800">{card.body}</p>
                {card.external ? (
                  <a href={card.href} className={textLink}>
                    {card.anchor}
                  </a>
                ) : (
                  <Link href={card.href} className={textLink}>
                    {card.anchor}
                  </Link>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="consultant" className="section-y scroll-mt-20">
        <div className="shell flex max-w-[46rem] flex-col gap-6">
          <h2 className="title-l">{mittiImplementationConsultant.title}</h2>
          {mittiImplementationConsultant.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-l text-gray-800">
              <LinkedText text={paragraph} link={mittiImplementationConsultant.link} />
            </p>
          ))}
        </div>
      </section>

      <IndustryLinks
        id="industries"
        chip={mittiImplementationIndustries.chip}
        lead={mittiImplementationIndustries.title}
        sub={mittiImplementationIndustries.sub}
        more={{ href: "/industries", label: "All industries" }}
      />

      <FaqSection title="Mitti implementation FAQ" items={[...mittiImplementationFaqs]} />
      <GuideLinks omit={[mittiImplementationMeta.path]} />
      <CtaBand
        title={mittiImplementationCta.title}
        sub={mittiImplementationCta.sub}
        label={mittiImplementationCta.label}
        href={site.calendlyUrl}
        secondary={{ label: mittiImplementationCta.secondaryLabel, href: `mailto:${site.email}` }}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Mitti (SafetyCulture) implementation services",
          serviceType: "Mitti implementation",
          description: mittiImplementationMeta.description,
          path: mittiImplementationMeta.path,
          alternateName: ["SafetyCulture implementation", "iAuditor implementation", "Mitti setup and onboarding"],
        })}
      />
    </>
  );
}
