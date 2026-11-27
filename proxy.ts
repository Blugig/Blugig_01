import { NextResponse, type NextRequest } from "next/server";
import { isLive } from "@/lib/blog/post";
import { readAllPosts } from "@/lib/blog/store";

/**
 * Unknown /blog/<slug> addresses return the branded 404 page with status 404.
 * notFound() under cache components sends the bare Next.js error shell, which
 * has no <title> until JavaScript runs. Live posts and old slugs continue into
 * the page (200, or the page's 308).
 */
export async function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/blog\/([^/]+)$/);
  if (!match) return NextResponse.next();
  const slug = decodeURIComponent(match[1]);
  if (slug === "rss.xml") return NextResponse.next();

  const posts = await readAllPosts();
  const now = Date.now();
  const known = posts.some(
    (post) => isLive(post, now) && (post.slug === slug || post.previousSlugs.includes(slug)),
  );
  if (known) return NextResponse.next();

  // Rewrite status is dropped when the target is a static 200, and notFound()
  // sends the bare error shell with no <title>. Serve that page's HTML as a 404.
  const url = request.nextUrl.clone();
  url.pathname = "/blog-not-found";
  url.search = "";
  const rendered = await fetch(url, { headers: { accept: "text/html" }, redirect: "manual" });
  return new NextResponse(await rendered.text(), {
    status: 404,
    headers: {
      "content-type": rendered.headers.get("content-type") ?? "text/html; charset=utf-8",
      "x-robots-tag": "noindex",
    },
  });
}

export const config = {
  matcher: ["/blog/:slug"],
};
