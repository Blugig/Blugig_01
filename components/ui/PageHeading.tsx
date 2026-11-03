import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A page's H1: the small label line, worded as the page's search phrase, then the
 * display headline. Both are visible, so crawlers read one heading that leads with
 * the keyword ("Mitti implementation services…: Expert support. …") while readers
 * see the label-over-headline layout the pages always had. The visually hidden
 * colon only separates the two parts in the heading's text.
 */
export function PageHeading({ label, children, className }: { label: ReactNode; children: ReactNode; className?: string }) {
  return (
    <h1 className={cn("flex flex-col gap-6", className)}>
      {label}
      <span className="sr-only">: </span>
      <span className="title-xl">{children}</span>
    </h1>
  );
}
