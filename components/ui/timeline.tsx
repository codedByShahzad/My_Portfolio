"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // ✅ Image preview state
  const [preview, setPreview] = useState<{
    open: boolean;
    src: string;
    alt?: string;
  }>({ open: false, src: "", alt: "" });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // ✅ ESC to close + lock scroll
  useEffect(() => {
    if (!preview.open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreview({ open: false, src: "", alt: "" });
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [preview.open]);

  // ✅ Click image inside content → preview
  const handleContentClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const img = target?.closest("img") as HTMLImageElement | null;

    if (!img) return;

    const src = img.currentSrc || img.src;
    if (!src) return;

    setPreview({
      open: true,
      src,
      alt: img.alt || "Preview image",
    });
  };

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      {/* ✅ Image Preview Modal */}
      {preview.open && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() =>
            setPreview({ open: false, src: "", alt: "" })
          }
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* modal content */}
          <div
            className="relative z-10 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()} // ✅ prevent close when clicking image
          >
            {/* ❌ Cross Button */}
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() =>
                setPreview({ open: false, src: "", alt: "" })
              }
              className="absolute -top-10 right-0 md:-top-12 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>

            {/* image */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-center p-2 md:p-3">
                <img
                  src={preview.src}
                  alt={preview.alt}
                  className="max-h-[75vh] max-w-full w-auto rounded-xl object-fit"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={ref} className="relative max-w-360 mx-auto pb-20">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold textwhite0 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white dark:text-neutral-500">
                {item.title}
              </h3>

              {/* ✅ ONLY addition: wrapper for image click */}
              <div
                onClick={handleContentClick}
                className="[&_img]:cursor-zoom-in"
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
