import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { durgotsab2025 } from "@/content/events";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Sarbojonin Durgotsab 2025 Archive",
  path: "/events/durgotsab-2025",
  description: "Archival page for Aarohan's Sarbojonin Durgotsab 2025 at PSR Garden, Narsingi.",
});

export default function DurgotsabArchivePage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--charcoal)] p-8 text-white shadow-[var(--shadow)] sm:p-10">
          <p className="text-sm font-bold uppercase text-[var(--marigold)]">{durgotsab2025.archivalLabel}</p>
          <h1 className="display-font mt-4 text-5xl leading-tight sm:text-6xl">{durgotsab2025.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.74]">
            {durgotsab2025.dateRange} · {durgotsab2025.venue}
          </p>
          <p className="mt-4 max-w-3xl rounded-lg border border-white/[0.14] bg-white/[0.07] p-4 text-sm leading-7 text-white/[0.74]">
            {durgotsab2025.note}
          </p>
        </div>

        <div className="mt-16">
          <SectionHeader
            eyebrow="Festival journey"
            title="From Panchami to Bijoya Dashami"
            body="The archival record represents program concepts including Anandamela, Bodhan, Puja, Pushpanjali, Bhog distribution, Annadanam, Sandhya Aarti, Dhunuchi Dance, Kumari Puja, Sindoor Utsav, Bisorjan, music, dance and cultural performances."
          />
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {durgotsab2025.days.map((day) => (
            <li className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-6 shadow-sm" key={day.day}>
              <h2 className="display-font text-3xl text-[var(--sindoor)]">{day.day}</h2>
              <ul className="mt-4 space-y-3">
                {day.concepts.map((concept) => (
                  <li className="flex gap-3 text-[var(--ink-muted)]" key={concept}>
                    <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[var(--marigold)]" />
                    <span>{concept}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
