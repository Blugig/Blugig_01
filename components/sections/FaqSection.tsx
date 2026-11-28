import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion } from "@/components/ui/Accordion";
import { faqJsonLd, JsonLd } from "@/lib/seo";

/** zig FAQ: title column left ("FAQ" + talk-to-us line), accordion right. Emits FAQPage JSON-LD. */
export function FaqSection({
  items,
  title = "FAQ",
  className,
}: {
  items: { q: string; a: string; link?: { href: string; label: string } }[];
  title?: string;
  className?: string;
}) {
  return (
    <section className={className ?? "py-[clamp(5rem,8vw,5.625rem)]"}>
      <div className="shell grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-10">
        <Reveal className="flex max-w-[22rem] flex-col gap-3">
          <h2 className="title-l">{title}</h2>
          <p className="text-l">Something we didn&apos;t cover? Talk to us.</p>
        </Reveal>
        <FaqAccordion
          items={items.map((f) => ({ q: f.q, a: f.a.replace(/\s*\(draft\)\s*$/, ""), link: f.link }))}
        />
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  );
}
