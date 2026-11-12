import type { Metadata } from "next";
import { integrationService, services } from "@/content/services";
import { site } from "@/content/site";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

/** Hosts that must not be treated as a second copy of this site. */
const OWN_HOSTS = new Set(["www.avantratechnologies.com", "avantratechnologies.com", "avantra-tech-production.up.railway.app"]);

/**
 * Put this site's own URLs on https://www.avantratechnologies.com.
 * Relative and in-page links stay as written. http image sources on other hosts
 * are upgraded to https so a page does not load mixed content.
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
  if (OWN_HOSTS.has(url.hostname.toLowerCase())) {
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

/** A canonical URL for this site, or an external canonical left as the author wrote it (after the rewrite above). */
export function pageCanonical(value: string, fallbackPath: string) {
  if (!value) return absoluteUrl(fallbackPath);
  const rewritten = rewriteOwnUrl(value);
  if (rewritten.startsWith("/")) return absoluteUrl(rewritten);
  return rewritten;
}

/** The site-wide share image (app/opengraph-image.tsx, 1200×630). Absolute so it cannot follow another host. */
const OG_IMAGE = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: `${site.name} — Mitti experts`,
};

/**
 * Open Graph and Twitter tags for one URL. A page's openGraph replaces the
 * inherited one, so the shared fields are repeated here.
 */
export function shareMetadata({
  title,
  description,
  url,
  image = OG_IMAGE,
}: {
  title: string;
  description: string;
  url: string;
  image?: { url: string; width: number; height: number; alt: string };
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: { type: "website", siteName: site.name, locale: "en_US", url, title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

/**
 * A page's title, description, canonical, Open Graph, and Twitter tags, all for the same https www URL.
 * The title is absolute (it names the brand itself).
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    ...shareMetadata({ title, description, url }),
  };
}

/**
 * Organization structured data, with one Service per offering. `sameAs` lists only
 * Avantra's own profiles; the parent's go on parentOrganization, so the two
 * aren't read as one company.
 */
export function organizationJsonLd() {
  const offers = [
    ...services.map((s) => ({ name: s.title, path: `/services#${s.slug}` })),
    { name: integrationService.lead, path: "/integrations" },
  ];
  const sameAs = [...new Set([site.social.linkedin, ...site.profiles].filter(Boolean))];
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
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
    email: site.email,
    ...(sameAs.length ? { sameAs } : {}),
    ...(site.phones[0] ? { telephone: site.phones[0] } : {}),
    ...(site.address
      ? { address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" } }
      : {}),
    makesOffer: offers.map((o) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: o.name, serviceType: "Mitti by SafetyCulture", url: absoluteUrl(o.path) },
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
