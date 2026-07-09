import { HandHeart, HeartPulse, Leaf, PackageCheck, Utensils } from "lucide-react";
import { socialImpactAreas } from "@/content/social-impact";

const icons = [HandHeart, HeartPulse, PackageCheck, Leaf, Utensils];

export function ImpactGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {socialImpactAreas.map((area, index) => {
        const Icon = icons[index];
        return (
          <article className="rounded-lg border border-[var(--line)] bg-[rgb(255_253_247_/_78%)] p-5 shadow-sm" key={area.title}>
            <div className="mb-4 grid size-11 place-items-center rounded-full bg-[rgb(36_88_74_/_10%)] text-[var(--deep-green)]">
              <Icon aria-hidden="true" size={21} />
            </div>
            <h3 className="font-bold">{area.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{area.body}</p>
          </article>
        );
      })}
    </div>
  );
}
