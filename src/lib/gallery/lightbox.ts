export function getNextIndex(current: number, total: number) {
  if (total <= 0) {
    return 0;
  }

  return (current + 1) % total;
}

export function getPreviousIndex(current: number, total: number) {
  if (total <= 0) {
    return 0;
  }

  return (current - 1 + total) % total;
}

export function getKeyboardLightboxAction(key: string) {
  if (key === "Escape") {
    return "close";
  }

  if (key === "ArrowRight") {
    return "next";
  }

  if (key === "ArrowLeft") {
    return "previous";
  }

  return "none";
}
