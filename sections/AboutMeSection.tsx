import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

import ArrowSwapButton from "@/components/ui/ArrowButton";
import profile from "../public/images/profile2.png";
import { CometCard } from "@/components/ui/comet-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const AboutMeSection = () => {
const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shahzad-sohail",
      Icon: FaLinkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/codedByShahzad",
      Icon: FaGithub,
    },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01a95637283911ba95?mp_source=share",
      Icon: SiUpwork,
    },
    {
      label: "Fiverr",
      href: "https://www.fiverr.com/s/DBAz77Q",
      Icon: SiFiverr,
    },
  ];

  return (
    <section className="w-full px-2 lg:px-10 xl:px-20 py-14 md:py-16 text-white relative">
      <div className="mx-auto px-4 sm:px-6 py-10 md:py-14 relative z-10">
        {/* 
          Layout Rules:
          - sm/md: single column (image between heading and text)
          - lg+: two columns (TEXT LEFT, IMAGE RIGHT)
          ✅ lg/xl: make grid columns 2fr 1fr (text takes more space)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-12 items-start lg:items-center">
          {/* TEXT (LEFT on lg+) */}
          <div className="order-1">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mt-2">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
              >
                <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
                  Know about me
                </p>
              </HoverBorderGradient>
            </div>

            {/* Heading */}
            <h1 className="mt-4 text-center lg:text-left text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15]">
              Full-Stack Developer and <br className="hidden sm:block" />
              a little bit of{" "}
              <span className="bg-linear-to-r from-primary via-indigo-500 to-pink-500 bg-clip-text font-semibold italic text-transparent">
                everything
              </span>
            </h1>

            {/* IMAGE for sm/md ONLY (between heading and text) */}
            <div className="mt-8 lg:hidden">
              <div className="flex items-center justify-center">
                <CometCard>
                  <div className="relative">
                    {/* soft glow */}
                    <div className="absolute -inset-8 sm:-inset-10 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.25),transparent_55%)] blur-2xl" />

                    {/* outer frame */}
                    <div className="relative rounded-[6px] bg-linear-to-br from-indigo-500/60 via-blue-500/30 to-white/10 p-[3px] shadow-[0_18px_70px_rgba(0,0,0,0.75)]">
                      <div className="relative overflow-hidden rounded-[6px] bg-linear-to-br from-[#0b1020] via-[#070a12] to-[#02030a]">
                        {/* Responsive square */}
                        <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-80 md:w-[360px] md:h-[360px]">
                          {/* grid overlay */}
                          <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-size-[44px_44px]" />
                          {/* vignette */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(0,0,0,0.85)_78%)]" />

                          <Image
                            src={profile}
                            alt="Profile Image"
                            fill
                            className="object-cover"
                            priority
                          />

                          {/* inner rim */}
                          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CometCard>
              </div>
            </div>

            {/* Text */}
            <div className="mt-8 flex flex-col gap-7 text-white/60 leading-7 text-left max-w-3xl mx-auto lg:mx-0">
              <p>
                I’m Shahzad Sohail, a full-stack developer with hands-on
                experience building real-world web applications. I work across
                both frontend and backend, focusing on creating interfaces that
                are responsive, accessible, and performance-driven while
                ensuring the logic behind them is reliable and scalable.
              </p>

              <p>
                My experience includes working with React, Next.js, Node.js, and
                modern UI systems, where I’ve built complete projects ranging
                from landing pages to dynamic, data-driven applications. I focus
                on clean architecture, reusable components, and user-friendly
                design.
              </p>

              <p className="text-white/70">
                Outside of coding, I enjoy improving workflows, learning new
                technologies, and refining existing systems. I value
                consistency, curiosity, and problem-solving, and I bring that
                mindset to every project I work on.
              </p>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="
                    group relative inline-flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/10 bg-white/5 backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10
                    focus:outline-none
                  "
                >
                  {/* Glow blob */}
                  <span
                    className="
                      pointer-events-none absolute -inset-2 rounded-full
                      bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.55),transparent_60%)]
                      blur-md opacity-80
                      group-hover:opacity-100 group-hover:blur-lg
                      transition-all duration-300
                    "
                  />
                  {/* secondary pink glow */}
                  <span
                    className="
                      pointer-events-none absolute -inset-2 rounded-full
                      bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.35),transparent_65%)]
                      blur-md opacity-60
                      group-hover:opacity-90 group-hover:blur-lg
                      transition-all duration-300
                    "
                  />

                  <Icon
  className={`
    relative z-10 text-white/70 group-hover:text-white
    ${label === "Fiverr" ? "text-[32px]" : "text-[18px]"}
  `}
/>

                </a>
              ))}
            </div>

            {/* Button */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <ArrowSwapButton
                label="Work Experience"
                href="/projects"
                className="bg-primary text-white"
              />
            </div>
          </div>

          {/* IMAGE (RIGHT on lg+) */}
          <div className="hidden lg:flex order-2 items-end justify-end rotate-3 lg:rotate-5">
            <CometCard>
              <div className="relative">
                {/* soft glow */}
                <div className="absolute -inset-10 rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.25),transparent_55%)] blur-2xl" />

                {/* outer frame */}
                <div className="relative rounded-[6px] bg-linear-to-br from-indigo-500/60 via-blue-500/30 to-white/10 p-[3px] shadow-[0_20px_80px_rgba(0,0,0,0.75)]">
                  {/* body */}
                  <div className="relative overflow-hidden rounded-[6px] bg-linear-to-br from-[#0b1020] via-[#070a12] to-[#02030a]">
                    {/* ✅ kept exactly as you had */}
                    <div className="relative lg:w-[320px] lg:h-80 xl:w-[420px] xl:h-[420px]">
                      {/* grid overlay */}
                      <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-size-[44px_44px]" />
                      {/* vignette */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(0,0,0,0.85)_78%)]" />

                      <Image
                        src={profile}
                        alt="Profile Image"
                        fill
                        className="object-cover"
                        priority
                      />

                      {/* inner rim highlight */}
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </CometCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
