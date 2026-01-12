"use client";

import React from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SiReact, SiFigma, SiShopify } from "react-icons/si";
import { Smartphone, Database, CloudLightning } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "High-performance, responsive web interfaces using React, Tailwind CSS, and modern UI patterns.",
    icon: <SiReact className="h-9 w-9 text-white" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with React Native & Expo for smooth user experiences.",
    icon: <Smartphone className="h-9 w-9 text-white" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, user-focused designs and prototypes created in Figma for better usability.",
    icon: <SiFigma className="h-9 w-9 text-white" />,
  },
  {
    title: "Backend Development",
    description:
      "Scalable and secure backend solutions using APIs and databases.",
    icon: <Database className="h-9 w-9 text-white" />,
  },
  {
    title: "Website Deployment",
    description:
      "Deploying optimized websites with performance, SEO, and best practices.",
    icon: <CloudLightning className="h-9 w-9 text-white" />,
  },
  {
    title: "E-commerce & Shopify",
    description:
      "Creating beautiful and functional online stores using Shopify.",
    icon: <SiShopify className="h-9 w-9 text-white" />,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Services = () => {
  return (
    <section className="px-4 lg:px-10 xl:px-20 py-20">
      {/* Badge */}
      <div className="flex   gap-2 mt-5">
        {/* Badge */}
        <HoverBorderGradient
          containerClassName="rounded-full "
          className="bg-background/60 text-white border border-white/10 backdrop-blur-md"
        >
          <div className="flex justify-center items-center gap-2">
            <p className="text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
              Want to Work With Us
            </p>
          </div>
        </HoverBorderGradient>
      </div>

      {/* Heading */}
      <h1 className="mt-4 text-4xl font-semibold font-serif md:text-5xl text-white">
        Services{" "}
        <span className="bg-linear-to-r from-primary via-indigo-500 to-pink-500 bg-clip-text italic text-transparent">
          We Provide
        </span>
      </h1>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            {/* IMPORTANT FIX:
                - Spotlight stays behind content
                - No scale transform
            */}
            <CardSpotlight className="relative h-full rounded-2xl border border-white/10 bg-white/3 p-7 backdrop-blur-md overflow-hidden">
              {/* Content Layer (always above spotlight) */}
              <div className="relative z-20">
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/10">
                  {service.icon}
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

              {/* Subtle hover glow line (same as skills) */}
              <span className="pointer-events-none absolute inset-x-6 bottom-4 h-px bg-linear-to-r from-transparent via-fuchsia-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardSpotlight>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
