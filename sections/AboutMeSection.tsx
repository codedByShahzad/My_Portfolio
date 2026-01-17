import React from "react";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";
import ArrowSwapButton from "@/components/ui/ArrowButton";
import profile from "../public/images/Profile Image.png"; // Make sure the file path is correct
import { CometCard } from "@/components/ui/comet-card";
// import { Boxes } from "@/components/ui/background-boxes"; // Import Boxes component
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const AboutMeSection = () => {
  return (
    <section className="w-full px-2 lg:px-10 xl:px-20 py-16 text-white relative">
      {/* Apply Boxes here, to only this section */}
      {/* <Boxes /> */}
      <div className="mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div className="md:w-1/2">
            {/* <div className="flex gap-2 mt-5">
              Badge
              <HoverBorderGradient
                containerClassName="rounded-full "
                className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
              >
                <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
                  Know about me
                </p>
              </HoverBorderGradient>
            </div> */}
            <div className="flex gap-2 mt-5">
              {/* Badge */}
              <HoverBorderGradient
                containerClassName="rounded-full "
                className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
              >
                <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
                  Know about me
                </p>
              </HoverBorderGradient>
            </div>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.15] md:text-5xl">
              Full-Stack Developer and <br />a little bit of{" "}
              <span className="bg-linear-to-r from-primary via-indigo-500 to-pink-500 bg-clip-text font-semibold italic text-transparent">
                everything
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 text-white/60 leading-7">
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
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="text-white/60 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-white/60 transition hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="text-white/60 transition hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            <div className="mt-10">
              <ArrowSwapButton
                label="Work Experience"
                href="/projects"
                className="bg-primary text-white"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 flex items-center rotate-5 justify-center">
            <CometCard>
              <div className="relative">
                {/* soft glow */}
                <div className="absolute -inset-10 rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.25),transparent_55%)] blur-2xl" />

                {/* outer frame */}
                <div className="relative rounded-[6px] bg-linear-to-br from-indigo-500/60 via-blue-500/30 to-white/10 p-[3px] shadow-[0_20px_80px_rgba(0,0,0,0.75)]">
                  {/* icon body */}
                  <div className="relative h-[400px] w-[400px] rounded-[6px] bg-linear-to-br from-[#0b1020] via-[#070a12] to-[#02030a] overflow-hidden">
                    {/* grid overlay */}
                    <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-size-[44px_44px]" />
                    {/* subtle vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(0,0,0,0.8)_78%)]" />

                    {/* content */}
                    <div className="relative h-full w-full flex items-center justify-center">
                      {/* Use explicit width and height for the profile image */}
                      <div className="relative w-[400px] h-[400px]">
                        <Image
                          src={profile}
                          alt="Profile Image"
                          layout="fill" // using layout "fill" for responsive sizing
                          className="object-cover "
                          priority
                        />
                      </div>
                    </div>

                    {/* inner rim highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[33px] ring-1 ring-white/10" />
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
