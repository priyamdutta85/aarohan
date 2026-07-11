import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { SectionHeader } from "@/components/ui/section-header";
import { site, socialLinks } from "@/content/site";
import { getPublicConfig } from "@/lib/env/config";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description: "Contact information for Aarohan Cultural Society, shown only when approved public details are configured.",
});

export default function ContactPage() {
  const { contactEmail, contactAddress, contactEmailInvalid } = getPublicConfig();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Contact"
            title="Connect With Aarohan"
            body="This page publishes only approved public contact configuration. It does not invent email addresses, phone numbers, postal addresses, bank details or payment information."
          />
          <div className="space-y-5">
            <article className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-6 shadow-sm">
              <MapPin aria-hidden="true" className="text-[var(--sindoor)]" size={28} />
              <h2 className="display-font mt-4 text-3xl">Location</h2>
              <p className="mt-3 leading-8 text-[var(--ink-muted)]">{site.location}</p>
              {contactAddress ? <p className="mt-3 leading-8 text-[var(--ink-muted)]">{contactAddress}</p> : null}
            </article>
            <article className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-6 shadow-sm">
              <Mail aria-hidden="true" className="text-[var(--deep-green)]" size={28} />
              <h2 className="display-font mt-4 text-3xl">Public Contact</h2>
              {contactEmail ? (
                <ExternalLink className="mt-4 inline-flex items-center gap-2 font-bold text-[var(--sindoor)]" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </ExternalLink>
              ) : (
                <p className="mt-3 leading-8 text-[var(--ink-muted)]">
                  Public contact details will appear here after Aarohan approves and configures them.
                </p>
              )}
              {contactEmailInvalid && process.env.NODE_ENV !== "production" ? (
                <p className="mt-4 rounded-lg bg-[rgb(159_31_36_/_8%)] p-4 text-sm text-[var(--sindoor)]">
                  Development note: NEXT_PUBLIC_CONTACT_EMAIL is configured but is not a valid email address.
                </p>
              ) : null}
            </article>
            <article className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-6 shadow-sm">
              <h2 className="display-font text-3xl">Social Channels</h2>
              <p className="mt-3 leading-8 text-[var(--ink-muted)]">
                Follow Aarohan&apos;s public community updates on the approved social channels.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <ExternalLink
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-bold text-[var(--sindoor)] transition hover:bg-[var(--parchment)]"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </ExternalLink>
                ))}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
