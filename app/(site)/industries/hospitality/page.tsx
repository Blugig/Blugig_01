import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/mitti/IndustryPage";
import { hospitality } from "@/content/industryPages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: hospitality.metaTitle,
  description: hospitality.description,
  path: hospitality.path,
});

export default function Page() {
  return <IndustryPage industry={hospitality} />;
}
