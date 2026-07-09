import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description: "Learn about Aarohan Cultural Society, an upward cultural journey rooted in Bengal and based in Hyderabad.",
});

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="About" title={about.heading} body={about.summary} />
          <div className="space-y-6">
            <div className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-7 shadow-sm">
              <p className="display-font text-3xl leading-10 text-[var(--sindoor)]">&quot;{about.statement}&quot;</p>
            </div>
            <p className="leading-8 text-[var(--ink-muted)]">{about.meaning}</p>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--line)] bg-[rgb(255_253_247_/_70%)] p-5">
                <dt className="font-bold">Established</dt>
                <dd className="mt-2 text-[var(--ink-muted)]">2024</dd>
              </div>
              <div className="rounded-lg border border-[var(--line)] bg-[rgb(255_253_247_/_70%)] p-5">
                <dt className="font-bold">Location</dt>
                <dd className="mt-2 text-[var(--ink-muted)]">{site.location}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {about.commitments.map((item) => (
            <article className="rounded-lg border border-[var(--line)] bg-[rgb(255_253_247_/_72%)] p-6 shadow-sm" key={item}>
              <p className="leading-8 text-[var(--ink-muted)]">{item}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
