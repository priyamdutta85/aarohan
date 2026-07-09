import Link from "next/link";
import { footerLinks, site } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--charcoal)] py-14 text-[var(--ivory)]">
      <div aria-hidden="true" className="alpana-ring opacity-20" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="bengali-font text-4xl text-[var(--marigold)]">{site.bengaliName}</p>
            <h2 className="display-font mt-3 text-3xl">{site.name}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/[0.72]">{site.description}</p>
            <p className="mt-5 text-sm text-white/[0.66]">
              {site.location} · {site.registration}
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {footerLinks.map((item) => (
              <Link className="rounded-md py-1 text-white/[0.76] transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-white/[0.12] pt-6 text-xs text-white/[0.52]">
          This phase uses generated placeholder artwork until official Aarohan assets are source-verified.
        </p>
      </Container>
    </footer>
  );
}
