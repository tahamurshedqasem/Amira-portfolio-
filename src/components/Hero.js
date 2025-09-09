"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiArrowDownCircle } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const { offsetX, offsetY } = e.nativeEvent;

    const rotateX = (offsetY / offsetHeight - 0.5) * -20;
    const rotateY = (offsetX / offsetWidth - 0.5) * 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotate = () => setRotate({ x: 0, y: 0 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center 
  bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white overflow-hidden 
  px-6 md:px-16 pt-24 md:pt-32"
    >
      {/* Floating Background Circles */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-green-500/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-32 right-24 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl"
      />

      {/* Left Content */}
      <div className="flex-1 z-10 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Hi, I’m <span className="text-yellow-300">Amirah Sofyani</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl font-medium mb-6"
        >
          <Typewriter
            words={[
              "AI & Data Science Enthusiast 🤖",
              "Solar Energy Innovator ☀️",
              "Cybersecurity Learner 🔐",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start"
        >
          <a
            href="#projects"
            aria-label="View my projects"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            aria-label="Contact me"
            className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6"
        >
          <a
            href="/Amirah_Sofyani_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Amirah Sofyani CV"
            className="relative inline-block px-8 py-3 font-semibold rounded-lg overflow-hidden neon-btn"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Right Avatar with Neon Glow */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotate}
        animate={{ rotateX: rotate.x, rotateY: rotate.y, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-[5px] neon-ring"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/avatar.png" // Replace with your photo
              alt="Portrait of Amirah Sofyani"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 cursor-pointer"
      >
        <FiArrowDownCircle size={40} className="text-yellow-300" />
      </motion.div>
    </section>
  );
}
