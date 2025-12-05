// import Image from "next/image";
// import Link from "next/link";
// import logo from "../public/images/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 mt-10 z-50 max-w-7xl mx-auto">
//       <div className="bg-black/30 backdrop-blur-md border border-white/20 px-2 text-white flex justify-between items-center py-2 rounded-full">
//         {/* Left Links */}
//         <div className="flex gap-4 text-xl">
//           <Link className="hover-nav-link" href="/">Home</Link>
//           <Link className="hover-nav-link" href="/about">About</Link>
//           <Link className="hover-nav-link" href="/service">Service</Link>
//         </div>

//         {/* Logo */}
//         <div className="h-16 w-32 relative">
//           <Image 
//             fill 
//             alt="logo" 
//             src={logo}
//             style={{ objectFit: "contain" }} 
//           />
//         </div>

//         {/* Right Links */}
//         <div className="flex gap-4 text-xl">
//           <Link className="hover-nav-link" href="/resume">Resume</Link>
//           <Link className="hover-nav-link" href="/projects">Projects</Link>
//           <Link className="hover-nav-link" href="/contact">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../public/images/logo.png";

const Navbar = () => {
  const items = ["Home", "About", "Services", "Resume", "Project", "Contact"];

  const routes: Record<string, string> = {
    Home: "/",
    About: "/about",
    Services: "/services",
    Resume: "/resume",
    Project: "/project",
    Contact: "/contact",
  };

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div
        className={`bg-black text-white mx-2 lg:mx-10 xl:mx-20 py-2 px-3 my-5  
        flex flex-col md:flex-row md:items-center md:justify-between 
        ${  menuOpen ? "rounded-4xl" : "rounded-4xl md:rounded-[3rem]"}
        
        `}
      >
        {/* ---------------- MOBILE HEADER ---------------- */}
        <div className="flex w-full items-center justify-between md:hidden md:px-3">
          <Image src={logo} alt="Logo" width={50} height={50} />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl bg-orange-500 p-2 rounded-full"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* ---------------- DESKTOP MENU ---------------- */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* LEFT ITEMS */}
          <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6 list-none">
            {items.slice(0, 3).map((item) => (
              <li
                key={item}
                className={`cursor-pointer px-4 md:px-6 xl:px-10 py-3 xl:py-4 rounded-full transition-all duration-300 font-semibold ${
                  active === item
                    ? "bg-orange-500 text-white scale-105"
                    : "text-white/80 hover:text-white scale-100"
                }`}
                onClick={() => setActive(item)}
              >
                <Link href={routes[item]}>{item}</Link>
              </li>
            ))}
          </ul>

          {/* LOGO */}
          <Image src={logo} alt="Logo" width={60} height={60} />

          {/* RIGHT ITEMS */}
          <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6 list-none">
            {items.slice(3, 6).map((item) => (
              <li
                key={item}
                className={`cursor-pointer px-4 md:px-6 xl:px-10 py-3 xl:py-4 rounded-full transition-all duration-300 font-semibold ${
                  active === item
                    ? "bg-orange-500 text-white scale-105"
                    : "text-white/80 hover:text-white scale-100"
                }`}
                onClick={() => setActive(item)}
              >
                <Link href={routes[item]}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- MOBILE DROPDOWN MENU ---------------- */}
        <ul
          className={`flex flex-col gap-3 list-none md:hidden px-4 overflow-hidden transition-all duration-300 transform ${
            menuOpen ? "max-h-112 mt-4 pb-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {items.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`cursor-pointer w-full text-center px-10 py-4 rounded-full transition-all duration-300 font-semibold ${
                active === item
                  ? "bg-orange-500 text-white scale-105"
                  : "text-white/80 hover:text-white scale-100"
              }`}
            >
              <Link href={routes[item]}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
