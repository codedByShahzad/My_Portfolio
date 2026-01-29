import AboutMeSection from "@/sections/AboutMeSection";
import ExperienceSection from "@/sections/ExperienceSection";
import IndustriesSection from "@/sections/IndustriesSection";
import SkillSection from "@/sections/SkillSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mt-0">
        <AboutMeSection />
      </div>
      <ExperienceSection />
      <div className="mt-0">
        <SkillSection />
      </div>
      <IndustriesSection />
    </>
  );
};

export default page;
