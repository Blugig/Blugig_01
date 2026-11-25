import { site } from "@/content/site";

/** GA4 measurement ID. Events are no-ops outside production, where the tag is not loaded. */
export const GA_MEASUREMENT_ID = "G-VQE1DWR24H";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/** Send a GA4 event. Queues on dataLayer if the tag has not finished loading. */
export function track(event: string, params?: Record<string, string>) {
  if (process.env.NODE_ENV !== "production") return;
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      // Google's snippet pushes the arguments object. A rest array is not the same command.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  window.gtag("event", event, params);
}

export function isCalendlyUrl(href: string) {
  try {
    const url = new URL(href, "https://www.avantratechnologies.com");
    return url.hostname === "calendly.com" || url.hostname.endsWith(".calendly.com");
  } catch {
    return false;
  }
}

export function isSiteEmail(href: string) {
  try {
    const url = new URL(href, "https://www.avantratechnologies.com");
    return url.protocol === "mailto:" && decodeURIComponent(url.pathname).toLowerCase() === site.email.toLowerCase();
  } catch {
    return false;
  }
}

export function isPhoneLink(href: string) {
  return href.trim().toLowerCase().startsWith("tel:");
}
