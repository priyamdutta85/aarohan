import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { participationIntro, participationPathways } from "@/content/participation";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Join",
  path: "/join",
  description: "Find participation pathways for membership, volunteering, performing, collaboration and social initiatives with Aarohan.",
});

export default function JoinPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow="Join" title="There Is a Place for You in Aarohan" body={participationIntro} align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {participationPathways.map((pathway) => (
            <Link
              className="group rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              href={pathway.href}
              key={pathway.title}
            >
              <h2 className="display-font text-3xl">{pathway.title}</h2>
              <p className="mt-4 min-h-28 leading-8 text-[var(--ink-muted)]">{pathway.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--sindoor)]">
                {pathway.cta}
                <ArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" size={17} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
