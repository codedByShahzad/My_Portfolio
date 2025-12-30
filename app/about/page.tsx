import AboutMeSection from "@/sections/AboutMeSection";
import IndustriesSection from "@/sections/IndustriesSection";
import SkillSection from "@/sections/SkillSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="-mt-20">
        <AboutMeSection />
      </div>
      <div className="-mt-20">
        <SkillSection />
      </div>
      <IndustriesSection />
    </>
  );
};

export default page;
