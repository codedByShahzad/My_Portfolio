"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project, TechKey } from "@/data/projects";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
import { SquareStack } from "lucide-react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ArrowSwapButton from "@/components/ui/ArrowButton";

/* =======================
   TECH ICON MAP
======================= */
const techIcons: Record<TechKey, React.ReactNode> = {
  next: <SiNextdotjs className="w-4 h-4" />,
  react: <SiReact className="w-4 h-4 text-cyan-400" />,
  ts: <SiTypescript className="w-4 h-4 text-blue-500" />,
  tailwind: <SiTailwindcss className="w-4 h-4 text-sky-400" />,
  framer: <SiFramer className="w-4 h-4 text-pink-400" />,
  motion: <TbArrowsShuffle className="w-4 h-4 text-fuchsia-400" />,
  shadcn: <SquareStack className="w-4 h-4 text-white/80" />,
  sanity: <SiSanity className="w-4 h-4 text-red-500" />,
};

/* =======================
   ANIMATION
======================= */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* =======================
   PROJECT CARD
======================= */
const ProjectCard = ({ project }: { project: Project }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative rounded-2xl border border-white/10 bg-white/4 backdrop-blur-md overflow-hidden"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="flex flex-col h-full p-5">
          <h3 className="text-xl font-semibold text-white mb-3">
            {project.title}
          </h3>

          <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
            <Image
              src={project.images.primary}
              alt={project.title}
              fill
              className="object-fit object-top transition-opacity duration-500 group-hover:opacity-0"
            />
            <Image
              src={project.images.hover}
              alt={`${project.title} hover`}
              fill
              className="object-fit object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          <p className="mt-4 text-sm text-white/60 leading-relaxed flex-1 whitespace-pre-line">
            {project.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 backdrop-blur-md"
              >
                {techIcons[tech]}
                <span className="text-[11px] uppercase tracking-wide">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        <span className="pointer-events-none absolute inset-x-4 bottom-3 h-px bg-linear-to-r from-transparent via-fuchsia-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </motion.article>
  );
};

/* =======================
   PROPS TYPE
======================= */
interface ProjectsSectionProps {
  limit?: number;          // how many projects to show
  showCTA?: boolean;       // show "All Projects" button or not
}

/* =======================
   PROJECTS SECTION
======================= */
const ProjectsSection = ({
  limit,
  showCTA = true,
}: ProjectsSectionProps) => {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  const left = visibleProjects.filter((_, i) => i % 2 === 0);
  const right = visibleProjects.filter((_, i) => i % 2 === 1);

  return (
    <section className="px-4 md:px-12 lg:px-20 xl:px-32 py-20 bg-[#020202]">
      {/* Header */}
      <div className="flex flex-col items-center mb-20 text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
        >
          Featured Case Studies
        </HoverBorderGradient>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
          Curated Work
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="flex flex-col gap-10">
          {left.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="flex flex-col gap-10 md:mt-24">
          {right.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* CTA */}
      {showCTA && (
        <div className="mt-24 flex justify-center">
          <ArrowSwapButton
            label="All Projects"
            href="/projects"
            className="bg-primary text-white"
          />
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
