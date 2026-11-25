import type { Metadata } from "next";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { Related } from "@/components/sections/service/Related";
import { industryDirectory } from "@/content/mittiIndustries";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const title = "Mitti for Your Industry | Avantra Technologies - Mitti Experts";
const description =
  "How Avantra sets up Mitti, formerly SafetyCulture, for construction, manufacturing, facilities, healthcare, hotels, and retail.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <ScrollProgress />
      <MittiHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
        h1Lead="Mitti for"
        h1Accent="your industry"
        summary="Pick the operation closest to yours. Each page is a practical setup for Mitti, the product many teams still call SafetyCulture or iAuditor. Avantra is an Official Mitti Partner and a team of Mitti (SafetyCulture) experts."
        primary={{ label: "Book a call", href: site.calendlyUrl, external: true }}
        secondary={{ label: "Mitti experts", href: "/mitti-experts" }}
        shape="mitti"
      />
      <Related
        chip="Industries"
        lead="Six ways"
        accent="teams use Mitti"
        sub="Same product. The checks follow the work your people already do."
        cards={industryDirectory.map((industry) => ({
          key: industry.slug,
          icon: industry.icon,
          eyebrow: "Mitti",
          title: industry.linkLabel,
          line: industry.cardLine,
          href: industry.path,
        }))}
      />
    </>
  );
}
