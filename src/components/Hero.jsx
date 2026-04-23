import { motion } from 'framer-motion';
import { useRef } from 'react';
import me from '../assets/me.png';

export default function Home() {
  const heroRef = useRef(null);

  const floatingCode = [
    [
      { text: 'const', color: 'text-darkBlue' },
      { text: ' name', color: 'text-blue' },
      { text: ' =', color: 'text-white' },
      { text: ' "Waldo";', color: 'text-darkOrange' },
    ],

    [
      { text: 'const', color: 'text-darkBlue' },
      { text: ' role', color: 'text-blue' },
      { text: ' =', color: 'text-white' },
      { text: ' "Software Developer";', color: 'text-darkOrange' },
    ],

    [
      { text: 'const', color: 'text-darkBlue' },
      { text: ' frontend', color: 'text-blue' },
      { text: ' =', color: 'text-white' },
      {
        text: ' ["HTML", "CSS", "React"];',
        color: 'text-darkOrange',
      },
    ],

    [
      { text: 'const', color: 'text-darkBlue' },
      { text: ' backend', color: 'text-blue' },
      { text: ' =', color: 'text-white' },
      {
        text: ' ["PHP", "C++"];',
        color: 'text-darkOrange',
      },
    ],

    [
      { text: 'const', color: 'text-darkBlue' },
      { text: ' database', color: 'text-blue' },
      { text: ' =', color: 'text-white' },
      {
        text: ' ["SQL"];',
        color: 'text-darkOrange',
      },
    ],

    [
      { text: 'function', color: 'text-darkBlue' },
      { text: ' buildProject', color: 'text-yellow' },
      { text: '() ', color: 'text-darkYellow' },
      { text: '{ return ', color: 'text-[#FFC0CB]' },
      { text: '"Full Application";', color: 'text-darkOrange' },
      { text: ' }', color: 'text-darkYellow' },
    ],

    [
      { text: 'console.log', color: 'text-darkBlue' },
      {
        text: '("Building systems, not just interfaces.");',
        color: 'text-darkOrange',
      },
    ],
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1e1e1e] font-mono">
      <motion.div
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-[100vh] text-center px-6 py-10 ">
        {/* Blur Overlay for Mobile */}
        <div className="absolute inset-0 backdrop-blur-[1px] sm:backdrop-blur-none z-10" />
        {/* Floating Code Background */}
        {floatingCode.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.25, 0.75, 0.25],
              y: [0, -10, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            className="absolute text-xs md:text-sm font-mono z-0 text-gray-400/70 pointer-events-none"
            style={{
              top: `${
                window.innerWidth < 640 ? 8 + index * 16 : 8 + index * 12
              }%`,
              left: `${index % 2 === 0 ? 8 : 65}%`,
              whiteSpace: 'nowrap',
            }}>
            {line.map((token, i) => (
              <span key={i} className={token.color}>
                {token.text}
              </span>
            ))}
          </motion.div>
        ))}

        {/* Main Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-orange-400">Waldo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl bg-gradient-to-r from-darkOrange to-darkYellow bg-clip-text text-transparent font-medium mb-8">
            BSc IT Student | Full-Stack Developer
          </motion.p>

          <motion.img
            src={me}
            alt="Waldo"
            className="w-40 md:w-56 rounded-full border-4 border-gray-700 shadow-lg hover:shadow-2xl
              hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
