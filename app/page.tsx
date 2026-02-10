'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/* ───── Cursor Glow (desktop only) ───── */
const CursorGlow = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none z-[2] hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(212,164,58,0.04) 0%, transparent 70%)',
      }}
    />
  );
};

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate near the end
        const step = prev < 70 ? 2 : prev < 90 ? 3 : 5;
        return Math.min(prev + step, 100);
      });
    }, 50);

    const timeout = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  const nameLetters = 'PRANEETH'.split('');

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
      exit={{ opacity: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Logo circle */}
      <motion.div
        className="relative mb-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', damping: 12, stiffness: 100 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="#d4a43a"
            strokeWidth="2"
            strokeDasharray="226"
            strokeDashoffset={226 - (226 * progress) / 100}
            strokeLinecap="round"
            style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
          />
          <motion.text
            x="40"
            y="44"
            textAnchor="middle"
            fill="#d4a43a"
            fontWeight="700"
            fontSize="28"
            fontFamily="Poppins, Inter, sans-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            P
          </motion.text>
        </svg>
      </motion.div>

      {/* Animated name */}
      <div className="flex gap-[3px] mb-6 overflow-hidden">
        {nameLetters.map((letter, i) => (
          <motion.span
            key={i}
            className="text-2xl md:text-3xl font-heading font-extrabold text-white tracking-[0.2em]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Role tagline */}
      <motion.p
        className="text-gray-500 text-sm tracking-[0.3em] uppercase font-medium mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        AI & Data Science
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>

      {/* Progress text */}
      <motion.span
        className="text-xs text-gray-600 mt-3 font-mono tabular-nums"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  const handleComplete = useCallback(() => {
    window.scrollTo(0, 0);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
      // Small delay so exit animation of preloader plays first
      const t = setTimeout(() => {
        window.scrollTo(0, 0);
        setContentReady(true);
      }, 100);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <>
      <CursorGlow />

      {/* Navbar always visible, outside blur animation */}
      {!loading && <Navigation />}

      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={handleComplete} />}
      </AnimatePresence>

      {/* Main content — starts blurred, then sharpens */}
      <motion.main
        className="bg-bg min-h-screen"
        style={{ overflow: loading ? 'hidden' : 'visible', height: loading ? '100vh' : 'auto' }}
        initial={{ filter: 'blur(20px)', opacity: 0, scale: 1.02 }}
        animate={
          contentReady
            ? { filter: 'blur(0px)', opacity: 1, scale: 1 }
            : { filter: 'blur(20px)', opacity: 0, scale: 1.02 }
        }
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <section id="home">
          <Hero animate={contentReady} />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
