import type { Metadata } from "next";
import { integrationService, services } from "@/content/services";
import { site } from "@/content/site";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

/** The site-wide share image (app/opengraph-image.tsx, 1200×630). Relative URL; metadataBase makes it https. */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name}, Mitti experts for Mitti by SafetyCulture`,
};

/**
 * A page's title, description, canonical, Open Graph, and Twitter card, all for the same URL.
 * The title is absolute (it names the brand itself). openGraph and twitter repeat the shared
 * fields and image because a page's social metadata replaces the inherited object whole.
 * Paths stay relative so metadataBase (https://www.avantratechnologies.com) resolves them.
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, locale: "en_US", url: path, title, description, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

/**
 * Keep our own absolute URLs on https://www. Relative paths are unchanged so metadataBase can resolve them.
 * Other sites' URLs are left as the author wrote them.
 */
export function asHttps(pathOrUrl: string) {
  if (!pathOrUrl.startsWith("http://")) return pathOrUrl;
  try {
    const url = new URL(pathOrUrl);
    const host = url.hostname.toLowerCase();
    const ours = host === "www.avantratechnologies.com" || host === "avantratechnologies.com" || host.endsWith(".up.railway.app");
    if (!ours) return pathOrUrl;
    url.protocol = "https:";
    url.hostname = "www.avantratechnologies.com";
    return url.toString();
  } catch {
    return pathOrUrl;
  }
}

/**
 * Rewrite links and images inside blog posts onto https://www.avantratechnologies.com.
 * Relative and in-page links stay as written. http images on other hosts are upgraded
 * to https so a post does not load mixed content. Other sites' article links are unchanged.
 */
export function rewriteOwnUrl(input: string, asset = false) {
  const raw = input.trim();
  if (!raw || raw.startsWith("#") || /^(mailto|tel):/i.test(raw)) return raw;
  if (raw.startsWith("/") && !raw.startsWith("//")) return raw;
  const withProtocol = raw.startsWith("//") ? `https:${raw}` : raw;
  let url: URL;
  try {
    url = new URL(withProtocol);
  } catch {
    return raw;
  }
  const host = url.hostname.toLowerCase();
  const ours = host === "www.avantratechnologies.com" || host === "avantratechnologies.com" || host.endsWith(".up.railway.app");
  if (ours) {
    url.protocol = "https:";
    url.hostname = "www.avantratechnologies.com";
    return url.toString();
  }
  if (asset && url.protocol === "http:") {
    url.protocol = "https:";
    return url.toString();
  }
  return raw.startsWith("//") ? url.toString() : raw;
}

/**
 * Organization (also a ProfessionalService) with one Service per offering.
 * `sameAs` lists only Avantra's own profiles; the parent's go on parentOrganization,
 * so the two aren't read as one company.
 */
export function organizationJsonLd() {
  const offers = [
    ...services.map((s) => ({ name: s.title, path: `/services#${s.slug}` })),
    { name: integrationService.lead, path: "/integrations" },
  ];
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": absoluteUrl("/#organization"),
    name: site.legalName,
    alternateName: site.shortName,
    slogan: site.slogan,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/avantra-logo.png"),
    image: absoluteUrl("/brand/avantra-logo.png"),
    description: site.description,
    knowsAbout: ["Mitti", "SafetyCulture", "Workato", "Digital inspections", "Workplace operations"],
    parentOrganization: {
      "@type": "Organization",
      name: site.parentCompany,
      ...(site.parentProfiles.length ? { sameAs: site.parentProfiles } : {}),
    },
    ...(site.email ? { email: site.email } : {}),
    ...(site.phones[0] ? { telephone: site.phones[0] } : {}),
    ...(site.address
      ? { address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" } }
      : {}),
    ...(site.profiles.length ? { sameAs: site.profiles } : {}),
    makesOffer: offers.map((o) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: o.name, serviceType: "Mitti implementation", url: absoluteUrl(o.path) },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl("/"),
    name: site.name,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "en",
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Render JSON-LD safely (escapes `<` so content can't break out of the script tag). */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
