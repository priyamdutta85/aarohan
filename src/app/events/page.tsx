import type { Metadata } from "next";
import Link from "next/link";
import { EventTimeline } from "@/components/sections/event-timeline";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeader } from "@/components/ui/section-header";
import { durgotsab2025 } from "@/content/events";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Events",
  path: "/events",
  description: "Browse Aarohan Cultural Society's documented historical cultural activities and festival moments.",
});

export default function EventsPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="Events"
            title="Where Tradition Comes Alive"
            body="This overview presents documented historical activities only. It does not invent future dates or present past events as upcoming."
          />
          <Link className="rounded-lg border border-[var(--line)] bg-[var(--charcoal)] p-7 text-white shadow-[var(--shadow)]" href="/events/durgotsab-2025">
            <p className="text-sm font-semibold uppercase text-[var(--marigold)]">{durgotsab2025.archivalLabel}</p>
            <h2 className="display-font mt-3 text-3xl">{durgotsab2025.title}</h2>
            <p className="mt-4 leading-8 text-white/[0.72]">
              {durgotsab2025.dateRange} · {durgotsab2025.venue}
            </p>
          </Link>
        </div>
        <div className="mt-12">
          <EventTimeline />
        </div>
        <div className="mt-12">
          <CtaLink href="/events/durgotsab-2025">Open Durgotsab Archive</CtaLink>
        </div>
      </Container>
    </section>
  );
}
