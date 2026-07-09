import type { Metadata } from "next";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  path: "/gallery",
  description: "Explore Aarohan Cultural Society's gallery framework for festivals, performances, community, social impact and celebrations.",
});

export default function GalleryPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Gallery"
          title="Memories That Move With Us"
          body="Official Aarohan photography is pending source verification. This gallery currently uses restrained cultural placeholder visuals and does not present them as event photographs."
          align="center"
        />
        <div className="mt-12">
          <GalleryLightbox />
        </div>
      </Container>
    </section>
  );
}
