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
        <div className="shell grid items-start gap-12 lg:grid-cols-[minmax(16rem,22rem)_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              chip="A normal day"
              lead="How the day"
              accent="actually runs"
              sub="Three parts of the day. Each one says what goes wrong now, and what your team gets with Mitti."
            />
          </Reveal>
          <ol className="flex flex-col">
            {industry.dayInTheLife.map((step, index) => {
              const last = index === industry.dayInTheLife.length - 1;
              return (
                <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-x-4 sm:grid-cols-[3rem_1fr] sm:gap-x-6">
                  <div className="flex flex-col items-center">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-600 font-mono text-sm text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {last ? null : <span aria-hidden className="my-2 w-px flex-1 bg-gray-200" />}
                  </div>
                  <div className={last ? "pt-1" : "pt-1 pb-10"}>
                    <p className="text-s font-medium tracking-wide text-gray-500 uppercase">{step.stage}</p>
                    <h3 className="mt-2 text-xl leading-snug font-medium tracking-[-0.02em] text-ink sm:text-2xl">{step.title}</h3>
                    <p className="mt-3 max-w-[36rem] text-base leading-7 text-gray-700">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="use-cases" className="section-y scroll-mt-20">
        <div className="shell flex flex-col gap-12">
          <Reveal>
            <SectionHeading chip="Use cases" lead={industry.useCasesLead} accent={industry.useCasesAccent} sub={industry.useCasesSub} className="max-w-[40rem]" />
          </Reveal>
          <div className="flex flex-col gap-8">
            {industry.useCases.map((item) => (
              <Reveal key={item.title}>
                <article className="rounded-[1.5rem] bg-white p-6 sm:p-10">
                  <h3 className="title-s max-w-[40rem] text-balance">{item.title}</h3>
                  <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
                    <div className="flex h-full flex-col gap-3 rounded-2xl bg-canvas p-5 sm:p-6">
                      <p className="text-s font-medium tracking-wide text-gray-500 uppercase">What happens today</p>
                      <p className="text-base leading-7 text-gray-800">{item.scenario}</p>
                    </div>
                    <div className="flex h-full flex-col gap-3 rounded-2xl bg-canvas p-5 sm:p-6">
                      <p className="text-s font-medium tracking-wide text-gray-500 uppercase">How we set it up</p>
                      <p className="text-base leading-7 text-gray-800">{item.setup}</p>
                    </div>
                    <div className="flex h-full flex-col gap-3 rounded-2xl bg-canvas p-5 sm:p-6">
                      <p className="text-s font-medium tracking-wide text-gray-500 uppercase">What the team gets</p>
                      <p className="text-base leading-7 text-gray-800">{item.result}</p>
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
              sub="These are checklists we build for this kind of work. We start from the forms you already use, then share one version."
            />
          </Reveal>
          <ul className="flex flex-wrap content-start gap-3 lg:pt-16">
            {industry.templates.map((name) => (
              <li key={name} className="flex min-h-12 items-center rounded-full bg-white px-5 py-3 text-base leading-snug font-medium text-ink">
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
            <SectionHeading chip="After launch" lead="What changes" accent="for your team" sub="What gets easier for the people doing the work. We do not promise a score." />
          </Reveal>
          <ul className="flex flex-col gap-3">
            {industry.outcomes.map((line) => (
              <li key={line} className="rounded-[1.25rem] bg-white px-6 py-5 text-base leading-7 text-gray-800">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div id="faq">
        <FaqSection items={industry.faqs} />
      </div>

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

      <div id="cta">
        <CtaBand
          title={industry.ctaTitle}
          sub={`Book a 30-minute call, or email ${site.email}.`}
          label="Book a call"
          href={site.calendlyUrl}
          secondary={{ label: "Mitti training", href: "/mitti-training" }}
        />
      </div>

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
