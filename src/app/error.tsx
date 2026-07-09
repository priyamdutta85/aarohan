"use client";

import { Container } from "@/components/ui/container";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="display-font text-5xl">Something needs attention</h1>
          <p className="mt-5 leading-8 text-[var(--ink-muted)]">
            The page could not be rendered. Try again, and if it persists the implementation logs should be checked.
          </p>
          <button
            className="mt-8 rounded-full bg-[var(--sindoor)] px-5 py-3 text-sm font-bold text-white"
            onClick={reset}
            type="button"
          >
            Try again
          </button>
        </div>
      </Container>
    </section>
  );
}
