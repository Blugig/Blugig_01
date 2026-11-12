import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mittiIndustries } from "@/content/mittiIndustries";

/** Linked industry names, in the same pill row the site uses for industries. */
export function IndustryLinks({
  id,
  chip,
  lead,
  sub,
  omitSlug,
}: {
  id?: string;
  chip: string;
  lead: string;
  sub?: string;
  omitSlug?: string;
}) {
  const items = mittiIndustries.filter((industry) => industry.slug !== omitSlug);

  return (
    <section id={id} className="section-y scroll-mt-20 bg-white text-ink">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-10">
        <Reveal>
          <SectionHeading chip={chip} lead={lead} sub={sub} />
        </Reveal>
        <RevealGroup as="ul" className="flex flex-wrap content-start gap-3 lg:pt-12">
          {items.map((industry) => (
            <RevealItem key={industry.slug} as="li" className="rounded-full bg-canvas">
              <Link href={industry.path} className="block px-6 py-3 text-base font-medium text-ink">
                {industry.linkLabel}
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
