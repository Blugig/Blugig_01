import { NotFoundPage, notFoundMetadata } from "@/components/layout/NotFoundPage";

export const metadata = notFoundMetadata;

/**
 * Branded 404 document. proxy.ts reads the built HTML of this page and returns
 * it with status 404 for unknown /blog/<slug> addresses. Calling notFound()
 * sends the bare Next.js error shell, which has no <title> until JavaScript runs.
 */
export default function BlogNotFound() {
  return <NotFoundPage />;
}
