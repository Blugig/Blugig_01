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
   * Wait for the full HTML before sending headers for every client. With Cache Components,
   * a streamed shell is already a 200, so a later notFound() cannot change the status.
   * Blocking the response lets missing URLs return a real 404.
   */
  htmlLimitedBots: /.*/,
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
