import { Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { FaqSection } from "@/components/sections/FaqSection";
import { IndustryLinks } from "@/components/sections/mitti/IndustryLinks";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { Capabilities } from "@/components/sections/service/Capabilities";
import { CtaBand } from "@/components/sections/service/CtaBand";
import { Delivery } from "@/components/sections/service/Delivery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  mittiCta,
  mittiExpertsHero,
  mittiExpertsMeta,
  mittiFaqs,
  mittiHowWeWork,
  mittiWhatWeDo,
  mittiWhoWeHelp,
  mittiWhy,
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
  "mt-2 w-fit text-m font-medium text-blue-600 underline decoration-sky-500 decoration-2 underline-offset-4 hover:text-blue-700";

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

      <Capabilities
        id={mittiWhatWeDo.id}
        chip={mittiWhatWeDo.chip}
        lead={mittiWhatWeDo.title}
        sub={mittiWhatWeDo.sub}
        items={[...mittiWhatWeDo.items]}
        feature={false}
      />
      <IndustryLinks
        id="who-we-help"
        chip={mittiWhoWeHelp.chip}
        lead={mittiWhoWeHelp.title}
        sub={mittiWhoWeHelp.sub}
      />
      <Delivery
        id={mittiHowWeWork.id}
        steps={[...mittiHowWeWork.steps]}
        title={mittiHowWeWork.title}
        chip={mittiHowWeWork.chip}
        sub={mittiHowWeWork.sub}
      />

      <section id={mittiWhy.id} className="section-y scroll-mt-20">
        <div className="shell">
          <Reveal>
            <SectionHeading
              chip={mittiWhy.chip}
              icon={Users}
              lead={mittiWhy.title}
              sub={mittiWhy.sub}
              className="max-w-[36rem]"
            />
          </Reveal>
          <RevealGroup as="ul" className="mt-[3.75rem] grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mittiWhy.items.map((item, i) => (
              <RevealItem as="li" key={item.title}>
                <article className="flex h-full flex-col rounded-[1.5rem] bg-white p-6 sm:p-8">
                  <span className="text-mono text-gray-400">/ {String(i + 1).padStart(2, "0")}</span>
                  <div className="mt-10 flex flex-col gap-3">
                    <h3 className="title-s">{item.title}</h3>
                    <p className="text-m text-gray-600">{item.body}</p>
                    {"links" in item
                      ? item.links.map((link) =>
                          link.external ? (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={textLink}>
                              {link.label}
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          ) : (
                            <Link key={link.href} href={link.href} className={textLink}>
                              {link.label}
                            </Link>
                          ),
                        )
                      : null}
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div id="faq">
        <FaqSection items={mittiFaqs} title="FAQ" />
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
          name: "Mitti experts and consultants",
          serviceType: "Mitti consulting",
          description: mittiExpertsMeta.description,
          path: mittiExpertsMeta.path,
        })}
      />
    </>
  );
}
