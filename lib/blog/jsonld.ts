import { KHASIM_LINKEDIN_URL, site } from "@/content/site";
import { analyzeMarkdown } from "@/lib/blog/markdown";
import { DEFAULT_AUTHOR, type Post, type PostAuthor, postImagePath, postPath } from "@/lib/blog/post";
import { absoluteUrl } from "@/lib/seo";

/** True when the byline is a person rather than the company (company bylines point at the Organization node). */
export function hasPersonAuthor(post: Post) {
  const name = post.author.name.trim();
  return name !== "" && name.toLowerCase() !== site.name.toLowerCase() && name.toLowerCase() !== site.shortName.toLowerCase();
}

/** The byline to show. Older posts stored the company name; those articles are Khasim's. */
export function displayAuthor(post: Pick<Post, "author">): PostAuthor {
  return hasPersonAuthor(post as Post) ? post.author : DEFAULT_AUTHOR;
}

function authorJsonLd(author: PostAuthor) {
  const isKhasim = author.name.trim().toLowerCase() === "khasim basha";
  if (isKhasim) {
    return {
      "@type": "Person",
      "@id": absoluteUrl("/#khasim-basha"),
      name: "Khasim Basha",
      jobTitle: "Mitti Expert",
      url: KHASIM_LINKEDIN_URL,
      sameAs: [KHASIM_LINKEDIN_URL],
      worksFor: { "@id": absoluteUrl("/#organization") },
    };
  }
  return {
    "@type": "Person",
    name: author.name,
    ...(author.role ? { jobTitle: author.role } : {}),
    ...(author.url ? { url: author.url, sameAs: [author.url] } : {}),
    worksFor: { "@id": absoluteUrl("/#organization") },
  };
}

/** Article / BlogPosting structured data: headline, dates, author, publisher, image, keywords. */
export function blogPostingJsonLd(post: Post) {
  const url = absoluteUrl(postPath(post.slug));
  const author = authorJsonLd(displayAuthor(post));
  return {
    "@context": "https://schema.org",
    "@type": ["BlogPosting", "Article"],
    "@id": `${url}#article`,
    headline: post.title.slice(0, 110),
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [absoluteUrl(postImagePath(post.slug))],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author,
    publisher: { "@id": absoluteUrl("/#organization") },
    isPartOf: { "@id": absoluteUrl("/#website") },
    inLanguage: "en",
    wordCount: analyzeMarkdown(post.content).words,
    ...(post.tags.length ? { keywords: post.tags.join(", "), articleSection: post.tags[0] } : {}),
  };
}
