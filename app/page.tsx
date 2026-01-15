import HeroSection from "@/sections/HeroSection"
import AboutMeSection from "@/sections/AboutMeSection";
import TestmonialSection from "@/sections/TestmonialSection";
import Services from "@/sections/Services";
import SkillsSection from "@/sections/SkillSection";
import InfiniteRibbonMarquee from "@/components/InfiniteRibbonMarquee";
import ProjectsSection from "../sections/ProjectSection";

const HomePage = () => {
  return (
    
    <div className='mt-2 sm:mt-10 '>

      <HeroSection />
    <ProjectsSection limit={3} showCTA />

    <SkillsSection />
    <AboutMeSection />


<InfiniteRibbonMarquee  />


    <Services />

    <TestmonialSection />

    </div>
  )
}

export default HomePage