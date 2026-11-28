import type { Metadata, Viewport } from "next";
import { Archivo, Azeret_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Avantra Technologies | Global Mitti (by SafetyCulture) Implementation Partner",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  // Do not set a canonical here. Layout metadata is inherited by every route that
  // does not set its own, so a homepage canonical would be claimed by pages that
  // should not have one. Each public page sets its own canonical.
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f4f6fa",
};

/** Document shell and fonts only: the public site's chrome is in app/(site)/layout.tsx, the admin's in app/admin. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${azeret.variable}`}>
      <body className="min-h-dvh">{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
