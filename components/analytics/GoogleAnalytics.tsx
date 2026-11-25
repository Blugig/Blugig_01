"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, isCalendlyUrl, isPhoneLink, isSiteEmail, track } from "@/lib/analytics";

/** Admin and the design sandbox stay out of the marketing property. */
export function analyticsExcluded(pathname: string) {
  return pathname === "/admin" || pathname.startsWith("/admin/") || pathname === "/styleguide" || pathname.startsWith("/styleguide/");
}

/**
 * GA4 tag for the public site. Loaded when the browser is idle, and only in production.
 * Admin and styleguide never receive the script or the click listener.
 * Events fired earlier are queued on dataLayer by `track`.
 */
export function GoogleAnalytics() {
  const pathname = usePathname() || "/";
  const enabled = process.env.NODE_ENV === "production" && !analyticsExcluded(pathname);

  useEffect(() => {
    if (!enabled) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const ctaLocation = link.getAttribute("data-cta-location");
      if (ctaLocation) track("cta_click", { cta_location: ctaLocation });
      if (isCalendlyUrl(href)) track("book_call_click", { link_url: link.href });
      if (isSiteEmail(href)) track("email_click", { link_url: link.href });
      if (isPhoneLink(href)) track("phone_click", { link_url: link.href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="lazyOnload" />
      <Script id="ga4" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
