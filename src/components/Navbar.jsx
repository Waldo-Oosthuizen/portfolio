import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import Close from './Close';

export default function SideNavWithBurger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Burger Icon */}
      <button
        onClick={toggleNav}
        className={`fixed top-6 left-6 bg-transparent border-none text-orange-400 text-3xl cursor-pointer z-50 transition-all duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
        <Burger />
      </button>

      {/* Close Icon */}
      <button
        onClick={toggleNav}
        className={`fixed top-6 left-64 sm:left-54 max-[460px]:left-40 bg-transparent border-none text-orange-400 text-3xl cursor-pointer z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <Close />
      </button>

      {/* Backdrop */}
      <div
        onClick={toggleNav}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}></div>

      {/* Side Nav */}
      <nav
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#1e1e1e] to-[#121212] text-white flex flex-col justify-between transition-all duration-500 ease-in-out z-40 shadow-2xl overflow-hidden ${
          isOpen ? 'w-[280px] p-8' : 'w-0 p-0'
        }`}>
        {/* Top Section */}
        <div
          className={`transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`}>
          <Link
            to="/"
            className="block text-3xl font-bold tracking-wide mb-12 text-orange-400 hover:text-white transition-colors">
            Waldo
          </Link>

          <ul className="space-y-6 text-gray-300">
            <li>
              <Link
                to="/"
                onClick={toggleNav}
                className="text-lg hover:text-orange-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleNav}
                className="text-lg hover:text-orange-400 transition-colors duration-200">
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={toggleNav}
                className="text-lg hover:text-orange-400 transition-colors duration-200">
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={toggleNav}
                className="text-lg hover:text-orange-400 transition-colors duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleNav}
                className="text-lg hover:text-orange-400 transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Section */}
        <div
          className={`pt-12 border-t border-gray-700 mt-8 transition-all duration-500 ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8 pointer-events-none'
          }`}>
          <p className="text-sm text-gray-400 mb-3">Connect with me:</p>
          <div className="flex space-x-4 text-gray-300">
            <a
              href="https://github.com/Waldo-Oosthuizen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/waldo-oosthuizen-8b4701234/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
