import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/mitti/IndustryPage";
import { facilities } from "@/content/mittiIndustries";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: facilities.metaTitle,
  description: facilities.description,
  path: facilities.path,
});

export default function Page() {
  return <IndustryPage industry={facilities} />;
}
