import { NotFoundPage, notFoundMetadata } from "@/components/layout/NotFoundPage";

export const metadata = notFoundMetadata;

/**
 * 404 for unmatched URLs and for notFound(). It renders under the root layout
 * (outside the (site) group), so the page brings the site chrome itself.
 */
export default function NotFound() {
  return <NotFoundPage />;
}
