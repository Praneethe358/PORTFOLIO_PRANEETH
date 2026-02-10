'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const hidden = { opacity: 0 };
const ease = [0.25, 0.46, 0.45, 0.94] as const;

const roles = [
  'AI & Data Science Student',
  'Aspiring Data Scientist',
  'Machine Learning Enthusiast',
  'NLP Explorer',
];

const Hero = ({ animate: ready = false }: { animate?: boolean }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    if (!ready) return;

    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, ready]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg pt-20">
      {/* Subtle animated background particles with parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: parallaxY }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/[0.03]"
            style={{
              width: 300 + i * 150,
              height: 300 + i * 150,
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{
              x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, -20 * (i + 1), 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left — Text Content */}
          <div className="z-10 flex flex-col justify-center">
            <motion.p
              className="text-accent text-lg md:text-xl font-medium mb-3 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : hidden}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-2 font-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={ready ? { opacity: 1, y: 0 } : hidden}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              Praneeth
            </motion.h1>

            {/* Animated accent line under name */}
            <motion.div
              className="h-1 bg-accent rounded-full mb-5"
              initial={{ width: 0, opacity: 0 }}
              animate={ready ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
            />

            {/* Typewriter role text */}
            <motion.div
              className="mb-8 h-8 flex items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : hidden}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              <span className="text-gray-400 text-base md:text-lg">
                {displayText}
              </span>
              <motion.span
                className="inline-block w-[2px] h-5 bg-accent ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : hidden}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="btn-accent inline-block relative"
                whileHover={{ scale: 1.08, filter: 'brightness(1.25)', boxShadow: '0 0 30px rgba(212, 164, 58, 0.6)' }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Hire Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Floating Portrait Image */}
          <motion.div
            className="relative flex justify-end items-center"
            initial={{ opacity: 0, x: 80 }}
            animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
          >
            <motion.div
              className="relative w-full max-w-lg"
              animate={ready ? { y: [0, -12, 0] } : {}}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Glow ring behind portrait */}
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-accent/5 blur-2xl"
                animate={ready ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10 pointer-events-none" />
              <div className="portrait-clip overflow-hidden">
                <img
                  src="/images/praneeth-hero.jpeg"
                  alt="Praneeth"
                  className="w-full h-[500px] md:h-[600px] object-cover object-top grayscale brightness-90"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Social Icons Bar — bottom center */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={ready ? { opacity: 1, y: 0 } : hidden}
        transition={{ duration: 0.6, delay: 0.85 }}
      >
        <div className="flex items-center gap-4 bg-bg-secondary/80 backdrop-blur-md rounded-full px-6 py-3 border border-white/5">
          <motion.a
            href="https://github.com/Praneethe358"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <FaGithub size={16} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/praneeth-e-4240a3349"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <FaLinkedinIn size={16} />
          </motion.a>
          <motion.a
            href="mailto:praneeth0358@gmail.com"
            className="text-gray-400 hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <FaEnvelope size={16} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
