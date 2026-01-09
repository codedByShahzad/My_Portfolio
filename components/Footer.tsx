"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowSwapButton from "./ui/ArrowButton";
import logo from "../public/images/SS.png";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden rounded-t-3xl px-2 lg:px-10 xl:px-20 pt-12 pb-10 text-white bg-background border-t border-white/10">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-4xl text-center sm:text-start md:text-5xl font-semibold">
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
      <div className="flex flex-col lg:flex-row justify-between gap-10 pb-14">
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start max-w-xl">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="bg-primary py-2 px-3 rounded-full">
              <Image src={logo} alt="Logo" width={30} height={30} />
            </div>
            <span className="text-white/90 font-semibold tracking-wide">
              Shahzad
            </span>
          </div>

          <p className="text-white/65 text-center md:text-left leading-relaxed">
            I’m Shahzad Sohail, a full-stack developer with hands-on experience
            building real-world web applications. I work across both frontend
            and backend, focusing on creating interfaces that are responsive,
            accessible, and performance-driven while ensuring the logic behind
            them is reliable and scalable.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex w-full max-w-2xl justify-between gap-10">
          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Navigation
            </h3>

            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Service", href: "/services" },
                { label: "Resume", href: "/resume" },
                { label: "Project", href: "/projects" },
              ].map((item) => (
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
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Contact
            </h3>

            <ul className="space-y-2 text-white/65">
              <li>
                <a
                  href="tel:+917738443636"
                  className="hover:text-white transition"
                >
                  +92 341 5278601
                </a>
              </li>
              <li>
                <a
                  href="mailto:Jaycrea36@gmail.com"
                  className="hover:text-white transition"
                >
                  mr.shahzad.developer@gmail.com
                </a>
              </li>
              {/* <li>
                <a
                  href="https://portfolio-jcrea.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Portfolio-jcrea.com
                </a>
              </li> */}
            </ul>
          </div>

          {/* MORE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              More
            </h3>

            <ul className="space-y-2 text-white/65">
              <li>
                <Link href="/book-call" className="hover:text-white transition">
                  Book a call
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-white transition">
                  Links
                </Link>
              </li>
              <li>
                <Link href="/rss" className="hover:text-white transition">
                  RSS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="my-6 border-t border-white/10" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-white/45 text-sm gap-3">
        <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>
        <p className="hover:text-white/70 transition cursor-pointer">
          User Terms & Conditions | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
