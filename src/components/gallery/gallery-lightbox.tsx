"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { galleryItems } from "@/content/gallery";
import { getKeyboardLightboxAction, getNextIndex, getPreviousIndex } from "@/lib/gallery/lightbox";

export function GalleryLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  function openLightbox(index: number, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setActiveIndex(index);
  }

  function closeLightbox() {
    setActiveIndex(null);
    window.requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      const action = getKeyboardLightboxAction(event.key);
      if (action === "none") {
        return;
      }

      event.preventDefault();
      if (action === "close") {
        closeLightbox();
      }
      if (action === "next") {
        setActiveIndex((index) => getNextIndex(index ?? 0, galleryItems.length));
      }
      if (action === "previous") {
        setActiveIndex((index) => getPreviousIndex(index ?? 0, galleryItems.length));
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <figure
            className="group overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--ivory)] shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
            key={item.title}
          >
            <button
              aria-label={`Open ${item.title} gallery item`}
              className="block w-full text-left"
              onClick={(event) => openLightbox(index, event.currentTarget)}
              type="button"
            >
              <span className="relative block aspect-[3/2] overflow-hidden">
                <Image
                  alt={item.alt}
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={item.src}
                />
                <span className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-[rgb(255_253_247_/_88%)] text-[var(--sindoor)] shadow-sm">
                  <Expand aria-hidden="true" size={18} />
                </span>
              </span>
              <figcaption className="p-5">
                <span className="text-xs font-bold uppercase text-[var(--sindoor)]">{item.category}</span>
                <h2 className="display-font mt-2 text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{item.caption}</p>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {activeItem ? (
        <div
          aria-labelledby="gallery-lightbox-title"
          aria-modal="true"
          className="fixed inset-0 z-[80] grid place-items-center bg-[rgb(36_33_31_/_86%)] p-4 backdrop-blur-sm"
          role="dialog"
        >
          <button aria-label="Close gallery lightbox backdrop" className="absolute inset-0 cursor-default" onClick={closeLightbox} type="button" />
          <div className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-white/[0.18] bg-[var(--ivory)] shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--sindoor)]">{activeItem.category}</p>
                <h2 className="display-font text-2xl" id="gallery-lightbox-title">
                  {activeItem.title}
                </h2>
              </div>
              <button
                aria-label="Close gallery lightbox"
                className="grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--charcoal)]"
                onClick={closeLightbox}
                ref={closeButtonRef}
                type="button"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <div className="relative aspect-[3/2] max-h-[72vh]">
              <Image alt={activeItem.alt} className="object-contain" fill priority sizes="90vw" src={activeItem.src} />
              <button
                aria-label="Previous gallery item"
                className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[rgb(255_253_247_/_92%)] text-[var(--sindoor)] shadow"
                onClick={() => setActiveIndex((index) => getPreviousIndex(index ?? 0, galleryItems.length))}
                type="button"
              >
                <ChevronLeft aria-hidden="true" size={22} />
              </button>
              <button
                aria-label="Next gallery item"
                className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[rgb(255_253_247_/_92%)] text-[var(--sindoor)] shadow"
                onClick={() => setActiveIndex((index) => getNextIndex(index ?? 0, galleryItems.length))}
                type="button"
              >
                <ChevronRight aria-hidden="true" size={22} />
              </button>
            </div>
            <p className="border-t border-[var(--line)] px-5 py-4 text-sm leading-7 text-[var(--ink-muted)]">{activeItem.caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
