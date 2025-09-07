"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX, FiArrowUp } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  // Link animation variants
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg animate-gradient-x"
            : "bg-transparent"
        }`}
      >
        {/* Navbar content */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            whileHover={{ rotate: -5, scale: 1.1 }}
            className="text-2xl font-extrabold text-white tracking-wide cursor-pointer"
          >
            Taha Murshed
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-white font-semibold relative">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                className="group relative"
              >
                <Link href={link.href}>{link.name}</Link>
                {/* Magic underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </motion.div>
            ))}

            {/* Download CV button */}
            <a
              href="/taha's cv ats.pdf" // Place your CV file inside public/
              download
              className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition ml-4"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white text-3xl">
            {open ? (
              <FiX onClick={() => setOpen(false)} />
            ) : (
              <FiMenu onClick={() => setOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-gradient-to-b from-purple-700 to-pink-700 text-white px-6 py-6 space-y-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  className="text-lg font-medium"
                >
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* CV button mobile */}
              <a
                href="/taha-cv.pdf"
                download
                className="block text-center px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="h-[4px] bg-yellow-400 origin-left"
        />
      </motion.nav>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-yellow-400 text-black shadow-lg hover:bg-yellow-300 transition-colors z-50"
          >
            <FiArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
