"use client";

import Image from "next/image";
import ArrowSwapButton from "@/components/ui/ArrowButton";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import p1 from "../public/images/projectLaptop.png";
import p2 from "../public/images/projectMobile.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-2 overflow-hidden">
      {/* Centered layout */}
      <div className="relative flex flex-col items-center text-center">
        {/* Badge */}
        <HoverBorderGradient
          containerClassName="rounded-full inline-flex"
          className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
        >
          <span className="px-4 py-2 text-sm md:text-base font-semibold">
            Hi there, I am Shahzad
          </span>
        </HoverBorderGradient>

        {/* Title + subtitle */}
        <div className="mt-6 space-y-4 max-w-3xl">
          <p className="text-sm md:text-base text-white/70">
            Full Stack Web Developer
          </p>
          <div className="text-center flex justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white text-center break-words">
  I help founders turn ideas
  <br className="hidden lg:block" />

  {/* allow wrap on small screens, keep in 1 line only on lg+ */}
  <span className="inline-block lg:whitespace-nowrap">
    {" "}into{" "}
    <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
      seamless digital <br className="md:hidden" /> experiences
    </span>
  </span>
</h1>

          </div>

          <p className="text-white/70 max-w-2xl mx-auto">
            Fast, modern websites & apps with clean UI, scalable code, and
            smooth animations — built for real users and real business goals.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
          <ArrowSwapButton
            label="Lets Connect"
            href="/projects"
            className="bg-primary text-white"
          />

          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            View Work
          </a>
        </div>

        {/* Devices BELOW text */}
        <div className="relative mt-14 w-full max-w-5xl flex items-end justify-center">
          {/* Laptop */}
          <div className="relative rounded-xl md:rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-1 md:p-2 shadow-2xl">
            <div className="relative aspect-16/10  w-[320px] sm:w-[520px] md:w-[700px] xl:w-[800px]  overflow-hidden rounded-lg md:rounded-2xl border border-white/10 bg-black">
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
          <div className="relative -ml-10 sm:-ml-16 mb-2 w-[10px] sm:w-[180px] hidden md:block">
            <div className="rounded-xl md:rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5  p-0.5 md:p-1 shadow-2xl">
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

          {/* floating pills (same size, just premium effects + dot) */}
          <div className="pill-float pill-1 absolute -top-7 right-6 hidden md:block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/85 backdrop-blur-md">
            <span className="inline-flex items-center gap-2">
              <span className="pill-dot pill-dot--green" />
              Clean UI • Smooth Animations
            </span>
          </div>

          <div className="pill-float pill-2 absolute bottom-8 left-6 hidden md:block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/85 backdrop-blur-md">
            <span className="inline-flex items-center gap-2">
              <span className="pill-dot pill-dot--red" />
              Responsive • Production Ready
            </span>
          </div>
        </div>

        {/* Stats at bottom (optional) */}
        <div className="mt-10 grid grid-cols-3 gap-3 w-full max-w-md">
          {[
            { label: "Projects", value: "20+" },
            { label: "Stack", value: "Next / Node" },
            { label: "Focus", value: "UI + Perf" },
          ].map((x) => (
            <div
              key={x.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-3"
            >
              <p className="text-white font-semibold">{x.value}</p>
              <p className="text-xs text-white/60">{x.label}</p>
            </div>
          ))}
        </div>

        {/* anchor */}
        <div id="work" className="h-12" />
      </div>
    </section>
  );
}
