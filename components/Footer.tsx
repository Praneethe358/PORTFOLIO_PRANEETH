'use client';

import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary/60 border-t border-white/5 relative">
      {/* Animated top separator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-1 font-heading">Praneeth</h3>
            <p className="text-gray-500 text-sm">
              AI & Data Science Student | Karunya Institute of Technology
            </p>
          </div>

          <div className="text-center md:text-right text-gray-500 text-sm">
            <p>© {currentYear} Praneeth. All rights reserved.</p>
            <p className="mt-1">
              Built with <span className="text-accent">♥</span> using Next.js & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute -top-5 right-8 w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <FaArrowUp size={14} />
      </motion.button>
    </footer>
  );
};

export default Footer;
