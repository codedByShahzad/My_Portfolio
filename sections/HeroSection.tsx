"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArrowSwapButton from "@/components/ui/ArrowButton";
import p1 from "../public/images/projectLaptop.png";
import p2 from "../public/images/projectMobile.png";
import profile from "../public/images/profile2.png";
import Link from "next/link";

import { BorderBeam } from "@/components/ui/border-beam";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[90vh] px-3 lg:px-10 xl:px-20 overflow-hidden">
      <div className="relative flex flex-col items-center text-center">
<Link
  href="/about"
  className="flex justify-center items-center mt-5 z-50 px-4 sm:px-6 md:px-0"
>
  {mounted ? (
    <div className="relative rounded-full overflow-visible w-full max-w-[760px]">
      {/* Pill container */}
      <div
        className="
          relative w-full rounded-full overflow-visible
          border border-white/10 bg-white/5 text-white backdrop-blur-xl
          shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.55)]
          px-3 sm:px-5
          py-2 sm:py-2.5 
        "
      >
        {/* Beams layer */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <BorderBeam
            duration={6}
            size={520}
            className="from-transparent via-purple-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={520}
            borderWidth={2}
            className="from-transparent via-primary to-transparent"
          />
        </div>

        {/* ✅ Content (same layout on all sizes) */}
        <div className="relative w-full grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left */}
          <div className="text-right pr-2 sm:pr-4 md:pr-6">
            <span className="block whitespace-nowrap font-semibold text-white/90 text-[11px] xs:text-xs sm:text-sm md:text-base">
              Hi <span className="inline-block">there,</span> {" "} I&apos;m Shahzad
            </span>
          </div>

          {/* Center spacer — EXACTLY avatar width */}
          <div className="w-11 sm:w-14 md:w-20" />

          {/* Right */}
          <div className="text-left pl-2 sm:pl-4 md:pl-6">
            <span className="block whitespace-nowrap font-semibold text-white/90 text-[11px] xs:text-xs sm:text-sm md:text-base">
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* Avatar (responsive) */}
        <div className="absolute left-1/2 top-1/2 z-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="h-11 w-11 sm:h-18 sm:w-18  rounded-full bg-linear-to-r from-primary to-purple-600 p-0.5 shadow-[0_0_0_8px_rgba(124,58,237,0.16)] md:shadow-[0_0_0_10px_rgba(124,58,237,0.18)]">
            <div className="relative h-full w-full rounded-full bg-black overflow-hidden">
              <Image
                src={profile}
                alt="Shahzad"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-11 md:h-12" aria-hidden="true" />
  )}
</Link>



        {/* Title + subtitle */}
        <div className="mt-8 md:mt-12 md:max-w-6xl space-y-4">
          <h1 className="text-balance text-4xl font-semibold font-serif text-white md:text-4xl lg:text-5xl leading-tight">
            Helping founders turn ideas <br className="hidden lg:block" />
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
            label="Let’s Connect"
            href="/contact"
            className="bg-primary text-white"
          />

          {/* Hide View Work ONLY on mobile */}
          <a
            href="/projects"
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
