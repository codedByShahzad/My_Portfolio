"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import client from "../public/images/Profile Image.png";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const testimonials = [
  {
    name: "Robert Johnson",
    role: "Founder - CEO Soldevix Solutions",
    image: client,
    message:
      "Working with this team was a fantastic experience. Clean code, great communication, and timely delivery. Highly recommended!",
    stars: 5,
  },
  {
    name: "Aayush Bharti",
    role: "Full Stack Developer",
    image: client,
    message:
      "Professional, detail-oriented, and always focused on performance. The results exceeded expectations.",
    stars: 5,
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    image: client,
    message:
      "They transformed our vision into a stunning product. Smooth UI, solid backend, and excellent support.",
    stars: 5,
  },
  {
    name: "Michael Brown",
    role: "CTO - TechNova",
    image: client,
    message:
      "Highly skilled developers with attention to detail. Communication was smooth and delivery on point.",
    stars: 5,
  },
  {
    name: "Jessica Lee",
    role: "Designer - Creatix Studio",
    image: client,
    message:
      "Amazing collaboration! Their work on UI/UX was top-notch and perfectly aligned with our vision.",
    stars: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative py-24 px-6 bg-black/20 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto flex flex-col justify-center items-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
        >
          <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">TESTIMONIALS</p>
        </HoverBorderGradient>

        <h2 className="mt-4 text-4xl font-semibold leading-[1.15] md:text-5xl">
          Word on the street 
          {" "}
          <span className="bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 bg-clip-text font-semibold italic text-transparent">
                about me
              </span>
        </h2>
      </div>

      {/* Slider */}
      <div className="mt-14 mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group flex flex-col justify-between h-[300px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg transition hover:border-primary/50">
                
              
                {/* Footer */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="object-cover rounded-full"
                      width={60}
                      height={60}
                    />
                    <div>
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(item.stars)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.27l6.18 3.73-1.64-7.03L18 6.24l-7.19-.61L10 0 8.19 5.63 1 6.24l4.46 5.73-1.64 7.03L10 15.27z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>

                  {/* Quote Icon + Message */}
                <div className=" mb-6">
                  <p className=" text-gray-400 text-lg text-center leading-relaxed overflow-hidden line-clamp-6">
                    {item.message}
                  </p>
                </div>


              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TestimonialSection;
