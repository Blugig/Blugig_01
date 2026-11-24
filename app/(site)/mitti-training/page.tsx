import type { Metadata } from "next";
import Link from "next/link";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { IndustryLinks } from "@/components/sections/mitti/IndustryLinks";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { Capabilities } from "@/components/sections/service/Capabilities";
import { CtaBand } from "@/components/sections/service/CtaBand";
import { mittiMasterclassUrl } from "@/content/mittiExperts";
import { mittiTrainingCta, mittiTrainingHero, mittiTrainingMeta, mittiTrainingSections } from "@/content/mittiTraining";
import { site } from "@/content/site";
import { courseJsonLd } from "@/lib/mittiJsonLd";
import { JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: mittiTrainingMeta.title,
  description: mittiTrainingMeta.description,
  path: mittiTrainingMeta.path,
});

export default function MittiTrainingPage() {
  return (
    <>
      <ScrollProgress />
      <MittiHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: mittiTrainingHero.crumb, path: mittiTrainingMeta.path },
        ]}
        h1Lead={mittiTrainingHero.h1Lead}
        h1Accent={mittiTrainingHero.h1Accent}
        summary={mittiTrainingHero.summary}
        primary={{ label: mittiTrainingHero.primaryLabel, href: site.calendlyUrl, external: true }}
        secondary={{ label: mittiTrainingHero.secondaryLabel, href: mittiMasterclassUrl, external: true }}
        shape="orbit"
      >
        <p className="text-s flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
          <Link
            href="/mitti-experts"
            className="font-medium text-blue-600 underline decoration-sky-500 decoration-2 underline-offset-4 hover:text-blue-700"
          >
            Mitti experts and consultants
          </Link>
          <Link
            href="/mitti-experts#faq"
            className="font-medium text-blue-600 underline decoration-sky-500 decoration-2 underline-offset-4 hover:text-blue-700"
          >
            Mitti FAQ
          </Link>
        </p>
      </MittiHero>
      <Capabilities
        id="sections"
        chip={mittiTrainingSections.chip}
        lead={mittiTrainingSections.heading}
        sub={mittiTrainingSections.sub}
        items={[...mittiTrainingSections.items]}
        feature={false}
      />
      <IndustryLinks
        id="industries"
        chip="Industries"
        lead="Mitti for your operation"
        sub="Construction, manufacturing, facilities management, and healthcare. Each page is a practical setup, not a client list."
      />
      <CtaBand
        title={mittiTrainingCta.title}
        sub={`The masterclass is free. For training with your supervisors and crews, book a 30-minute call, or email ${site.email}.`}
        label={mittiTrainingCta.label}
        href={site.calendlyUrl}
        secondary={{ label: "Mitti experts", href: "/mitti-experts" }}
      />
      <JsonLd
        data={courseJsonLd({
          name: "Mitti Masterclass",
          description: mittiTrainingMeta.description,
          path: mittiTrainingMeta.path,
          playlistUrl: mittiMasterclassUrl,
        })}
      />
    </>
  );
}
