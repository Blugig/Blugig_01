import { site } from "@/content/site";
import { absoluteUrl, areaServedLd } from "@/lib/seo";

/** Service rich result. Provider is Avantra Technologies. Area served matches the Organization. */
export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
  alternateName,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  alternateName?: readonly string[];
}) {
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
    areaServed: areaServedLd,
  };
}
