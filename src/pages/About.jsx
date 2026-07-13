import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaPhp,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiCplusplus } from 'react-icons/si';
import { FaFilePdf } from 'react-icons/fa';
// import cv from '/Waldo_CV.pdf';

export default function About() {
  const techStack = [
    // Frontend
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },

    // Backend / Programming
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },

    // Database
    { name: 'SQL', icon: <FaDatabase /> },

    // Tools
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },

    // UI Enhancement
    { name: 'Framer Motion', icon: <SiFramer /> },
  ];

  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-[#1e1e1e] to-[#121212] text-white flex flex-col items-center justify-center px-6 md:px-20 py-24">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-orange-400">
          About Me
        </motion.h1>

        {/* Text Section */}
        <div className="text-gray-300 leading-relaxed text-center md:text-left space-y-6">
          {[
            <>
              Hi, I’m{' '}
              <span className="text-orange-400 font-semibold">Waldo</span> — an
              aspiring full stack software / web developer and third-year{' '}
              <span className="font-semibold">BSc IT student.</span> I build
              applications from interfaces to backend logic and enjoy solving
              real-world problems through software.
            </>,

            <>
              I enjoy working with technologies like{' '}
              <span className="text-orange-400 font-semibold">React</span>,{' '}
              <span className="text-orange-400 font-semibold">Python</span>,{' '}
              <span className="text-orange-400 font-semibold">PHP</span>, and{' '}
              <span className="text-orange-400 font-semibold">SQL</span> to
              create systems that are reliable, responsive, and user-focused.
            </>,

            <>
              <span className="text-gray-400 italic">
                When I’m not coding, I’m probably learning a new guitar riff 🎸,
                polishing one of my side projects, or playing a strategy game.
              </span>
            </>,
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-lg">
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* View My CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center md:justify-start mt-10">
          {''}{' '}
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition duration-300 shadow-md shadow-orange-500/20">
            <FaFilePdf className="text-lg" aria-disabled />
            View My CV
          </a>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8 mt-16 text-4xl text-orange-400">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center space-y-2 text-gray-300 hover:text-orange-400 transition-colors">
              {tech.icon}
              <p className="text-sm">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
