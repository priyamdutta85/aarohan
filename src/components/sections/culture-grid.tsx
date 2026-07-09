import { culturalPillars } from "@/content/culture";

export function CultureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {culturalPillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <article
            className="group rounded-lg border border-[var(--line)] bg-[rgb(255_253_247_/_78%)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)] focus-within:shadow-[var(--shadow)]"
            key={pillar.title}
            tabIndex={0}
          >
            <div className="mb-5 grid size-12 place-items-center rounded-full bg-[rgb(159_31_36_/_9%)] text-[var(--sindoor)] transition group-hover:bg-[var(--sindoor)] group-hover:text-white">
              <Icon aria-hidden="true" size={23} />
            </div>
            <h3 className="display-font text-2xl">{pillar.title}</h3>
            <p className="mt-3 leading-7 text-[var(--ink-muted)]">{pillar.body}</p>
          </article>
        );
      })}
    </div>
  );
}
