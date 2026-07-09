import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/env/site-url";

const routes = [
  "/",
  "/about",
  "/culture",
  "/events",
  "/events/durgotsab-2025",
  "/social-impact",
  "/leadership",
  "/gallery",
  "/membership",
  "/join",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-07-09"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
