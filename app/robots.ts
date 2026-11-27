import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/styleguide", "/admin", "/blog-not-found"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
