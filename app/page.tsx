import HeroSection from "@/sections/HeroSection"
import GradientShell from '../components/GradientShell';
import ProjectSection from '../sections/ProjectSection';
import AboutMeSection from "@/sections/AboutMeSection";
import TestmonialSection from "@/sections/TestmonialSection";

const HomePage = () => {
  return (
    <div className='mt-2 sm:mt-10 '>
      <HeroSection />
    {/* <ProjectSection  /> */}
    <ProjectSection limit={3} showSeeAllButton />

    <AboutMeSection />

    <TestmonialSection />

    </div>
  )
}

export default HomePage