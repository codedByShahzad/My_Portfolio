"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Clock3,
  Sparkles,
  ChevronDown,
  Dot,
  Layers3,
  ShieldCheck,
  Zap,
  LayoutGrid,
  X,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from "lucide-react";

import type { Project, Accent, TechKey } from "@/data/projects";

/* =======================
   THEME MAPS
======================= */

const accentLine: Record<Accent, string> = {
  pink: "bg-fuchsia-400",
  purple: "bg-violet-400",
  green: "bg-emerald-400",
  orange: "bg-amber-400",
  blue: "bg-blue-400",
  sandy: "bg-amber-300",
  parrot: "bg-lime-400",
  red: "bg-rose-400",
};

const accentSolid: Record<Accent, string> = {
  pink: "text-fuchsia-300",
  purple: "text-violet-300",
  green: "text-emerald-300",
  orange: "text-amber-300",
  blue: "text-blue-300",
  sandy: "text-amber-200",
  parrot: "text-lime-300",
  red: "text-rose-300",
};

const accentRing: Record<Accent, string> = {
  pink: "ring-fuchsia-400/25",
  purple: "ring-violet-400/25",
  green: "ring-emerald-400/25",
  orange: "ring-amber-400/25",
  blue: "ring-blue-400/25",
  sandy: "ring-amber-300/25",
  parrot: "ring-lime-400/25",
  red: "ring-rose-400/25",
};

const accentGlow: Record<Accent, string> = {
  pink: "from-fuchsia-500/20 via-transparent to-pink-500/15",
  purple: "from-violet-500/22 via-transparent to-fuchsia-500/16",
  green: "from-emerald-500/22 via-transparent to-cyan-500/14",
  orange: "from-amber-500/22 via-transparent to-orange-500/14",
  blue: "from-blue-500/22 via-transparent to-cyan-500/14",
  sandy: "from-amber-400/18 via-transparent to-yellow-500/12",
  parrot: "from-lime-500/22 via-transparent to-emerald-500/14",
  red: "from-rose-500/22 via-transparent to-red-500/14",
};

const techLabel: Record<TechKey, string> = {
  next: "Next.js",
  react: "React",
  ts: "TypeScript",
  tailwind: "Tailwind",
  framer: "Framer Motion",
  motion: "Motion",
  shadcn: "shadcn/ui",
  sanity: "Sanity",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* =======================
   TECH ICONS (inline SVG)
======================= */

function SvgWrap({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex h-7 w-7 items-center justify-center rounded-xl bg-black/35 ring-1 ring-white/10",
        className ?? "",
      ].join(" ")}
      aria-hidden
    >
      {children}
    </span>
  );
}

const TechIcon: Record<TechKey, React.FC<{ className?: string }>> = {
  next: ({ className }) => (
    <SvgWrap className={className}>
      <svg viewBox="0 0 128 128" width="18" height="18" fill="none">
        <path
          d="M64 3C30.4 3 3 30.4 3 64s27.4 61 61 61 61-27.4 61-61S97.6 3 64 3Z"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="6"
        />
        <path
          d="M86.5 92.8 56 49v29.1"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72 79c-7.6 6.4-18.7 5.8-25.5-1.5-6.8-7.2-6.8-18.4 0-25.6C53.3 44.7 64.4 44 72 50.4"
          stroke="currentColor"
          strokeOpacity="0.8"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    </SvgWrap>
  ),
  react: ({ className }) => (
    <SvgWrap className={className}>
      <svg viewBox="0 0 128 128" width="20" height="20" fill="none">
        <circle cx="64" cy="64" r="8" fill="currentColor" />
        <ellipse cx="64" cy="64" rx="48" ry="18" stroke="currentColor" strokeWidth="6" />
        <ellipse
          cx="64"
          cy="64"
          rx="48"
          ry="18"
          stroke="currentColor"
          strokeWidth="6"
          transform="rotate(60 64 64)"
          opacity="0.9"
        />
        <ellipse
          cx="64"
          cy="64"
          rx="48"
          ry="18"
          stroke="currentColor"
          strokeWidth="6"
          transform="rotate(120 64 64)"
          opacity="0.8"
        />
      </svg>
    </SvgWrap>
  ),
  ts: ({ className }) => (
    <SvgWrap className={className}>
      <svg viewBox="0 0 128 128" width="20" height="20" fill="none">
        <rect x="18" y="18" width="92" height="92" rx="18" stroke="currentColor" strokeWidth="6" opacity="0.7" />
        <path d="M40 56h48M64 56v40" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
        <path
          d="M84 96c8 0 14-4 14-12 0-7-4-10-11-12l-6-2c-3-1-5-2-5-5 0-3 3-5 7-5 4 0 7 1 10 4"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>
    </SvgWrap>
  ),
  tailwind: ({ className }) => (
    <SvgWrap className={className}>
      <svg viewBox="0 0 128 128" width="22" height="22" fill="none">
        <path
          d="M28 66c6-24 18-36 36-36 18 0 21 12 30 20 6 6 14 9 24 8-6 24-18 36-36 36-18 0-21-12-30-20-6-6-14-9-24-8Z"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    </SvgWrap>
  ),
  framer: ({ className }) => (
    <SvgWrap className={className}>
      <svg viewBox="0 0 128 128" width="18" height="18" fill="none">
        <path d="M34 26h60v24H58v16h36v36H34V78h36V62H34V26Z" fill="currentColor" opacity="0.9" />
      </svg>
    </SvgWrap>
  ),
  motion: ({ className }) => (
    <SvgWrap className={className}>
      <svg viewBox="0 0 128 128" width="18" height="18" fill="none">
        <path
          d="M26 80c10-24 22-36 38-36 18 0 20 16 38 16 10 0 18-4 26-12-10 32-28 54-52 54-20 0-24-22-44-22-2 0-4 0-6 0Z"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    </SvgWrap>
  ),
  shadcn: ({ className }) => (
    <SvgWrap className={className}>
      <svg viewBox="0 0 128 128" width="18" height="18" fill="none">
        <path d="M32 96 96 32" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <path d="M44 32h52" stroke="currentColor" strokeOpacity="0.7" strokeWidth="6" strokeLinecap="round" />
        <path d="M32 84v-8" stroke="currentColor" strokeOpacity="0.7" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </SvgWrap>
  ),
  sanity: ({ className }) => (
    <SvgWrap className={className}>
      <svg viewBox="0 0 128 128" width="18" height="18" fill="none">
        <path
          d="M32 84c8 10 18 15 32 15 20 0 32-8 32-22 0-12-10-16-24-18l-10-2c-8-2-12-4-12-9 0-6 6-10 16-10 10 0 18 3 24 9"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    </SvgWrap>
  ),
};

/* =======================
   SECTION SETUP
======================= */

type SectionKey = "overview" | "highlights" | "gallery";

const sections: { key: SectionKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "highlights", label: "Highlights" },
  { key: "gallery", label: "Gallery" },
];

/* =======================
   GALLERY (StaticImageData[])
======================= */
function getGalleryImages(project: Project): StaticImageData[] {
  const gallery = project.images?.gallery ?? [];
  const primary = project.images?.primary ? [project.images.primary] : [];
  const hover = project.images?.hover ? [project.images.hover] : [];
  const merged = [...gallery, ...primary, ...hover];

  // De-dupe by src
  const seen = new Set<string>();
  const unique: StaticImageData[] = [];
  for (const img of merged) {
    const key = (img as any)?.src ?? String(img);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(img);
    }
  }

  return unique;
}

/* =======================
   LIGHTBOX (StaticImageData[])
======================= */
function Lightbox({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
  accentLineClass,
  title,
}: {
  open: boolean;
  images: StaticImageData[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  accentLineClass: string;
  title: string;
}) {
  const img = images[index];

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close preview"
            onClick={onClose}
            className="absolute inset-0 cursor-pointer bg-black/70"
          />

          <motion.div
            initial={{ y: 16, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 12, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white/[0.06] ring-1 ring-white/12 backdrop-blur shadow-[0_30px_120px_rgba(0,0,0,0.75)]"
          >
            <div className={cn("absolute left-0 top-0 h-1 w-full", accentLineClass)} />

            <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-5">
              <div className="text-sm font-semibold text-white/85">
                {title}{" "}
                <span className="text-white/55">
                  ({index + 1}/{images.length})
                </span>
              </div>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-2xl bg-black/35 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
                Close
              </button>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden bg-black/35">
                {img ? (
                  <Image
                    src={img}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                ) : null}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPrev();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-2xl bg-black/45 p-3 text-white/85 ring-1 ring-white/12 backdrop-blur hover:bg-white/10 hover:text-white"
                    aria-label="Previous image"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNext();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-2xl bg-black/45 p-3 text-white/85 ring-1 ring-white/12 backdrop-blur hover:bg-white/10 hover:text-white"
                    aria-label="Next image"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-4 pb-4 pt-3 md:px-5 md:pb-5">
              <div className="text-xs text-white/55">
                Tip: Use ← / → keys to navigate, Esc to close.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const line = accentLine[project.accent];
  const glow = accentGlow[project.accent];
  const ring = accentRing[project.accent];
  const accentText = accentSolid[project.accent];

  // ✅ TOC highlight by intersection
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");

  const refs = useMemo(() => {
    return sections.reduce((acc, s) => {
      acc[s.key] = React.createRef<HTMLElement>();
      return acc;
    }, {} as Record<SectionKey, React.RefObject<HTMLElement | null>>);
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => refs[s.key].current)
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (!visible?.target) return;

        const id = visible.target.getAttribute("data-section") as
          | SectionKey
          | null;

        if (id) setActiveSection(id);
      },
      {
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
        rootMargin: "-10% 0px -65% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [refs]);

  const scrollTo = (key: SectionKey) => {
    refs[key].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✅ Single-open accordion (smooth)
  const [openIndex, setOpenIndex] = useState<number>(0);

  // ✅ Gallery
  const galleryImages = useMemo(() => getGalleryImages(project), [project]);
  const heroImage = project.images.primary ?? galleryImages[0];

  // ✅ Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    if (!galleryImages.length) return;
    setLightboxIndex((i) => (i + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (!galleryImages.length) return;
    setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  };

  // Small “case study” facts
  const stats = [
    { icon: Clock3, label: "Timeline", value: project.duration },
    { icon: LayoutGrid, label: "Approach", value: "Component-driven" },
    { icon: Zap, label: "Focus", value: "Performance + Clarity" },
  ] as const;

  const galleryGridCols =
    galleryImages.length <= 1
      ? "grid-cols-1"
      : galleryImages.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <main className="min-h-screen px-3 lg:px-10 xl:px-20">
      <div className="relative mx-auto w-full">
        {/* =======================
            HERO
        ======================= */}
        <section className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] bg-white/[0.06] ring-1 ring-white/10 backdrop-blur shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
          >
            <div className="relative h-[420px] md:h-[720px]">
              <Image
                src={heroImage}
                alt={`${project.title} hero`}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[45%] backdrop-blur-[2px]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <h1
                  className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight text-white"
                  style={{ textShadow: "0 2px 18px rgba(0,0,0,0.6)" }}
                >
                  {project.title}
                </h1>

                <p
                  className="mt-2 max-w-3xl text-white/85 leading-relaxed whitespace-pre-line"
                  style={{ textShadow: "0 2px 14px rgba(0,0,0,0.45)" }}
                >
                  {project.subtitle}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollTo("overview")}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                  >
                    View Project Details
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <Link
                    href={project.detailHref}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/[0.08] px-4 py-2 text-sm text-white/90 ring-1 ring-white/12 backdrop-blur transition hover:bg-white/[0.12]"
                  >
                    Open Route
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BODY */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <motion.section
              ref={refs.overview as any}
              data-section="overview"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[28px] bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur md:p-8"
            >
              <div className={cn("absolute left-0 top-0 h-1 w-full", line)} />

              <div className="flex items-center gap-3">
                <div className={cn("h-2 w-10 rounded-full", line)} />
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {project.overview.heading}
                </h2>
              </div>

              <p className="mt-4 text-white/75 leading-relaxed">
                {project.overview.summary}
              </p>

              {/* Main image */}
              <div className="mt-7 overflow-hidden rounded-[24px] bg-black/30 ring-1 ring-white/10">
                <div className="p-3 md:p-4">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={heroImage}
                      alt={`${project.title} main`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Details paragraphs (from data) */}
              <div className="mt-6 rounded-[24px] bg-black/35 p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                  <Sparkles className="h-4 w-4" />
                  More Details
                </div>

                <div className="mt-2 space-y-3">
                  {project.overview.details.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-white/70">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Assurance row */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <ShieldCheck className="h-4 w-4" />
                    Structure
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Clean hierarchy + reusable sections
                  </div>
                </div>
                <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Zap className="h-4 w-4" />
                    Performance
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Motion that doesn’t slow UX
                  </div>
                </div>
                <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Layers3 className="h-4 w-4" />
                    Scalability
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Built to extend for future pages
                  </div>
                </div>
              </div>

              {/* Tech stack (icons) */}
              <div className="mt-7 rounded-[24px] bg-black/35 p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                  <LayoutGrid className="h-4 w-4" />
                  Tech Stack
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => {
                    const Icon = TechIcon[t];
                    return (
                      <span
                        key={t}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-2xl bg-black/30 px-3 py-2 text-xs text-white/75 ring-1 ring-white/10",
                          "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
                        )}
                      >
                        <Icon className={accentText} />
                        <span className="font-medium">{techLabel[t]}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.section>

            {/* Highlights */}
            <motion.section
              ref={refs.highlights as any}
              data-section="highlights"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[28px] bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur md:p-8"
            >
              <div className={cn("absolute left-0 top-0 h-1 w-full", line)} />

              <div className="flex items-center gap-3">
                <div className={cn("h-2 w-10 rounded-full", line)} />
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Key Highlights
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {project.bullets.map((b, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <motion.div
                      key={b}
                      layout
                      transition={{
                        layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                      }}
                      className={cn(
                        "relative overflow-hidden rounded-[22px] ring-1",
                        isOpen
                          ? cn("bg-white/10 ring-white/15", ring)
                          : "bg-black/30 ring-white/10 hover:bg-white/8"
                      )}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent opacity-60" />

                      <button
                        onClick={() =>
                          setOpenIndex((prev) => (prev === idx ? -1 : idx))
                        }
                        className="relative flex w-full items-center justify-between gap-4 px-4 py-4 text-left md:px-5"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-xs ring-1 ring-white/10",
                              accentText
                            )}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-medium text-white/90">{b}</span>
                        </div>

                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{
                            duration: 0.22,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="text-white/75"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false} mode="wait">
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.28,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="relative px-5 pb-5">
                              <div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                                <p className="text-sm leading-relaxed text-white/70">
                                  Replace this placeholder later with specific
                                  outcomes, improvements, and measurable impact
                                  for:{" "}
                                  <span className="font-semibold text-white/85">
                                    {b}
                                  </span>
                                  .
                                </p>

                                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/60">
                                  <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                                    <Dot className="h-4 w-4" />
                                    UX hierarchy
                                  </span>
                                  <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                                    <Dot className="h-4 w-4" />
                                    Micro-interactions
                                  </span>
                                  <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                                    <Dot className="h-4 w-4" />
                                    Scalable layout
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Gallery */}
            <motion.section
              ref={refs.gallery as any}
              data-section="gallery"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[28px] bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur md:p-8"
            >
              <div className={cn("absolute left-0 top-0 h-1 w-full", line)} />

              <div className="flex items-center gap-3">
                <div className={cn("h-2 w-10 rounded-full", line)} />
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Gallery
                </h2>
              </div>

              {galleryImages.length ? (
                <div className={cn("mt-6 grid gap-4", galleryGridCols)}>
                  {galleryImages.map((img, i) => (
                    <button
                      key={`${(img as any)?.src ?? i}`}
                      type="button"
                      onClick={() => openLightbox(i)}
                      className="group relative overflow-hidden rounded-[24px] bg-black/30 ring-1 ring-white/10 text-left"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-70" />

                      <div className="p-3 md:p-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{
                            type: "spring",
                            stiffness: 170,
                            damping: 18,
                          }}
                          className="relative overflow-hidden rounded-2xl"
                        >
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                            <Image
                              src={img}
                              alt={`${project.title} gallery ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                            <div className="absolute inset-0 bg-black/25" />
                            <div className={cn("absolute left-0 top-0 h-1 w-full", line)} />
                          </div>
                        </motion.div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10 text-sm text-white/70">
                  No gallery images found.
                </div>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  <ArrowLeft className="h-4 w-4" />
                  More Projects
                </Link>
                <Link
                  href={project.detailHref}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/[0.06] px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/[0.10] hover:text-white"
                >
                  Open route
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </motion.section>
          </div>

          {/* Right column */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="relative overflow-hidden rounded-[28px] bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur">
                <div className={cn("absolute left-0 top-0 h-1 w-full", line)} />

                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/70">
                  <LayoutGrid className="h-4 w-4" />
                  PROJECT SNAPSHOT
                </div>

                <div className="mt-5 space-y-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10"
                    >
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <s.icon className="h-4 w-4" />
                        {s.label}
                      </div>
                      <div className="mt-1 font-semibold text-white/90">
                        {s.value}
                      </div>
                    </div>
                  ))}

                  <div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                    <div className="text-sm text-white/65">What it is</div>
                    <div className="mt-1 text-sm text-white/75 leading-relaxed">
                      {project.leftText}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Layers3 className="h-4 w-4" />
                    UX principles used
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <Dot className="h-5 w-5 opacity-70" />
                      Clear hierarchy
                    </li>
                    <li className="flex items-center gap-2">
                      <Dot className="h-5 w-5 opacity-70" />
                      Guided motion
                    </li>
                    <li className="flex items-center gap-2">
                      <Dot className="h-5 w-5 opacity-70" />
                      Reusable components
                    </li>
                  </ul>
                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="rounded-[28px] bg-white/[0.06] p-5 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/70">
                    <Sparkles className="h-4 w-4" />
                    QUICK ACTIONS
                  </div>
                  <span className={cn("text-xs font-semibold", accentText, "opacity-90")}>
                    {sections.find((s) => s.key === activeSection)?.label}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {sections.map((s) => {
                    const isActive = s.key === activeSection;
                    return (
                      <button
                        key={s.key}
                        onClick={() => scrollTo(s.key)}
                        className={cn(
                          "rounded-2xl px-3 py-2 text-left text-sm ring-1 transition",
                          isActive
                            ? cn("bg-white/12 text-white ring-white/20", ring)
                            : "bg-black/35 text-white/75 ring-white/10 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          accentLineClass={line}
          title={project.title}
        />

        {/* Subtle glow */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full blur-3xl opacity-25",
            "bg-gradient-to-br",
            glow
          )}
        />
      </div>
    </main>
  );
}
