import type { Metadata } from "next";
import { ImpactGrid } from "@/components/sections/impact-grid";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { womenOfAarohan } from "@/content/social-impact";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Social Impact",
  path: "/social-impact",
  description: "Aarohan's social-impact commitments, including compassion-led and environmental initiatives described with careful source language.",
});

export default function SocialImpactPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Social impact"
          title="Culture with Compassion"
          body="Aarohan's source material references orphanage support, blood donation, clothes distribution, tree plantation and Annadanam. This page avoids inventing totals or overstating formal partnership status."
          align="center"
        />
        <div className="mt-12">
          <ImpactGrid />
        </div>
        <div className="mt-14 rounded-lg border border-[var(--line)] bg-[rgb(36_88_74_/_9%)] p-8">
          <p className="font-bold uppercase text-[var(--deep-green)]">{womenOfAarohan.kicker}</p>
          <h2 className="display-font mt-3 text-4xl">Women of Aarohan</h2>
          <p className="mt-5 max-w-4xl leading-8 text-[var(--ink-muted)]">{womenOfAarohan.body}</p>
        </div>
      </Container>
    </section>
  );
}
