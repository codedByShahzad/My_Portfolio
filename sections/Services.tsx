import ServicesCarousel from '@/components/ServicesCarousel'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import React from 'react'

const Services = () => {
  return (
    <div className='px-2 lg:px-10 xl:px-20 py-16'>
         <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
                >
                  <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">Want to Work With Us</p>
                </HoverBorderGradient>
        <ServicesCarousel />
    </div>
  )
}

export default Services