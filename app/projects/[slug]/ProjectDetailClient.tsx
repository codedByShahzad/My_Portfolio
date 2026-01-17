"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
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

type SectionKey = "overview" | "highlights" | "stack" | "gallery";

const sections: { key: SectionKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "highlights", label: "Highlights" },
  { key: "stack", label: "Tech" },
  { key: "gallery", label: "Gallery" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const line = accentLine[project.accent];
  const glow = accentGlow[project.accent];
  const ring = accentRing[project.accent];
  const accentText = accentSolid[project.accent];

  // ✅ TOC highlight by intersection (kept)
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

  // ✅ Single-open accordion
  const [openIndex, setOpenIndex] = useState<number>(0);

  // Small “case study” facts
  const stats = [
    { icon: Clock3, label: "Timeline", value: project.duration },
    { icon: LayoutGrid, label: "Approach", value: "Component-driven" },
    { icon: Zap, label: "Focus", value: "Performance + Clarity" },
  ] as const;

  return (
    <main className="min-h-screen px-3 lg:px-10 xl:px-20">
      <div className="relative mx-auto w-full">
        {/* =======================
            HERO SECTION
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
                src={project.images.primary}
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
                  className="mt-2 max-w-3xl text-white/85 leading-relaxed"
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
          {/* Left (Content) */}
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
                  Overview
                </h2>
              </div>

              <p className="mt-4 text-white/75 leading-relaxed">
                {project.overview}
              </p>

              {/* ✅ Secondary image FIXED (next/image needs fill or width/height) */}
              <div className="mt-7 overflow-hidden rounded-[24px] bg-black/30 ring-1 ring-white/10">
                <div className="p-3 md:p-4">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={project.images.hover}
                      alt={`${project.title} secondary`}
                      fill
                      className="object-cover"
                    />
                  </div>
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
                    <div
                      key={b}
                      className={cn(
                        "relative overflow-hidden rounded-[22px] ring-1 transition",
                        isOpen
                          ? cn("bg-white/10 ring-white/15", ring)
                          : "bg-black/30 ring-white/10 hover:bg-white/8"
                      )}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent opacity-60" />

                      <button
                        onClick={() => setOpenIndex(idx)}
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
                          transition={{ duration: 0.25 }}
                          className="text-white/75"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.32,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative px-5 pb-5"
                          >
                            <div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                              <p className="text-sm leading-relaxed text-white/70">
                                This highlight supports the case-study goal:{" "}
                                <span className="font-semibold text-white/85">
                                  clarity + smooth interaction
                                </span>
                                . Add 1–2 lines of specifics here (what you
                                improved, why it matters, and the UX impact).
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Tech Stack */}
            <motion.section
              ref={refs.stack as any}
              data-section="stack"
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
                  Tech Stack
                </h2>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "inline-flex items-center rounded-full bg-black/30 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10",
                      "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
                    )}
                  >
                    {techLabel[t]}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4" />
                  Implementation style
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Modular UI sections + clean hierarchy + motion for focus —
                  designed to stay readable while feeling premium.
                </p>
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

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {[project.images.primary, project.images.hover].map((img, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-[24px] bg-black/30 ring-1 ring-white/10"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-70" />
                    <div className="p-3 md:p-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 160,
                          damping: 16,
                        }}
                        className="relative overflow-hidden rounded-2xl"
                      >
                        {/* ✅ Gallery image FIXED */}
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
                          <div
                            className={cn(
                              "absolute left-0 top-0 h-1 w-full",
                              line
                            )}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

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

              {/* ✅ ACTIVE SECTION HIGHLIGHT + QUICK ACTIONS */}
              <div className="rounded-[28px] bg-white/[0.06] p-5 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/70">
                    <Sparkles className="h-4 w-4" />
                    QUICK ACTIONS
                  </div>
                  <span
                    className={cn(
                      "text-xs font-semibold",
                      accentText,
                      "opacity-90"
                    )}
                  >
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

        {/* Subtle glow (optional) */}
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
