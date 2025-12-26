import HeroSection from "@/sections/HeroSection"
import GradientShell from '../components/GradientShell';
import ProjectSection from '../sections/ProjectSection';
import AboutMeSection from "@/sections/AboutMeSection";
import TestmonialSection from "@/sections/TestmonialSection";
import Services from "@/sections/Services";
import SkillsSection from "@/sections/SkillSection";
import InfiniteRibbonMarquee from "@/components/InfiniteRibbonMarquee";

const HomePage = () => {
  return (
    <div className='mt-2 sm:mt-10 '>
      <HeroSection />
    {/* <ProjectSection  /> */}
    <ProjectSection limit={3} showSeeAllButton />

    <AboutMeSection />

    <SkillsSection />

<InfiniteRibbonMarquee  />


    <Services />

    <TestmonialSection />

    </div>
  )
}

export default HomePage