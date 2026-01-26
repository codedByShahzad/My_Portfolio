"use client";

import React from "react";
import Link from "next/link";
import { industries } from "../data/projects";
import { GlareCard } from "@/components/ui/glare-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ArrowUpRight } from "lucide-react";

const industryToProject: Record<string, string> = {
  HealthTech: "/projects/ha-wellness",
  "Sports & Fan Engagement": "/projects/nivy-studio",
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
        {/* Header (UNCHANGED) */}
        <div className="max-w-2xl space-y-2">
          <p className="text-white/60 text-sm">Know About</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Industries I Have Worked In
          </h2>
        </div>

        {/* Cards */}
        <div className="my-10 md:my-20">
          <div
            className="
              mx-auto w-full max-w-6xl
              grid gap-8
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
                      px-8 py-10
                      min-h-[420px]
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
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -bottom-28 right-10 h-60 w-60 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* THEME DOT */}
                    <span className="absolute top-5 right-5 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(168,85,247,0.65)]" />

                    {/* ICON */}
                    <div className="relative mb-6">
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-primary/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative h-20 w-20 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shadow-[0_0_55px_rgba(168,85,247,0.18)] transition-transform duration-300 group-hover:-translate-y-0.5">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>

                    {/* TITLE (✅ fixed height so wrapping doesn't shift layout) */}
                    <h3 className="text-xl font-semibold text-white min-h-14 flex items-center justify-center">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION (✅ consistent height / clamp) */}
                    <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-[92%] line-clamp-4 min-h-24">
                      {item.desc}
                    </p>

                    {/* divider */}
                    <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                    {/* CTA */}
                    <div className="mt-auto pt-6">
                      <span
                        className="
                          inline-flex items-center gap-2 rounded-full
                          border border-white/10 bg-white/5
                          px-5 py-2 text-xs text-white/75 backdrop-blur
                          transition
                          group-hover:border-white/20 group-hover:bg-white/10
                        "
                      >
                        Explore
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    {/* corner highlight */}
                    <div className="pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
