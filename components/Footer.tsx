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
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/[0.05]" style={{ background: '#030712' }}>
      {/* ─── Decorative Elements ─── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top edge glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        {/* Subtle radial glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[200px] opacity-10 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #38bdf8 0%, #8b5cf6 50%, transparent 100%)' }}
        />

        {/* Floating background particles (CSS only) */}
        <div className="absolute top-10 left-[15%] w-1 h-1 rounded-full bg-accent/30 animate-pulse" />
        <div className="absolute top-40 right-[10%] w-1.5 h-1.5 rounded-full bg-violet-500/20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-white mb-4 tracking-tighter flex items-center gap-1 group">
                PRANEETH
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300" />
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Designing and building intelligent systems with a focus on data-driven excellence and modern user experiences.
              </p>
              
              {/* Social Stack */}
              <div className="flex gap-2">
                {footerLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 px-1 border-l-2 border-accent">
              Navigation
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-gray-400 text-[13px] hover:text-accent flex items-center group/link transition-colors duration-200"
                  whileHover={{ x: 3 }}
                >
                  <span className="w-0 group-hover/link:w-2 h-[1px] bg-accent mr-0 group-hover/link:mr-2 transition-all duration-300 opacity-0 group-hover/link:opacity-100" />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info (Compact) */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 px-1 border-l-2 border-violet-500">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a href="mailto:praneeth0358@gmail.com" className="group flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <FaEnvelope size={12} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Email Me</p>
                  <p className="text-gray-300 text-xs">praneeth0358@gmail.com</p>
                </div>
              </a>
              <div className="group flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <FaLinkedin size={12} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Connect</p>
                  <p className="text-gray-300 text-xs">Praneeth E</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <FaHeart size={40} className="text-accent" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Have a project?</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Let&apos;s build something exceptional together.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-xs font-bold text-accent group/btn"
              >
                Start a conversation 
                <span className="group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-[11px] font-medium tracking-tight">
            © {currentYear} <span className="text-gray-400">Praneeth E</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-gray-500 hover:text-accent transition-colors"
              whileHover={{ y: -2 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest mb-[1px]">Back to Top</span>
              <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                <FaArrowUp size={10} />
              </div>
            </motion.button>
          </div>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;

