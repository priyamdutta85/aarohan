import { parsePublicUrl } from "@/lib/env/config";

const parsed = parsePublicUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const siteUrl =
  parsed.status === "valid"
    ? parsed.url.toString().replace(/\/$/, "")
    : "http://localhost:3000";
