import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function CtaLink({ href, children, variant = "primary" }: CtaLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
        variant === "primary" && "bg-[var(--sindoor)] text-white shadow-[var(--shadow)] hover:bg-[var(--sindoor-dark)]",
        variant === "secondary" &&
          "border border-[var(--sindoor)] bg-[rgb(255_253_247_/_78%)] text-[var(--sindoor)] hover:bg-white",
        variant === "ghost" && "text-[var(--sindoor)] hover:text-[var(--sindoor-dark)]"
      )}
      href={href}
    >
      {children}
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  );
}
