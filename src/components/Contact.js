"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-green-900 text-white px-6 md:px-16"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Contact <span className="text-yellow-400">Me</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center text-lg text-gray-300 mb-12"
      >
        I’d love to connect and collaborate on{" "}
        <span className="text-yellow-400">
          AI, data science, or web development
        </span>{" "}
        projects. Send me a message or reach out via my social links below.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 bg-gradient-to-br from-indigo-800 to-green-800 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-transparent border-2 border-gray-400 focus:border-yellow-400 outline-none neon-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-transparent border-2 border-gray-400 focus:border-yellow-400 outline-none neon-input"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-transparent border-2 border-gray-400 focus:border-yellow-400 outline-none neon-input"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center md:items-start gap-6"
        >
          <p className="text-lg text-gray-300 mb-4">You can also find me on:</p>
          <div className="flex gap-6 text-3xl">
            <a
              href="mailto:amirah.sufyani@gmail.com"
              className="neon-icon hover:text-yellow-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Amira22rr"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-icon hover:text-yellow-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/amirah-sofyani"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-icon hover:text-yellow-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
