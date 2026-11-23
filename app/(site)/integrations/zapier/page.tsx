import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/landing/SeoLanding";
import { zapier } from "@/content/seoLandings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: zapier.title,
  description: zapier.description,
  path: zapier.path,
});

export default function Page() {
  return <SeoLanding page={zapier} />;
}
