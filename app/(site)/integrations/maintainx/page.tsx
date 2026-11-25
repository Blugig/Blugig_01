import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/landing/SeoLanding";
import { maintainx } from "@/content/seoLandings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: maintainx.title,
  description: maintainx.description,
  path: maintainx.path,
});

export default function Page() {
  return <SeoLanding page={maintainx} />;
}
