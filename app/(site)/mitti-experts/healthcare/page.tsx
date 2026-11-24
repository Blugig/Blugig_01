import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/mitti/IndustryPage";
import { healthcare } from "@/content/mittiIndustries";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: healthcare.metaTitle,
  description: healthcare.description,
  path: healthcare.path,
});

export default function Page() {
  return <IndustryPage industry={healthcare} />;
}
