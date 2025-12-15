import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import IndustriesSection from '@/sections/IndustriesSection'
import ProjectSection from '@/sections/ProjectSection'
import React from 'react'

const page = () => {
  return (
    <div>
      
      <ProjectSection />

      <IndustriesSection />
    </div>
  )
}

export default page