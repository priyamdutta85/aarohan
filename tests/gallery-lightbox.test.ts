import { describe, expect, it } from "vitest";
import { getKeyboardLightboxAction, getNextIndex, getPreviousIndex } from "@/lib/gallery/lightbox";

describe("gallery lightbox interaction helpers", () => {
  it("opens navigation by advancing from the active index", () => {
    expect(getNextIndex(0, 6)).toBe(1);
    expect(getNextIndex(5, 6)).toBe(0);
  });

  it("supports previous keyboard navigation", () => {
    expect(getPreviousIndex(0, 6)).toBe(5);
    expect(getPreviousIndex(3, 6)).toBe(2);
  });

  it("maps Escape and arrow keys to lightbox actions", () => {
    expect(getKeyboardLightboxAction("Escape")).toBe("close");
    expect(getKeyboardLightboxAction("ArrowRight")).toBe("next");
    expect(getKeyboardLightboxAction("ArrowLeft")).toBe("previous");
    expect(getKeyboardLightboxAction("Tab")).toBe("none");
  });
});
