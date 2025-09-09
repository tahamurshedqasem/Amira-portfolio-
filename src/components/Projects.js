"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "AI-Driven Solar Energy Efficiency",
      desc: "Developed an AI-powered control system to optimize solar energy efficiency by analyzing weather data and predicting performance. Focused on renewable energy and sustainability.",
      tech: [
        "Python",
        "Scikit-learn",
        "Flask",
        "Next.js",
        "Laravel",
        "MySQL",
        "Docker",
      ],
      img: "/projects/solar.png", // Add your project image in public/projects
      demo: "#", // Replace with link if you have a live demo
      github: "https://github.com/Amira22rr/solar-backend", // Replace with your repo link
    },
    // {
    //   title: "Cybersecurity Challenges (CTF)",
    //   desc: "Hands-on participation in Capture The Flag competitions focusing on penetration testing, network security, and problem-solving.",
    //   tech: ["CTF Tools", "Linux", "Python", "Networking"],
    //   img: "/projects/cyber.png", // Replace with relevant image
    //   demo: "#",
    //   github: "#",
    // },
    // {
    //   title: "AI & Data Science Mini Projects",
    //   desc: "Explored machine learning models, natural language processing, and data analysis as part of academic and personal learning journey.",
    //   tech: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    //   img: "/projects/datasci.png",
    //   demo: "#",
    //   github: "#",
    // },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-green-900 text-white px-6 md:px-16"
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
        Some of the key projects I’ve worked on — blending{" "}
        <span className="text-yellow-400">
          AI, programming, and real-world applications
        </span>
        .
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
            className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-800 to-green-800 hover:shadow-2xl hover:shadow-yellow-400/40 transition"
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
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
