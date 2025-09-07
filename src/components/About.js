"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

export default function About() {
  const timeline = [
    {
      icon: <FaGraduationCap />,
      title: "Bachelor of Computer Science",
      place:
        "Sana’a University – College of Computer and Information Technology",
      date: "2024 - 2025",
      desc: "Focused on core computer science subjects with strong emphasis on software engineering, web development, and system design.",
    },
    {
      icon: <FaBriefcase />,
      title: "Intern - Tamam Company",
      place: "Sana’a, Yemen",
      date: "Aug 2024 – Dec 2024",
      desc: "Developed and maintained full-stack applications using Laravel and Vue.js. Assisted in backend development, API integration, and database management. Gained hands-on experience in project management and team collaboration.",
    },
  ];

  const skills = [
    "PHP (Laravel)",
    "Flask",
    "React.js",
    "Next.js",
    "Vue.js",
    "Bootstrap",
    "Tailwind CSS",
    "SQLite",
    "Python (ML & Data Analysis)",
    "Docker",
    "Git/GitHub",
    "UML & Agile",
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white px-6 md:px-16"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        About <span className="text-yellow-400">Me</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center text-lg text-gray-300 mb-12"
      >
        Motivated and detail-oriented Full Stack Web Developer with expertise in
        Laravel, Vue.js, React, and Next.js. Skilled in backend and frontend
        development, machine learning, and data analysis. Passionate about
        building scalable and efficient applications.
      </motion.p>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto mb-16 relative">
        <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-400 to-pink-500"></div>
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="relative pl-16 mb-12"
          >
            <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black shadow-lg">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <span className="block text-sm text-yellow-400 mb-2">
              {item.place} — {item.date}
            </span>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-8"
      >
        My <span className="text-yellow-400">Skills</span>
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="p-4 text-center rounded-lg bg-gradient-to-br from-purple-800 to-indigo-800 shadow-lg neon-skill cursor-pointer"
          >
            <FaCode className="text-yellow-400 text-3xl mx-auto mb-2" />
            <span className="font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
