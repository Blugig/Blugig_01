import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/landing/SeoLanding";
import { retail } from "@/content/seoLandings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: retail.title,
  description: retail.description,
  path: retail.path,
});

export default function Page() {
  return <SeoLanding page={retail} />;
}
