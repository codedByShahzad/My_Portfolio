"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.9)_65%,#000_100%)]" />
        <div className="absolute -left-40 top-1/4 h-[520px] w-[760px] rotate-12 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[520px] w-[760px] -rotate-12 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* ===== Headings ===== */}
        <h1 className="text-3xl font-light sm:text-5xl">
          FROM CONCEPT TO <span className="font-semibold">CREATION</span>
        </h1>
        <h2 className="mt-3 text-3xl font-light sm:text-5xl">
          LET&apos;S MAKE IT <span className="font-semibold">HAPPEN</span>
        </h2>

        {/* ===== CTA + BADGE ===== */}
        <div className="mt-14 flex flex-col items-center justify-center gap-10 sm:flex-row">
          {/* CTA Button */}
          <button className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-7 py-3 text-sm font-medium ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
            Get In Touch
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>

          {/* ===== PERFECT CIRCULAR BADGE ===== */}
          <div className="relative h-28 w-28">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full ring-2 ring-blue-500" />
            <div className="absolute inset-3 rounded-full bg-black/70 ring-1 ring-white/10" />

            {/* SVG Circular Text */}
            <svg
              viewBox="0 0 120 120"
              className="absolute inset-0 animate-spin-slow"
            >
              <defs>
                <path
                  id="textCircle"
                  d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                />
              </defs>

              <text
                fill="white"
                fontSize="8"
                className="uppercase opacity-85"
                textLength={275}   // 👈 forces even spacing
              >
                <textPath
                  href="#textCircle"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  OPEN TO WORK • OPEN TO WORK • OPEN TO WORK •
                </textPath>
              </text>
            </svg>

            {/* Center Icon */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                ✦
              </div>
            </div>
          </div>
        </div>

        {/* ===== Subtext ===== */}
        <p className="mt-12 text-lg font-semibold">
          I&apos;m available for full-time roles & freelance projects.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/55 sm:text-base">
          I build scalable, high-performance web applications with clean,
          modern user experiences.
        </p>
      </div>

      {/* ================= ANIMATION ================= */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 16s linear infinite;
          transform-origin: center;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
