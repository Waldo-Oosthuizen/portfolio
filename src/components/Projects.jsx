import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Loop',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    description:
      'A custom-built, full-stack event management platform developed from scratch. Features include secure user authentication with password hashing, CRUD event management, private messaging, and real-time search. Emphasizes backend security through prepared statements and rigorous session handling.',
    link: 'https://loop.waldowebdev.co.za/',
    github: '#',
    buttonText: 'Live Demo',
  },
  {
    title: 'Staccato',
    tech: ['React', 'TailwindCSS', 'Firebase', 'Firestore', 'Lucide Icons'],
    description:
      'A real-time attendance tracker for music teachers, developed with React and Firebase. Includes Google Authentication, Firestore syncing, and a responsive UI. Currently expanding with analytics and progress-tracking features.',
    link: 'https://waldo-oosthuizen.github.io/staccato/',
    github: 'https://waldo-oosthuizen.github.io/staccato/',
    buttonText: 'Live Demo',
  },
  {
    title: 'NeoVerse',
    tech: ['C++', 'STL', 'Data Structures', 'Algorithms', 'File I/O'],
    description:
      'A console-based AI City Survival engine designed for real-time municipal resource management. Built using C++ with a focus on optimized memory usage, custom class hierarchies for event handling, and algorithmic efficiency (Big-O analysis) to process complex city data.',
    github: 'https://github.com/Waldo-Oosthuizen/neoverse',
  },

  {
    title: 'Takealot Product Analytics Pipeline',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'Scikit-learn'],
    description:
      'Developed an automated data pipeline that scrapes product data from Takealot, cleans the dataset, and prepares it for predictive models to analyze pricing trends.',
    github: 'https://github.com/Waldo-Oosthuizen/takealot_product_web_scraper',
  },
  {
    title: 'PayPro',
    tech: ['PHP', 'HTML', 'CSS', 'Sessions'],
    description:
      'PayPro is a PHP-based finance simulator created during my 2nd-year IT degree. It lets users manage virtual balances, process payments with live fee calculations, and request refunds securely. Includes session-based balance management and transaction history tracking.',
    link: 'https://paypro.waldowebdev.co.za/',
    github: 'https://github.com/Waldo-Oosthuizen/paypro',
    buttonText: 'Live Demo',
  },
  {
    title: 'Fret Not Music School',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    description:
      'A fully custom website for my own music education business. Showcases courses, lesson information, and contact forms for guitar, bass, ukulele, piano, and drums. Designed to strengthen brand identity and simplify new student onboarding.',
    link: 'https://fretnot-music-school.co.za/',
    github: 'https://github.com/Waldo-Oosthuizen/fretnotmusicschool',
    buttonText: 'Live site',
  },
];

export default function PortfolioProjects() {
  return (
    <section
      className="min-h-screen py-24 bg-[#1e1e1e] text-white"
      id="projects">
      <div className="max-w-7xl mx-auto w-[90vw]">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-400">
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#141414] border border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col">
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-gray-300 leading-relaxed max-w-md">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-4">
                {/* Live Demo Button (only if link exists) */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-5 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition duration-300">
                    {project.buttonText || 'Live Demo'}
                  </a>
                )}

                {/* GitHub Button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-900 text-white px-5 py-2 rounded-full font-medium border border-gray-700 hover:bg-gray-800 transition duration-300">
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
