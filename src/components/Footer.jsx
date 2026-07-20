import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import cv from '/Waldo_CV.pdf';

export default function Footer() {
  return (
    <footer
      className="relative
text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto w-[90vw] px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Portfolio Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              Waldo Oosthuizen
            </h2>
          </div>
          {/* Social Media Links */}
          <div className="flex gap-5 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/waldo-oosthuizen-8b4701234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-all duration-300">
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Waldo-Oosthuizen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-100 transition-all duration-300">
              <FaGithub />
            </a>
          </div>
          Call to Action
          <div className="text-center md:text-right">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition duration-300 shadow-md shadow-orange-500/20">
              <FaFilePdf className="text-lg" />
              View My CV
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Waldo. All rights reserved.</p>
      </div>
    </footer>
  );
}
