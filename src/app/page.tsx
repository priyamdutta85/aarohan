import Link from "next/link";
import { Crown, GalleryHorizontalEnd, HeartHandshake, UsersRound } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { CultureGrid } from "@/components/sections/culture-grid";
import { ImpactGrid } from "@/components/sections/impact-grid";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeader } from "@/components/ui/section-header";
import { about } from "@/content/about";
import { cultureIntro } from "@/content/culture";
import { durgotsab2025, historicalEvents } from "@/content/events";
import { site } from "@/content/site";
import { womenOfAarohan } from "@/content/social-impact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader eyebrow="About Aarohan" title={about.heading} body={about.summary} />
            <div className="rounded-lg border border-[var(--line)] bg-[rgb(255_253_247_/_72%)] p-6 shadow-sm">
              <p className="display-font text-2xl leading-10 text-[var(--sindoor)]">&quot;{about.statement}&quot;</p>
              <p className="mt-5 leading-8 text-[var(--ink-muted)]">{about.meaning}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgb(255_253_247_/_56%)] py-20 texture">
        <Container>
          <SectionHeader eyebrow="Cultural pillars" title="A Living Platform for Bengali Arts" body={cultureIntro} align="center" />
          <div className="mt-10">
            <CultureGrid />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeader
              eyebrow="Featured archival moments"
              title="Festivals, Gatherings and Shared Memory"
              body="Aarohan's documented journey includes language observances, Saraswati Puja, Poila Boishakh, Mahalaya, Durga Puja, Lakshmi Puja, Kali Puja, social activities and community gatherings. Historical entries are not presented as upcoming events."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {historicalEvents.slice(0, 6).map((event) => (
                <Link className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-5 font-semibold shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)]" href="/events" key={event}>
                  {event}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--charcoal)] py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase text-[var(--marigold)]">Archival festival record</p>
              <h2 className="display-font mt-3 text-4xl leading-tight sm:text-5xl">{durgotsab2025.title}</h2>
              <p className="mt-5 leading-8 text-white/[0.72]">
                {durgotsab2025.dateRange} · {durgotsab2025.venue}. This is a past celebration archive.
              </p>
              <div className="mt-7">
                <CtaLink href="/events/durgotsab-2025" variant="secondary">
                  View Archive
                </CtaLink>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {durgotsab2025.days.map((day) => (
                <article className="rounded-lg border border-white/[0.12] bg-white/[0.07] p-5" key={day.day}>
                  <h3 className="display-font text-2xl">{day.day}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.68]">{day.concepts.join(" · ")}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Social impact" title="Culture with Compassion" body="Aarohan's public story includes social care and environmental responsibility, described without unverified totals or overstated partnership claims." />
          <div className="mt-10">
            <ImpactGrid />
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgb(36_88_74_/_8%)] py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="grid size-24 place-items-center rounded-full bg-[var(--deep-green)] text-white">
              <UsersRound aria-hidden="true" size={42} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-[var(--deep-green)]">{womenOfAarohan.kicker}</p>
              <h2 className="display-font mt-3 text-4xl">Women of Aarohan</h2>
              <p className="mt-5 max-w-3xl leading-8 text-[var(--ink-muted)]">{womenOfAarohan.body}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Leadership & Stewardship", body: "Meet the current 2026 Executive Committee.", href: "/leadership", icon: Crown },
              { title: "Membership", body: "A future space for membership details and community participation.", href: "/membership", icon: HeartHandshake },
              { title: "Gallery", body: "A future gallery for source-verified Aarohan photographs and memories.", href: "/gallery", icon: GalleryHorizontalEnd },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)]" href={item.href} key={item.title}>
                  <Icon aria-hidden="true" className="text-[var(--sindoor)]" size={28} />
                  <h2 className="display-font mt-5 text-2xl">{item.title}</h2>
                  <p className="mt-3 leading-7 text-[var(--ink-muted)]">{item.body}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-12 rounded-lg border border-[var(--line)] bg-[var(--sindoor)] p-8 text-white">
            <h2 className="display-font text-3xl">Join the upward journey</h2>
            <p className="mt-3 max-w-2xl leading-8 text-white/[0.78]">
              {site.name} welcomes people who care about Bengali culture, community connection and responsible celebration.
            </p>
            <div className="mt-6">
              <CtaLink href="/join" variant="secondary">
                Join Teaser
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
