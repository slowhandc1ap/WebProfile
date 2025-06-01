"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";

const Welcome = () => {
  // สร้างข้อมูลอนุภาคแบบคงที่
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: (i % 10) + 5, // ขนาด 5-15px
    duration: (i % 10) + 5, // ความยาว animation 5-15 วินาที
    delay: i * 0.2, // delay สำหรับแต่ละอนุภาค
  }));

  return (
    <section
      id="welcome"
      className="relative flex items-center justify-center min-h-screen px-6 py-12 overflow-hidden"
    >
      {/* Floating particles background - แบบง่าย */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-pink-500"
            initial={{
              x: (particle.id * 100) % 1000,
              y: (particle.id * 70) % 800,
              opacity: 0,
            }}
            animate={{
              y: [(particle.id * 70) % 800, (particle.id * 70 + 200) % 800],
              opacity: [0, 0.7, 0],
              transition: {
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "loop",
                delay: particle.delay,
                ease: "easeInOut",
              },
            }}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${(particle.id * 50) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Left side - Image with simple animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-yellow-400 overflow-hidden shadow-2xl">
            {/* Profile image with simple pulse animation */}
            <motion.div
              className="w-full h-full"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/korn-profile.png"
                alt="Tanakorn Taveethavorn"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>

            {/* Simple glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none 
                        bg-gradient-to-br from-yellow-400/20 to-pink-500/10 
                        mix-blend-overlay"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Simple border animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-yellow-400/30"
              animate={{
                borderColor: [
                  "rgba(234, 179, 8, 0.3)",
                  "rgba(234, 179, 8, 0.5)",
                  "rgba(234, 179, 8, 0.3)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tanakorn Taveethavorn
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Developer
          </motion.h2>

          <motion.div
            className="flex items-center gap-3 mb-6 group "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HiLocationMarker className="text-3xl text-red-500 transition-all duration-300 group-hover:text-red-400 group-hover:scale-110" />
            <span className="text-xl md:text-2xl font-medium text-gray-500">
               Thailand
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              As an IT student passionate about building impactful solutions, I approach development with a focus on practicality and scalability.
Through hands-on projects using JavaScript, Node.js, React, and SQL, I’ve learned to translate real-world problems into functional systems — such as designing a real-time industrial monitoring platform using Python and PostgreSQL, where performance and data accuracy were key.
            </p>
          </motion.div>
          {/* <motion.button
            className="relative px-8 py-3 bg-transparent border-2 border-yellow-400 
            rounded-full text-lg text-yellow-400 font-semibold shadow-xl 
            hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
            }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Me
          </motion.button> */}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
