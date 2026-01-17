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
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.12, 0.2, 0.35, 0.5, 0.65],
        rootMargin: "-18% 0px -64% 0px",
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
            className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full px-4 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.05] transition-colors"
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className={`h-2 w-2 shrink-0 rounded-full ${accentClass}`} />
                <span className="text-sm text-white/85 truncate">{title}</span>
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-white/55 text-lg leading-none"
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
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-4 pb-4 -mt-1">
                    <p className="text-sm text-white/60 leading-relaxed">
                      A clean, scalable feature built with performance-first UI patterns.
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

function StatPill({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  if (!value) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
        {label}
      </p>
      <p className="mt-1 text-sm text-white/85">{value}</p>
    </div>
  );
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const accent = project.accent as Accent;

  const toc = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "features", label: "Key Features" },
      { id: "stack", label: "Tech Stack" },
      { id: "process", label: "Process" },
      { id: "results", label: "Results" },
    ],
    []
  );

  const activeId = useActiveSection(toc.map((t) => t.id));

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_12%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(900px_circle_at_84%_30%,rgba(255,255,255,0.05),transparent_55%)]" />
        
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* Full width */}
      <div className="w-full px-4 sm:px-8 lg:px-14 2xl:px-20 py-12 md:py-16">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 items-start">
          {/* Left */}
          <div className="min-w-0">
            <div className="flex items-start gap-4">
              <span className={`mt-3 h-[2px] w-10 rounded-full ${accentLine[accent]}`} />

              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                  <span className={`h-1.5 w-1.5 rounded-full ${accentLine[accent]}`} />
                  Project
                </div>

                <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                  {project.title}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed whitespace-pre-line max-w-2xl">
                  {project.overview}
                </p>

                {/* Pills */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                  <StatPill label="Role" value={project.leftText ?? "Frontend Developer"} />
                  <StatPill label="Duration" value={project.duration ?? "—"} />
                  <StatPill
                    label="Focus"
                    value="Performance • UX • Clean UI"
                  />
                </div>

                {/* Stack chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70"
                    >
                      {techLabel[t] ?? t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={project.detailHref}
                    className="group inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition-colors"
                  >
                    Live Preview
                    <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/70 hover:bg-white/5 transition-colors"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="relative h-[260px] sm:h-[360px] lg:h-[460px]">
              <Image
                src={project.images.primary}
                alt={`${project.title} preview`}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="absolute left-4 bottom-4 right-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                  Snapshot
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Responsive layout • Motion micro-interactions • Clean typography
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BODY + SIDEBAR */}
        <section className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
          {/* Content */}
          <div className="min-w-0">
            <div id="about" className="scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">About</h2>
              <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="mt-7">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <div className="relative h-[220px] sm:h-[280px] lg:h-[340px]">
                  <Image
                    src={project.images.hover}
                    alt={`${project.title} secondary`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                </div>
              </div>
            </div>

            <div id="features" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">Key Features</h2>
              <KeyFeaturesAccordion
                items={project.bullets}
                accentClass={accentLine[accent]}
              />
            </div>

            <div id="stack" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">Tech Stack</h2>

              <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <ul className="space-y-3 text-sm text-white/65">
                  {project.tech.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accentLine[accent]}`} />
                      <span>
                        <span className="text-white/85 font-medium">
                          {techLabel[t] ?? t}
                        </span>
                        <span className="text-white/55">
                          {" "}
                          — used for scalable UI, fast rendering, and consistent styling.
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="process" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">Process</h2>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  {
                    title: "Plan",
                    desc: "Define goals, pages, components, and visual system.",
                  },
                  {
                    title: "Build",
                    desc: "Implement responsive UI + reusable components.",
                  },
                  {
                    title: "Polish",
                    desc: "Add motion, optimize performance, refine details.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                      {x.title}
                    </p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      {x.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="results" className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">Results</h2>
              <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
                A clean, portfolio-ready project page that highlights the work clearly:
                strong hierarchy, smooth interactions, and a layout that scales from
                mobile to large screens.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={project.detailHref}
                  className="group inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition-colors"
                >
                  Open Live
                  <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/35 px-4 py-2 text-sm text-white/70 hover:bg-white/5 transition-colors"
                >
                  All Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* Quick info */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Quick info
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-white/55">Role</span>
                    <span className="text-xs text-white/80 text-right">
                      {project.leftText ?? "Frontend Developer"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-white/55">Duration</span>
                    <span className="text-xs text-white/80 text-right">
                      {project.duration ?? "—"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-white/55">Stack</span>
                    <span className="text-xs text-white/80 text-right">
                      {project.tech
                        .map((t) => techLabel[t] ?? t)
                        .slice(0, 3)
                        .join(", ")}
                      {project.tech.length > 3 ? " +" : ""}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href={project.detailHref}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition-colors"
                  >
                    Live Preview →
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/70 hover:bg-white/5 transition-colors"
                  >
                    Back
                  </Link>
                </div>
              </div>

              {/* TOC */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
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
                          "block rounded-xl px-3 py-2 text-sm transition-colors",
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

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-3">
                  <p className="text-xs text-white/60 leading-relaxed">
                    Tip: Keep each section short, scannable, and focused — that’s what
                    makes portfolio pages feel “standard & premium”.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile: show TOC at bottom */}
          <div className="lg:hidden">
            <div className="mt-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                On this page
              </p>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {toc.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={[
                        "rounded-xl px-3 py-2 text-sm transition-colors border border-white/10",
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-black/35 text-white/70 hover:bg-white/5 hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
