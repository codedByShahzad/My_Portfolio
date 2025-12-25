import HeroSection from "@/sections/HeroSection"
import GradientShell from '../components/GradientShell';
import ProjectSection from '../sections/ProjectSection';
import AboutMeSection from "@/sections/AboutMeSection";
import TestmonialSection from "@/sections/TestmonialSection";
import Services from "@/sections/Services";
import SkillsSection from "@/sections/SkillSection";

const HomePage = () => {
  return (
    <div className='mt-2 sm:mt-10 '>
      <HeroSection />
    {/* <ProjectSection  /> */}
    <ProjectSection limit={3} showSeeAllButton />

    <AboutMeSection />

    <SkillsSection />

    <Services />

    <TestmonialSection />

    </div>
  )
}

export default HomePage