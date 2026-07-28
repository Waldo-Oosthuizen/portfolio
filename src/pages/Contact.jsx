import { AnimatePresence, motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendContact = async (e) => {
    e.preventDefault();
    setFeedback('');
    setStatus('sending');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json();

      // Check for error
      if (!response.ok) {
        throw new Error(data.message);
      }

      setFeedback(data.message);
      setStatus('sent');

      setName('');
      setEmail('');
      setMessage('');
      // clear status and feedback
      setTimeout(() => {
        setStatus('idle');
        setFeedback('');
      }, 4000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback(
        error.message === 'Failed to fetch'
          ? 'Unable to reach the server. Please try again later.'
          : error.message
      );
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#121212] text-white py-24 px-6 md:px-20 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6">
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="h-[2px] w-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mb-12"></motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Let’s Connect
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Have a project, idea, or opportunity you’d like to discuss? I’d love
            to hear from you! Reach out via the form or through my social links
            below.
          </p>

          <div className="flex flex-col gap-4 text-gray-400">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-300 text-xl" />
              <a
                href="mailto:woosthuizen.dev@gmail.com"
                className="hover:text-orange-400 transition-colors duration-300">
                woosthuizen.dev@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin className="text-gray-300 text-xl" />
              <a
                href="https://www.linkedin.com/in/waldo-oosthuizen-8b4701234/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors duration-300">
                linkedin.com/in/waldo-oosthuizen-8b4701234/
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="text-gray-300 text-xl" />
              <a
                href="https://github.com/Waldo-Oosthuizen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors duration-300">
                github.com/Waldo-Oosthuizen
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={sendContact}
          className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-2xl shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Your Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Your Email</label>
            <input
              type="email"
              name="reply_to"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows="5"
              className="w-full p-3 rounded-lg bg-[#121212] border border-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              required></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full py-3 rounded-full font-medium transition duration-300 ${
              status === 'sending'
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`mt-5 flex items-center gap-3 rounded-xl border p-4 ${
                  status === 'sent'
                    ? 'border-green-500/30 bg-green-500/10 text-green-300'
                    : 'border-red-500/30 bg-red-500/10 text-red-300'
                }`}>
                {status === 'sent' ? (
                  <FaCheckCircle className="text-xl flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="text-xl flex-shrink-0" />
                )}

                <p className="text-sm md:text-base">{feedback}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
