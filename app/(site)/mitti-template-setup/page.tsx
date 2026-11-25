import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/landing/SeoLanding";
import { templateSetup } from "@/content/seoLandings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: templateSetup.title,
  description: templateSetup.description,
  path: templateSetup.path,
});

export default function Page() {
  return <SeoLanding page={templateSetup} />;
}
