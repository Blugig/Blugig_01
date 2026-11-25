import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/mitti/IndustryPage";
import { retail } from "@/content/industryPages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: retail.metaTitle,
  description: retail.description,
  path: retail.path,
});

export default function Page() {
  return <IndustryPage industry={retail} />;
}
