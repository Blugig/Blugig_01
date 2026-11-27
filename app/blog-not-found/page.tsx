import { NotFoundPage, notFoundMetadata } from "@/components/layout/NotFoundPage";

export const metadata = notFoundMetadata;

/**
 * Unknown /blog/<slug> is rewritten here with status 404.
 * Calling notFound() under cache components sends the bare Next.js error shell,
 * which has no <title> until JavaScript runs. This page is the branded 404 instead.
 */
export default function BlogNotFound() {
  return <NotFoundPage />;
}
