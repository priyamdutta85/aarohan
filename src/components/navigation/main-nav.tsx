"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/content/site";

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(234_216_196_/_80%)] bg-[rgb(255_248_237_/_88%)] backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <Link aria-label="Aarohan Cultural Society home" className="flex min-w-0 items-center gap-3" href="/" onClick={() => setOpen(false)}>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--sindoor)] text-lg font-bold text-white bengali-font">
            আ
          </span>
          <span className="min-w-0">
            <span className="display-font block truncate text-lg font-semibold leading-5">{site.name}</span>
            <span className="block truncate text-xs text-[var(--ink-muted)]">{site.location}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active ? "bg-[rgb(159_31_36_/_10%)] text-[var(--sindoor)]" : "text-[var(--charcoal)] hover:bg-white"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--charcoal)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>

      <div
        className={`lg:hidden ${open ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="border-t border-[var(--line)] bg-[var(--ivory)] px-5 py-4">
          {navItems.map((item) => (
            <Link
              className="block rounded-lg px-4 py-3 text-base font-semibold text-[var(--charcoal)] hover:bg-[var(--parchment)]"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
