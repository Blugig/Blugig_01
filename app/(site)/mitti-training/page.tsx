import type { Metadata } from "next";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FaqSection } from "@/components/sections/FaqSection";
import { IndustryLinks } from "@/components/sections/mitti/IndustryLinks";
import { MittiHero } from "@/components/sections/mitti/MittiHero";
import { Capabilities } from "@/components/sections/service/Capabilities";
import { GuideLinks } from "@/components/sections/GuideLinks";
import { CtaBand } from "@/components/sections/service/CtaBand";
import {
  mittiTrainingCourses,
  mittiTrainingCta,
  mittiTrainingFaqs,
  mittiTrainingHero,
  mittiTrainingMeta,
  mittiTrainingSections,
} from "@/content/mittiTraining";
import { site } from "@/content/site";
import { serviceJsonLd } from "@/lib/mittiJsonLd";
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
        secondary={{ label: mittiTrainingHero.secondaryLabel, href: "#sections" }}
        shape="orbit"
      />
      <Capabilities
        id="sections"
        chip={mittiTrainingSections.chip}
        lead={mittiTrainingSections.heading}
        sub={mittiTrainingSections.sub}
        items={[...mittiTrainingSections.items]}
        feature={false}
      />
      <section id={mittiTrainingCourses.id} className="section-y scroll-mt-20 bg-white">
        <div className="shell flex max-w-[46rem] flex-col gap-6">
          <h2 className="title-l">{mittiTrainingCourses.title}</h2>
          {mittiTrainingCourses.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-l text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <FaqSection title="Training questions" items={[...mittiTrainingFaqs]} />
      <IndustryLinks
        id="industries"
        chip="Industries"
        lead="Mitti for your operation"
        sub="Construction, manufacturing, facilities, healthcare, hotels, and retail. Each page is a practical setup, not a client list."
      />
      <GuideLinks omit={["/mitti-training"]} />
      <CtaBand
        title={mittiTrainingCta.title}
        sub={`For training with your supervisors and crews, book a 30-minute call, or email ${site.email}.`}
        label={mittiTrainingCta.label}
        href={site.calendlyUrl}
        secondary={{ label: "Mitti experts", href: "/mitti-experts" }}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Mitti training",
          serviceType: "Mitti training",
          description: mittiTrainingMeta.description,
          path: mittiTrainingMeta.path,
        })}
      />
    </>
  );
}
