"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowSwapButton from "./ui/ArrowButton";
import logo from "../public/images/SS.png";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

type SocialItem = {
  label: "LinkedIn" | "GitHub" | "Upwork" | "Fiverr";
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const Footer = () => {
  const navItems: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Service", href: "/services" },
    { label: "Resume", href: "/resume" },
    { label: "Project", href: "/projects" },
  ];

  const socials: SocialItem[] = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shahzad-sohail",
      Icon: FaLinkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/codedByShahzad",
      Icon: FaGithub,
    },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01a95637283911ba95?mp_source=share",
      Icon: SiUpwork,
    },
    {
      label: "Fiverr",
      href: "https://www.fiverr.com/s/DBAz77Q",
      Icon: SiFiverr,
    },
  ];

  return (
    <footer className="relative overflow-hidden rounded-t-3xl px-4 sm:px-6 lg:px-10 xl:px-20 pt-12 pb-10 text-white bg-background border-t border-white/10">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center md:text-left leading-tight">
          Lets Connect there
        </h1>

        <ArrowSwapButton
          label="Hire Me"
          href="/contact"
          className="bg-primary text-white"
          direction="up-right"
        />
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-white/10" />

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 pb-14">
        {/* LEFT */}
        <div className="flex flex-col items-center lg:items-start max-w-xl mx-auto lg:mx-0">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="bg-primary py-2 px-3 rounded-full">
              <Image src={logo} alt="Logo" width={30} height={30} />
            </div>
            <span className="text-white/90 font-semibold tracking-wide">
              Shahzad
            </span>
          </div>

          <p className="text-white/65 text-center lg:text-left leading-relaxed">
            I’m Shahzad Sohail, a full-stack developer with hands-on experience
            building real-world web applications. I work across both frontend
            and backend, focusing on creating interfaces that are responsive,
            accessible, and performance-driven while ensuring the logic behind
            them is reliable and scalable.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full max-w-2xl mx-auto lg:mx-0">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-10">
            {/* NAVIGATION */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Navigation
              </h3>

              <ul className="grid  gap-y-3 gap-x-6 sm:block sm:space-y-3">
                {navItems.map((item) => (
                  <li key={item.label} className="group relative w-fit">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-white/65 transition group-hover:text-white"
                    >
                      {item.label}
                      <span className="relative w-4 h-4 overflow-hidden">
                        <span className="absolute inset-0 flex items-center justify-center -translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </span>
                    </Link>

                    <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-linear-to-r from-primary to-purple-400 transition-transform duration-300 group-hover:scale-x-100" />
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Contact
              </h3>

              <ul className="space-y-3 text-white/65">
                <li>
                  <a
                    href="tel:+923415278601"
                    className="hover:text-white transition"
                  >
                    +92 341 5278601
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mr.shahzad.developer@gmail.com"
                    className="hover:text-white transition wrap-break-word"
                  >
                    mr.shahzad.developer@gmail.com
                  </a>
                </li>
                <li>
                  <Link
                    href="/book-call"
                    className="inline-flex items-center gap-2 hover:text-white transition"
                  >
                    Book a call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="my-6 border-t border-white/10" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/45 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2025 Shahzad. All Rights Reserved.
        </p>

        {/* Socials */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-center justify-center md:justify-end gap-4"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="
                group relative inline-flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10 bg-white/5 backdrop-blur-md
                transition-all duration-300
                 hover:border-white/20 hover:bg-white/10
                focus:outline-none
              "
            >
              {/* Glow blob */}
              <span
                className="
                  pointer-events-none absolute -inset-2 rounded-full
                  bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.55),transparent_60%)]
                  blur-md opacity-80
                  group-hover:opacity-100 group-hover:blur-lg
                  transition-all duration-300
                "
              />
              

              <Icon
                className={`relative z-10 text-white/70 group-hover:text-white transition ${
                  label === "Fiverr" ? "text-[32px]" : "text-[18px]"
                }`}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
