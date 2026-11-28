import type { ReactNode } from "react";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { IndustryLinks } from "@/components/sections/mitti/IndustryLinks";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/service/CtaBand";
import { Delivery } from "@/components/sections/service/Delivery";
import type { SeoLandingPage } from "@/content/seoLandings";
import { site } from "@/content/site";
import { serviceJsonLd } from "@/lib/mittiJsonLd";
import { JsonLd } from "@/lib/seo";

/** Body copy stays plain. Markdown links keep their words and drop the URL. */
function Rich({ text }: { text: string }) {
  const link = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(link)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    nodes.push(match[1]);
    last = start + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

/** A long-form landing page built from the same hero, steps, FAQ, and call-to-action as the rest of the site. */
export function SeoLanding({ page }: { page: SeoLandingPage }) {
  return (
    <>
      <ScrollProgress />
      <MittiHero
        crumbs={[
          { name: "Home", path: "/" },
          ...(page.parent ? [page.parent] : []),
          { name: page.crumb, path: page.path },
        ]}
        h1Lead={page.h1Lead}
        h1Accent={page.h1Accent}
        summary={page.summary}
        primary={{ label: "Book a call", href: site.calendlyUrl, external: true }}
        secondary={{ label: "Email us", href: `mailto:${site.email}` }}
        shape={page.shape}
      />
      <section className="section-y">
        <div className="shell">
          <div className="prose-blog max-w-[46rem]">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>
                    <Rich text={paragraph} />
                  </p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>
                        <Rich text={item} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>
      <Delivery
        id="how-we-do-it"
        chip="Four steps"
        title="How we do it"
        sub={page.stepsIntro}
        steps={page.steps}
        more={page.stepsMore}
      />
      {page.industrySlug ? (
        <IndustryLinks
          chip="Industries"
          lead="Other industries"
          sub="The same kind of Mitti setup, shaped for a different operation."
          omitSlug={page.industrySlug}
          more={{ href: "/industries", label: "All industries" }}
        />
      ) : null}
      <FaqSection items={page.faqs} />
      <CtaBand
        title={page.ctaTitle}
        sub={`Book a 30-minute call, or email ${site.email}.`}
        label="Book a call"
        href={site.calendlyUrl}
        secondary={{ label: "Our services", href: "/services" }}
      />
      <JsonLd
        data={serviceJsonLd({
          name: page.serviceName,
          serviceType: "Mitti consulting",
          description: page.description,
          path: page.path,
        })}
      />
    </>
  );
}
