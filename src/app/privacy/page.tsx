import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { privacy } from "@/content/privacy";
import { getPublicConfig } from "@/lib/env/config";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Privacy",
    path: "/privacy",
    description: "Privacy principles for Aarohan's website and external membership renewal flow.",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  const { contactEmail } = getPublicConfig();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow="Privacy" title="Privacy Principles" body={privacy.intro} />
        <div className="mt-8 rounded-lg border border-[rgb(159_31_36_/_22%)] bg-[rgb(159_31_36_/_8%)] p-5 font-semibold text-[var(--sindoor)]">
          {privacy.reviewNotice}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {privacy.sections.map((section) => (
            <article className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-6 shadow-sm" key={section.title}>
              <h2 className="display-font text-3xl">{section.title}</h2>
              <p className="mt-4 leading-8 text-[var(--ink-muted)]">{section.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-[var(--line)] bg-[rgb(36_88_74_/_8%)] p-6">
          <h2 className="display-font text-3xl">Privacy Contact</h2>
          <p className="mt-4 leading-8 text-[var(--ink-muted)]">
            {contactEmail
              ? `Aarohan can be contacted at ${contactEmail} for privacy-related questions after this copy is reviewed.`
              : "A privacy contact method should be configured before production publication."}
          </p>
        </div>
      </Container>
    </section>
  );
}
