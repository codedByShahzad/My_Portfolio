
import IndustriesSection from '@/sections/IndustriesSection'
import ProjectsSection from '@/sections/ProjectSection'

const page = () => {
  return (
    <div>
      <div className='mt-[-30px]'>

      <ProjectsSection showCTA={false} />
      </div>


      <IndustriesSection />
    </div>
  )
}

export default page