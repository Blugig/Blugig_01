import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industryDirectory } from "@/content/mittiIndustries";

/** Linked industry names, in the same pill row the site uses for industries. */
export function IndustryLinks({
  id,
  chip,
  lead,
  sub,
  omitSlug,
  more,
}: {
  id?: string;
  chip: string;
  lead: string;
  sub?: string;
  omitSlug?: string;
  /** Optional link to the industries hub, shown under the heading. */
  more?: { href: string; label: string };
}) {
  const items = industryDirectory.filter((industry) => industry.slug !== omitSlug);

  return (
    <section id={id} className="section-y scroll-mt-20 bg-white text-ink">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-10">
        <Reveal>
          <SectionHeading chip={chip} lead={lead} sub={sub} />
          {more ? (
            <Link
              href={more.href}
              className="mt-4 inline-block text-base font-medium text-blue-600 underline decoration-sky-500 decoration-2 underline-offset-4 hover:text-blue-700"
            >
              {more.label}
            </Link>
          ) : null}
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
