"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-[var(--line)] bg-[var(--ivory)] text-[var(--sindoor)] shadow-lg transition hover:-translate-y-1"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowUp aria-hidden="true" size={18} />
    </button>
  );
}
