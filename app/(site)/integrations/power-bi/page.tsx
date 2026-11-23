import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/landing/SeoLanding";
import { powerBi } from "@/content/seoLandings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: powerBi.title,
  description: powerBi.description,
  path: powerBi.path,
});

export default function Page() {
  return <SeoLanding page={powerBi} />;
}
