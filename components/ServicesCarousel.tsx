"use client";

import web from "../public/images/webdev.svg";
import app from "../public/images/mobile-app.png";
import shopify from "../public/images/shopify-svgrepo-com.svg";
import { HoverEffect } from "./ui/card-hover-effect";
import type { StaticImageData } from "next/image";

type Service = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern and responsive websites built with latest technologies.",
    image: web,
  },
  {
    id: 2,
    title: "App Development",
    description: "High-performance mobile applications for Android & iOS.",
    image: app,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-focused designs that improve engagement and usability.",
    image: shopify,
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Creative visuals that define your brand identity.",
    image: web,
  },
  {
    id: 5,
    title: "Video Editing",
    description: "Professional video editing for marketing and branding.",
    image: app,
  },
  {
    id: 6,
    title: "Social Media Marketing",
    description: "Grow your brand with strategic social media campaigns.",
    image: shopify,
  },
];

const ServicesCarousel = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <HoverEffect items={services} />
      </div>
    </section>
  );
};

export default ServicesCarousel;
