import type { StaticImageData } from "next/image";
import { HeartPulse, GraduationCap, ShoppingBag } from "lucide-react";

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

/**
 * Updated for the new Project Details page:
 * - images.gallery: supports 1..N images
 * - overview is now structured (headline + summary + details)
 */
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
    /** Used in hero + overview main image */
    primary: StaticImageData;
    /** Optional (still supported if you use it somewhere else) */
    hover?: StaticImageData;
    /** Used by the Gallery section (map all images + lightbox) */
    gallery: StaticImageData[];
  };

  /**
   * For the Overview section (so you can show headings first,
   * then main image, then "more details", then tech stack)
   */
  overview: {
    heading: string; // e.g. "Overview"
    summary: string; // short paragraph (above the main image)
    details: string[]; // more detail paragraphs (after the image)
  };

  duration: string;
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
    images: {
      primary: p6a,
      hover: p6b,
      gallery: [p6a, p6b], // ✅ default gallery (change anytime)
    },
    overview: {
      heading: "Overview",
      summary:
        "CryptoPlays is a crypto tracking dashboard built to make market data understandable in seconds. It focuses on clarity, speed, and daily usability by organizing content into a clean hierarchy with reusable widgets.",
      details: [
        "The layout is designed to reduce cognitive load: key metrics are surfaced first, secondary insights are grouped logically, and visual rhythm stays consistent across sections.",
        "Micro-interactions and motion are used only where they improve scanning and navigation — keeping the interface premium while still fast in real-world usage.",
        "The foundation is built to scale: new coins, charts, watchlists, and modules can be added without breaking the UI patterns.",
      ],
    },
    duration: "3 Weeks",
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
    images: {
      primary: p3a,
      hover: p3b,
      gallery: [p3a, p3b],
    },
    overview: {
      heading: "Overview",
      summary:
        "Hā Wellness is a calm and approachable wellness platform designed to promote trust, comfort, and clarity. The experience is intentionally quiet: readable typography, soft spacing, and guided sections that feel natural to scroll.",
      details: [
        "The UI follows a mobile-first approach where every component is optimized for small screens first — ensuring smooth conversion flows without overwhelming the user.",
        "Motion stays gentle and supportive (not distracting), enhancing focus on key actions while maintaining performance.",
        "A component-driven structure makes it easy to add new service pages, testimonials, pricing sections, or booking flows later.",
      ],
    },
    duration: "2.5 Weeks",
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
    images: {
      primary: p4a,
      hover: p4b,
      gallery: [p4a, p4b,p3a, p3b,p2a, p2b, p5a, p5b],
    },
    overview: {
      heading: "Overview",
      summary:
        "BrainBox is a bold product landing page built around high contrast visuals and a clear, feature-first story. The goal is to feel modern and confident while staying extremely readable.",
      details: [
        "The page uses strong rhythm: sections are structured to highlight product value quickly, with bold headings, tight content grouping, and clear CTAs.",
        "Motion is purposeful — used to guide attention to feature blocks and transitions without introducing heavy effects that slow rendering.",
        "The layout is future-ready: you can scale it into a full marketing site by adding pricing, docs, FAQs, and case studies without redesigning the foundation.",
      ],
    },
    duration: "10 Days",
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
    images: {
      primary: p2a,
      hover: p2b,
      gallery: [p2a, p2b],
    },
    overview: {
      heading: "Overview",
      summary:
        "Portfolio Pro is a premium client portfolio that presents work using structured case studies and clean storytelling. The design emphasizes readability first, then motion for polish.",
      details: [
        "Sticky-scroll sections create a guided narrative so users understand the project context before seeing the final visuals.",
        "Typography, spacing, and consistent components keep the experience calm and high-end, even with a lot of content.",
        "The architecture is designed to scale: adding new case studies, galleries, or a blog can be done without touching core layout rules.",
      ],
    },
    duration: "2 Weeks",
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
    images: {
      primary: p1a,
      hover: p1b,
      gallery: [p1a, p1b],
    },
    overview: {
      heading: "Overview",
      summary:
        "ArcadeVerse is a cinematic gaming website designed to feel immersive while staying responsive and fast. The experience is scroll-driven: motion supports storytelling without sacrificing usability.",
      details: [
        "The layout uses a grid system that adapts well across devices, keeping content readable even when visuals are intense.",
        "Media is treated performance-first: images are optimized and motion is controlled to avoid jank during scroll.",
        "The structure is SEO-friendly and scalable, so expanding into a full game studio site (news, releases, team, community) is straightforward.",
      ],
    },
    duration: "3 Weeks",
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
    images: {
      primary: p5a,
      hover: p5b,
      gallery: [p5a, p5b],
    },
    overview: {
      heading: "Overview",
      summary:
        "Nivy Studio is a premium brand website focused on minimalism and strong visual consistency. The goal is to feel clean and confident, with a modular system that stays client-friendly.",
      details: [
        "The design system keeps spacing, typography, and components consistent across the site — making the experience feel polished without being heavy.",
        "Images are handled carefully for sharp presentation and fast load times, with subtle UI effects that add quality without distraction.",
        "It’s structured to scale for real client needs: service pages, portfolios, testimonials, and contact flows can be added without redesigning the base.",
      ],
    },
    duration: "2 Weeks",
  },
];

/* =======================
   INDUSTRIES
======================= */

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
