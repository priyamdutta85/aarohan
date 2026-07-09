import type { Metadata } from "next";
import { PersonCard } from "@/components/ui/person-card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { governanceNotes, leadership } from "@/content/leadership";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Leadership",
  path: "/leadership",
  description: "Current 2026 Executive Committee and governance notes for Aarohan Cultural Society.",
});

export default function LeadershipPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Current Executive Committee — 2026"
          title="Leadership & Stewardship"
          body={`${site.name} is presented with current governance information from the 2026 communication. Older 2025 committee material is not used as the current committee.`}
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {leadership.president.map((person) => (
            <PersonCard key={person.name} person={person} prominent />
          ))}
          {leadership.officers.map((person) => (
            <PersonCard key={person.name} person={person} prominent />
          ))}
        </div>

        <LeadershipGroup people={leadership.vicePresidents} title="Vice Presidents" />
        <LeadershipGroup people={leadership.assistantSecretaries} title="Assistant Secretaries & Treasury" />
        <LeadershipGroup people={leadership.culturalLeadership} title="Cultural Leadership" />
        <LeadershipGroup people={leadership.committee} title="Executive Committee Members" />

        <section className="mt-14 rounded-lg border border-[var(--line)] bg-[var(--charcoal)] p-7 text-white">
          <h2 className="display-font text-3xl">Advisors</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {leadership.advisors.map((person) => (
              <article className="rounded-lg border border-white/[0.12] bg-white/[0.07] p-5" key={person.name}>
                <h3 className="font-bold">{person.name}</h3>
                <p className="mt-1 text-sm text-white/[0.68]">{person.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-lg border border-[var(--line)] bg-[rgb(255_253_247_/_72%)] p-7">
          <h2 className="display-font text-3xl">Governance</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {governanceNotes.map((note) => (
              <li className="leading-8 text-[var(--ink-muted)]" key={note}>
                {note}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </section>
  );
}

function LeadershipGroup({ title, people }: { title: string; people: Array<{ name: string; role: string; note?: string }> }) {
  return (
    <section className="mt-14">
      <h2 className="display-font text-3xl">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <PersonCard key={`${person.role}-${person.name}`} person={person} />
        ))}
      </div>
    </section>
  );
}
