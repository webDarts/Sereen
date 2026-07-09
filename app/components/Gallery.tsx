"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryImage = { src: string; alt: string; width: number; height: number };

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((cur) => (cur === null ? cur : (cur + dir + images.length) % images.length)),
    [images.length]
  );

  // Lightbox keyboard handling + focus trap + scrollbar compensation
  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "Tab") {
        const overlay = overlayRef.current;
        if (!overlay) return;
        const focusable = overlay.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    // Compensate for scrollbar disappearing
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.documentElement.style.overflow = "hidden";

    // Focus first focusable element in the lightbox
    requestAnimationFrame(() => {
      const overlay = overlayRef.current;
      if (!overlay) return;
      const first = overlay.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    });

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className={`grid gap-4 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`View larger: ${img.alt}`}
            className={`group cursor-zoom-in overflow-hidden rounded-xl border border-ink/5 shadow-sm ${
              images.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label={images[open].alt}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[open].src}
            alt={images[open].alt}
            className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 max-w-xl text-center text-sm text-white/80">
            {images[open].alt}
            {images.length > 1 && (
              <span className="ml-2 text-white/50">
                {open + 1} / {images.length}
              </span>
            )}
          </p>

          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/25"
          >
            ✕
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/25"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/25"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
