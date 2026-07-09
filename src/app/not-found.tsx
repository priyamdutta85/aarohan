import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="bengali-font text-4xl text-[var(--sindoor)]">আরোহণ</p>
          <h1 className="display-font mt-4 text-5xl">Page Not Found</h1>
          <p className="mt-5 leading-8 text-[var(--ink-muted)]">
            This part of the Aarohan journey is not available yet. Some membership, gallery and join routes are intentionally reserved for future phases.
          </p>
          <div className="mt-8">
            <CtaLink href="/">Return Home</CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
