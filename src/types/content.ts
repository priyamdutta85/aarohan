import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
};

export type ContentCard = {
  title: string;
  body: string;
  eyebrow?: string;
  href?: string;
  icon?: LucideIcon;
};

export type Person = {
  name: string;
  role: string;
  note?: string;
};
