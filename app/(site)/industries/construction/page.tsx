import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/mitti/IndustryPage";
import { construction } from "@/content/mittiIndustries";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: construction.metaTitle,
  description: construction.description,
  path: construction.path,
});

export default function Page() {
  return <IndustryPage industry={construction} />;
}
