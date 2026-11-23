import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/landing/SeoLanding";
import { hospitality } from "@/content/seoLandings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: hospitality.title,
  description: hospitality.description,
  path: hospitality.path,
});

export default function Page() {
  return <SeoLanding page={hospitality} />;
}
