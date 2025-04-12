"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-10 py-16 md:py-20 overflow-hidden"
    >
      {/* Responsive animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 md:opacity-10"></div>
        {/* Mobile-optimized floating elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 rounded-full bg-yellow-400/10 blur-xl md:blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 md:w-96 md:h-96 rounded-full bg-pink-500/10 blur-xl md:blur-3xl animate-float-delay"></div>
      </div>

      {/* Main content container with responsive padding */}
      <div className="relative w-full max-w-6xl mx-auto z-10 px-2 sm:px-4">
        {/* Responsive title */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          About Me
        </motion.h2>

        {/* Responsive two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Education Section */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 md:mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Education
            </h3>

            {/* Education Timeline */}
            <div className="space-y-6 md:space-y-8">
              {/* University */}
              <div className="relative pl-8 md:pl-10 border-l-2 border-yellow-400/50">
                <div className="absolute -left-2 top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-400"></div>
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  Bachelor's Degree in Information Technology
                </h4>
                <p className="text-sm md:text-base text-gray-300">
                  King Mongkut's University of Technology North Bangkok
                </p>
                <p className="text-xs md:text-sm text-gray-400">2021 - 2025</p>
                <p className="text-sm md:text-base text-yellow-300 mt-1">GPAX: 3.34</p>
              </div>

              {/* High School */}
              <div className="relative pl-8 md:pl-10 border-l-2 border-yellow-400/50">
                <div className="absolute -left-2 top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-400"></div>
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  Bilingual Program (BP)
                </h4>
                <p className="text-sm md:text-base text-gray-300">
                  Prachinratsadornamroong School
                </p>
                <p className="text-xs md:text-sm text-gray-400">2018 - 2020</p>
                <p className="text-sm md:text-base text-yellow-300 mt-1">GPAX: 3.13</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          {/* Skills Section */}
<motion.div
  className="bg-gray-800/80 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl border border-gray-700 hover:border-pink-400 transition-all duration-500"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4 md:mb-6 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
    Skills
  </h3>

  {/* Responsive Skills Grid - now with 3 columns on larger screens */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 sm:gap-10 ">
    {/* Technical Skills */}
    <div className="">
      <h4 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2 md:mb-3 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        Technical
      </h4>
      <ul className="space-y-1 md:space-y-2">
        {[
          "JavaScript/TypeScript",
          "React/Next.js/Vue",
          "Node/Express",
          "Python",
          "Flask/Django/FastAPI",
          "Dash/Streamlit/Tkinter",
        
          ".NET/ASP.NET Core",
        ].map((skill, index) => (
          <li key={`tech-${index}`} className="flex items-center">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full mr-1.5 md:mr-2"></span>
            <span className="text-xs  text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Development & Database */}
    <div>
      <h4 className="text-lg md:text-xl font-semibold text-cyan-300 mb-2 md:mb-3 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          />
        </svg>
        Development
      </h4>
      <ul className="space-y-1 md:space-y-2">
        {[
          "Git (GitHub/Bitbucket)",
          "Docker/Rancher Desktop",
          "Linux Command",
          "SQL Server",
          "PostgreSQL",
        ].map((skill, index) => (
          <li key={`dev-${index}`} className="flex items-center">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full mr-1.5 md:mr-2"></span>
            <span className="text-xs  text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Soft Skills */}
    <div>
      <h4 className="text-lg md:text-xl font-semibold text-pink-300 mb-2 md:mb-3 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Soft Skills
      </h4>
      <ul className="space-y-1 md:space-y-2">
        {[
          "Adaptability",
          "Teamwork & Collaboration",
          "Critical Thinking",
          "Problem Solving",
          "English (B1 Level)",
        ].map((skill, index) => (
          <li key={`soft-${index}`} className="flex items-center">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full mr-1.5 md:mr-2"></span>
            <span className="text-xs  text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</motion.div>
        </div>

        {/* Responsive Tech Stack Carousel */}
        <motion.div
          className="mt-10 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center text-white mb-6 md:mb-8">
            My Tech Stack
          </h3>
          <div className="relative w-full mt-12 overflow-hidden">
        <motion.div
          className="flex space-x-16 w-max"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[
            { src: "/C_shap-logo.png", alt: "C#" },
            { src: "/NET_Core_Logo.png", alt: "Dotnet" },
            { src: "/react.png", alt: "ReactLogo" },
            { src: "/Typescript_logo_2020.png", alt: "TypeScript" },
            { src: "/JavaScript-logo.png", alt: "JavaScript" },
            { src: "/Python-logo.png", alt: "Python" },
            { src: "/Dj-logo.png", alt: "Django" },
            { src: "/flask-logo.png", alt: "Flask" },
            { src: "/SQL_logo.png", alt: "SQL" },
            { src: "/PGSQL_logo.png", alt: "PostgreSQL" },
            { src: "/Figma-logo.png", alt: "PostgreSQL" },
            { src: "/canva-logo.png", alt: "PostgreSQL" },
            { src: "/Powerpoint-logo.png", alt: "PostgreSQL" },
          ].map((logo, index) => (
            <motion.div
              key={index}
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#facc15] hover:bg-gray-800/50"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={logo.src} alt={logo.alt} width={64} height={64} />
            </motion.div>
          ))}
        </motion.div>
      </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;