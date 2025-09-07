"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "EduPortal",
      desc: "A full-stack learning platform for international exams (TIMSS, PISA, PIRLS, TOEFL). Built with Next.js, Laravel, Flask, and integrated ML models.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Laravel",
        "Flask",
        "MySQL",
        "Machine Learning",
      ],
      img: "/projects/eduportal.png",
      demo: "https://eduportal.pro",
      github: "https://github.com/tahamurshedqasem/EduPortal-website",
    },
    {
      title: "ShelfSmart",
      desc: "An AI-powered smart shelf system that manages inventory, detects missing products, and provides analytics. Built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "AI/ML"],
      img: "/projects/shelfsmart.png",
      demo: "https://shelfsmart-git-main-tahas-projects-bdab7f35.vercel.app?_vercel_share=42Uge8po5G2msK6270ZQt7Aw8PlaKdoU",
      github: "https://github.com/tahamurshedqasem/ShelfSmart",
    },
    {
      title: "Musanada Travels",
      desc: "A modern travel agency platform offering destinations, packages, and booking management. Focused on user-friendly design for Arabic users.",
      tech: ["Next.js", "Tailwind CSS"],
      img: "/projects/musnada.png",
      demo: "https://musanada-travels-git-main-tahas-projects-bdab7f35.vercel.app?_vercel_share=14vKQLriqTfnyV6HMpx3h3PxVhrOk1Iy",
      github: "https://github.com/tahamurshedqasem/Musanada-Travels",
    },
    {
      title: "PcapVision",
      desc: "An AI-powered platform that analyzes .pcap network files, detects suspicious activities, and provides visual insights for security decisions.",
      tech: ["Next.js", "Flask", "Laravel", "Cybersecurity"],
      img: "/projects/pcap.png",
      demo: "https://pcap-frontend-git-main-tahas-projects-bdab7f35.vercel.app?_vercel_share=dAxeGT7aQLcu4Bv0w7JDMP183JLZsvVc",
      github: "https://github.com/tahamurshedqasem/pcap-frontend",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white px-6 md:px-16"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        My <span className="text-yellow-400">Projects</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center text-lg text-gray-300 mb-12"
      >
        Here are some of the main projects I’ve built — combining web
        development, machine learning, and real-world problem solving.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-800 to-indigo-800 hover:shadow-2xl hover:shadow-yellow-400/40 transition"
          >
            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs md:text-sm bg-yellow-400/90 text-black rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
