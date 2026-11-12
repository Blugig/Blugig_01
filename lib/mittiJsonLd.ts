import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

/** Service rich result. Provider is Avantra Technologies. Area served is the United States. */
export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      url: absoluteUrl("/"),
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
      alternateName: "US",
    },
  };
}

/** Free Mitti Masterclass. No price, rating, or enrollment count. */
export function courseJsonLd({
  name,
  description,
  path,
  playlistUrl,
}: {
  name: string;
  description: string;
  path: string;
  playlistUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "en",
    isAccessibleForFree: true,
    provider: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      url: absoluteUrl("/"),
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: playlistUrl,
    },
  };
}
