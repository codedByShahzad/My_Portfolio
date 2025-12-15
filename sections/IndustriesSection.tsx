"use client";

import React from "react";
import { industries } from "../data/projects";
import { GlareCard } from "@/components/ui/glare-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const IndustriesSection = () => {
  return (
    <section className="relative x-2 lg:px-10 xl:px-20 py-16 overflow-hidden">
      {/* BACKGROUND LAYERS (behind everything) */}
      <StarsBackground className="absolute inset-0 z-0 pointer-events-none" />
      <ShootingStars className="absolute inset-0 z-10 pointer-events-none" />

      
      {/* CONTENT */}
      <div className="relative z-20">
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <p className="text-white/60 text-sm">Know About</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Industries I Have Worked In
          </h2>
        </div>

        {/* Cards */}
        <div className="my-10 md:my-20 flex justify-center">
          <div className="w-full max-w-6xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <GlareCard
                  key={index}
                  className="
                    w-full max-w-[420px]
                    relative flex flex-col items-center text-center
                    px-8 py-10 min-h-80
                    bg-linear-to-b from-[#13064c] to-[#040711]
                    hover:border-white/20
                  "
                >
                  {/* THEME DOT */}
                  <span className="absolute top-5 right-5 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(168,85,247,0.65)]" />

                  {/* ICON */}
                  <div className="mb-6 h-20 w-20 rounded-3xl flex items-center justify-center bg-white/5 border border-white/10 shadow-[0_0_55px_rgba(168,85,247,0.18)]">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-[92%]">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto pt-8">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs text-white/75 backdrop-blur">
                      Explore
                    </span>
                  </div>
                </GlareCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
