import { describe, expect, it } from "vitest";
import { getMembershipFormConfig } from "@/lib/env/config";

describe("membership Google Form configuration", () => {
  it("returns safe missing behavior without a URL", () => {
    expect(getMembershipFormConfig("", "production")).toEqual({ status: "missing" });
  });

  it("rejects malformed URLs", () => {
    const result = getMembershipFormConfig("not a url", "production");
    expect(result.status).toBe("invalid");
  });

  it("rejects non-HTTPS production URLs", () => {
    const result = getMembershipFormConfig("http://example.com/form", "production");
    expect(result.status).toBe("invalid");
  });

  it("keeps unknown HTTPS URLs as direct links only", () => {
    const result = getMembershipFormConfig("https://example.com/form", "production");
    expect(result).toEqual({
      status: "direct",
      directUrl: "https://example.com/form",
      isGoogleForm: false,
    });
  });

  it("keeps the approved forms.gle short link as a direct Google Form link", () => {
    const result = getMembershipFormConfig("https://forms.gle/TgA8JBG6pnLDpEpP9", "production");
    expect(result).toEqual({
      status: "direct",
      directUrl: "https://forms.gle/TgA8JBG6pnLDpEpP9",
      isGoogleForm: true,
    });
  });

  it("derives an embeddable URL for reliable Google Forms URLs", () => {
    const result = getMembershipFormConfig("https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=sharing", "production");
    expect(result.status).toBe("embeddable");
    if (result.status === "embeddable") {
      expect(result.directUrl).toContain("https://docs.google.com/forms/d/e/FORM_ID/viewform");
      expect(result.embedUrl).toContain("embedded=true");
    }
  });

  it("does not blindly convert unknown Google Docs URLs into iframes", () => {
    const result = getMembershipFormConfig("https://docs.google.com/document/d/example/edit", "production");
    expect(result.status).toBe("direct");
  });
});
