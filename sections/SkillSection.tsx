"use client";

import React from "react";
import {
  Code2,
  Braces,
  Server,
  GitBranch,
  Boxes,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiWebflow,
  SiDocker,
  SiPostman,
  SiJest,
  SiVercel,
  SiVite,
  SiFigma,
  SiEslint,
  SiPrettier,
  SiGraphql,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  level?: string;
};

type SkillGroup = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const glow =
  "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-fuchsia-500/15 before:via-transparent before:to-cyan-500/15 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500";

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    subtitle: "UI, performance, and delightful UX",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="h-5 w-5" />, level: "Advanced" },
      { name: "CSS3", icon: <SiCss3 className="h-5 w-5" />, level: "Advanced" },
      { name: "JavaScript", icon: <SiJavascript className="h-5 w-5" />, level: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-5 w-5" />, level: "Advanced" },
      { name: "React / React Native", icon: <SiReact className="h-5 w-5" />, level: "Advanced" },
      { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5" />, level: "Advanced" },
      { name: "TypeScript", icon: <SiTypescript className="h-5 w-5" />, level: "Advanced" },
      { name: "Webflow", icon: <SiWebflow className="h-5 w-5" />, level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Databases",
    subtitle: "APIs, auth, and reliable storage",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="h-5 w-5" />, level: "Advanced" },
      { name: "Express", icon: <SiExpress className="h-5 w-5" />, level: "Advanced" },
      { name: "MongoDB", icon: <SiMongodb className="h-5 w-5" />, level: "Advanced" },
      { name: "SQL / PostgreSQL", icon: <SiPostgresql className="h-5 w-5" />, level: "Intermediate" },
      { name: "Auth / JWT", icon: <ShieldCheck className="h-5 w-5" />, level: "Intermediate" },
      { name: "REST APIs", icon: <GitBranch className="h-5 w-5" />, level: "Advanced" },
      { name: "GraphQL", icon: <SiGraphql className="h-5 w-5" />, level: "Intermediate" },
      { name: "Firebase", icon: <SiFirebase className="h-5 w-5" />, level: "Intermediate" },
      { name: "Vite", icon: <SiVite className="h-5 w-5" />, level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Utilities",
    subtitle: "Boost productivity and streamline workflow",
    icon: <Zap className="h-5 w-5" />,
    skills: [
      { name: "Git / GitHub", icon: <GitBranch className="h-5 w-5" />, level: "Advanced" },
      { name: "Docker", icon: <SiDocker className="h-5 w-5" />, level: "Intermediate" },
      { name: "CI/CD", icon: <Terminal className="h-5 w-5" />, level: "Intermediate" },
      { name: "ESLint", icon: <SiEslint className="h-5 w-5" />, level: "Intermediate" },
      { name: "Prettier", icon: <SiPrettier className="h-5 w-5" />, level: "Intermediate" },
      { name: "Testing / Jest", icon: <SiJest className="h-5 w-5" />, level: "Intermediate" },
      { name: "Figma / Design Tools", icon: <SiFigma className="h-5 w-5" />, level: "Intermediate" },
      { name: "VS Code", icon: <Code2 className="h-5 w-5" />, level: "Advanced" },
      { name: "Terminal", icon: <Terminal className="h-5 w-5" />, level: "Advanced" },
    ],
  },
  {
    title: "Platforms & Deployment",
    subtitle: "Hosting, cloud, and web platforms",
    icon: <Zap className="h-5 w-5" />,
    skills: [
      { name: "Vercel", icon: <SiVercel className="h-5 w-5" />, level: "Intermediate" },
      { name: "Firebase", icon: <SiFirebase className="h-5 w-5" />, level: "Intermediate" },
      { name: "Webflow", icon: <SiWebflow className="h-5 w-5" />, level: "Intermediate" },
      { name: "Cloud Deploy", icon: <Server className="h-5 w-5" />, level: "Intermediate" },
      { name: "Vite", icon: <SiVite className="h-5 w-5" />, level: "Intermediate" },
      { name: "Netlify", icon: <SiVercel className="h-5 w-5" />, level: "Intermediate" },
      { name: "CI/CD", icon: <Terminal className="h-5 w-5" />, level: "Intermediate" },
      { name: "GitHub Pages", icon: <GitBranch className="h-5 w-5" />, level: "Intermediate" },
      { name: "Docker Deploy", icon: <SiDocker className="h-5 w-5" />, level: "Intermediate" },
    ],
  },
];

const SkillSection = () => {
  return (
    <section className="relative w-full x-4 lg:px-10 xl:px-20 py-20">
      <div className="mx-auto">
        <div className="flex flex-col justify-center items-center">
          {/* Top label */}
          <div className="flex items-center ">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
            >
              <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
                My Skills
              </p>
            </HoverBorderGradient>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-semibold font-serif leading-[1.15] md:text-5xl text-white">
            The Secret <span className="text-fuchsia-500 italic">Sauce</span>
          </h2>

          <p className="mt-3 max-w-2xl text-white/60 text-center leading-relaxed">
            A modern stack for building fast, scalable web apps — from UI to APIs,
            databases, and essential developer tools.
          </p>
        </div>

        {/* Groups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md ${glow}`}
            >
              {/* Group header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      {group.icon}
                    </span>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/60">{group.subtitle}</p>
                </div>

                <motion.div
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                  className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/15 to-cyan-500/15 border border-white/10"
                >
                  <SparkleIcon />
                </motion.div>
              </div>

              {/* Skills grid */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10"
                        whileHover={{ rotate: 6 }}
                        transition={{ type: "spring", stiffness: 260, damping: 14 }}
                      >
                        {skill.icon}
                      </motion.div>

                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {skill.name}
                        </p>
                        <p className="text-[11px] text-white/50 truncate">
                          {skill.level ?? "—"}
                        </p>
                      </div>
                    </div>

                    {/* hover underline */}
                    <span className="pointer-events-none absolute inset-x-3 bottom-2 h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* subtle background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  );
};

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 text-white/70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l1.2 5.1L18 9l-4.8 1.9L12 16l-1.2-5.1L6 9l4.8-1.9L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 14l.7 3 2.3.9-2.3.9-.7 3-.7-3-2.3-.9 2.3-.9.7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SkillSection;
