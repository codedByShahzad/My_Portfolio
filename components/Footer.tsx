"use client";

import Image from "next/image";
import { IoSend } from "react-icons/io5";
import ArrowSwapButton from "./ui/ArrowButton";
import logo from "../public/images/SS.png"
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
      <div className="flex flex-col justify-between lg:flex-row gap-10 pb-14">
        {/* LEFT - Logo + Text */}
        <div className="w-full flex flex-col justify-center md:justify-start md:items-start items-center md:basis-1/2">
          <div className="mb-6 inline-flex items-center gap-3">
           <div className="bg-primary py-2 px-3 rounded-full">
            <Image src={logo} alt="Logo" width={30} height={30} />
          </div>

            {/* optional brand text (remove if you want) */}
            <span className="text-white/90 font-semibold tracking-wide">
              Shahzad
            </span>
          </div>

          <p className="text-white/65 text-center md:text-start leading-relaxed max-w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        {/* RIGHT AREA */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
          {/* NAV */}
          <div className="w-full md:basis-1/6">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Navigation
            </h3>

<ul className="space-y-3">
  {["Home", "About Us", "Service", "Resume", "Project"].map((x) => (
    <li
      key={x}
      className="group relative w-fit cursor-pointer text-white/65"
    >
      {/* Text + Arrow */}
      <span className="inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
        {x}

        {/* Arrow icon */}
        <span className="relative w-4 h-4 overflow-hidden">
          <span
            className="
              absolute inset-0
              flex items-center justify-center
              translate-x-[-6px] opacity-0
              group-hover:translate-x-0 group-hover:opacity-100
              transition-all duration-300 ease-out
            "
          >
            <ArrowRight className="w-4 h-4" />
          </span>
        </span>
      </span>

      {/* Underline animation */}
      <span
        className="
          absolute left-0 -bottom-0.5
          h-[1px] w-full
          origin-left scale-x-0
          bg-gradient-to-r from-primary to-purple-400
          transition-transform duration-300 ease-out
          group-hover:scale-x-100
        "
      />
    </li>
  ))}
</ul>


          </div>

          {/* CONTACT */}
          <div className="w-full md:basis-1/6">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
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

          {/* NEWSLETTER */}
          <div className="w-full md:basis-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              Get the latest information
            </h3>

            <div className="relative max-w-full md:max-w-[340px]">
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-lg">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent pl-4 pr-14 py-3 text-white placeholder:text-white/40 outline-none"
                />

                <button
                  aria-label="subscribe"
                  className="absolute right-1 top-1 bottom-1 rounded-xl px-3 flex items-center justify-center text-white cursor-pointer
                  bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition"
                >
                  <IoSend size={18} />
                </button>
              </div>

              <p className="mt-3 text-xs text-white/45">
                No spam — only product updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="my-6 border-t border-white/10" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-white/45 text-sm text-center sm:text-start gap-3">
        <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>
        <p className="hover:text-white/70 transition cursor-pointer">
          User Terms & Conditions | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
