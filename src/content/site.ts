import type { LinkItem } from "@/types/content";

export const site = {
  name: "Aarohan Cultural Society",
  bengaliName: "আরোহন",
  tagline: "সংস্কৃতি • সম্প্রীতি • সমাজ",
  location: "Hyderabad, Telangana, India",
  registration: "Registration No. 353 of 2024",
  logo: {
    src: "/images/aarohan/aarohan-official-logo.png",
    alt: "Official Aarohan Cultural Society logo",
    width: 1000,
    height: 648,
  },
  description:
    "Discover Aarohan Cultural Society, a vibrant Hyderabad community celebrating Bengali culture, music, literature, festivals, social impact and togetherness.",
  hero: {
    headline: "Rooted in Bengal • Connected by Culture • United in Hyderabad",
    dek: "A vibrant cultural home in Hyderabad — celebrating heritage, creativity, community and the timeless spirit of Bengal.",
    primaryCta: { label: "Discover Aarohan", href: "/about" },
    secondaryCta: { label: "Explore Our Journey", href: "/events" },
  },
  approvedMembershipFormUrl: "https://forms.gle/TgA8JBG6pnLDpEpP9",
} as const;

export const socialLinks: LinkItem[] = [
  { label: "Facebook", href: "https://www.facebook.com/groups/290288273803591/" },
  { label: "Instagram", href: "https://www.instagram.com/aarohan_hyderabad/?hl=en" },
];

export const navItems: LinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Culture", href: "/culture" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/membership" },
  { label: "Join", href: "/join" },
  { label: "Social Impact", href: "/social-impact" },
  { label: "Contact", href: "/contact" },
  { label: "Leadership", href: "/leadership" },
];

export const footerLinks: LinkItem[] = [
  ...navItems,
  { label: "Durgotsab 2025 Archive", href: "/events/durgotsab-2025" },
  { label: "Privacy", href: "/privacy" },
];
