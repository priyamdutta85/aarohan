import type { Metadata } from "next";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/env/site-url";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = site.description,
  path = "/",
}: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${site.name}` : `${site.name} | Bengali Culture & Community in Hyderabad`;
  const url = new URL(path, siteUrl).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/images/aarohan/hero-cultural-artwork.png",
          width: 1536,
          height: 864,
          alt: "Editorial Bengali cultural artwork for Aarohan Cultural Society",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/images/aarohan/hero-cultural-artwork.png"],
    },
  };
}
