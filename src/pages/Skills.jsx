import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaReact,
  FaJs,
  FaCloud,
  FaDatabase,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiPhp } from 'react-icons/si';

export default function Skills() {
  return (
    <section
      id="skills"
      className=" bg-gradient-to-b from-[#1e1e1e] to-[#121212] text-white px-6 md:px-20 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-orange-400">Skills</h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I’m a passionate and curious BSc IT student with a strong foundation
            in
            <span className="text-orange-400 font-semibold">
              {' '}
              web development.
            </span>{' '}
            I love building efficient, user-friendly systems while constantly
            learning new technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <SkillCard
            icon={<FaPython className="text-4xl text-gray-400" />}
            title="Python"
            desc="Object-Oriented Programming, Tkinter GUIs, SQLite integration"
          />

          <SkillCard
            icon={<FaJs className="text-4xl text-gray-400" />}
            title="JavaScript"
            desc="ES6+, DOM manipulation, interactive web functionality"
          />

          <SkillCard
            icon={<FaReact className="text-4xl text-gray-400" />}
            title="React"
            desc="Component-based UI, routing, state-driven applications"
          />

          <SkillCard
            icon={<SiTailwindcss className="text-4xl text-gray-400" />}
            title="Frontend Development"
            desc="HTML, CSS, TailwindCSS, responsive design"
          />

          <SkillCard
            icon={<SiPhp className="text-4xl text-gray-400" />}
            title="Backend Development"
            desc="PHP, form handling, authentication logic"
          />

          <SkillCard
            icon={<FaDatabase className="text-4xl text-gray-400" />}
            title="Database Management"
            desc="SQL, MySQL, SQLite, CRUD operations"
          />

          <SkillCard
            icon={<FaCloud className="text-4xl text-gray-400" />}
            title="Cloud & Deployment"
            desc="AWS Cloud Practitioner, Firebase, web hosting"
          />

          <SkillCard
            icon={<FaGithub className="text-4xl text-gray-400" />}
            title="Tools & Workflow"
            desc="Git, GitHub, VS Code, version control workflows"
          />

          <SkillCard
            icon={<FaDatabase className="text-4xl text-gray-400" />}
            title="Application Development"
            desc="Full-stack applications, database-driven systems"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Skill Card Component
function SkillCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#1e1e1e] p-6 rounded-2xl shadow-md hover:shadow-orange-400/30 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-orange-400">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}
