import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 mt-10 z-50 max-w-7xl mx-auto">
      <div className="bg-black/30 backdrop-blur-md border border-white/20 px-2 text-white flex justify-between items-center py-2 rounded-full">
        {/* Left Links */}
        <div className="flex gap-4 text-xl">
          <Link className="hover-nav-link" href="/">Home</Link>
          <Link className="hover-nav-link" href="/about">About</Link>
          <Link className="hover-nav-link" href="/service">Service</Link>
        </div>

        {/* Logo */}
        <div className="h-16 w-32 relative">
          <Image 
            fill 
            alt="logo" 
            src={logo}
            style={{ objectFit: "contain" }} 
          />
        </div>

        {/* Right Links */}
        <div className="flex gap-4 text-xl">
          <Link className="hover-nav-link" href="/resume">Resume</Link>
          <Link className="hover-nav-link" href="/projects">Projects</Link>
          <Link className="hover-nav-link" href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
