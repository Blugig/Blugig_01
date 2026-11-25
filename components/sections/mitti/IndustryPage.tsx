import Link from "next/link";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Reveal } from "@/components/motion/Reveal";
import { IndustryLinks } from "@/components/sections/mitti/IndustryLinks";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { Capabilities } from "@/components/sections/service/Capabilities";
import { CtaBand } from "@/components/sections/service/CtaBand";
import { Delivery } from "@/components/sections/service/Delivery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { IndustryPageContent } from "@/content/industryPages";
import { site } from "@/content/site";
import { serviceJsonLd } from "@/lib/mittiJsonLd";
import { JsonLd } from "@/lib/seo";

/** Detailed industry page. Breadcrumb is Home, Industries, then this industry. */
export function IndustryPage({ industry }: { industry: IndustryPageContent }) {
  return (
    <>
      <ScrollProgress />
      <MittiHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.crumb, path: industry.path },
        ]}
        h1Lead={industry.h1Lead}
        h1Accent={industry.h1Accent}
        summary={industry.summary}
        primary={{ label: "Book a call", href: site.calendlyUrl, external: true }}
        secondary={{ label: "Email us", href: `mailto:${site.email}` }}
        shape={industry.shape}
      />
      {industry.note ? (
        <p className="shell text-s -mt-6 max-w-[40rem] pb-4 text-gray-600">{industry.note}</p>
      ) : null}

      <Capabilities
        id="problems"
        chip="The problems we hear"
        lead={industry.problemsLead}
        sub={industry.problemsSub}
        items={industry.problems}
        feature={false}
      />

      <section id="day" className="section-y scroll-mt-20 bg-white">
        <div className="shell">
          <Reveal>
            <div className="prose-blog max-w-[46rem]">
              <h2>How the day actually runs</h2>
              {industry.dayInTheLife.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="use-cases" className="section-y scroll-mt-20">
        <div className="shell flex flex-col gap-10">
          <Reveal>
            <SectionHeading chip="Use cases" lead={industry.useCasesLead} accent={industry.useCasesAccent} sub={industry.useCasesSub} className="max-w-[40rem]" />
          </Reveal>
          <div className="flex flex-col gap-5">
            {industry.useCases.map((item) => (
              <Reveal key={item.title}>
                <article className="rounded-[1.5rem] bg-white p-6 sm:p-10">
                  <h3 className="title-s max-w-[40rem]">{item.title}</h3>
                  <div className="mt-8 grid gap-8 lg:grid-cols-3">
                    <div className="flex flex-col gap-2">
                      <p className="eyebrow text-gray-500">What happens today</p>
                      <p className="text-m text-gray-700">{item.scenario}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="eyebrow text-gray-500">How we set it up in Mitti</p>
                      <p className="text-m text-gray-700">{item.setup}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="eyebrow text-gray-500">What the team gets</p>
                      <p className="text-m text-gray-700">{item.result}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="section-y scroll-mt-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              chip="Example templates"
              lead="Templates we build"
              sub="Named checklists for this work. We start from the forms you already use, then share one version."
            />
          </Reveal>
          <ul className="flex flex-wrap content-start gap-3 lg:pt-16">
            {industry.templates.map((name) => (
              <li key={name} className="rounded-full bg-white px-5 py-3 text-base font-medium text-ink">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Delivery
        id="rollout"
        chip="How we roll it out"
        title="How we roll it out"
        sub={industry.stepsSub}
        steps={industry.steps}
      />

      <section id="outcomes" className="section-y scroll-mt-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <SectionHeading chip="After launch" lead="What changes" accent="for your team" sub="Qualitative changes we aim for. Not a promise of a score." />
          </Reveal>
          <ul className="flex flex-col gap-4">
            {industry.outcomes.map((line) => (
              <li key={line} className="rounded-[1.25rem] bg-white px-6 py-5 text-base leading-relaxed text-gray-800">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={industry.faqs} />

      <section id="related" className="pb-4">
        <div className="shell flex flex-col gap-4">
          <p className="eyebrow text-gray-500">Related</p>
          <ul className="flex flex-wrap gap-3">
            {industry.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full bg-white px-5 py-3 text-base font-medium text-ink transition-colors duration-300 hover:text-blue-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <IndustryLinks
        chip="Also see"
        lead="Other industries"
        sub="The same kind of Mitti setup, shaped for a different operation."
        omitSlug={industry.slug}
        more={{ href: "/industries", label: "All industries" }}
      />

      <CtaBand
        title={industry.ctaTitle}
        sub={`Book a 30-minute call, or email ${site.email}.`}
        label="Book a call"
        href={site.calendlyUrl}
        secondary={{ label: "Mitti training", href: "/mitti-training" }}
      />

      <JsonLd
        data={serviceJsonLd({
          name: industry.linkLabel,
          serviceType: "Mitti consulting",
          description: industry.description,
          path: industry.path,
        })}
      />
    </>
  );
}
