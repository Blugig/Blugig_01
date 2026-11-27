import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { isLive } from "@/lib/blog/post";
import { readAllPosts } from "@/lib/blog/store";

/**
 * Unknown /blog/<slug> addresses return the branded 404 page with status 404.
 * notFound() under cache components sends the bare Next.js error shell, which
 * has no <title> until JavaScript runs. Fetching /blog-not-found from inside
 * the proxy uses the public URL, and on Railway that request dies at the edge
 * (HTTP 500) before it reaches this app. The page is already built to disk, so
 * read that HTML and return it. Live posts and old slugs continue into the
 * page (200, or the page's 308).
 */
const BRANDED_NOT_FOUND = path.join(process.cwd(), ".next/server/app/blog-not-found.html");

let brandedHtml: Promise<string> | undefined;

function readBrandedNotFound() {
  brandedHtml ??= readFile(BRANDED_NOT_FOUND, "utf8").catch((err) => {
    brandedHtml = undefined;
    throw err;
  });
  return brandedHtml;
}

function fallbackNotFoundHtml() {
  return `<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><title>Page not found | Avantra</title><meta name="robots" content="noindex"/></head><body><h1>Page not found</h1><p><a href="/">Back home</a></p></body></html>`;
}

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

  let html: string;
  try {
    html = await readBrandedNotFound();
  } catch {
    html = fallbackNotFoundHtml();
  }
  return new NextResponse(html, {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex",
      "cache-control": "private, no-store",
    },
  });
}

export const config = {
  matcher: ["/blog/:slug"],
};
