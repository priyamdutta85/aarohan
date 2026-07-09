import type { Metadata } from "next";
import { MembershipPanel } from "@/components/membership/membership-panel";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { getPublicConfig } from "@/lib/env/config";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Membership",
  path: "/membership",
  description: "Renew Aarohan Cultural Society membership through the stable public membership route.",
});

export default function MembershipPage() {
  const { membershipForm } = getPublicConfig();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Membership"
            title="Membership, Renewed Together"
            body="Aarohan's permanent membership route is designed to support the current Google Form renewal flow now and a future native flow later, without changing the public URL."
          />
          <MembershipPanel config={membershipForm} />
        </div>
      </Container>
    </section>
  );
}
