"use client";

import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  FolderKanban,
} from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import type { LucideIcon } from "lucide-react";

const chips = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "REST APIs",
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-neutral-200">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(80,47,235,0.28),transparent_60%),radial-gradient(900px_520px_at_90%_10%,rgba(217,70,239,0.22),transparent_55%),radial-gradient(800px_520px_at_50%_110%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22300%22 height=%22300%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[36px_36px] opacity-[0.10]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-12">
        {/* ✅ keep XL same, add stable container for md/lg */}
        <div className="mx-auto w-full">
          {/* Top Label */}
          <div className="flex flex-col items-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-neutral-950/40 text-white border border-white/10 backdrop-blur-md"
            >
              <p className="px-3 py-1 text-xs sm:text-sm tracking-[0.35em] text-white/60 uppercase">
                My Resume
              </p>
            </HoverBorderGradient>
          </div>

          {/* HERO CARD */}
          <section className="mt-8 relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950/35 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_120px_rgba(0,0,0,0.65)]">
            {/* glow blobs */}
            <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-primary/18 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/14 blur-3xl" />
            {/* top shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent)]" />

            <div className="relative p-6 sm:p-8 lg:p-10">
              {/* ✅ md was cramped -> switch to lg for row layout */}
              <div className="flex flex-col gap-5 xl:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-tight text-white">
                    Shahzad Sohail
                  </h1>

                  <p className="mt-4 text-sm sm:text-base lg:text-lg xl:text-xl text-neutral-300/80 leading-relaxed">
                    Full-Stack JavaScript Developer building modern, high-performance web apps with{" "}
                    <span className="text-white">React / Next.js</span> on the frontend and{" "}
                    <span className="text-white">Node.js / Express</span> on the backend — powered by{" "}
                    <span className="text-white">MongoDB</span> and <span className="text-white">SQL</span>.
                  </p>
                </div>

                <div className="flex lg:justify-end lg:pt-1">
                  <a
                    href="/Shahzad Resume.pdf"
                    download
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm sm:text-base lg:text-lg text-white hover:bg-white/10 hover:border-white/25 transition"
                  >
                    <Download size={18} className="opacity-90" />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  {/* chips */}
                  <div className="mt-1 flex flex-wrap gap-2.5">
                    {chips.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/35 px-3.5 py-1.5 text-xs sm:text-sm lg:text-[15px] text-neutral-100/90 backdrop-blur-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ✅ contact row: fix email breaking on md/lg */}
                  <div className="mt-7 grid gap-3 sm:grid-cols-2 text-sm sm:text-base lg:text-lg text-neutral-200/85">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Mail size={18} className="text-neutral-300/70 shrink-0" />
                      <span
                        className="text-neutral-200/85 wrap-break-word min-w-0 "
                        title="mr.shahzad.developer@gmail.com"
                      >
                        mr.shahzad.developer@gmail.com
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone size={18} className="text-neutral-300/70 shrink-0" />
                      <span className="text-neutral-200/85">+92 345 2789601</span>
                    </div>

                    <div className="flex items-center gap-2.5 sm:col-span-2">
                      <MapPin size={18} className="text-neutral-300/70 shrink-0" />
                      <span className="text-neutral-200/85">Rawalpindi, Pakistan</span>
                    </div>
                  </div>

                  {/* socials */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <SocialPill
                      href="https://github.com/codedByShahzad"
                      label="GitHub"
                      Icon={GithubIcon}
                    />
                    <SocialPill href="" label="LinkedIn" Icon={LinkedinIcon} />
                    <SocialPill href="https://www.upwork.com/" label="Upwork" Icon={Briefcase} />
                    <SocialPill href="https://www.fiverr.com/" label="Fiverr" Icon={Sparkles} />
                  </div>
                </div>

                {/* right spacer */}
                <div className="hidden lg:block" />
              </div>
            </div>
          </section>

          {/* SECTIONS */}
          <div className="mt-10 space-y-10">
            {/* Education */}
            <Section
              title="Education"
              Icon={GraduationCap}
              subtitle="Academic background and current studies."
            >
              {/* ✅ md 3 cols was too tight -> push to lg */}
              <div className="grid gap-4 lg:grid-cols-3">
                <MiniCard
                  title="FG Sir Syed Public School"
                  subtitle="Matriculation"
                  meta="Graduated: 2020"
                />
                <MiniCard title="Punjab Group of Colleges" subtitle="ICS" meta="2021 – 2023" />
                <MiniCard
                  title="University of Central Punjab"
                  subtitle="BS Computer Science"
                  meta="Expected Graduation: 2027"
                />
              </div>
            </Section>

            {/* Skills */}
            <Section
              title="Skills Summary"
              Icon={FolderKanban}
              subtitle="A battle-tested stack for shipping production-grade apps."
            >
              {/* ✅ md 2 cols was too tight -> push to lg */}
              <div className="grid gap-4 lg:grid-cols-2">
                <SkillBlock
                  title="Frontend"
                  items={[
                    "HTML, CSS, JavaScript, TypeScript",
                    "React.js, Next.js, Tailwind CSS",
                    "React Native, Expo",
                    "Redux Toolkit",
                  ]}
                />
                <SkillBlock
                  title="Backend"
                  items={[
                    "Node.js, Express.js",
                    "REST APIs, Middleware",
                    "Authentication (JWT)",
                    "API Validation & Error Handling",
                  ]}
                />
                <SkillBlock
                  title="Databases"
                  items={[
                    "MongoDB (Mongoose)",
                    "SQL (MySQL/PostgreSQL basics)",
                    "Schema Design, Indexing",
                  ]}
                />
                <SkillBlock
                  title="Tools & Others"
                  items={[
                    "Git, GitHub, Postman",
                    "Swagger/OpenAPI (basic), Docker (basic)",
                    "Webpack, Jira, VS Code",
                    "Word, Excel, PowerPoint, Tableau",
                  ]}
                />
              </div>
            </Section>

            {/* Experience */}
            <Section
              title="Work Experience"
              Icon={Briefcase}
              subtitle="Real-world projects, ownership, and impact."
            >
              <TimelineItem
                title="Client Project – NIVY App"
                right="Remote | Dec 16, 2024 – Apr 03, 2025"
                desc="Collaborated with the NIVY development team to build a match scheduling platform that enabled colleges to efficiently organize, manage, and update inter-institutional sports matches via a web application."
                bullets={[
                  "Designed and developed the Matches Management page with full CRUD workflows",
                  "Implemented clean, intuitive UI/UX for creating, editing, updating, and deleting matches",
                  "Ensured dynamic data handling and real-time updates to improve efficiency and user experience",
                ]}
              />

              <TimelineItem
                title="Front-End Developer – Ha Health Website"
                right="Remote | Jun 16, 2025 – Sep 21, 2025"
                desc="Worked with the Hā Health team to build an AI-powered wellness platform offering personalized meal plans, fitness tracking, and mindfulness tools."
                bullets={[
                  "Built responsive UI components with React, Next.js, and Tailwind for cross-device performance",
                  "Integrated AI-driven recommendations for meals, workouts, and mindfulness experiences",
                  "Collaborated closely with design + backend to deliver smooth, consistent user flows",
                ]}
              />
            </Section>

            {/* Projects */}
            <Section
              title="Projects"
              Icon={FolderKanban}
              subtitle="Selected work that shows problem-solving and product thinking."
            >
              <TimelineItem
                title="Crypto Place – Real-Time Cryptocurrency Tracker"
                right="React.js | Tailwind CSS | CoinGecko"
                desc="Built an interactive cryptocurrency tracker with real-time updates, powerful search, and historical trend visualizations."
                bullets={[
                  "Integrated CoinGecko API for live market data and historical insights",
                  "Built interactive charts for trend analysis and comparisons",
                  "Designed a clean, responsive interface optimized for web + mobile screens",
                ]}
              />

              <TimelineItem
                title="Tomato – Food Delivery Website"
                right="React.js | Tailwind CSS | Redux Toolkit | REST APIs"
                desc="Developed a full food delivery experience with listings, cart flows, and a smooth checkout journey."
                bullets={[
                  "Fetched restaurants + products dynamically using REST APIs",
                  "Implemented scalable global state for cart & checkout with Redux Toolkit",
                  "Optimized a mobile-first UI for speed and usability across devices",
                ]}
              />

              <TimelineItem
                title="Corto – Product & Flight Search, Deals App"
                right="React Native | Redux Toolkit | REST APIs"
                desc="Created a multi-functional mobile app combining product search, flight tracking, and real-time deal discovery."
                bullets={[
                  "Implemented robust data fetching from multiple endpoints for live content",
                  "Used Redux Toolkit for scalable, predictable global state management",
                  "Designed intuitive navigation across Product Search, Flight Tracker, and Deals screens",
                ]}
              />

              <div className="flex justify-center pt-2">
                <a
                  href="/Shahzad Resume.pdf"
                  download
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm sm:text-base lg:text-lg hover:bg-white/10 hover:border-white/25 transition"
                >
                  <Download size={18} /> Download Resume
                </a>
              </div>
            </Section>
          </div>

          <div className="h-10" />
        </div>
      </div>
    </main>
  );
}

/* ----------------------------- */
/* Components                    */
/* ----------------------------- */

function PillHeading({ title, Icon }: { title: string; Icon: LucideIcon }) {
  return (
    <div className="flex items-center justify-center lg:justify-start">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-4 py-2 backdrop-blur-md">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <Icon size={18} className="text-white/85" />
        </span>

        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Section({
  title,
  Icon,
  subtitle,
  children,
}: {
  title: string;
  Icon: LucideIcon;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_80px_rgba(0,0,0,0.55)]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative">
        <PillHeading title={title} Icon={Icon} />

        {subtitle && (
          <p className="mt-4 text-center lg:text-left text-sm sm:text-base lg:text-lg text-neutral-300/75 leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

function MiniCard({
  title,
  subtitle,
  meta,
}: {
  title: string;
  subtitle: string;
  meta: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-5 sm:p-6 backdrop-blur-md hover:bg-black/35 transition">
      <p className="text-white font-semibold text-base sm:text-lg">{title}</p>
      <p className="mt-1 text-neutral-300/75 text-sm sm:text-base">{subtitle}</p>
      <p className="mt-3 text-neutral-400/70 text-sm sm:text-base">{meta}</p>
    </div>
  );
}

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-5 sm:p-6 backdrop-blur-md">
      <p className="text-white font-semibold text-base sm:text-lg lg:text-xl">
        {title}
      </p>
      <ul className="mt-4 space-y-3 text-neutral-200/80 text-sm sm:text-base lg:text-lg">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-2.5 h-2 w-2 rounded-full bg-primary/90 shrink-0" />
            <span className="leading-relaxed">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({
  title,
  right,
  desc,
  bullets,
}: {
  title: string;
  right: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-7 lg:p-8 mb-6 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-[linear-gradient(to_bottom,rgba(80,47,235,0.0),rgba(80,47,235,0.55),rgba(217,70,239,0.35),rgba(80,47,235,0.0))]" />

      {/* ✅ md row was tight -> switch to lg */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
        <p className="text-white font-semibold text-lg sm:text-xl xl:text-2xl">
          {title}
        </p>
        <p className="text-neutral-300/60 text-sm sm:text-base lg:text-lg">
          {right}
        </p>
      </div>

      <div className="mt-5 pl-5 sm:pl-6 border-l-2 border-primary/25">
        <p className="text-neutral-200/80 leading-relaxed text-sm sm:text-base lg:text-lg">
          {desc}
        </p>

        <ul className="mt-5 space-y-3 text-neutral-200/80 text-sm sm:text-base lg:text-lg">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SocialPill({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/30 px-4 py-2.5 text-sm sm:text-base lg:text-lg text-white/90 hover:bg-black/45 hover:border-white/20 transition backdrop-blur-md"
    >
      <Icon size={18} className="opacity-90" />
      {label}
    </a>
  );
}
