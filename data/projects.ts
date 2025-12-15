import { StaticImageData } from "next/image";
import {
  Activity,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Video,
  MapPin,
  Shield,
  Radio,
} from "lucide-react";

/* =======================
   IMAGES
======================= */
import p1a from "@/public/images/redefine1.png";
import p1b from "@/public/images/redefine2.png";
import p2a from "@/public/images/portfolio1.png";
import p2b from "@/public/images/portfolio2.png";
import p3a from "@/public/images/ha1.png";
import p3b from "@/public/images/ha2.png";
import p4a from "@/public/images/brain1.png";
import p4b from "@/public/images/brain2.png";
import p5a from "@/public/images/nivy1.png";
import p5b from "@/public/images/nivy2.png";
import p6a from "@/public/images/Crypto1.png";
import p6b from "@/public/images/Crypto2.png";

/* =======================
   TYPES
======================= */

export type Accent =
  | "pink"
  | "purple"
  | "green"
  | "orange"
  | "blue"
  | "sandy"
  | "parrot"
  | "red";

export type TechKey =
  | "next"
  | "react"
  | "ts"
  | "tailwind"
  | "framer"
  | "motion"
  | "shadcn"
  | "sanity";

export type Project = {
  slug: string;
  detailHref: string;
  accent: Accent;
  title: string;
  subtitle: string;
  bullets: string[];
  tech: TechKey[];
  leftText: string;
  images: {
    primary: StaticImageData;
    hover: StaticImageData;
  };
};

/* =======================
   DATA (ALL PROJECTS)
======================= */

export const projects: Project[] = [
   {
    slug: "cryptoplays",
    detailHref: "/project-details/cryptoplays",
    accent: "purple",
    title: "CryptoPlays",
    subtitle:
      "A crypto tracking dashboard.\nDesigned for speed, clarity, and daily use.",
    bullets: [
      "Clear data hierarchy",
      "Reusable dashboard widgets",
      "Fast navigation",
      "Motion to guide focus",
      "Scalable foundation",
    ],
    tech: ["next", "react", "ts", "tailwind", "framer"],
    leftText: "A market dashboard focused on usability.",
    images: { primary: p6a, hover: p6b },
  },
  {
    slug: "portfolio-pro",
    detailHref: "/project-details/portfolio-pro",
    accent: "parrot",
    title: "Portfolio Pro",
    subtitle:
      "A modern portfolio crafted for a client.\nClean typography, smooth motion, and structured case studies.",
    bullets: [
      "Sticky-scroll storytelling",
      "Reusable sections",
      "Optimized performance",
      "Clean motion design",
      "Scalable architecture",
    ],
    tech: ["next", "react", "ts", "tailwind", "motion"],
    leftText: "A premium portfolio with refined interactions.",
    images: { primary: p2a, hover: p2b },
  },

  {
    slug: "ha-wellness",
    detailHref: "/project-details/ha-wellness",
    accent: "green",
    title: "Hā Wellness",
    subtitle:
      "A calm wellness platform.\nDesigned for clarity, conversion, and comfort.",
    bullets: [
      "Conversion-focused layout",
      "Mobile-first UX",
      "Gentle motion",
      "Component-driven structure",
      "Scalable codebase",
    ],
    tech: ["next", "react", "ts", "tailwind", "framer"],
    leftText: "A soothing wellness experience.",
    images: { primary: p3a, hover: p3b },
  },

  {
    slug: "brainbox",
    detailHref: "/project-details/brainbox",
    accent: "pink",
    title: "BrainBox",
    subtitle:
      "A bold product landing page.\nHigh contrast visuals with clean hierarchy.",
    bullets: [
      "Dark-theme optimized UI",
      "Strong visual rhythm",
      "Reusable components",
      "Fast loading experience",
      "Future-ready layout",
    ],
    tech: ["next", "react", "ts", "tailwind", "motion"],
    leftText: "A tech-forward product launch experience.",
    images: { primary: p4a, hover: p4b },
  },

  {
    slug: "arcadeverse",
    detailHref: "/project-details/arcadeverse",
    accent: "orange",
    title: "ArcadeVerse",
    subtitle:
      "A cinematic gaming website.\nScroll-driven visuals with immersive motion.",
    bullets: [
      "Cinematic scroll animations",
      "Responsive grid system",
      "Consistent UI patterns",
      "Performance-first media",
      "SEO-friendly structure",
    ],
    tech: ["next", "react", "ts", "tailwind", "framer", "shadcn"],
    leftText: "An immersive gaming experience built with motion.",
    images: { primary: p1a, hover: p1b },
  },

  {
    slug: "nivy-studio",
    detailHref: "/project-details/nivy-studio",
    accent: "blue",
    title: "Nivy Studio",
    subtitle:
      "A premium brand website.\nMinimal, modular, and visually consistent.",
    bullets: [
      "Modular UI sections",
      "Optimized image handling",
      "Purposeful micro-interactions",
      "Consistent design system",
      "Client-ready structure",
    ],
    tech: ["next", "react", "ts", "tailwind", "shadcn"],
    leftText: "A sleek brand presence with refined visuals.",
    images: { primary: p5a, hover: p5b },
  },

 
];


export const industries = [
  {
    title: "HealthTech",
    desc: "Patient journeys, appointment flows, and AI-assisted experiences with privacy-first UX.",
    icon: HeartPulse,
    tags: ["Mobile", "AI", "Compliance UX"],
  },
  {
    title: "Sports & Fan Engagement",
    desc: "Team apps, live experiences, and interactive fan features built for performance.",
    icon: GraduationCap,
    tags: ["Live", "Events", "Engagement"],
  },
  {
    title: "E-commerce",
    desc: "Fast browsing, clean product UX, and scalable frontend architecture for conversion.",
    icon: ShoppingBag,
    tags: ["Catalog", "Search", "Conversion"],
  },
 
];
