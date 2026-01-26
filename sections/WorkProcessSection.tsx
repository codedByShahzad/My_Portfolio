"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  MessageSquareText,
  ClipboardList,
  PenTool,
  Blocks,
  Bug,
  Rocket,
  FileText,
  CheckCircle2,
} from "lucide-react";

import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import ArrowSwapButton from "@/components/ui/ArrowButton";

type Step = {
  step: string; // "01"
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  points: string[];
};

const steps: Step[] = [
  {
    step: "01",
    title: "Discovery Call & Project Fit",
    subtitle:
      "We align on goals, timeline, and confirm the best approach before we start.",
    Icon: MessageSquareText,
    points: [
      "Define goals + success criteria",
      "Confirm scope & timeline fit",
      "Feature shortlist (must-have vs nice-to-have)",
      "Identify risks / constraints early",
      "Agree on milestones & next steps",
    ],
  },
  {
    step: "02",
    title: "Scope & Milestone Plan",
    subtitle:
      "You get a clear breakdown of what’s included, what’s not, and how delivery will work.",
    Icon: ClipboardList,
    points: [
      "Milestones (Phase 1 → Phase 2 → Final)",
      "Scope boundaries (included/excluded)",
      "Delivery schedule + review points",
      "Communication plan (updates + feedback cycle)",
      "Start date confirmed",
    ],
  },
  {
    step: "03",
    title: "UI Direction & Layout Planning",
    subtitle:
      "We finalize layout, UI direction, and responsiveness so development stays consistent.",
    Icon: PenTool,
    points: [
      "Layout / wireframe direction",
      "UI rules (spacing, typography, components)",
      "Responsive behavior (mobile → desktop)",
      "Reusable sections/components plan",
      "Final UI direction approved",
    ],
  },
  {
    step: "04",
    title: "Build & Weekly Deliverables",
    subtitle:
      "I build in milestones and share progress so you can review early and guide the direction.",
    Icon: Blocks,
    points: [
      "Production-ready components & screens",
      "API integration (if needed) + loading/error states",
      "Staging/preview link for review",
      "Milestone reviews + iteration",
      "Clean structure & reusable code",
    ],
  },
  {
    step: "05",
    title: "Testing, Polish & Optimization",
    subtitle:
      "I test edge cases, fix issues, polish UI, and optimize performance for smooth experience.",
    Icon: Bug,
    points: [
      "Bug fixes + UI polish pass",
      "Responsive testing across breakpoints",
      "Performance improvements (images, rendering)",
      "Final QA checklist completion",
      "Release-ready validation",
    ],
  },
  {
    step: "06",
    title: "Deployment, Handoff & Support",
    subtitle:
      "I deploy the project and hand over everything you need — with optional post-launch support.",
    Icon: Rocket,
    points: [
      "Deployment (Vercel/Hostinger/etc.)",
      "Setup notes (env variables + run commands)",
      "Handoff package (repo + documentation)",
      "Go-live confirmation",
      "Optional support window available",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function WorkflowCardsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="workflow"
      className="relative overflow-hidden py-20 text-white md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <StarsBackground />
      <ShootingStars />

      {/* Accent blobs */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-0 h-[320px] w-[360px] rounded-full bg-primary/15 blur-3xl md:h-[420px] md:w-[520px]" />
        <div className="absolute -right-40 bottom-10 h-[320px] w-[360px] rounded-full bg-primary/10 blur-3xl md:h-[420px] md:w-[520px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div> */}

      <div className="relative mx-auto w-full px-3 sm:px-6 lg:px-10 xl:px-20">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-background/60 border border-white/10 text-white backdrop-blur-md"
          >
            <p className="px-3 text-xs uppercase tracking-[0.25em] text-white/60 sm:text-sm">
              Development Approach
            </p>
          </HoverBorderGradient>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-white sm:text-4xl md:text-5xl">
            A clear build process
            <br />
            from{" "}
            <span className="bg-linear-to-r from-primary via-fuchsia-500 to-pink-500 bg-clip-text font-semibold text-transparent">
              idea to launch
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            A transparent, step-by-step workflow designed to reduce risk, avoid
            surprises, and deliver production-ready results — with clear
            milestones, early feedback, and a smooth final handoff.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-5 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.Icon;

            return (
              <motion.div
                key={s.step}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                variants={cardVariants}
                className="w-full"
              >
                {/* ✅ Premium gradient border wrapper */}
                <div
                  className={cn(
                    "h-full w-full rounded-2xl",
                    "bg-black/30 backdrop-blur-md",
                    "border border-white/10 rounded-2xl"
                  )}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl p-6">
                    {/* ✅ Top animated line (subtle) */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 h-0.5 w-full bg-linear-to-r from-transparent via-white/25 to-transparent"
                      animate={
                        reduce
                          ? { opacity: 0.35 }
                          : { opacity: [0.12, 0.75, 0.12] }
                      }
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />

                    {/* ✅ Soft inner glow (static, premium) */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          "radial-gradient(900px circle at 18% 10%, rgba(80,47,235,0.16), transparent 45%)",
                      }}
                    />

                    {/* ✅ Content */}
                    <div className="relative">
                      {/* Top row */}
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5">
                          <Icon className="h-6 w-6 text-white" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-start text-lg font-semibold md:text-xl">
                              {s.title}
                            </h3>

                            <div className="select-none text-5xl font-bold leading-none text-white/30">
                              {s.step}
                            </div>
                          </div>

                          <p className="mt-1 text-start text-sm text-white/70">
                            {s.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Key Deliverables */}
                      <div className="mt-6">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                          <FileText className="h-4 w-4 text-white/80" />
                          Key Deliverables
                        </div>

                        <ul className="mt-3 space-y-2.5 text-sm text-white/75">
                          {s.points.map((p) => (
                            <li key={p} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/90" />
                              <span className="leading-6">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* subtle bottom divider */}
                      <div className="mt-7 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 text-center"
        >
          <div className="h-px w-full max-w-2xl bg-linear-to-r from-transparent via-white/15 to-transparent" />
          <p className="text-sm text-white/70">
            Want this process applied to your project? I’ll keep everything
            clear, structured, and production-ready.
          </p>

           <ArrowSwapButton
                      label="Let’s Work Together"
                      href="/projects"
                      className="bg-primary text-white mt-5"
                    />
        </motion.div>
      </div>
    </section>
  );
}
