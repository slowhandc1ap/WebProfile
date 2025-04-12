"use client";

import { useState, useEffect } from "react";

const sectionIds = ["welcome", "about", "projects", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      let currentSection = "welcome";
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          if (element.offsetTop - window.innerHeight / 3 <= scrollY) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-black/95 via-gray-900/95 to-gray-950/95 shadow-lg backdrop-blur-sm py-3"
          : "bg-gradient-to-r from-black via-gray-900 to-gray-950 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <ul className="flex space-x-1 sm:space-x-2 md:space-x-6 bg-gray-900/30 rounded-full p-1 border border-gray-700/50 shadow-inner">
            {sectionIds.map((section) => {
              const isActive = activeSection === section;
              return (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`
                      relative px-4 py-2 text-sm sm:text-base md:text-lg font-medium
                      ${
                        isActive
                          ? "text-yellow-400 bg-gray-800/50"
                          : "text-gray-300 hover:text-white"
                      }
                      transition-all duration-300 rounded-full
                      overflow-hidden group
                    `}
                  >
                    <span className="relative z-10">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                    {isActive && (
                      <>
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 rounded-full" />
                        <span className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-yellow-400 rounded-full -translate-x-1/2" />
                      </>
                    )}
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;