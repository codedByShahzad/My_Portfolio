import HeroSection from "@/sections/HeroSection"
import GradientShell from '../components/GradientShell';
import ProjectSection from '../sections/ProjectSection';

const HomePage = () => {
  return (
    <div className='mt-2 sm:mt-10 '>
      {/* <GradientShell> */}
      <HeroSection />
    {/* </GradientShell> */}
    {/* <ProjectSection  /> */}
    <ProjectSection limit={3} showSeeAllButton />

    </div>
  )
}

export default HomePage