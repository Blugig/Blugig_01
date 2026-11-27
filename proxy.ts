import { NextResponse, type NextRequest } from "next/server";
import { isLive } from "@/lib/blog/post";
import { readAllPosts } from "@/lib/blog/store";

/**
 * Unknown /blog/<slug> addresses 404 before the page shell streams.
 * Cache Components otherwise sends a 200 shell, then notFound(), so a plain
 * request never sees a 404. This check runs first and only for one blog segment.
 * Live posts and old slugs continue into the page (200, or the page's 308).
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

  const url = request.nextUrl.clone();
  url.pathname = "/blog-not-found";
  return NextResponse.rewrite(url, { status: 404 });
}

export const config = {
  matcher: ["/blog/:slug"],
};
