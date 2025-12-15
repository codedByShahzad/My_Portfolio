import React from "react";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";
import ArrowSwapButton from "@/components/ui/ArrowButton";
import profile from "../public/images/Profile Image.png"; // Make sure the file path is correct
import { CometCard } from "@/components/ui/comet-card";
import { Boxes } from "@/components/ui/background-boxes"; // Import Boxes component

const AboutMeSection = () => {
  return (
    <section className="w-full px-2 lg:px-10 xl:px-20 py-16 text-white relative">
      {/* Apply Boxes here, to only this section */}
      {/* <Boxes /> */}
      <div className="mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div className="md:w-1/2">
            <p className="text-xs tracking-[0.25em] text-white/60">
              KNOW ABOUT ME
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.15] md:text-5xl">
              Full-Stack Developer and <br />
              a little bit of{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 bg-clip-text font-semibold italic text-transparent">
                everything
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 text-white/60 leading-7">
              <p>
                I'm Aayush Bharti, a proactive full-stack developer passionate
                about creating dynamic web experiences. From frontend to backend,
                I thrive on solving complex problems with clean, efficient code.
                My expertise spans React, Next.js, and Node.js, and I'm always
                eager to learn more.
              </p>

              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying
                curious. Life's about balance, and I love embracing every part of it.
              </p>

              <p className="text-white/70">
                I believe in waking up each day eager to make a difference!
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
                <div className="relative rounded-[6px] bg-gradient-to-br from-indigo-500/60 via-blue-500/30 to-white/10 p-[3px] shadow-[0_20px_80px_rgba(0,0,0,0.75)]">
                  {/* icon body */}
                  <div className="relative h-[400px] w-[400px] rounded-[6px] bg-gradient-to-br from-[#0b1020] via-[#070a12] to-[#02030a] overflow-hidden">
                    {/* grid overlay */}
                    <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />
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
