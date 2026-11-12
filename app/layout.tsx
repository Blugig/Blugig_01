import type { Metadata, Viewport } from "next";
import { Archivo, Azeret_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const azeret = Azeret_Mono({
  variable: "--font-azeret",
  subsets: ["latin"],
  display: "swap",
});

const shareImage = `${site.url}/opengraph-image`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mitti Experts at Avantra Technologies",
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: "Mitti Experts at Avantra Technologies",
    description: site.description,
    images: [{ url: shareImage, width: 1200, height: 630, alt: `${site.name} — Mitti experts` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitti Experts at Avantra Technologies",
    description: site.description,
    images: [{ url: shareImage, width: 1200, height: 630, alt: `${site.name} — Mitti experts` }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f6fa",
};

/** Document shell and fonts only: the public site's chrome is in app/(site)/layout.tsx, the admin's in app/admin. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${azeret.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
