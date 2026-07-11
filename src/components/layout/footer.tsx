import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "@/components/ui/external-link";
import { footerLinks, site, socialLinks } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--charcoal)] py-14 text-[var(--ivory)]">
      <div aria-hidden="true" className="alpana-ring opacity-20" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Image
              alt={site.logo.alt}
              className="h-auto w-52 rounded-md bg-white p-2"
              height={site.logo.height}
              src={site.logo.src}
              width={site.logo.width}
            />
            <h2 className="display-font mt-3 text-3xl">{site.name}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/[0.72]">{site.description}</p>
            <p className="mt-5 text-sm text-white/[0.66]">
              {site.location} · {site.registration}
            </p>
          </div>
          <div className="space-y-8">
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {footerLinks.map((item) => (
                <Link className="rounded-md py-1 text-white/[0.76] transition hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Aarohan social media" className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <ExternalLink
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/[0.14] px-4 py-2 text-sm font-semibold text-white/[0.82] transition hover:bg-white/[0.08] hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </ExternalLink>
              ))}
            </nav>
          </div>
        </div>
        <p className="mt-10 border-t border-white/[0.12] pt-6 text-xs text-white/[0.52]">
          Official logo supplied by Aarohan. Gallery visuals remain placeholders until event photographs are source-verified.
        </p>
      </Container>
    </footer>
  );
}
