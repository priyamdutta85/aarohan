import type { Metadata } from "next";
import { CultureGrid } from "@/components/sections/culture-grid";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { cultureIntro } from "@/content/culture";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Culture",
  path: "/culture",
  description: "Explore the many rhythms of Bengal through Aarohan's music, dance, art, language, literature and festive traditions.",
});

export default function CulturePage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow="Culture" title="The Many Rhythms of Bengal" body={cultureIntro} align="center" />
        <div className="mt-12">
          <CultureGrid />
        </div>
      </Container>
    </section>
  );
}
