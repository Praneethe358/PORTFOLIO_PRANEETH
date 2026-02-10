'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  exit: { opacity: 0, x: -10, transition: { duration: 0.15 } },
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/[0.04]"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
        style={{ scaleX }}
      />

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
            <span className="text-accent text-sm font-bold">P</span>
          </div>
          <span className="text-white text-xl font-bold font-heading tracking-wide">
            Praneeth
          </span>
        </motion.a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-5 py-2.5 text-sm font-semibold tracking-widest transition-colors ${
                activeSection === item.id
                  ? 'text-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                  layoutId="activeNav"
                />
              )}
            </motion.a>
          ))}

          {/* Separator + Phone */}
          <span className="text-gray-600 mx-4">|</span>
          <motion.a
            href="tel:+919080689844"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone size={10} />
            <span className="tracking-wide">+91 9080689844</span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <motion.span
              className="h-0.5 w-full bg-accent rounded"
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="h-0.5 w-full bg-accent rounded"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="h-0.5 w-full bg-accent rounded"
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-bg-secondary/98 backdrop-blur-lg border-t border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-semibold tracking-widest text-gray-300 hover:text-accent transition-colors"
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
