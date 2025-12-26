"use client";

import React from "react";
import Marquee from "react-fast-marquee";

type MarqueeProps = {
  words?: string[];
  speed?: number; // larger = faster (library standard)
};

const DEFAULT_WORDS = [
  "ENGAGING",
  "ACCESSIBLE",
  "RESPONSIVE",
  "DYNAMIC",
  "SCALABLE",
  "SEARCH OPTIMIZED",
  "INTERACTIVE",
  "SECURE",
  "RELIABLE",
];

export default function InfiniteRibbonMarquee({
  words = DEFAULT_WORDS,
  speed = 90,
}: MarqueeProps) {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20">
      {/* Background wave */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[100px] w-[120%] rotate-3 bg-gradient-to-r from-[#1f0b3a] via-[#3c0e69] to-[#5608aa] opacity-90 blur-[1px]" />
      </div>

      {/* Ribbon */}
      <div className="relative mx-auto w-[115%] -rotate-3">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary to-purple-800   shadow-[0_12px_45px_rgba(0,0,0,0.45)]">
          {/* Gloss highlight */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent" />

          {/* Marquee */}
          <Marquee
            speed={speed}
            gradient={false}
            pauseOnHover
            className="py-7"
          >
            {words.map((word, index) => (
              <span
                key={index}
                className="mx-8 text-base font-semibold uppercase tracking-[0.35em] text-white md:text-lg"
              >
                {word}
                <span className="ml-8 opacity-90">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
