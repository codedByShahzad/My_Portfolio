import { GithubIcon, LinkedinIcon, Download } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen text-neutral-200 flex justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-12">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <section className="relative z-10 flex flex-col gap-8 border-b border-neutral-800 pb-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
                My Resume
              </h1>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl">
                M. Shahzad
              </p>

              <div className="flex justify-center md:justify-start gap-5 mt-4">
                <a href="https://github.com/codedByShahzad" target="_blank">
                  <GithubIcon
                    className="cursor-pointer hover:text-white"
                    size={22}
                  />
                </a>
                <a href="">
                  <LinkedinIcon
                    className="cursor-pointer hover:text-white"
                    size={22}
                  />
                </a>
              </div>
            </div>

            <a
              href="/Shahzad Resume.pdf"
              download
              className="flex items-center justify-center gap-2 border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800 transition text-sm sm:text-base"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm sm:text-base md:text-lg text-neutral-400">
            <div>
              <p>Email: mr.shahzad.developer@gmail.com</p>
              <p>Mobile: +92 345 2789601</p>
            </div>
            <div className="md:text-right">
              <p>Rawalpindi, Pakistan</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-12 pb-12 border-b border-neutral-800 text-center md:text-left">
          <div className="flex justify-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold resume_title">
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-sm sm:text-base md:text-lg">
            <div>
              <p className="font-medium">FG Sir Syed Public School</p>
              <p className="text-neutral-400">Matriculation</p>
              <p className="text-neutral-500">Graduated: 2020</p>
            </div>

            <div>
              <p className="font-medium">Punjab Group of Colleges</p>
              <p className="text-neutral-400">ICS</p>
              <p className="text-neutral-500">2021 – 2023</p>
            </div>

            <div>
              <p className="font-medium">University of Central Punjab</p>
              <p className="text-neutral-400">BS Computer Science</p>
              <p className="text-neutral-500">Expected Graduation: 2027</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-14 pb-12 border-b border-neutral-800 text-center md:text-left">
          <div className="flex justify-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold resume_title">
              Skills Summary
            </h2>
          </div>

          <ul className="space-y-4 text-sm sm:text-base md:text-lg text-neutral-400">
            <li>
              <span className="text-neutral-200">Frontend:</span> HTML, CSS,
              JavaScript, TypeScript, React.js, Tailwind CSS, React Native,
              Expo, Redux Toolkit
            </li>
            <li>
              <span className="text-neutral-200">Tools:</span> Git, GitHub,
              MySQL, Slack, Webpack, Jira, VS Code
            </li>
            <li>
              <span className="text-neutral-200">Languages:</span> JavaScript,
              Python, C++, SQL
            </li>
            <li>
              <span className="text-neutral-200">Others:</span> Word, Excel,
              PowerPoint, Tableau
            </li>
            <li>
              <span className="text-neutral-200">Soft Skills:</span> Problem
              Solving, Team Collaboration, Time Management, Adaptability
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mt-14 pb-12 border-b border-neutral-800 text-center md:text-left">
          <div className="flex justify-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold resume_title">
              Work Experience
            </h2>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between text-sm sm:text-base md:text-lg">
                <p className="font-medium text-2xl">
                  Client Project – NIVY App
                </p>
                <p className="text-neutral-500">
                  Remote | Dec 16, 2024 – Apr 03, 2025
                </p>
              </div>

              <p className="mt-4 text-neutral-300 text-lg">
                Collaborated with the NIVY development team to build a match
                scheduling platform that enabled colleges to efficiently
                organize, manage, and update inter-institutional sports matches
                via a web application.
              </p>

              <ul className="mt-4 ml-16 justify-center space-y-2 list-disc text-lg text-neutral-300 marker:text-2xl marker:text-primary">
                <li>
                  Designed and developed the Matches Management page to display
                  scheduled matches with full CRUD functionality
                </li>
                <li>
                  Implemented intuitive UI/UX for seamless match creation,
                  editing, updating, and deletion operations.
                </li>
                <li>
                  Ensured dynamic data handling and real-time updates to improve
                  platform efficiency and user experience.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between text-sm sm:text-base md:text-lg">
                <p className="font-medium text-2xl">
                  Front-End Developer – Ha Health Website
                </p>
                <p className="text-neutral-500">
                  Remote | Jun 16, 2025 – Sep 21, 2025
                </p>
              </div>

              <p className="mt-4 text-neutral-300 text-lg">
                Collaborated with the Hā Health team to build an AI-powered
                wellness platform offering personalized meal plans, fitness
                tracking, and mindfulness tools designed to support healthier
                lifestyles.
              </p>

              <ul className="mt-4 ml-16 justify-center space-y-2 list-disc text-lg text-neutral-300 marker:text-2xl marker:text-primary">
                <li>
                  Developed responsive UI components with React, Next.js, and
                  Tailwind CSS for seamless cross-device performance.
                </li>
                <li>
                  Integrated AI-driven recommendation features for meals,
                  exercises, and mindfulness into the front end.
                </li>
                <li>
                  Worked closely with designers and backend engineers to ensure
                  smooth user experience and functionality.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-14 text-center md:text-left">
          <div className="flex justify-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold resume_title">
              Projects
            </h2>
          </div>

          <div className="space-y-10 text-sm sm:text-base md:text-lg">
            {/* Crypto Place */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between text-sm sm:text-base md:text-lg">
                <p className="font-medium text-2xl">
                  Crypto Place – Real-Time Cryptocurrency Tracker
                </p>
                <p className="text-neutral-500">
                  React.js | Tailwind CSS | CoinGecko
                </p>
              </div>

              <p className="mt-4 text-neutral-300 text-lg">
                Built an interactive cryptocurrency tracker delivering real-time
                price updates, advanced search, and historical trend
                visualizations.
              </p>

              <ul className="mt-4 ml-16 justify-center space-y-2 list-disc text-lg text-neutral-300 marker:text-2xl marker:text-primary">
                <li>
                  Integrated CoinGecko API to fetch live data and historical
                  insights on global cryptocurrencies.
                </li>
                <li>
                  Developed interactive charts for historical price trends and
                  currency analysis.
                </li>
                <li>
                  Developed a clean, responsive interface tailored for both web
                  and mobile users.
                </li>
              </ul>
            </div>

            {/* Tomato */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between text-sm sm:text-base md:text-lg">
                <p className="font-medium text-2xl">
                  Tomato – Food Delivery Website
                </p>
                <p className="text-neutral-500">
                  React.js | Tailwind CSS | Redux Toolkit | REST APIs
                </p>
              </div>

              <p className="mt-4 text-neutral-300 text-lg">
                Designed and developed a fully responsive food delivery platform
                with real-time restaurant listings, cart management, and
                seamless checkout.
              </p>

              <ul className="mt-4 ml-16 justify-center space-y-2 list-disc text-lg text-neutral-300 marker:text-2xl marker:text-primary">
                <li>
                  Integrated RESTful APIs to dynamically fetch restaurant and
                  product data.
                </li>
                <li>
                  Architected global state management with Redux Toolkit for
                  efficient cart operations.
                </li>
                <li>
                  Optimized user experience with a mobile-first responsive UI
                  across all devices.
                </li>
              </ul>
            </div>

            {/* Corto */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between text-sm sm:text-base md:text-lg">
                <p className="font-medium text-2xl">
                  Corto – Product & Flight Search, Deals App{" "}
                </p>
                <p className="text-neutral-500">
                  React Native | Redux Toolkit | REST APIs
                </p>
              </div>

              <p className="mt-4 text-neutral-300 text-lg">
                Developed a multi-functional React Native application
                integrating product search, flight tracking, and real-time deals
                features.
              </p>

              <ul className="mt-4 ml-16 justify-center space-y-2 list-disc text-lg text-neutral-300 marker:text-2xl marker:text-primary">
                <li>
                  Implemented dynamic data fetching from multiple APIs to
                  deliver real-time product, flight, and deal information.
                </li>
                <li>
                  Utilized Redux Toolkit for efficient global state management,
                  ensuring a seamless and scalable app experience.
                </li>
                <li>
                  Designed intuitive navigation across three core pages: Product
                  Search, Flight Tracker, and Deals Listings.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="/Shahzad Resume.pdf"
              download
              className="flex items-center justify-center gap-2 border border-neutral-700 px-6 py-3 rounded-full hover:bg-neutral-800 transition text-sm sm:text-base"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
