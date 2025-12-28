"use client";

import { motion } from "framer-motion";
import ArrowSwapButton from "@/components/ui/ArrowButton";
import logo from "../public/images/SS.png"
import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars-background";

export default function CTASection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black text-white">
<StarsBackground />
      {/* ================= CUSTOM BACKGROUND ================= */}
      <div className="absolute inset-0">
        {/* Custom Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
        />
        <div className="absolute top-0 -left-52 h-[350px] w-[380px] md:w-[580px] xl:w-[980px] rounded-full bg-primary/15 blur-3xl" />


        {/* Accent Blobs */}
        <div className="absolute -left-40 top-1/4 h-[520px] w-[760px] rotate-12 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[520px] w-[760px] -rotate-12 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">

        {/* ================= LOGO ================= */}
        <div className="mb-10 flex justify-center">
          <div className="flex p-1 items-center justify-center rounded-full bg-white/5 ring-1 ring-primary ">
            <div className="bg-primary py-2 px-3 rounded-full">
            <Image src={logo} alt="Logo" width={30} height={30} />
          </div>
          </div>
        </div>

        {/* ================= HEADING ================= */}
        <div className="relative inline-block">
          <h1 className="text-2xl font-semibold sm:text-4xl md:text-5xl">
            FROM CONCEPT TO <span className="font-semibold bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">CREATION</span>
          </h1>
          <h2 className="mt-3 text-2xl font-semibold sm:text-4xl md:text-5xl">
            LET&apos;S MAKE IT <span className="font-semibold bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">HAPPEN</span>
          </h2>

          {/* ================= ROTATING BADGE (Desktop only) ================= */}
          <div className="absolute right-[-35px]  hidden -translate-y-1/2 lg:block">
            <div className="relative h-28 w-28">

              <div className="absolute inset-0 rounded-full ring-2 ring-primary" />
              <div className="absolute inset-3 rounded-full bg-black/70 ring-1 ring-white/10" />

              <motion.svg
                viewBox="0 0 120 120"
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                  />
                </defs>

                <text
                  fill="white"
                  fontSize="8"
                  className="uppercase opacity-80"
                  textLength={275}
                >
                  <textPath
                    href="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    OPEN TO WORK • OPEN TO WORK • OPEN TO WORK •
                  </textPath>
                </text>
              </motion.svg>

              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                  ✦
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 flex justify-center">
          <ArrowSwapButton
            label="Let’s Connect"
            href="/projects"
            className="bg-primary text-white"
          />
        </div>

        {/* ================= SUBTEXT ================= */}
        <p className="mt-12 text-base font-semibold sm:text-lg">
          I&apos;m available for full-time roles & freelance projects.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 sm:text-base">
          I build scalable, high-performance web applications with clean,
          modern user experiences.
        </p>
      </div>

        <div className="absolute bottom-0 -right-120 h-[350px] w-[380px] md:w-[580px] xl:w-[980px] rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
}
