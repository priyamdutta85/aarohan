import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";
import { parsePublicUrl } from "@/lib/env/config";
import { siteUrl } from "@/lib/env/site-url";

describe("production hardening", () => {
  it("falls back to localhost when site URL is missing", () => {
    expect(siteUrl).toBe("http://localhost:3000");
  });

  it("rejects unsafe production URL protocols", () => {
    expect(parsePublicUrl("javascript:alert(1)", "production").status).toBe("invalid");
    expect(parsePublicUrl("http://example.com", "production").status).toBe("invalid");
  });

  it("sets core security headers while allowing Google Forms frames", async () => {
    expect(typeof nextConfig.headers).toBe("function");
    const entries = nextConfig.headers ? await nextConfig.headers() : [];
    const headers = entries[0]?.headers ?? [];
    const csp = headers.find((header) => header.key === "Content-Security-Policy")?.value;

    expect(csp).toContain("frame-src 'self' https://docs.google.com");
    expect(csp).toContain("object-src 'none'");
    expect(headers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: "X-Content-Type-Options", value: "nosniff" }),
        expect.objectContaining({ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }),
        expect.objectContaining({ key: "Permissions-Policy" }),
      ])
    );
  });

  it("external links use safe new-tab attributes", () => {
    const source = readFileSync(join(process.cwd(), "src", "components", "ui", "external-link.tsx"), "utf8");
    expect(source).toContain('rel="noopener noreferrer"');
    expect(source).toContain('target="_blank"');
  });

  it("does not use unsafe HTML injection", () => {
    const root = process.cwd();
    const files = [
      "src/app/layout.tsx",
      "src/app/page.tsx",
      "src/components/gallery/gallery-lightbox.tsx",
      "src/components/membership/membership-panel.tsx",
    ];

    for (const file of files) {
      expect(readFileSync(join(root, file), "utf8")).not.toContain("dangerouslySetInnerHTML");
    }
  });
});
