import Link from "next/link";

/** Descriptive links between the pages search engines should connect. */
export const guideLinks = [
  { label: "Mitti (SafetyCulture) experts", href: "/mitti-experts" },
  { label: "Mitti implementation", href: "/mitti-implementation" },
  { label: "Free Mitti training", href: "/mitti-training" },
  { label: "Mitti template setup", href: "/mitti-template-setup" },
  { label: "Mitti by industry", href: "/industries" },
  { label: "Mitti services", href: "/services" },
  { label: "Contact Mitti experts", href: "/contact" },
  { label: "SafetyCulture is now Mitti", href: "/blog/safetyculture-is-now-mitti" },
] as const;

/** Pill links in the same style as the industry “Related” row. */
export function GuideLinks({ omit = [], heading = "Related" }: { omit?: string[]; heading?: string }) {
  const links = guideLinks.filter((link) => !omit.includes(link.href));
  return (
    <nav aria-label={heading} className="shell flex flex-col gap-4 py-10">
      <p className="eyebrow text-gray-500">{heading}</p>
      <ul className="flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex rounded-full bg-white px-5 py-3 text-base font-medium text-ink transition-colors duration-300 hover:text-blue-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
