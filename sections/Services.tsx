import React from "react";
import Image, { StaticImageData } from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import web from "../public/images/webdev.svg";
import app from "../public/images/mobile-app.png";
import shopify from "../public/images/shopify-svgrepo-com.svg";
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface Service {
  title: string;
  description: string;
  icon: StaticImageData;
}

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "High-performance, responsive web interfaces using React, Tailwind CSS, and modern UI patterns.",
    icon: web,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with React Native & Expo for smooth user experiences.",
    icon: app,
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, user-focused designs and prototypes created in Figma for better usability.",
    icon: shopify,
  },
  {
    title: "Backend Development",
    description:
      "Scalable and secure backend solutions using Python, APIs, and databases.",
    icon: web,
  },
  {
    title: "Website Deployment",
    description:
      "Deploying optimized websites with performance, SEO, and best practices.",
    icon: app,
  },
  {
    title: "Maintenance & Support",
    description:
      "Long-term support, bug fixes, performance improvements, and feature updates.",
    icon: shopify,
  },
];

const Services = () => {
  return (
    <section className="px-4 lg:px-10 xl:px-20 py-20">
      {/* Badge */}
      <div className="">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
        >
          <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
            Want to Work With Us
          </p>
        </HoverBorderGradient>
      </div>
      <h1 className="mt-4 text-4xl font-semibold font-serif leading-[1.15] md:text-5xl">
        Services
        <span className="bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 bg-clip-text italic text-transparent">
          We Provide
        </span>
      </h1>
      {/* Services Grid */}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-16">
        {services.map((service, index) => (
          <CardSpotlight
            key={index}
            className="h-full w-full rounded-2xl border border-white/10  p-7"
          >
            <div className="relative z-20">
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-white/10">
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
};

export default Services;
