"use client";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400">Amirah Sofyani</span>. All rights
          reserved.
        </p>

        {/* Middle - Quick Links */}
        <div className="flex gap-6 text-sm">
          <Link href="#home" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        {/* Right - Back to Top */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 rounded-full bg-yellow-400 text-black shadow-lg neon-footer-btn"
          aria-label="Back to Top"
        >
          <FaArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
