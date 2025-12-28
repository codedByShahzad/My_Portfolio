
import IndustriesSection from '@/sections/IndustriesSection'
import ProjectsSection from '@/sections/ProjectSection'

const page = () => {
  return (
    <div>
      
      <ProjectsSection showCTA={false} />


      <IndustriesSection />
    </div>
  )
}

export default page