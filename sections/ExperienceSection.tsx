
import { Timeline } from "@/components/ui/timeline";

const ExperienceSection = () => {
  const data = [
    {
      title: "2024 – 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <strong className="text-2xl">Client Project – NIVY App</strong>{" "}
            <br />
            Remote | Dec 16, 2024 – Apr 03, 2025
          </p>
          <p className="mb-8 text-lg font-normal text-white dark:text-neutral-200">
            Collaborated with the NIVY development team to build a match
            scheduling platform enabling colleges to efficiently organize and
            manage inter-institutional sports matches.
          </p>

          <ul className="mb-8 list-disc pl-4 text-white dark:text-neutral-300">
            <li>Designed and developed the Matches Management page</li>
            <li>Implemented full CRUD functionality for match scheduling</li>
            <li>
              Built intuitive UI/UX for creating, editing, and deleting matches
            </li>
            <li>Ensured dynamic data handling and real-time updates</li>
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <strong className="text-2xl">
              Front-End Developer – Hā Health
            </strong>{" "}
            <br />
            Remote | Jun 16, 2025 – Sep 21, 2025
          </p>

          <p className="mb-8 text-lg font-normal text-white dark:text-neutral-200">
            Worked on an AI-powered wellness platform focused on personalized
            meal planning, fitness tracking, and mindfulness tools.
          </p>

          <ul className="mb-8 list-disc pl-4 text-white dark:text-neutral-300">
            <li>Built responsive UI using React, Next.js, and Tailwind CSS</li>
            <li>Integrated AI-driven recommendations into the frontend</li>
            <li>Ensured seamless performance across devices</li>
            <li>Collaborated closely with designers and backend engineers</li>
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Projects",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <strong className="text-2xl">
              Selected Projects & Ongoing Work
            </strong>
          </p>

          <ul className="mb-8 list-disc pl-4 text-white dark:text-neutral-300">
            <li>
              <strong>Crypto Place</strong> – Real-time cryptocurrency tracker
              using React, Tailwind CSS, and CoinGecko API
            </li>
            <li>
              <strong>Tomato</strong> – Food delivery platform with Redux
              Toolkit, REST APIs, and responsive UI
            </li>
            <li>
              <strong>Appointo</strong> – Full-stack doctor appointment booking
              platform
            </li>
            <li>
              <strong>Axcelerate AI</strong> – Currently building the company
              website using Webflow, HTML, CSS, JavaScript, GSAP animations
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt=""
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip" id="experience">
      <div className="flex flex-col justify-center text-center items-center">
        {/* Top label */}
        <div className="flex items-center  ">
          The Experience
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-semibold font-serif leading-[1.15] md:text-5xl text-white">
          Experience That <br /> Brings{" "}
          <span className="bg-linear-to-r from-primary via-indigo-500 to-pink-500 bg-clip-text italic text-transparent">Ideas to Life</span>
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
};

export default ExperienceSection;
