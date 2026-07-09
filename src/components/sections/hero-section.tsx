import Image from "next/image";
import { MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden border-b border-[var(--line)]">
      <Image
        alt="Non-official editorial Bengali cultural artwork with alpana, music, dance and festival motifs"
        className="absolute inset-0 h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/aarohan/hero-cultural-artwork.png"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(36_33_31_/_82%),rgb(36_33_31_/_48%)_45%,rgb(36_33_31_/_16%)),linear-gradient(180deg,rgb(36_33_31_/_12%),rgb(36_33_31_/_70%))]" />
      <Container className="relative flex min-h-[calc(100svh-4.5rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-8">
        <div className="max-w-4xl text-white">
          <p className="bengali-font mb-5 text-3xl text-[var(--marigold)] sm:text-4xl">{site.bengaliName}</p>
          <h1 className="display-font max-w-4xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{site.hero.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.82] sm:text-xl">{site.hero.dek}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={site.hero.primaryCta.href}>{site.hero.primaryCta.label}</CtaLink>
            <CtaLink href={site.hero.secondaryCta.href} variant="secondary">
              {site.hero.secondaryCta.label}
            </CtaLink>
          </div>
          <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/[0.22] bg-white/10 px-4 py-2 text-sm text-white/[0.78] backdrop-blur">
            <MapPin aria-hidden="true" size={16} />
            {site.location}
          </p>
        </div>
      </Container>
    </section>
  );
}
