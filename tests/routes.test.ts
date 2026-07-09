import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

describe("Prompt 2 routes", () => {
  const routes = ["gallery", "membership", "join", "contact", "privacy"];

  it.each(routes)("%s route exists", (route) => {
    expect(existsSync(join(root, "src", "app", route, "page.tsx"))).toBe(true);
  });

  it("membership route includes the safe missing-configuration message", () => {
    const source = readFileSync(join(root, "src", "components", "membership", "membership-panel.tsx"), "utf8");
    expect(source).toContain("Online membership renewal will be available here shortly.");
  });

  it("sitemap includes the new public routes", () => {
    const source = readFileSync(join(root, "src", "app", "sitemap.ts"), "utf8");
    for (const route of ["/gallery", "/membership", "/join", "/contact", "/privacy"]) {
      expect(source).toContain(route);
    }
  });
});
