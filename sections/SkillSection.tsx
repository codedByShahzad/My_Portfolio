"use client";

import Image from "next/image";
import { skills } from "../data/skillsData";

const SkillsSection = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
          My Skills
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-white">
          The Secret <span className="text-fuchsia-500 italic">Sauce</span>
        </h2>
      </div>

      {/* Skills Cloud */}
      <div className="relative z-10 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                relative
                h-14 w-14
                md:h-16 md:w-16
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
              "
              style={{
                transform: `translateY(${Math.sin(index) * 10}px)`,
              }}
            >
              <Image
                src={skill}
                alt="Skill"
                className="h-7 w-7 md:h-8 md:w-8 object-contain opacity-80 group-hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black pointer-events-none" />
    </section>
  );
};

export default SkillsSection;
