"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

type Accent =
  | "pink"
  | "purple"
  | "green"
  | "orange"
  | "blue"
  | "sandy"
  | "parrot"
  | "red";

const accentLine: Record<Accent, string> = {
  pink: "bg-fuchsia-400",
  purple: "bg-violet-400",
  green: "bg-emerald-400",
  orange: "bg-amber-400",
  blue: "bg-blue-400",
  sandy: "bg-amber-300",
  // parrot = greenish + yellowish
  parrot: "bg-lime-400",
  red: "bg-rose-400",
};

const accentGlow: Record<Accent, string> = {
  pink: "from-fuchsia-500/22 via-transparent to-pink-500/18",
  purple: "from-violet-500/22 via-transparent to-fuchsia-500/18",
  green: "from-emerald-500/22 via-transparent to-emerald-500/18",
  orange: "from-amber-500/22 via-transparent to-orange-500/18",
  blue: "from-blue-500/22 via-transparent to-indigo-500/18",
  sandy: "from-amber-400/18 via-transparent to-yellow-500/18",
  parrot: "from-lime-400/22 via-transparent to-green-500/18",
  red: "from-rose-500/22 via-transparent to-red-500/18",
};

const techLabel: Record<string, string> = {
  next: "Next.js",
  react: "React",
  ts: "TypeScript",
  tailwind: "Tailwind CSS",
  framer: "Framer Motion",
  motion: "Motion.dev",
  shadcn: "shadcn/ui",
  sanity: "Sanity CMS",
};

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        // This makes it feel like "current section" while reading
        root: null,
        threshold: [0.12, 0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function KeyFeaturesAccordion({
  items,
  accentClass,
}: {
  items: string[];
  accentClass: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-4 space-y-3">
      {items.map((title, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={`${title}-${i}`}
            className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full px-4 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${accentClass}`} />
                <span className="text-sm text-white/85">{title}</span>
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-white/55"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="px-4 pb-4 -mt-1">
                    <p className="text-sm text-white/60 leading-relaxed">
                      Built with production-ready UI patterns and performance-focused
                      rendering — designed to stay smooth, consistent, and scalable.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const accent = project.accent as Accent;

  const toc = useMemo(
    () => [
      { id: "overview", label: "Overview" },
      { id: "key-features", label: "Key Features" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "challenges", label: "Challenges & Learnings" },
      { id: "outcome", label: "Outcome" },
    ],
    []
  );

  const activeId = useActiveSection(toc.map((t) => t.id));

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_12%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(900px_circle_at_84%_30%,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className={`absolute inset-0 bg-gradient-to-b ${accentGlow[accent]}`} />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* FULL WIDTH WRAPPER */}
      <div className="w-full px-4 sm:px-8 lg:px-14 2xl:px-20 py-14 md:py-16">
        {/* HERO: left details + right main image */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-start">
          {/* LEFT: Details */}
          <div className="min-w-0">
            <div className="flex items-start gap-3">
              <span className={`mt-3 h-[2px] w-10 rounded-full ${accentLine[accent]}`} />
              <div className="min-w-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                  {project.title}
                </h1>

                <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/60 leading-relaxed whitespace-pre-line">
                  {project.overview}
                </p>

                {/* chips row */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70">
                    Case Study
                  </span>

                  {project.duration ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70">
                      Duration: <span className="text-white/85">{project.duration}</span>
                    </span>
                  ) : null}

                  {project.leftText ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70">
                      {project.leftText}
                    </span>
                  ) : null}
                </div>

                {/* tech pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70"
                    >
                      {techLabel[t] ?? t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.detailHref}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition-colors"
                  >
                    Check it out →
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/70 hover:bg-white/5 transition-colors"
                  >
                    Back to Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Main image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[2]" />
            <Image
              src={project.images.primary}
              alt={`${project.title} main preview`}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        {/* SECONDARY IMAGE BELOW */}
        <section className="mt-8 md:mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[2]" />
            <Image
              src={project.images.hover}
              alt={`${project.title} secondary preview`}
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* CONTENT + TOC */}
        <section className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            {/* Overview */}
            <div id="overview" className="scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
              <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Key Features (Framer accordion, single open) */}
            <div id="key-features" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">Key Features</h2>
              <KeyFeaturesAccordion
                items={project.bullets}
                accentClass={accentLine[accent]}
              />
            </div>

            {/* Tech Stack */}
            <div id="tech-stack" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">Tech Stack</h2>

              <ul className="mt-4 space-y-3 text-sm text-white/65">
                {project.tech.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accentLine[accent]}`} />
                    <span>
                      <span className="text-white/85 font-medium">
                        {techLabel[t] ?? t}
                      </span>
                      <span className="text-white/55">
                        {" "}
                        — used to build scalable UI, consistent design systems, and fast
                        interactions.
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Learnings */}
            <div id="challenges" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">
                Challenges & Learnings
              </h2>

              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-white/85">
                    Architecture & structure
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    Keeping UI modular while maintaining consistency required reusable
                    patterns and strong component boundaries.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white/85">
                    Media & performance
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    Optimizing imagery, layout shifts, and interactions ensured the page
                    stays smooth across devices.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white/85">
                    Motion hierarchy
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    Micro-interactions were designed to guide focus without overpowering
                    content.
                  </p>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div id="outcome" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">Outcome</h2>
              <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
                {project.title} showcases a polished, production-ready frontend with
                strong UX, performance focus, and a consistent visual language — built to
                scale cleanly.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={project.detailHref}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition-colors"
                >
                  View Case Study →
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/35 px-4 py-2 text-sm text-white/70 hover:bg-white/5 transition-colors"
                >
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT TOC (sticky + active highlight) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                On this page
              </p>

              <div className="mt-3 space-y-1">
                {toc.map((item) => {
                  const isActive = activeId === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={[
                        "block rounded-lg px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/65 hover:text-white hover:bg-white/5",
                      ].join(" ")}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={[
                            "h-1.5 w-1.5 rounded-full transition-opacity",
                            accentLine[accent],
                            isActive ? "opacity-100" : "opacity-0",
                          ].join(" ")}
                        />
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
