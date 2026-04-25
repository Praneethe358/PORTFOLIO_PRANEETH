'use client';

import { motion } from 'framer-motion';
import { FaArrowUp, FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/praneeth-e-4240a3349', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Praneethe358', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:praneeth0358@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: '#080b14' }}>
      {/* Top gradient line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #38bdf8 30%, #8b5cf6 70%, transparent 100%)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-14 pb-8 relative">
        <motion.div
          className="grid md:grid-cols-3 gap-10 items-start mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-2 font-heading tracking-tight">
              Praneeth
              <span className="text-accent">.</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AI & Data Science Student crafting intelligent solutions at the intersection of technology and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap md:justify-center gap-x-5 gap-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-accent transition-colors duration-300"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="md:text-right">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
              Social
            </h4>
            <div className="flex md:justify-end gap-3">
              {footerLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={14} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-[1px] bg-white/[0.04] mb-6" />

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            © {currentYear} Praneeth. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <FaHeart size={10} className="text-red-500/70 animate-pulse" /> 
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      
    </footer>
  );
};

export default Footer;
