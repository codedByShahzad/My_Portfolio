"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArrowSwapButton from "@/components/ui/ArrowButton";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import p1 from "../public/images/projectLaptop.png";
import p2 from "../public/images/projectMobile.png";

export default function HeroSection() {
  // ✅ Fix hydration mismatch by rendering the badge only after client mounts
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen px-3 lg:px-10 xl:px-20 overflow-hidden">
      {/* Centered layout */}
      <div className="relative flex flex-col items-center text-center">
        <div className="flex justify-center items-center gap-2 mt-5">
          {/* Badge */}
          {mounted ? (
            <HoverBorderGradient
              containerClassName="rounded-full "
              className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
            >
              <div className="flex justify-center items-center gap-2">
                <span className="text-sm md:text-base font-semibold">
                  <span className="hidden md:inline-block">Hi there,</span> I am
                  Shahzad
                </span>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-linear-to-r from-primary to-purple-600 rounded-full" />
                <span className="text-xs md:text-base font-semibold">
                  Full Stack Developer
                </span>
              </div>
            </HoverBorderGradient>
          ) : (
            // Placeholder to keep layout stable before mount (prevents flicker)
            <div className="h-11 md:h-12" aria-hidden="true" />
          )}
        </div>

        {/* Title + subtitle */}
        <div className="mt-8 md:max-w-6xl space-y-4">
          <h1 className="text-balance text-4xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
            Helping founders turn ideas{" "}
            <br className="hidden lg:block" />
            <span className="inline md:block">
              into{" "}
              <span className="bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                seamless digital experiences
              </span>
            </span>
          </h1>

          <p className="mx-auto max-w-2xl mt-10 md:text-lg text-white/70">
            Fast, modern websites and apps with clean UI, scalable code, and
            smooth animations built for real users and real business impact.
          </p>
        </div>

        {/* Devices BELOW text (but on mobile it comes BEFORE buttons) */}
        <div className="relative mt-0 md:mt-14 w-full max-w-5xl flex items-end justify-center order-2 sm:order-3">
          {/* Laptop */}
          <div className="relative rounded-xl md:rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-1 md:p-2 shadow-2xl">
            <div className="relative aspect-16/10 w-[320px] sm:w-[520px] md:w-[700px] xl:w-[800px] overflow-hidden rounded-lg md:rounded-2xl border border-white/10 bg-black">
              <Image
                src={p1}
                alt="Project desktop preview"
                fill
                className="object-fit"
                priority
              />
            </div>

            {/* base */}
            <div className="mt-4 h-3 w-full rounded-full bg-white/10" />
          </div>

          {/* Phone overlay */}
          <div className="relative -ml-10 sm:-ml-16 mb-2 w-2.5 sm:w-[180px] hidden lg:block">
            <div className="rounded-xl md:rounded-3xl border border-white/15 bg-linear-to-b from-white/10 to-white/5 p-0.5 md:p-1 shadow-2xl">
              <div className="relative aspect-12/22 w-full overflow-hidden rounded-lg md:rounded-2xl border border-white/10 bg-black">
                <Image
                  src={p2}
                  alt="Project mobile preview"
                  fill
                  className="object-fit"
                  priority
                />
              </div>
            </div>
          </div>

          {/* floating pills */}
          <div className="pill-float pill-1 absolute top-15 right-6 hidden md:block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/85 backdrop-blur-md">
            <span className="inline-flex items-center gap-2">
              <span className="pill-dot pill-dot--green" />
              Pixel Perfect UI • Smooth UX
            </span>
          </div>

          <div className="pill-float pill-2 absolute bottom-8 left-6 hidden md:block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/85 backdrop-blur-md">
            <span className="inline-flex items-center gap-2">
              <span className="pill-dot pill-dot--red" />
              Scalable Code • Real Products
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 md:mt-0 flex flex-col sm:flex-row gap-3 sm:items-center order-3 sm:order-2">
          <ArrowSwapButton
            label="Lets Connect"
            href="/projects"
            className="bg-primary text-white"
          />

          {/* Hide View Work ONLY on mobile */}
          <a
            href="#work"
            className="hidden sm:inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            View Work
          </a>
        </div>

        {/* anchor */}
        <div id="work" className="h-12" />
      </div>
    </section>
  );
}
