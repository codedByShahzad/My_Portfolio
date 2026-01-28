"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  FolderKanban,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import profile from "../../public/images/profile2.png";
import { motion, type Variants } from "framer-motion";

/* ----------------------------- */
/* Motion (same vibe as service) */
/* ----------------------------- */

const pageIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const itemSoft: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ----------------------------- */
/* Data                          */
/* ----------------------------- */

type SocialItem = {
  label: string;
  href: string;
  Icon: IconType;
};

const socials: SocialItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shahzad-sohail",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/codedByShahzad",
    Icon: FaGithub,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01a95637283911ba95?mp_source=share",
    Icon: SiUpwork,
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/s/DBAz77Q",
    Icon: SiFiverr,
  },
];

const chips = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "SQL", "REST APIs"];

type Experience = {
  role: string;
  company: string;
  meta: string;
  summary: string;
  highlights: string[];
};

const experience: Experience[] = [
  {
    role: "Front-End Developer",
    company: "Hā Health Website",
    meta: "Remote • Jun 16, 2025 – Sep 21, 2025",
    summary:
      "Built a polished web experience for an AI-powered wellness platform: personalized meal plans, fitness tracking, and mindfulness flows.",
    highlights: [
      "Shipped responsive UI in React/Next.js + Tailwind with consistent design tokens",
      "Integrated recommendation-driven screens for meals, workouts, and mindfulness",
      "Worked closely with design + backend to deliver clean, reliable user journeys",
    ],
  },
  {
    role: "Web Developer (Client Project)",
    company: "NIVY App",
    meta: "Remote • Dec 16, 2024 – Apr 03, 2025",
    summary:
      "Contributed to a match scheduling web platform enabling colleges to manage and update inter-institution sports fixtures.",
    highlights: [
      "Owned Matches Management with full CRUD flows and clean form UX",
      "Implemented dynamic state handling and real-time updates for better efficiency",
      "Improved usability with structured layouts and clear information hierarchy",
    ],
  },
];

type Project = {
  title: string;
  meta: string;
  desc: string;
  bullets: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Crypto Place",
    meta: "React • Tailwind • CoinGecko",
    desc: "Real-time crypto tracker with search and trend insights.",
    bullets: [
      "Live market data + historical insights via CoinGecko API",
      "Interactive charts for trends and comparisons",
      "Responsive layout optimized for mobile + desktop",
    ],
    githubUrl: "https://github.com/codedByShahzad",
    liveUrl: "https://example.com",
  },
  {
    title: "Tomato",
    meta: "React • Redux Toolkit • REST APIs",
    desc: "Food delivery experience with listing, cart, and checkout flow.",
    bullets: [
      "Dynamic restaurants/products fetched via REST APIs",
      "Cart + checkout state handled with Redux Toolkit",
      "Mobile-first UI focused on speed and clarity",
    ],
    githubUrl: "https://github.com/codedByShahzad",
    liveUrl: "https://example.com",
  },
  {
    title: "Corto",
    meta: "React Native • Redux Toolkit • REST APIs",
    desc: "Multi-feature mobile app: product search, flight tracking, and deals.",
    bullets: [
      "Robust fetching from multiple endpoints for live content",
      "Predictable global state with Redux Toolkit",
      "Intuitive navigation across 3 core modules",
    ],
    githubUrl: "https://github.com/codedByShahzad",
    liveUrl: "https://example.com",
  },
];

type EducationItem = {
  title: string;
  subtitle: string;
  meta: string;
};

const education: EducationItem[] = [
  { title: "FG Sir Syed Public School", subtitle: "Matriculation", meta: "Graduated: 2020" },
  { title: "Punjab Group of Colleges", subtitle: "ICS", meta: "2021 – 2023" },
  {
    title: "University of Central Punjab",
    subtitle: "BS Computer Science",
    meta: "Expected Graduation: 2027",
  },
];

type SkillGroup = {
  title: string;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React, Next.js", "TypeScript", "Tailwind CSS", "Responsive UI + component systems"],
  },
  {
    title: "Backend",
    items: ["Node.js, Express", "REST APIs + middleware", "JWT auth", "Validation + error handling"],
  },
  {
    title: "Databases",
    items: ["MongoDB (Mongoose)", "SQL basics (MySQL/PostgreSQL)", "Schema design"],
  },
  {
    title: "Tooling",
    items: ["Git/GitHub", "Postman", "Basic Docker/Swagger", "Jira, VS Code"],
  },
];

/* ----------------------------- */
/* Page                          */
/* ----------------------------- */

export default function Page() {
  return (
    <motion.main
      variants={pageIn}
      initial="hidden"
      animate="show"
      className="relative min-h-dvh lg:min-h-screen bg-black text-neutral-200"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(80,47,235,0.28),transparent_60%),radial-gradient(900px_520px_at_90%_10%,rgba(217,70,239,0.22),transparent_55%),radial-gradient(800px_520px_at_50%_110%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22300%22 height=%22300%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[36px_36px] opacity-[0.10]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-10 sm:pt-12 pb-24 sm:pb-28 lg:pb-12">
        <div className="mx-auto w-full">
          {/* Top Label */}
          <motion.div variants={itemSoft} initial="hidden" animate="show" className="flex flex-col items-center text-center">
            <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <p className="relative z-10 text-xs uppercase tracking-[0.25em] text-white/70 sm:text-sm">
                Resume
              </p>
            </div>
          </motion.div>

          {/* ================= LAYOUT ================= */}
          <div className="mt-8 grid gap-6 lg:gap-8 xl:grid-cols-[460px_1fr] xl:items-start">
            {/* ================= SIDEBAR (STICKY) ================= */}
            <motion.aside variants={itemUp} initial="hidden" animate="show" className="self-start xl:sticky xl:top-8">
              <Card>
                {/* Sidebar stagger */}
                <motion.div variants={container} initial="hidden" animate="show">
                  {/* Header */}
                  <motion.div variants={itemUp} className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-visible">
                        <div className="h-full w-full rounded-full overflow-hidden border border-white/15 bg-black/40">
                          <Image
                            src={profile}
                            alt="Shahzad Sohail"
                            width={160}
                            height={160}
                            className="h-full w-full object-cover"
                            priority
                          />
                        </div>

                        {/* Dot (ping) */}
                        <div className="absolute right-4 bottom-2 translate-x-[15%] translate-y-[15%] z-40">
                          <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 opacity-75 animate-ping" />
                            <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500 ring-2 ring-neutral-950" />
                          </span>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_40px_rgba(168,85,247,0.35)]" />
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                      Shahzad Sohail
                    </h1>

                    <p className="mt-2 text-sm sm:text-base text-neutral-300/75 leading-relaxed max-w-[38ch]">
                      Full-Stack JavaScript Developer focused on clean UI, fast performance, and
                      production-ready delivery.
                    </p>
                  </motion.div>

                  {/* chips */}
                  <motion.div variants={itemUp} className="mt-5 flex flex-wrap gap-2 justify-center">
                    {chips.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs sm:text-sm text-neutral-100/90 backdrop-blur-md"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>

                  {/* contact */}
                  <motion.div variants={itemUp} className="mt-6 space-y-3 text-sm sm:text-base text-neutral-200/85">
                    <ContactRow Icon={Mail} text="mr.shahzad.developer@gmail.com" />
                    <ContactRow Icon={Phone} text="+92 345 2789601" />
                    <ContactRow Icon={MapPin} text="Rawalpindi, Pakistan" />
                  </motion.div>

                  {/* socials */}
                  <motion.div variants={itemUp} className="mt-6 grid grid-cols-2 gap-3">
                    {socials.map((item) => (
                      <SocialPill key={item.label} {...item} />
                    ))}
                  </motion.div>

                  {/* quick actions */}
                  <motion.div variants={itemUp} className="mt-6 grid gap-3">
                    <a
                      href="/Shahzad Resume.pdf"
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm sm:text-base hover:bg-white/10 hover:border-white/25 transition"
                    >
                      <Download size={18} />
                      Download Full Resume
                    </a>

                    <a
                      href="mailto:mr.shahzad.developer@gmail.com"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/35 px-5 py-3 text-sm sm:text-base hover:bg-black/50 hover:border-white/20 transition"
                    >
                      <ArrowUpRight size={18} />
                      Email Me
                    </a>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.aside>

            {/* ================= MAIN CONTENT (SCROLLS) ================= */}
            <motion.section
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6 lg:space-y-8"
            >
              <motion.div variants={itemUp}>
                <Section
                  title="Experience"
                  Icon={Briefcase}
                  subtitle="Recent work with ownership and measurable impact."
                  action={
                    <a
                      href="/Shahzad Resume.pdf"
                      download
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm sm:text-base hover:bg-white/10 hover:border-white/25 transition"
                    >
                      <Download size={18} />
                      Download Full Resume
                    </a>
                  }
                >
                  <div className="space-y-4">
                    {experience.map((x) => (
                      <ExperienceCard key={`${x.company}-${x.role}`} item={x} />
                    ))}
                  </div>
                </Section>
              </motion.div>

              <motion.div variants={itemUp}>
                <Section
                  title="Projects"
                  Icon={FolderKanban}
                  subtitle="Selected builds that show product thinking and execution."
                >
                  <div className="grid gap-4">
                    {projects.map((p) => (
                      <ProjectCard key={p.title} item={p} />
                    ))}
                  </div>
                </Section>
              </motion.div>

              <motion.div variants={itemUp}>
                <Section title="Skills" Icon={FolderKanban} subtitle="A focused stack for shipping production-grade apps.">
                  <div className="grid gap-4 lg:grid-cols-2">
                    {skills.map((g) => (
                      <SkillGroupCard key={g.title} item={g} />
                    ))}
                  </div>
                </Section>
              </motion.div>

              <motion.div variants={itemUp}>
                <Section title="Education" Icon={GraduationCap} subtitle="Academic background and current studies.">
                  <div className="grid gap-4 lg:grid-cols-3">
                    {education.map((e) => (
                      <MiniCard key={e.title} title={e.title} subtitle={e.subtitle} meta={e.meta} />
                    ))}
                  </div>
                </Section>
              </motion.div>
            </motion.section>
          </div>

          <div className="h-10" />
        </div>
      </div>
    </motion.main>
  );
}

/* ----------------------------- */
/* UI Components                 */
/* ----------------------------- */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/35 backdrop-blur-xl p-6 sm:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_120px_rgba(0,0,0,0.65)]">
      <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}

function PillHeading({ title, Icon }: { title: string; Icon: LucideIcon }) {
  return (
    <div className="flex items-center justify-start">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-4 py-2 backdrop-blur-md">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <Icon size={18} className="text-white/85" />
        </span>
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}

function Section({
  title,
  Icon,
  subtitle,
  action,
  children,
}: {
  title: string;
  Icon: LucideIcon;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_80px_rgba(0,0,0,0.55)]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <PillHeading title={title} Icon={Icon} />
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>

        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-neutral-300/75 leading-relaxed">{subtitle}</p>
        )}

        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function ContactRow({ Icon, text }: { Icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <Icon size={18} className="text-neutral-300/70 shrink-0" />
      <span className="text-neutral-200/85 wrap-break-word min-w-0">{text}</span>
    </div>
  );
}

function SocialPill({ href, label, Icon }: SocialItem) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm text-white/90 bg-black/40 border border-white/10 backdrop-blur-md transition hover:bg-black/60 hover:border-white/20"
    >
      <Icon className="h-[18px] w-[18px] opacity-90" />
      <span className="truncate">{label}</span>
    </a>
  );
}

function MiniCard({ title, subtitle, meta }: { title: string; subtitle: string; meta: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-5 sm:p-6 backdrop-blur-md transition hover:bg-black/35">
      <p className="text-white font-semibold text-base sm:text-lg">{title}</p>
      <p className="mt-1 text-neutral-300/75 text-sm sm:text-base">{subtitle}</p>
      <p className="mt-3 text-neutral-400/70 text-sm sm:text-base">{meta}</p>
    </div>
  );
}

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-7 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <p className="text-white font-semibold text-lg sm:text-xl">{item.role}</p>
          <p className="mt-1 text-neutral-300/80 text-sm sm:text-base">{item.company}</p>
        </div>
        <p className="text-neutral-300/60 text-sm sm:text-base">{item.meta}</p>
      </div>

      <p className="mt-4 text-neutral-200/80 text-sm sm:text-base leading-relaxed">{item.summary}</p>

      <ul className="mt-4 space-y-2 text-neutral-200/80 text-sm sm:text-base">
        {item.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-2.5 h-2 w-2 rounded-full bg-primary/90 shrink-0" />
            <span className="leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ item }: { item: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-7 backdrop-blur-md transition hover:bg-black/35">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-white font-semibold text-lg sm:text-xl truncate">{item.title}</p>
          <p className="mt-1 text-neutral-300/65 text-sm sm:text-base">{item.meta}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {item.githubUrl ? (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.title} GitHub`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 hover:text-white hover:border-white/20 transition"
            >
              <FaGithub className="h-[18px] w-[18px]" />
            </a>
          ) : null}

          {item.liveUrl ? (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.title} Live Preview`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 hover:text-white hover:border-white/20 transition"
            >
              <ExternalLink size={18} />
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-neutral-200/80 text-sm sm:text-base leading-relaxed">{item.desc}</p>

      <ul className="mt-4 space-y-2 text-neutral-200/80 text-sm sm:text-base">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2.5 h-2 w-2 rounded-full bg-primary/90 shrink-0" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroupCard({ item }: { item: SkillGroup }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-7 backdrop-blur-md">
      <p className="text-white font-semibold text-base sm:text-lg">{item.title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.items.map((it) => (
          <span
            key={it}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-neutral-100/85"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
