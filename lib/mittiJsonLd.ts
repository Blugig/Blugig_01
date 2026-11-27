import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

type AreaServed = { name: string; alternateName: string };

function country(area: AreaServed) {
  return { "@type": "Country" as const, name: area.name, alternateName: area.alternateName };
}

/** Service rich result. Provider is Avantra Technologies. Area served defaults to the United States. */
export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
  alternateName,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  alternateName?: readonly string[];
  /** Countries this service covers. Defaults to the United States. */
  areaServed?: readonly AreaServed[];
}) {
  const areas = areaServed?.length ? areaServed : [{ name: "United States", alternateName: "US" }];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    ...(alternateName?.length ? { alternateName: [...alternateName] } : {}),
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      url: absoluteUrl("/"),
    },
    areaServed: areas.length === 1 ? country(areas[0]) : areas.map(country),
  };
}

/** Free Mitti training page. No price, rating, or enrollment count. */
export function courseJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
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
      url: absoluteUrl(path),
    },
  };
}
