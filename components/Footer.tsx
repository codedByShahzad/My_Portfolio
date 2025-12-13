"use client";

import Image from "next/image";
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
          href="/projects"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Sed lobortis orci elementum egestas
            lobortis.
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
              {["Home", "About Us", "Service", "Resume", "Project"].map((item) => (
                <li
                  key={item}
                  className="group relative w-fit cursor-pointer text-white/65"
                >
                  <span className="inline-flex items-center gap-2 group-hover:text-white transition">
                    {item}
                    <span className="relative w-4 h-4 overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center -translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </span>
                  </span>

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
              <li className="hover:text-white transition cursor-pointer">
                +91 7738443636
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Jaycrea36@gmail.com
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Portfolio-jcrea.com
              </li>
            </ul>
          </div>

          {/* MORE (NEW) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              More
            </h3>

            <ul className="space-y-2 text-white/65">
              <li className="hover:text-white transition cursor-pointer">
                Book a call
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Links
              </li>
              <li className="hover:text-white transition cursor-pointer">
                RSS
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
