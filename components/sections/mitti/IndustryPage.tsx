import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { Capabilities } from "@/components/sections/service/Capabilities";
import { CtaBand } from "@/components/sections/service/CtaBand";
import { Related } from "@/components/sections/service/Related";
import type { MittiIndustry } from "@/content/mittiIndustries";
import { mittiIndustries } from "@/content/mittiIndustries";
import { site } from "@/content/site";
import { serviceJsonLd } from "@/lib/mittiJsonLd";
import { JsonLd } from "@/lib/seo";

/** One industry landing page. Links back to Mitti experts, the other industries, and Mitti training. */
export function IndustryPage({ industry }: { industry: MittiIndustry }) {
  const siblings = mittiIndustries.filter((item) => item.slug !== industry.slug);

  return (
    <>
      <ScrollProgress />
      <MittiHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Mitti experts", path: "/mitti-experts" },
          { name: industry.crumb, path: industry.path },
        ]}
        h1Lead="Mitti for"
        h1Accent={industry.h1Accent}
        summary={industry.summary}
        primary={{ label: "Book a call", href: site.calendlyUrl, external: true }}
        secondary={{ label: "Mitti experts", href: "/mitti-experts" }}
        shape={industry.shape}
      />
      <Capabilities
        id="setup"
        chip={industry.chip}
        lead={industry.heading}
        sub={industry.sub}
        items={industry.items}
        feature={false}
      />
      <Related
        chip="Also see"
        lead="Other"
        accent="industries"
        sub="The same kind of Mitti setup, shaped for a different operation."
        cards={siblings.map((item) => ({
          key: item.slug,
          icon: item.icon,
          eyebrow: "Mitti",
          title: item.linkLabel,
          line: item.cardLine,
          href: item.path,
        }))}
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
