"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import client from "../public/images/Profile Image.png";

const testimonials = [
  {
    name: "Robert Johnson",
    role: "Founder - CEO Soldevix Solutions",
    image: client,
    message:
      "Working with this team was a fantastic experience. Clean code, great communication, and timely delivery. Highly recommended!",
  },
  {
    name: "Aayush Bharti",
    role: "Full Stack Developer",
    image: client,
    message:
      "Professional, detail-oriented, and always focused on performance. The results exceeded expectations.",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    image: client,
    message:
      "They transformed our vision into a stunning product. Smooth UI, solid backend, and excellent support.",
  },
  {
    name: "Michael Brown",
    role: "CTO - TechNova",
    image: client,
    message:
      "Highly skilled developers with attention to detail. Communication was smooth and delivery on point.",
  },
  {
    name: "Jessica Lee",
    role: "Designer - Creatix Studio",
    image: client,
    message:
      "Amazing collaboration! Their work on UI/UX was top-notch and perfectly aligned with our vision.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative py-24 px-6 bg-black/20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_45%)]" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300">
          ⭐⭐⭐⭐⭐ Trusted by Clients
        </p>
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
          What Our Clients Say
        </h2>
      </div>

      <div className="mt-14 max-w-6xl mx-auto relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={true} // Enables arrows
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
              <div className="h-[350px] flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg transition hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]">
                <p className="text-gray-300 text-base leading-relaxed mb-6 overflow-hidden line-clamp-6">
                  “{item.message}”
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.role}</p>
                  </div>
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
