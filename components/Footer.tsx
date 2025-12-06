import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#272727] text-white rounded-t-2xl px-6 md:px-10 pt-12 pb-10 mt-20">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-4xl text-center sm:text-start md:text-5xl font-semibold">
          Lets Connect there
        </h1>

        <button className="bg-orange-500 py-2 px-6 md:py-3 md:px-8 rounded-full text-white text-lg flex items-center">
          Hire me
          <span className="ml-1">
            <HiArrowUpRight size={20} />
          </span>
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-10"></div>

      {/* Footer Content (responsive width/basis) */}
      <div className="flex flex-col justify-between lg:flex-row gap-10 pb-14 ">
        {/* LEFT - Logo + Text (large) */}
        <div className="w-full flex flex-col justify-center md:justify-start md:items-start items-center md:basis-1/2">
          <div className="mb-6">
            <Image alt="logo" width={40} height={40} src="/images/logo.png" />
          </div>

          <p className="text-gray-300 text-center md:text-start leading-relaxed max-w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>

          {/* optional social icons area (uncomment & add icons if needed) */}
          {/* <div className="flex gap-4 mt-6 text-xl text-gray-300">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div> */}
        </div>

        {/* NAV - smaller */}
        <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div className="w-full md:basis-1/6">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Navigation
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Home</li>
                <li>About Us</li>
                <li>Service</li>
                <li>Resume</li>
                <li>Project</li>
              </ul>
            </div>

            {/* CONTACT - smaller */}
            <div className="w-full md:basis-1/6">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Contact
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>+91 7738443636</li>
                <li>Jaycrea36@gmail.com</li>
                <li>Portfolio-jcrea.com</li>
              </ul>
            </div>

          {/* NEWSLETTER - medium */}
          <div className="w-full md:basis-1/4">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Get the latest information
            </h3>

            {/* Responsive email input: full width on small screens, fixed wider on md+ */}
            <div className="relative flex items-center bg-white rounded-xl overflow-hidden max-w-full md:max-w-[340px]">
              <input
                type="email"
                placeholder="Email Address"
                className="pl-3 pr-12 py-3 text-black outline-none"
              />
              <button
                aria-label="subscribe"
                className="absolute right-0 bg-orange-500 px-2 flex items-center justify-center text-white h-full cursor-pointer"
              >
                <IoSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-600 my-6"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm text-center sm:text-start gap-3">
        <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>
        <p>User Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
