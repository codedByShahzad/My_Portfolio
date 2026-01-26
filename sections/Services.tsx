"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SiReact, SiFigma, SiShopify } from "react-icons/si";
import { Smartphone, Database, CloudLightning, ArrowUpRight } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
};

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "High-performance, responsive web interfaces using React, Tailwind CSS, and modern UI patterns.",
    icon: <SiReact className="h-9 w-9 text-white" />,
    href: "#contact",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with React Native & Expo for smooth user experiences.",
    icon: <Smartphone className="h-9 w-9 text-white" />,
    href: "#contact",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, user-focused designs and prototypes created in Figma for better usability.",
    icon: <SiFigma className="h-9 w-9 text-white" />,
    href: "#contact",
  },
  {
    title: "Backend Development",
    description: "Scalable and secure backend solutions using APIs and databases.",
    icon: <Database className="h-9 w-9 text-white" />,
    href: "#contact",
  },
  {
    title: "Website Deployment",
    description:
      "Deploying optimized websites with performance, SEO, and best practices.",
    icon: <CloudLightning className="h-9 w-9 text-white" />,
    href: "#contact",
  },
  {
    title: "E-commerce & Shopify",
    description: "Creating beautiful and functional online stores using Shopify.",
    icon: <SiShopify className="h-9 w-9 text-white" />,
    href: "#contact",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

// Small hover lift + micro tilt (no heavy scale)
const cardHover: Variants = {
  rest: { y: 0, rotateX: 0, rotateY: 0 },
  hover: {
    y: -6,
    rotateX: -2,
    rotateY: 2,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

const Services = () => {
  return (
    <section className="px-3 lg:px-10 xl:px-20 py-10">
      {/* Badge */}
      <div className="flex justify-center lg:justify-start  gap-2  ">
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
       <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold font-serif text-center lg:text-start leading-[1.15] text-white">
          Services <span className="bg-linear-to-r from-primary via-fuchsia-500 to-pink-500 bg-clip-text font-semibold italic text-transparent">
                I Provide
              </span>
        </h2>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 xl:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            {/* Card wrapper for hover/tilt */}
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
              className="h-full perspective-[1000px]"
            >
              {/* Make sure group exists for group-hover effects */}
              <CardSpotlight className="group relative h-full rounded-2xl border border-primary/30 p-7 backdrop-blur-md overflow-hidden">
                {/* Soft animated border glow on hover (no layout change) */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-fuchsia-500/10 via-transparent to-indigo-500/10" />
                </div>

                {/* Content Layer */}
                <div className="relative z-20 flex h-full flex-col">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/10"
                    whileHover={{ rotate: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* icon pulse */}
                    <motion.div
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center"
                    >
                      {service.icon}
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Footer action (functional) */}
                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Learn more
                      <motion.span
                        className="inline-flex"
                        initial={{ x: 0, y: 0 }}
                        whileHover={{ x: 2, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.span>
                    </a>

                    <span
                      className="inline-flex items-center gap-2 rounded-full 
  border border-emerald-500/40 
  bg-emerald-500/10 
  px-3 py-1 text-[11px] text-emerald-400"
                    >
                      {/* Green dot */}
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Available
                    </span>
                  </div>
                </div>

                {/* Subtle hover glow line (your existing idea, now works because of group) */}
                <span className="pointer-events-none absolute inset-x-6 bottom-4 h-px bg-linear-to-r from-transparent via-fuchsia-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Subtle hover shimmer (very light) */}
                <motion.div
                  className="pointer-events-none absolute -left-24 top-0 h-full w-24 bg-white/10 blur-xl opacity-0 group-hover:opacity-100"
                  initial={{ x: 0 }}
                  whileHover={{ x: 520 }}
                  transition={{ duration: 0.9, ease: "easeOut" as const }}
                />
              </CardSpotlight>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
