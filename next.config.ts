import type { NextConfig } from "next";

/** Canonical host (matches PRODUCTION_URL in content/site.ts). */
const PRODUCTION_URL = "https://www.avantratechnologies.com";
/**
 * Hosts that must not serve a second copy of the site: Railway's generated domain for the production
 * service, and the bare domain (served by GoDaddy forwarding today; once it points at Railway, this
 * redirect takes over with the path intact).
 */
const NON_CANONICAL_HOSTS = ["avantra-tech-production.up.railway.app", "avantratechnologies.com"];

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: { formats: ["image/avif", "image/webp"] },
  /** Don't advertise the framework (`x-powered-by: Next.js`). */
  poweredByHeader: false,
  /**
   * Crawlers get dynamic pages (the blog) rendered in full before the response starts: a real 404 for
   * unknown posts, a real 308 from old slugs, metadata in <head>. Next's default list leaves out Googlebot
   * and AI crawlers (GPTBot, ClaudeBot, PerplexityBot…), which would get a streamed 200. Browsers still stream.
   */
  htmlLimitedBots:
    /bot|crawl|spider|slurp|preview|lighthouse|facebookexternalhit|facebookcatalog|whatsapp|vkshare|tumblr|yeti|ia_archiver|googleweblight|google-|-google|yandex|baidu|sogou|chatgpt|perplexity|claude|anthropic|cohere|ccbot/i,
  async redirects() {
    return [
      /** Other hosts → the same path on www (308, which search engines treat as permanent). */
      ...NON_CANONICAL_HOSTS.map((host) => ({
        source: "/:path*",
        // Next matches `has` values as an anchored regex (^…$), so www can't match the bare domain; dots escaped.
        has: [{ type: "host" as const, value: host.replace(/\./g, "\\.") }],
        destination: `${PRODUCTION_URL}/:path*`,
        permanent: true,
      })),
      /** Old Blugig service pages → the Avantra services overview. */
      { source: "/services/:slug", destination: "/services", permanent: true },
      /** The implementation guide now lives on the experts page. */
      { source: "/mitti-implementation", destination: "/mitti-experts", statusCode: 301 },
      /** Industry pages now live under /industries. /mitti-experts stays the experts page. */
      { source: "/mitti-experts/construction", destination: "/industries/construction", statusCode: 301 },
      { source: "/mitti-experts/manufacturing", destination: "/industries/manufacturing", statusCode: 301 },
      { source: "/mitti-experts/facilities", destination: "/industries/facilities", statusCode: 301 },
      { source: "/mitti-experts/healthcare", destination: "/industries/healthcare", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Start at 1 day; raise to 31536000 (1 year) once a week passes without problems.
          { key: "Strict-Transport-Security", value: "max-age=86400" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // frame-ancestors stays limited to this site. The other directives name Google
          // Analytics and still allow https so Calendly, Next, and the WebGL canvas keep working.
          {
            key: "Content-Security-Policy",
            value: [
              "frame-ancestors 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.googletagmanager.com https://www.google-analytics.com https:",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https: wss:",
              "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https:",
              "style-src 'self' 'unsafe-inline' https:",
              "font-src 'self' data: https:",
              "frame-src 'self' https://calendly.com https://*.calendly.com https:",
            ].join("; "),
          },
        ],
      },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
