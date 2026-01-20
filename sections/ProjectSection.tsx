"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project, type TechKey } from "@/data/projects";
import { motion, type Variants } from "framer-motion";

/* =======================
   ICONS
======================= */

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiSanity,
} from "react-icons/si";
import { TbArrowsShuffle } from "react-icons/tb";
import { SquareStack, ArrowUpRight } from "lucide-react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ArrowSwapButton from "@/components/ui/ArrowButton";

/* =======================
   TECH ICON MAP
======================= */
const techIcons: Record<TechKey, React.ReactNode> = {
  next: <SiNextdotjs className="h-4 w-4" />,
  react: <SiReact className="h-4 w-4 text-cyan-400" />,
  ts: <SiTypescript className="h-4 w-4 text-blue-500" />,
  tailwind: <SiTailwindcss className="h-4 w-4 text-sky-400" />,
  framer: <SiFramer className="h-4 w-4 text-pink-400" />,
  motion: <TbArrowsShuffle className="h-4 w-4 text-fuchsia-400" />,
  shadcn: <SquareStack className="h-4 w-4 text-white/80" />,
  sanity: <SiSanity className="h-4 w-4 text-red-500" />,
};

/* =======================
   ACCENT → GRADIENT MAP
======================= */
const accentGradient: Record<Project["accent"], string> = {
  pink: "bg-gradient-to-b from-fuchsia-500/95 to-pink-600/95",
  purple: "bg-gradient-to-b from-violet-600/90 to-fuchsia-700/95",
  green: "bg-gradient-to-b from-emerald-500/90 to-emerald-700/95",
  orange: "bg-gradient-to-b from-amber-500/90 to-orange-600/95",
  blue: "bg-gradient-to-b from-blue-600/90 to-indigo-700/95",
  parrot: "bg-gradient-to-b from-lime-400 via-green-400 to-emerald-500",
  sandy: "bg-gradient-to-b from-yellow-500/85 to-amber-700/90",
  red: "bg-gradient-to-b from-rose-600/90 to-red-700/95",
};

const accentDot: Record<Project["accent"], string> = {
  pink: "bg-fuchsia-400",
  purple: "bg-violet-400",
  green: "bg-emerald-400",
  orange: "bg-amber-400",
  blue: "bg-blue-400",
  parrot: "bg-lime-500",
  sandy: "bg-amber-300",
  red: "bg-rose-400",
};

/* =======================
   ANIMATION
======================= */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.06 },
  }),
};

interface ProjectsSectionProps {
  limit?: number;
  showCTA?: boolean;
}

/* =======================
   HELPERS
======================= */
function getOverviewText(project: Project): string {
  // ✅ New shape: overview object
  if (project.overview && typeof project.overview === "object") {
    return project.overview.summary;
  }

  // (fallback for old data if you ever keep it)
  return String((project as any).overview ?? "");
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const duration = project.duration;

  return (
    <motion.div
      custom={index}
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12"
    >
      {/* LEFT: Image Card */}
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
      >
        {/* accent backdrop */}
        <div className={`absolute inset-0 ${accentGradient[project.accent]}`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_12%_10%,rgba(255,255,255,0.18),transparent_55%)]" />

        {/* top subtitle + arrow */}
        <div className="relative z-[2] flex items-start justify-between gap-6 p-6 sm:p-7">
          <div className="rounded-2xl bg-black/40 px-5 py-3 backdrop-blur-md">
            <p className="whitespace-pre-line font-medium text-white">
              {project.subtitle}
            </p>
          </div>

          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white/80 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>

        {/* image swap on hover */}
        <div className="relative z-[2] px-6 pb-6 sm:px-7 sm:pb-7">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
            <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

            <Image
              src={project.images.primary}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-cover object-top transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
            />
            {project.images.hover && (
              <Image
                src={project.images.hover}
                alt={`${project.title} hover`}
                fill
                className="object-cover object-top opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.03]"
              />
            )}

            <div className="absolute bottom-5 left-5 z-[4] flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-3 py-1.5 text-xs text-white/75 backdrop-blur-md">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
              View details
            </div>
          </div>
        </div>
      </Link>

      {/* RIGHT: Details */}
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-7">
        <div className="flex items-center gap-3">
          <span className={`h-[2px] w-7 rounded-full ${accentDot[project.accent]}`} />
          <span className="text-xs uppercase tracking-[0.25em] text-white/55">
            {project.leftText ?? "Case Study"}
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        {/* ✅ FIXED: overview is now an object */}
        <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
          {getOverviewText(project)}
        </p>

        {/* duration */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          Duration: <span className="text-white/85">{duration ?? "—"}</span>
        </div>

        {/* bullets */}
        <div className="mt-6 space-y-3">
          {project.bullets.slice(0, 6).map((t, i) => (
            <div key={i} className="flex gap-3">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${accentDot[project.accent]}`} />
              <p className="text-sm leading-relaxed text-white/65">{t}</p>
            </div>
          ))}
        </div>

        {/* tech chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/75"
            >
              {techIcons[tech]}
              <span className="leading-none">{tech}</span>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="mt-7">
          <ArrowSwapButton
            label="View Case Study"
            href={`/projects/${project.slug}`}
            className={`${accentGradient[project.accent]} text-white`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({
  limit,
  showCTA = true,
}: ProjectsSectionProps) {
  const visibleProjects = useMemo(
    () => (limit ? projects.slice(0, limit) : projects),
    [limit]
  );

  return (
    <section className="relative px-4 py-20 md:px-12 lg:px-20 xl:px-32">
      {/* Header */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mb-14 flex flex-col items-center text-center md:mb-18"
      >
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="border border-white/10 bg-white/5 text-white backdrop-blur-md"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/65 sm:text-sm">
            Featured Case Studies
          </p>
        </HoverBorderGradient>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Curated Work
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
          A selection of high-impact builds — crafted with clean UI systems,
          strong performance, and production-ready architecture.
        </p>
      </motion.div>

      {/* Rows */}
      <div className="relative flex flex-col gap-12 lg:gap-16">
        {visibleProjects.map((project, idx) => (
          <ProjectRow key={project.slug} project={project} index={idx} />
        ))}
      </div>

      {/* CTA */}
      {showCTA && (
        <div className="relative mt-16 flex justify-center md:mt-20">
          <ArrowSwapButton label="All Projects" href="/projects" className="bg-primary text-white" />
        </div>
      )}
    </section>
  );
}
