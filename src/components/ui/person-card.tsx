import type { Person } from "@/types/content";
import { initials } from "@/lib/utils";

export function PersonCard({ person, prominent = false }: { person: Person; prominent?: boolean }) {
  const open = person.note === "Open";

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-lg border bg-[rgb(255_253_247_/_76%)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)] focus-within:shadow-[var(--shadow)]",
        open ? "border-dashed border-[var(--line)] opacity-80" : "border-[var(--line)]",
        prominent ? "p-6" : "",
      ].join(" ")}
    >
      <div aria-hidden="true" className="alpana-ring opacity-40" />
      <div className="relative flex items-center gap-4">
        <div className="grid size-14 shrink-0 place-items-center rounded-full border border-[rgb(159_31_36_/_20%)] bg-[rgb(159_31_36_/_8%)] text-sm font-bold text-[var(--sindoor)] texture">
          {initials(person.name)}
        </div>
        <div>
          <h3 className="text-base font-bold text-[var(--charcoal)]">{person.name}</h3>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">{person.role}</p>
        </div>
      </div>
    </article>
  );
}
