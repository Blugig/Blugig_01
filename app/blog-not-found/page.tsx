import { notFound } from "next/navigation";

/** Rewrite target for an unknown blog slug. notFound() runs before any shell streams. */
export default function BlogNotFound() {
  notFound();
}
