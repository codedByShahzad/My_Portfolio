"use client";

import React from "react";
import Link from "next/link";
import { industries } from "../data/projects";
import { GlareCard } from "@/components/ui/glare-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ArrowUpRight } from "lucide-react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const industryToProject: Record<string, string> = {
  HealthTech: "/projects/ha-wellness",
  "Sports & Fan Management": "/projects/nivy-studio",
  "E-commerce": "/projects/brainbox",
};

const getIndustryHref = (title: string) => industryToProject[title] || "/projects";

const IndustriesSection = () => {
  return (
    <section className="relative px-3 lg:px-10 xl:px-20 py-16 overflow-hidden bg-black">
      {/* BACKGROUND */}
      <StarsBackground className="absolute inset-0 z-0 pointer-events-none" />
      <ShootingStars className="absolute inset-0 z-10 pointer-events-none" />
      <div className="absolute -bottom-50 -left-120 h-[750px] w-[380px] md:w-[580px] xl:w-[980px] rounded-full bg-primary/10 blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-20">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Top label */}
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
          >
            <p className="px-1 text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
              INDUSTRY EXPERIENCE
            </p>
          </HoverBorderGradient>

          {/* Heading */}
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold font-serif leading-[1.15] text-white">
            Industries{" "}
            <span className="bg-linear-to-r from-primary via-fuchsia-500 to-pink-500 bg-clip-text font-semibold italic text-transparent">
              I’ve Worked
            </span>{" "}
            In
          </h2>

          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/60 leading-relaxed">
            Hands-on experience across multiple industries — building
            production-ready products with strong UX, scalable architecture, and
            performance at the core.
          </p>
        </div>

        {/* Cards */}
        <div className="my-10 md:my-20">
          <div
            className="
              mx-auto w-full max-w-6xl
              grid gap-6 sm:gap-8
              grid-cols-1 md:grid-cols-2 lg:grid-cols-3
              items-stretch justify-items-stretch
            "
          >
            {industries.map((item, index) => {
              const Icon = item.icon;
              const href = getIndustryHref(item.title);

              return (
                <Link
                  key={index}
                  href={href}
                  className="block w-full h-full cursor-pointer"
                  aria-label={`Open ${item.title} project`}
                >
                  <GlareCard
                    className="
                      group w-full h-full
                      relative overflow-hidden
                      flex flex-col items-center text-center
                      px-6 sm:px-8
                      py-8 sm:py-10
                      min-h-[340px] sm:min-h-[420px]
                      border border-white/10
                      bg-linear-to-b from-[#12062f] via-[#090b22] to-[#040711]
                      transition
                      hover:border-white/20
                      rounded-xl md:rounded-2xl
                      cursor-pointer
                      hover:-translate-y-1 hover:scale-[1.01]
                      active:scale-[0.99]
                    "
                  >
                    {/* top accent line */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-80" />

                    {/* subtle grid texture inside card */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.18]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "44px 44px",
                        maskImage:
                          "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,0.2))",
                        WebkitMaskImage:
                          "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,0.2))",
                      }}
                    />

                    {/* hover aura */}
                    <div className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -bottom-24 right-6 h-52 w-52 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* THEME DOT */}
                    <span className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(168,85,247,0.65)]" />

                    {/* ICON */}
                    <div className="relative mb-5 sm:mb-6">
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-primary/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shadow-[0_0_55px_rgba(168,85,247,0.18)] transition-transform duration-300 group-hover:-translate-y-0.5">
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg sm:text-xl font-semibold text-white min-h-12 sm:min-h-14 flex items-center justify-center">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-[92%] line-clamp-4 min-h-20 sm:min-h-24">
                      {item.desc}
                    </p>

                    {/* divider */}
                    <div className="mt-6 sm:mt-8 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                    {/* CTA */}
                    <div className="mt-auto pt-5 sm:pt-6">
                      <span
                        className="
                          inline-flex items-center gap-2 rounded-full
                          border border-white/10 bg-white/5
                          px-4 sm:px-5 py-2 text-[11px] sm:text-xs text-white/75 backdrop-blur
                          transition
                          group-hover:border-white/20 group-hover:bg-white/10
                        "
                      >
                        Explore
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    {/* corner highlight */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </GlareCard>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
