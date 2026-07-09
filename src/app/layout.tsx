import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { MainNav } from "@/components/navigation/main-nav";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/env/site-url";
import { createMetadata } from "@/lib/seo/metadata";
import "./globals.css";

export const metadata: Metadata = createMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CivicStructure",
    name: site.name,
    alternateName: site.bengaliName,
    description: site.description,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en-IN">
      <body>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <MainNav />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
