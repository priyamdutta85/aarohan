import { describe, expect, it } from "vitest";
import { durgotsab2025 } from "@/content/events";
import { galleryItems } from "@/content/gallery";
import { leadership } from "@/content/leadership";
import { site } from "@/content/site";

describe("Aarohan public content", () => {
  it("uses the current registration number", () => {
    expect(site.registration).toBe("Registration No. 353 of 2024");
    expect(site.registration).not.toContain("2004");
  });

  it("keeps Durgotsab 2025 clearly archival", () => {
    expect(durgotsab2025.dateRange).toBe("27 September to 2 October 2025");
    expect(durgotsab2025.note.toLowerCase()).toContain("past celebration");
  });

  it("includes the required current president", () => {
    expect(leadership.president).toEqual([{ name: "Monojit Gupta", role: "President" }]);
  });

  it("uses documented gallery placeholders rather than fake photos", () => {
    expect(galleryItems).toHaveLength(6);
    expect(galleryItems.every((item) => item.caption.includes("Placeholder") || item.caption.includes("placeholder"))).toBe(true);
  });
});
