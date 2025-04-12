"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  // All projects data
  const allProjects = [
    {
      title: "Smart MTC Monitoring Dashboard",
      description: "Designed and developed a full-stack system to extract, store, and monitor real-time production data from Mitsubishi Q Series PLCs. The system enables engineers to monitor factory parameters remotely through a web interface",
      details: [
        "Real-time data extraction from industrial PLCs",
        "Web-based monitoring dashboard with historical data visualization",
        "Alert system for abnormal parameter values"
      ],
      technologies: ["Python (Pymelsec)", "PostgreSQL", "Node", "Socket-io", "React"],
      githubLink: "#",
      imageUrl: "/smart-mtc.png"
    },
    {
      title: "FilesClub: Encrypted File Sharing & Chat Platform",
      description: "Developed a secure file management and chat web application emphasizing privacy and encryption. The platform allows users to upload, download, and manage encrypted files, and includes a future-proof chat system.",
      details: [
        "OTP Authentication: Implemented email-based One-Time Password (OTP) system for secure user verification.",
        "File Management Dashboard: Displays list of uploaded files with unique file codes and Time-To-Delete (TTD) countdown.",
        "SHA-256 Encryption: Secured file data using SHA-256 hashing to ensure confidentiality."
      ],
      technologies: ["Python Flask", "HTML", "SHA-256", "Email API"],
      githubLink: "https://github.com/slowhandc1ap/zipline_v0.1",
      imageUrl: "/fileclub.png"
    },
    {
      title: "Parking Pass Management System C-R-U-D",
      description: "Developed a full-stack web application to streamline the creation and management of digital parking passes, enhancing operational efficiency in parking facilities.",
      details: [
        "Digital Parking Pass Generation: Enabled users to generate digital parking passes swiftly, capturing essential vehicle details including license plate, driver name, car color, type, entry/exit times, and automatically calculated fees.",
        "Real-Time Data Management: Implemented seamless frontend-backend integration via RESTful APIs for real-time data processing and retrieval.",
      ],
      technologies: ["Vue", "TypeScript", "Tailwind CSS", "NET 8 Web API (C#)", "Entity Framework", "SQL Server"],
      githubLink: "https://github.com/slowhandc1ap/parking-ticket",
      imageUrl: "/parking-tricket.png"
    },
   
    {
      title: "E-commerce Backoffice Dashboard",
      description: "eveloped a comprehensive backoffice dashboard for managing e-commerce operations, focusing on product and order management, user administration, and analytics.",
      details: [
        "Product Management: Enabled CRUD operations for products, including adding new items, updating details, and removing outdated listings",
        "Analytics Dashboard: Integrated data visualization tools to provide insights into sales performance and user behavio"
      ],
      technologies: ["React", "Prisma ORM", "Bootstrap", "Node.js, Express.js", "React"],
      githubLink: "https://github.com/slowhandc1ap/Ract-E-commerce-Backoffice",
      imageUrl: "/e-commerce.png"
    },
    {
      title: "Interactive Visualization: Collisions in New York City",
      description: "Designed and built a web-based analytics platform that visualizes and interprets motor vehicle collision data in New York City",
      details: [
        "Interactive Dashboard: Created a user-friendly interface using Streamlit to explore collision data dynamically",
        "Data Cleaning and Transformation: Utilized Pandas and NumPy to preprocess and extract key metrics from raw datasets",
        "Custom Filtering: Enabled filters by time, location, and number of injuries for more targeted data exploration"
      ],
      technologies: ["Python ", "Streamlit", "Pandas", "NumPy", "Pydeck"],
      githubLink: "https://github.com/slowhandc1ap/NewYorkCity-Accident--onweb-",
      imageUrl: "/newyork.png"
    },
    {
      title: "Recommend movie website  (k-mean algorithm)",
      description: "Web Scraping Techniques to Gather Movie Data for Machine Learning-Based Recommendations",
      details: [
        "Preprocessed the data and transformed it into TF-IDF vectors for clustering",
        "Applied the K-means algorithm for movie clustering and developed a web application using the Flask framework",
      
      ],
      technologies: ["Python (Model)", "Machine Learnign", "K-Mean", "HTML CSS", "Flask"],
      githubLink: "#",
      imageUrl: "/movie-recommend.png"
    },
    // Add your additional projects here when you have them
    // They will automatically be included in the "Load More" functionality
  ];

  // State for visible projects
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectsToShow = allProjects.slice(0, visibleProjects);

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen py-20 px-4 sm:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
      </div>

      {/* Title section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-2 p-2">
          My Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of my featured projects. Each one represents unique challenges and solutions.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-500 group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Details accordion */}
                <details className="mb-4">
                  <summary className="text-yellow-400 font-medium cursor-pointer list-none">
                    Key Features
                  </summary>
                  <ul className="mt-2 pl-5 space-y-2 text-gray-400">
                    {project.details.map((detail, i) => (
                      <li key={i} className="relative before:content-['•'] before:absolute before:-left-4 before:text-yellow-400">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </details>

                {/* Technologies */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 text-sm text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Load more button - only shows if there are more projects to load */}
      {visibleProjects < allProjects.length && (
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button 
            onClick={loadMoreProjects}
            className="px-8 py-3 bg-transparent border-2 border-yellow-400 rounded-full text-lg text-yellow-400 font-semibold shadow-xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
          >
            Load More Projects
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;