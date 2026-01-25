"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../public/images/SS.png";

const Navbar = () => {
  const pathname = usePathname();

  const items = ["Home", "Project", "Services", "Resume", "About", "Contact"];

  const routes: Record<string, string> = {
    Home: "/",
    Project: "/projects",
    Services: "/services",
    Resume: "/resume",
    About: "/about",
    Contact: "/contact",
  };

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const active = useMemo(() => {
    if (pathname === "/") return "Home";
    if (
      pathname.startsWith("/projects") ||
      pathname.startsWith("/project-details")
    )
      return "Project";
    if (pathname.startsWith("/services")) return "Services";
    if (pathname.startsWith("/resume")) return "Resume";
    if (pathname.startsWith("/about")) return "About";
    if (pathname.startsWith("/contact")) return "Contact";
    return "Home";
  }, [pathname]);

  // navbar height offset (adjust if needed)
  const NAV_OFFSET = 88;

  return (
    <div className="mx-2 lg:mx-10 xl:mx-20 my-5 relative z-20000">
      <div className="absolute -top-30 -left-52 h-[350px] w-[380px] md:w-[580px] xl:w-[980px] rounded-full bg-primary/25 blur-3xl" />

      {/* MAIN BAR */}
      <div
        className={`bg-background text-white py-2 px-3 border border-gray-800 transition-all relative
        ${menuOpen ? "rounded-4xl" : "rounded-4xl md:rounded-[3rem]"}
        `}
      >
        {/* MOBILE HEADER */}
        <div className="flex w-full items-center justify-between md:hidden md:px-3">
          <div className="bg-primary py-2 px-3 rounded-full">
            <Image src={logo} alt="Logo" width={30} height={30} />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((p) => !p)}
            className="text-white text-3xl bg-primary p-2 rounded-full relative z-30000"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex w-full items-center md:mx-0 justify-between">
          {/* LEFT ITEMS */}
          <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6 list-none">
            {items.slice(0, 3).map((item) => (
              <Link href={routes[item]} key={item}>
                <li
                  className={`cursor-pointer px-4 md:px-6 xl:px-10 py-3 xl:py-4 rounded-full transition-all duration-300 font-semibold ${
                    active === item
                      ? "bg-primary text-white scale-105"
                      : "text-white/80 hover:text-white scale-100"
                  }`}
                >
                  {item}
                </li>
              </Link>
            ))}
          </ul>

          {/* LOGO */}
          <div className="bg-primary py-2 px-3 rounded-full">
            <Image src={logo} alt="Logo" width={42} height={42} />
          </div>

          {/* RIGHT ITEMS */}
          <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6 list-none">
            {items.slice(3, 6).map((item) => (
              <Link href={routes[item]} key={item}>
                <li
                  className={`cursor-pointer px-4 md:px-6 xl:px-10 py-3 xl:py-4 rounded-full transition-all duration-300 font-semibold ${
                    active === item
                      ? "bg-primary text-white scale-105"
                      : "text-white/80 hover:text-white scale-100"
                  }`}
                >
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* ✅ MOBILE MENU OVERLAY (starts BELOW navbar, so it can't block the X) */}
      <div
        className={`md:hidden fixed left-0 right-0 bottom-0 z-10000 transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        style={{ top: NAV_OFFSET }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div className="absolute left-2 right-2 top-3">
          <div className="bg-background border border-gray-800 rounded-4xl p-4 shadow-lg max-h-[calc(100vh-110px)] overflow-auto pb-24">
            <ul className="flex flex-col gap-3 list-none">
              {items.map((item) => (
                <Link href={routes[item]} key={item}>
                  <li
                    onClick={() => setMenuOpen(false)}
                    className={`cursor-pointer w-full text-center px-10 py-4 rounded-full transition-all duration-300 font-semibold ${
                      active === item
                        ? "bg-primary text-white scale-105"
                        : "text-white/80 hover:text-white scale-100"
                    }`}
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
