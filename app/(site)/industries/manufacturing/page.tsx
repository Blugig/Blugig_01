import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/mitti/IndustryPage";
import { manufacturing } from "@/content/mittiIndustries";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: manufacturing.metaTitle,
  description: manufacturing.description,
  path: manufacturing.path,
});

export default function Page() {
  return <IndustryPage industry={manufacturing} />;
}
