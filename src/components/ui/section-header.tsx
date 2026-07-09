type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, body, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase text-[var(--sindoor)]">{eyebrow}</p>
      ) : null}
      <h2 className="display-font text-3xl leading-tight text-[var(--charcoal)] sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-[var(--ink-muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}
