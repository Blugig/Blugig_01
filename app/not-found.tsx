import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { ParticleField } from "@/components/three/ParticleField";
import { ButtonLink } from "@/components/ui/Button";

const notFoundTitle = "Page Not Found | Avantra Technologies";
const notFoundDescription = "This page is not on the Avantra Technologies website. Go back home or browse Mitti services.";

export const metadata: Metadata = {
  title: { absolute: notFoundTitle },
  description: notFoundDescription,
  robots: { index: false, follow: false },
  openGraph: { title: notFoundTitle, description: notFoundDescription, siteName: "Avantra Technologies" },
  twitter: { card: "summary_large_image", title: notFoundTitle, description: notFoundDescription },
};

/**
 * 404 — scattered particles drifting slowly behind the message. It renders
 * under the root layout (outside the (site) group), so it brings the site chrome itself.
 */
export default function NotFound() {
  return (
    <SiteChrome>
      <NotFoundMessage />
    </SiteChrome>
  );
}

function NotFoundMessage() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <ParticleField
        shape="scatter"
        pointSize={3}
        density={0.6}
        spin={0.03}
        interactive={false}
        className="absolute inset-0 -z-10 opacity-70"
      />
      <div className="shell flex flex-col items-center gap-10 pt-24 text-center">
        <p className="eyebrow text-gray-500">Error 404</p>
        <h1 className="title-xl max-w-[44rem]">
          This page drifted <span className="text-grad">off the grid.</span>
        </h1>
        <p className="text-l max-w-[30rem] text-gray-600">The link may be old, or the page may have moved.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/services" variant="outline">
            Explore services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
