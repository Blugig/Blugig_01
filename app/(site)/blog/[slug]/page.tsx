import { ArrowRight, Clock, Newspaper } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { GuideLinks } from "@/components/sections/GuideLinks";
import { CtaBand } from "@/components/sections/service/CtaBand";
import { Chip } from "@/components/ui/Chip";
import { site } from "@/content/site";
import { blogPostingJsonLd, displayAuthor, hasPersonAuthor } from "@/lib/blog/jsonld";
import { analyzeMarkdown, renderMarkdown } from "@/lib/blog/markdown";
import { formatDate, postExcerpt, postImagePath, postPath, postTitleTag, readingMinutes } from "@/lib/blog/post";
import { findLivePost, relatedPosts } from "@/lib/blog/queries";
import { asHttps, breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/seo";

/**
 * A post renders per request with no static fallback. Unknown slugs are rejected in
 * proxy.ts before this page streams, so every client gets a real 404. Old slugs 308
 * from this page. Crawlers still receive the full article before the response starts.
 */
export const instant = false;

type Props = { params: Promise<{ slug: string }> };

/**
 * Title tag and meta description only. The visible H1 and intro stay the post's own title and excerpt.
 * Open Graph and Twitter use the same strings so the share card matches the search result.
 */
const POST_SEARCH_META: Record<string, { title: string; description: string }> = {
  "safetyculture-is-now-mitti": {
    title: "SafetyCulture Is Now Mitti | Mitti Experts",
    description:
      "SafetyCulture is now Mitti, and iAuditor was renamed in the rebrand. What changes for your teams, plus a checklist to keep inspections on track.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = await findLivePost((await params).slug);
  if (!found || "movedTo" in found) return {};
  const { post } = found;
  const path = postPath(post.slug);
  const searchMeta = POST_SEARCH_META[post.slug];
  const title = searchMeta?.title ?? postTitleTag(post);
  const description = searchMeta?.description ?? post.description;
  const socialTitle = searchMeta?.title ?? post.title;
  const author = displayAuthor(post);
  const canonical = post.canonicalUrl ? asHttps(post.canonicalUrl) : path;
  const image = { url: postImagePath(post.slug), width: 1200, height: 630, alt: post.title };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical, languages: { "en-US": canonical, "x-default": canonical } },
    ...(post.noindex ? { robots: { index: false, follow: true } } : {}),
    authors: [{ name: author.name, ...(author.url ? { url: author.url } : {}) }],
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: socialTitle,
      description,
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt,
      authors: [author.name],
      tags: post.tags,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const found = await findLivePost(slug);
  if (!found) notFound();
  if ("movedTo" in found) permanentRedirect(postPath(found.movedTo));

  const { post, others } = found;
  const { html, toc } = renderMarkdown(post.content);
  const minutes = readingMinutes(analyzeMarkdown(post.content).words);
  const related = relatedPosts(post, others);
  const updated = post.publishedAt && post.updatedAt.slice(0, 10) !== post.publishedAt.slice(0, 10);
  const author = displayAuthor(post);
  const person = hasPersonAuthor({ ...post, author });

  return (
    <>
      <article className="pt-32">
        <header className="shell pb-10">
          <div className="flex max-w-[60rem] flex-col gap-6">
            <nav aria-label="Breadcrumb" className="text-s text-gray-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-blue-700">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <Link href="/blog" className="hover:text-blue-700">
                    Blog
                  </Link>
                </li>
                <li aria-current="page" className="flex min-w-0 items-center gap-2 text-gray-500">
                  <span aria-hidden>/</span>
                  <span className="line-clamp-1">{post.title}</span>
                </li>
              </ol>
            </nav>
            {post.tags[0] ? <Chip icon={Newspaper}>{post.tags[0]}</Chip> : null}
            <h1 className="title-l text-balance">{post.title}</h1>
            <p className="text-l max-w-[46rem] text-gray-700">{postExcerpt(post)}</p>
            <p className="text-s flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-600">
              <span>
                By{" "}
                {person && author.url ? (
                  <a href={author.url} rel="author noopener" target="_blank" className="font-medium text-ink hover:text-blue-700">
                    {author.name}
                  </a>
                ) : (
                  <span className="font-medium text-ink">{author.name}</span>
                )}
                {author.role ? `, ${author.role}` : ""}
              </span>
              <span aria-hidden>·</span>
              <time dateTime={post.publishedAt ?? undefined}>{formatDate(post.publishedAt!)}</time>
              {updated ? (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                  </span>
                </>
              ) : null}
              <span aria-hidden>·</span>
              <span className="flex items-center gap-1">
                <Clock aria-hidden className="size-4" /> {minutes} min read
              </span>
            </p>
          </div>
        </header>

        <div className="shell grid gap-10 pb-[clamp(4rem,7vw,6rem)] lg:grid-cols-[minmax(0,46rem)_16rem] lg:justify-between">
          <div className="flex min-w-0 flex-col gap-12">
            {toc.length >= 3 ? (
              <details className="rounded-2xl bg-white p-5 lg:hidden">
                <summary className="cursor-pointer font-medium">On this page</summary>
                <TocList items={toc} className="mt-3" />
              </details>
            ) : null}

            <div className="prose-blog rounded-[1.5rem] bg-white p-6 sm:p-10" dangerouslySetInnerHTML={{ __html: html }} />

            {post.faqs.length ? (
              <section aria-labelledby="faqs" className="flex flex-col gap-6">
                <h2 id="faqs" className="title-m">
                  Frequently asked questions
                </h2>
                <dl className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
                  {post.faqs.map((f) => (
                    <div key={f.q} className="flex flex-col gap-2 py-6">
                      <dt className="title-xs">{f.q}</dt>
                      <dd className="text-m text-gray-700">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <aside aria-label="About the author" className="flex flex-col gap-2 rounded-2xl bg-white p-6">
              <p className="eyebrow text-gray-500">Written by</p>
              <p className="title-xs">
                {author.name}
                {author.role ? <span className="font-normal text-gray-600"> · {author.role}</span> : null}
              </p>
              <p className="text-s text-gray-700">
                {author.bio ||
                  (person
                    ? `${author.name} works on Mitti rollouts at ${site.name}.`
                    : `${site.name} is a team of Mitti experts in Bengaluru, helping operations teams plan, configure and roll out Mitti, and connect it to the systems they already run.`)}
              </p>
              {person && author.url ? (
                <a href={author.url} target="_blank" rel="author noopener" className="text-s w-fit text-blue-700 hover:underline">
                  Profile
                </a>
              ) : (
                <Link href="/about" className="text-s w-fit text-blue-700 hover:underline">
                  About {site.shortName}
                </Link>
              )}
            </aside>
          </div>

          {toc.length >= 3 ? (
            <nav aria-label="On this page" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
              <p className="eyebrow mb-3 text-gray-500">On this page</p>
              <TocList items={toc} />
            </nav>
          ) : null}
        </div>
      </article>

      <GuideLinks omit={[postPath(post.slug)]} heading="More from Avantra" />

      {related.length ? (
        <section aria-labelledby="related" className="pb-[clamp(4rem,7vw,6rem)]">
          <div className="shell flex flex-col gap-6">
            <h2 id="related" className="title-m">
              Keep reading
            </h2>
            <ul className="grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.id}>
                  <Link href={postPath(p.slug)} className="group flex h-full flex-col gap-3 rounded-2xl bg-white p-6">
                    <span className="title-xs group-hover:text-blue-700">{p.title}</span>
                    <span className="text-s line-clamp-3 text-gray-600">{postExcerpt(p)}</span>
                    <span className="text-s mt-auto flex items-center gap-1 text-blue-700">
                      Read <ArrowRight aria-hidden className="size-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBand title="Planning or tightening a Mitti rollout?" secondary={{ label: "Our services", href: "/services" }} />

      <JsonLd data={blogPostingJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: postPath(post.slug) },
        ])}
      />
      {post.faqs.length ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}
    </>
  );
}

function TocList({ items, className }: { items: { id: string; text: string; depth: 2 | 3 }[]; className?: string }) {
  return (
    <ol className={`flex flex-col gap-2 border-l border-gray-200 text-sm ${className ?? ""}`}>
      {items.map((t) => (
        <li key={t.id} className={t.depth === 3 ? "pl-7" : "pl-4"}>
          <a href={`#${t.id}`} className="text-gray-600 transition-colors hover:text-blue-700">
            {t.text}
          </a>
        </li>
      ))}
    </ol>
  );
}
