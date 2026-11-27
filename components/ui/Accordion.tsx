"use client";

import Link from "next/link";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

/** zig FAQ accordion: 40px rows, 1px divider, plus/minus icon, single open item. */
export function FaqAccordion({
  items,
  className,
}: {
  items: { q: string; a: string; link?: { href: string; label: string } }[];
  className?: string;
}) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className={cn("w-full", className)}>
      {items.map((item, i) => (
        <AccordionPrimitive.Item key={item.q} value={`item-${i}`} className="border-b border-gray-200">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-8 py-8 text-left transition-colors duration-300 hover:text-blue-700 lg:py-10">
              <span className="title-s">{item.q}</span>
              <span aria-hidden className="relative size-6 shrink-0">
                <span className="absolute top-1/2 left-1/2 h-px w-[18px] -translate-x-1/2 -translate-y-1/2 bg-current" />
                <span className="absolute top-1/2 left-1/2 h-[18px] w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 group-data-[state=open]:scale-y-0" />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="accordion-content overflow-hidden">
            <p className="text-l max-w-[48rem] pb-10 text-gray-800">
              {item.link && item.a.includes(item.link.label) ? (
                <>
                  {item.a.slice(0, item.a.indexOf(item.link.label))}
                  <Link href={item.link.href} className="font-medium text-blue-700 underline decoration-sky-500 decoration-2 underline-offset-4">
                    {item.link.label}
                  </Link>
                  {item.a.slice(item.a.indexOf(item.link.label) + item.link.label.length)}
                </>
              ) : (
                item.a
              )}
            </p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
