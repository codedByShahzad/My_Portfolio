"use client";

import React, { useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import type { Variants } from "framer-motion";

// ✅ YOUR button component (must accept `style?: React.CSSProperties`)
import ArrowSwapButton from "../components/ui/ArrowButton";

// ✅ Replace these with your real images
import p1a from "../public/images/redefine1.png";
import p1b from "../public/images/redefine2.png";
import p2a from "../public/images/portfolio1.png";
import p2b from "../public/images/portfolio2.png";
import p3a from "../public/images/ha1.png";
import p3b from "../public/images/ha2.png";
import p4a from "../public/images/brain1.png";
import p4b from "../public/images/brain2.png";
import p5a from "../public/images/nivy1.png";
import p5b from "../public/images/nivy2.png";
import p6a from "../public/images/Crypto1.png";
import p6b from "../public/images/Crypto2.png";

type Accent =
  | "pink"
  | "purple"
  | "green"
  | "orange"
  | "blue"
  | "sandy"
  | "parrot"
  | "red";

const ACCENT: Record<
  Accent,
  {
    hex: string;
    line: string;
    star: string;
  }
> = {
  pink: { hex: "#521850", line: "bg-[#521850]", star: "text-[#521850]" },
  purple: { hex: "#502FEB", line: "bg-[#502FEB]", star: "text-[#502FEB]" },
  green: { hex: "#10B981", line: "bg-[#10B981]", star: "text-[#10B981]" },
  orange: { hex: "#f97316", line: "bg-[#f97316]", star: "text-[#f97316]" },
  blue: { hex: "#165DFC", line: "bg-[#165DFC]", star: "text-[#165DFC]" },
  sandy: { hex: "#E6C9A8", line: "bg-[#E6C9A8]", star: "text-[#E6C9A8]" },
  parrot: { hex: "#CAF31D", line: "bg-[#CAF31D]", star: "text-[#CAF31D]" },
  red: { hex: "#EF4444", line: "bg-[#EF4444]", star: "text-[#EF4444]" },
};

function CornerStarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M12 2l1.6 6.1L20 10l-6.4 1.9L12 18l-1.6-6.1L4 10l6.4-1.9L12 2z"
        opacity="0.9"
      />
      <path
        d="M20.5 3.5l.6 2.2 2.2.6-2.2.6-.6 2.2-.6-2.2-2.2-.6 2.2-.6.6-2.2z"
        opacity="0.8"
      />
      <path
        d="M3.5 14.5l.6 2.2 2.2.6-2.2.6-.6 2.2-.6-2.2-2.2-.6 2.2-.6.6-2.2z"
        opacity="0.8"
      />
    </svg>
  );
}

/** ✅ Hover stacked preview */
function HoverStackPreview({
  primary,
  secondary,
  alt,
}: {
  primary: StaticImageData;
  secondary: StaticImageData;
  alt: string;
}) {
  return (
    <div className="group relative h-[260px] sm:h-[360px] md:h-[420px] w-full overflow-hidden rounded-2xl bg-black/25">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10" />

      {/* PRIMARY */}
      <div
        className="
          absolute inset-0
          transition-opacity duration-700
          ease-[cubic-bezier(.2,.9,.2,1)]
          group-hover:-translate-x-14 group-hover:translate-y-10
          group-hover:-rotate-14
          group-hover:scale-[0.97]
          group-hover:opacity-85
        "
      >
        <div className="absolute inset-0 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)]" />
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
          <Image src={primary} alt={`${alt} primary`} fill className="object-cover" />
        </div>
      </div>

      {/* SECONDARY */}
      <div
        className="
          absolute inset-0
          invisible opacity-0
          translate-y-10 translate-x-14 rotate-12 scale-[1.02]
          transition-all duration-700
          ease-[cubic-bezier(.2,.9,.2,1)]
          group-hover:visible group-hover:opacity-100
          group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-2
        "
      >
        <div className="absolute inset-0 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]" />
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
          <Image src={secondary} alt={`${alt} secondary`} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}

type TechKey =
  | "next"
  | "react"
  | "ts"
  | "tailwind"
  | "framer"
  | "motion"
  | "shadcn"
  | "sanity";

const TECH: Record<
  TechKey,
  { label: string; Icon: React.FC<React.SVGProps<SVGSVGElement>> }
> = {
  next: {
    label: "Next.js",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M18.9 21.2c-1.6 1-3.5 1.5-5.5 1.5C7.2 22.7 2.2 17.7 2.2 11.6 2.2 5.5 7.2.5 13.4.5c2 0 3.9.5 5.5 1.5l-6.7 8.6 6.7 10.6z"
          opacity=".9"
        />
      </svg>
    ),
  },
  react: {
    label: "React",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M12 10.3c-1 0-1.7.7-1.7 1.7 0 1 .7 1.7 1.7 1.7s1.7-.7 1.7-1.7c0-1-.7-1.7-1.7-1.7z"
        />
        <path
          fill="currentColor"
          d="M12 2.5c-2.4 0-4.4 3-5.2 7.2C3.9 10.4 2 12 2 13.8c0 2.4 3 4.4 7.2 5.2.8 2.9 2.8 4.9 5.2 4.9 2.4 0 4.4-2 5.2-4.9 4.2-.8 7.2-2.8 7.2-5.2 0-1.8-1.9-3.4-4.8-4.1C20.4 5.5 18.4 2.5 12 2.5zm0 1.7c1.4 0 2.9 1.8 3.6 5.1-.9-.2-2-.3-3.6-.3s-2.7.1-3.6.3c.7-3.3 2.2-5.1 3.6-5.1zm-4.6 6.3c1-.2 2.2-.4 4.6-.4 2.4 0 3.6.2 4.6.4-.2 1-.4 2.2-.4 4.6s.2 3.6.4 4.6c-1 .2-2.2.4-4.6.4-2.4 0-3.6-.2-4.6-.4.2-1 .4-2.2.4-4.6s-.2-3.6-.4-4.6z"
          opacity=".8"
        />
      </svg>
    ),
  },
  ts: {
    label: "TypeScript",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3zm10 15.3c2.8 0 4.6-1.5 4.6-3.9 0-2-1.1-3-3.2-3.9l-1-.4c-1.1-.4-1.6-.7-1.6-1.3 0-.5.4-.9 1.1-.9.7 0 1.2.3 1.7 1l1.7-1.1c-.8-1.3-1.9-1.9-3.4-1.9-2.1 0-3.5 1.3-3.5 3.1 0 1.9 1.1 2.9 3 3.7l1 .4c1.2.5 1.8.8 1.8 1.5 0 .7-.6 1.1-1.5 1.1-1 0-1.7-.5-2.3-1.3l-1.8 1c.8 1.6 2.2 2.8 4.4 2.8z"
        />
      </svg>
    ),
  },
  tailwind: {
    label: "Tailwind",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M12 6c-2.7 0-4.4 1.3-5.3 4 1-1.3 2.2-1.8 3.6-1.4.8.2 1.4.7 2.1 1.3 1.1 1 2.3 2.1 4.8 2.1 2.7 0 4.4-1.3 5.3-4-1 1.3-2.2 1.8-3.6 1.4-.8-.2-1.4-.7-2.1-1.3C15.7 7.1 14.5 6 12 6zm-5.3 8c1-2.7 2.6-4 5.3-4 2.5 0 3.7 1.1 4.8 2.1.7.6 1.3 1.1 2.1 1.3 1.4.4 2.6-.1 3.6-1.4-1 2.7-2.6 4-5.3 4-2.5 0-3.7-1.1-4.8-2.1-.7-.6-1.3-1.1-2.1-1.3-1.4-.4-2.6.1-3.6 1.4z"
        />
      </svg>
    ),
  },
  framer: {
    label: "Framer Motion",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M8 3h8v6H8V3zm0 6h8l-8 6V9zm0 6h8v6H8v-6z" />
      </svg>
    ),
  },
  motion: {
    label: "Motion",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M4 18V6h4l4 6 4-6h4v12h-4V12l-4 6-4-6v6H4z" />
      </svg>
    ),
  },
  shadcn: {
    label: "shadcn/ui",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M4 12h16v2H4v-2zm2-6h12v2H6V6zm0 12h12v2H6v-2z" />
      </svg>
    ),
  },
  sanity: {
    label: "Sanity",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M6 8c1.3-2.7 4.8-3.8 8-2.2 2.8 1.4 3.9 4.1 3 6.2-1.2 2.7-5 3.5-7.6 2.4-1.6-.7-2.7-1.8-3.4-3.4l2.5-1.1c.5 1.1 1.2 1.8 2.1 2.2 1.5.6 3.6.3 4.2-1 0 0 .6-1.3-1.9-2.5C10 8.3 8 8.7 7.3 10L6 8z"
        />
      </svg>
    ),
  },
};

function TechChip({ item }: { item: TechKey }) {
  const I = TECH[item].Icon;
  return (
    <span className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-white/80 border border-white/10 bg-white/5">
      <I className="h-4 w-4" />
      {TECH[item].label}
    </span>
  );
}

type Project = {
  accent: Accent;
  title: string;
  subtitle: string;
  bullets: string[];
  tech: TechKey[];
  /** ✅ MUST go to project-details page */
  detailHref: string;
  leftText: string;
  images: { primary: StaticImageData; hover: StaticImageData };
};

const projects: Project[] = [
  
  {
    accent: "parrot",
    title: "Portfolio Pro",
    subtitle:
      "A modern portfolio crafted for a client to showcase case studies.\nCrisp typography, smooth interactions, and a premium layout hierarchy.\nBuilt lightweight so it feels fast while still looking high-end.",
    bullets: [
      "Sticky-scroll storytelling for stronger case study flow.",
      "Reusable page sections for quick content updates.",
      "Optimized fonts/images for better Lighthouse score.",
      "Motion-enhanced UI without sacrificing readability.",
      "Scalable structure to expand pages later.",
    ],
    tech: ["next", "react", "ts", "tailwind", "motion"],
    detailHref: "/project-details/portfolio-pro",
    leftText:
      "A clean premium portfolio for client projects with structured case studies and smooth interactions.",
    images: { primary: p2a, hover: p2b },
  },
  {
    accent: "green",
    title: "Hā Wellness",
    subtitle:
      "A wellness platform built for a client with a calm, modern identity.\nPolished onboarding + plan discovery designed for conversion.\nCarefully balanced motion to keep the experience soothing.",
    bullets: [
      "Conversion-focused landing structure with clear sections.",
      "Component-driven UI to scale features quickly.",
      "Mobile-first layout tuned for real users.",
      "Smooth animation layer to add delight (not noise).",
      "Maintainable patterns for long-term growth.",
    ],
    tech: ["next", "react", "ts", "tailwind", "framer"],
    detailHref: "/project-details/ha-wellness",
    leftText:
      "A personalized wellness platform for a client — modern UI, onboarding flow, and clean motion.",
    images: { primary: p3a, hover: p3b },
  },
  {
    accent: "pink",
    title: "BrainBox Landing",
    subtitle:
      "A tech-forward landing built for a client product launch.\nBold visuals, clean sections, and polished motion for credibility.\nEngineered to convert with clarity, speed, and structure.",
    bullets: [
      "High-contrast layout that stays readable in dark themes.",
      "Consistent spacing + section rhythm for premium feel.",
      "Reusable components for rapid iteration.",
      "Optimized media handling for performance.",
      "Future-ready structure for product expansion.",
    ],
    tech: ["next", "react", "ts", "tailwind", "motion"],
    detailHref: "/project-details/brainbox",
    leftText:
      "A bold tech landing for a client product — modern structure, crisp visuals, and smooth motion.",
    images: { primary: p4a, hover: p4b },
  },
  {
    accent: "orange",
    title: "ArcadeVerse",
    subtitle:
      "A high-impact animated gaming website built for a client launch.\nCinematic transitions, interactive sections, and smooth scroll storytelling.\nOptimized for speed so motion stays buttery across devices.",
    bullets: [
      "Scroll-driven animations and premium micro-interactions.",
      "Responsive layout tuned for mobile + large displays.",
      "Reusable components with a consistent design system.",
      "SEO-first pages with performance optimization.",
      "Clean handoff-ready codebase for client delivery.",
    ],
    tech: ["next", "react", "ts", "tailwind", "framer", "shadcn"],
    detailHref: "/project-details/arcadeverse",
    leftText:
      "An animated gaming experience with cinematic motion, smooth scrolling, and premium UI transitions — built for a client.",
    images: { primary: p1a, hover: p1b },
  },
  {
    accent: "blue",
    title: "Nivy Studio",
    subtitle:
      "A sleek brand website built for a client with modern interactions.\nModular UI blocks and consistent design language across sections.\nFocused on premium presentation with fast loading.",
    bullets: [
      "Modular section system to keep scaling easy.",
      "Optimized images for crisp visuals and fast loads.",
      "Animations used only where they add value.",
      "Design tokens for spacing + typography consistency.",
      "Client-ready delivery with clean maintainable code.",
    ],
    tech: ["next", "react", "ts", "tailwind", "shadcn"],
    detailHref: "/project-details/nivy-studio",
    leftText:
      "A premium product/brand website for a client with clean UI blocks and modern interaction design.",
    images: { primary: p5a, hover: p5b },
  },
  {
    accent: "purple",
    title: "CryptoPlays",
    subtitle:
      "A crypto platform built for a client to track markets and plays.\nDesigned for fast scanning: tokens, trends, and key metrics at a glance.\nDashboard-like UI with a polished daily-use experience.",
    bullets: [
      "Dashboard layout optimized for information hierarchy.",
      "Reusable components for coins, widgets, and sections.",
      "Performance-first navigation for fast switching.",
      "Motion used to enhance clarity and focus.",
      "Scalable base to expand features over time.",
    ],
    tech: ["next", "react", "ts", "tailwind", "framer"],
    detailHref: "/project-details/cryptoplays",
    leftText:
      "CryptoPlays — a client dashboard where crypto tracking, trends, and plays are presented in a clean UI.",
    images: { primary: p6a, hover: p6b },
  },
];

const waveContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const waveItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.9, 0.2, 1] },
  },
};

type Props = {
  /** show only first N projects (home page) */
  limit?: number;
  /** show the "See all projects" button (home page) */
  showSeeAllButton?: boolean;
};

export default function ProjectSection({
  limit,
  showSeeAllButton = false,
}: Props) {
  const router = useRouter();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProjects = useMemo(() => {
    return typeof limit === "number" ? projects.slice(0, limit) : projects;
  }, [limit]);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const total = visibleProjects.length;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    if (idx !== activeIndex) setActiveIndex(idx);
  });

  const active = useMemo(
    () => visibleProjects[activeIndex],
    [activeIndex, visibleProjects]
  );

  const goToDetails = (p: Project) => router.push(p.detailHref);

  return (
    <section className="relative mx-2 lg:mx-10 xl:mx-20 mt-20 pb-24 text-white">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
          Featured Case Studies
        </p>
        <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-semibold text-white/90">
          Curated work
        </h2>
      </div>

      {/* Sticky Scroll Reveal */}
      <div
        ref={wrapRef}
        className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        {/* LEFT column */}
        <div className="space-y-16">
          {visibleProjects.map((p, idx) => {
            const a = ACCENT[p.accent];
            const isActive = idx === activeIndex;

            return (
              <div
                key={idx}
                className="relative"
                style={{ ["--accent" as any]: a.hex } as React.CSSProperties}
              >
                <div className="min-h-[70vh] sm:min-h-[80vh] flex items-start">
                  <div
                    className={[
                      "group relative w-full rounded-[28px] overflow-hidden",
                      "shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
                      "transition",
                      isActive ? "opacity-100" : "opacity-95",
                    ].join(" ")}
                  >
                    {/* Accent background */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, var(--accent) 0%, rgba(0,0,0,0.88) 70%)",
                      }}
                    />

                    {/* Inner border */}
                    <div className="pointer-events-none absolute inset-2.5 rounded-[20px] border border-white/15" />

                    {/* Content */}
                    <div className="relative p-6 sm:p-8">
                      {/* ✅ Professional caption + clickable arrow */}
                      <div className="flex items-center justify-between gap-4">
                        <p
                          className="
                            max-w-136
                            text-sm sm:text-base
                            leading-relaxed
                            text-white/85
                            backdrop-blur-sm
                            bg-black/20
                            px-4 py-3
                            rounded-xl
                            border border-white/10
                          "
                        >
                          {p.leftText}
                        </p>

                        <button
                          onClick={() => goToDetails(p)}
                          aria-label={`Open ${p.title} details`}
                          className="
                            group
                            shrink-0
                            flex items-center justify-center
                            h-11 w-11
                            rounded-full
                            border border-white/20
                            bg-white/5
                            text-white/85
                            transition-all
                            hover:bg-white/15
                            hover:scale-105
                            active:scale-95
                          "
                        >
                          <span className="text-xl transition-transform group-hover:translate-x-0.5">
                            →
                          </span>
                        </button>
                      </div>

                      {/* Preview */}
                      <div className="mt-8">
                        <HoverStackPreview
                          primary={p.images.primary}
                          secondary={p.images.hover}
                          alt={p.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT column (sticky details) */}
        <div className="lg:sticky lg:top-24 h-fit">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-1 sm:p-2"
            >
              <motion.div
                variants={waveContainer}
                initial="hidden"
                animate="show"
                className="rounded-3xl bg-transparent p-4 sm:p-6"
              >
                {/* Title */}
                <motion.div
                  variants={waveItem}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`h-[3px] w-10 rounded-full ${
                      ACCENT[active.accent].line
                    }`}
                  />
                  <h3 className="text-3xl sm:text-4xl font-semibold text-white/90">
                    {active.title}
                  </h3>
                </motion.div>

                {/* ✅ Professional 3-line subtitle (keeps line breaks) */}
                <motion.p
                  variants={waveItem}
                  className="mt-4 text-white/70 leading-relaxed max-w-xl whitespace-pre-line"
                >
                  {active.subtitle}
                </motion.p>

                {/* 5 points */}
                <motion.ul variants={waveContainer} className="mt-6 space-y-3">
                  {active.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      variants={waveItem}
                      className="flex items-start gap-3 text-white/75"
                    >
                      <CornerStarIcon
                        className={`mt-1.5 ${ACCENT[active.accent].star}`}
                      />
                      <span className="leading-relaxed">{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* ✅ Tech stack with logos */}
                <motion.div
                  variants={waveItem}
                  className="mt-7 flex flex-wrap gap-2.5"
                >
                  {active.tech.map((k) => (
                    <TechChip key={k} item={k} />
                  ))}
                </motion.div>

                {/* ✅ Project Details -> project-details page */}
                <motion.div variants={waveItem} className="mt-8">
                  <ArrowSwapButton
                    label="Project Details"
                    href={active.detailHref}
                    direction="up-right"
                    className={
                      active.accent === "parrot" ? "text-black" : "text-white"
                    }
                    style={{ backgroundColor: ACCENT[active.accent].hex }}
                  />
                </motion.div>

              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ Bottom centered button (optional, home only) */}
      {showSeeAllButton && (
        <div className="mt-14 flex justify-center">
          <ArrowSwapButton
            label="See all projects"
            href="/projects"
            direction="up-right"
            className="text-white"
            style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
          />
        </div>
      )}
    </section>
  );
}
