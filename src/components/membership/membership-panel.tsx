import { AlertCircle, CheckCircle2 } from "lucide-react";
import { ExternalLink } from "@/components/ui/external-link";
import type { MembershipFormConfig } from "@/lib/env/config";

export function MembershipPanel({ config }: { config: MembershipFormConfig }) {
  if (config.status === "missing") {
    return (
      <div className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-7 shadow-sm">
        <AlertCircle aria-hidden="true" className="text-[var(--marigold)]" size={30} />
        <h2 className="display-font mt-4 text-3xl">Online membership renewal will be available here shortly.</h2>
        <p className="mt-4 leading-8 text-[var(--ink-muted)]">
          Aarohan has not yet configured the approved public Google Form URL. This page is ready and will show the renewal link once configuration is added.
        </p>
        {process.env.NODE_ENV !== "production" ? (
          <p className="mt-4 rounded-lg bg-[rgb(159_31_36_/_8%)] p-4 text-sm text-[var(--sindoor)]">
            Development note: set NEXT_PUBLIC_MEMBERSHIP_FORM_URL to enable the renewal CTA.
          </p>
        ) : null}
      </div>
    );
  }

  if (config.status === "invalid") {
    return (
      <div className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-7 shadow-sm">
        <AlertCircle aria-hidden="true" className="text-[var(--sindoor)]" size={30} />
        <h2 className="display-font mt-4 text-3xl">Membership renewal link needs review.</h2>
        <p className="mt-4 leading-8 text-[var(--ink-muted)]">{config.reason}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-7 shadow-sm">
        <CheckCircle2 aria-hidden="true" className="text-[var(--deep-green)]" size={30} />
        <h2 className="display-font mt-4 text-3xl">Renew through the approved form</h2>
        <p className="mt-4 leading-8 text-[var(--ink-muted)]">
          The renewal form opens in a new tab so members can complete it directly through the configured service. A direct link remains available even when an embedded preview is shown.
        </p>
        <div className="mt-6">
          <ExternalLink
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--sindoor)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--sindoor-dark)]"
            href={config.directUrl}
          >
            Renew Membership
          </ExternalLink>
        </div>
      </div>

      {config.status === "embeddable" ? (
        <div className="rounded-lg border border-[var(--line)] bg-[var(--ivory)] p-4 shadow-sm">
          <iframe
            className="h-[780px] w-full rounded-md border border-[var(--line)] bg-white"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={config.embedUrl}
            title="Aarohan membership renewal Google Form"
          />
          <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
            If the embedded form does not load, use the direct renewal link above.
          </p>
        </div>
      ) : (
        <div className="rounded-lg border border-[var(--line)] bg-[rgb(36_88_74_/_8%)] p-5 text-sm leading-7 text-[var(--ink-muted)]">
          The configured URL is available as a direct link. It is not embedded because it is not a reliably convertible Google Forms URL.
        </div>
      )}
    </div>
  );
}
