'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const quickInfo = [
    { label: 'Role', value: 'AI & Data Science Student' },
    { label: 'Core Stack', value: 'Python, SQL, Machine Learning, NLP' },
    { label: 'Strengths', value: 'Analytical thinking, fast learner, problem solving' },
    { label: 'Focus', value: 'Data-driven systems & applied AI' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-bg-secondary/40 py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title — slides up */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-3">
            About Me
          </h2>
          <motion.div
            className="h-1 bg-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        {/* Content Grid — Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Left — Portrait slides in from left */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -120 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
            >
              <motion.div
                className="absolute -inset-3 bg-accent/10 rounded-2xl blur-xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <img
                src="/images/praneeth-about.jpeg"
                alt="Praneeth"
                className="relative w-[260px] md:w-[320px] h-[330px] md:h-[400px] object-cover object-top rounded-2xl border border-white/5"
              />
            </motion.div>
          </motion.div>

          {/* Right — Text slides in from right with staggered children */}
          <div>
            {[
              // Intro
              <motion.p
                key="intro"
                className="text-gray-300 text-[16px] leading-relaxed mb-3"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, ease, delay: 0.3 }}
              >
                I&apos;m Praneeth, an AI &amp; Data Science student at <span className="text-accent font-medium">Karunya Institute of Technology</span>, focused on designing data-driven and machine learning–based solutions.
              </motion.p>,

              <motion.p
                key="workflow"
                className="text-gray-400 text-[16px] leading-relaxed mb-3"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, ease, delay: 0.45 }}
              >
                I work with <span className="text-white font-medium">Python, SQL</span>, and end-to-end ML workflows, including data preprocessing, feature engineering, model training, and evaluation. I approach problems with a strong analytical mindset and emphasize clean, efficient, and scalable code.
              </motion.p>,

              <motion.p
                key="foundation"
                className="text-gray-400 text-[16px] leading-relaxed mb-4"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, ease, delay: 0.6 }}
              >
                I&apos;m continuously strengthening my foundation in AI, statistics, and applied machine learning, while building skills that translate directly to real-world systems.
              </motion.p>,

              <motion.p
                key="quickinfo-label"
                className="text-gray-400 text-[16px] mb-2"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, ease, delay: 0.75 }}
              >
                ⚡ Quick Info
              </motion.p>,

              <div key="quickinfo" className="space-y-1.5 mb-4">
                {quickInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease, delay: 0.85 + i * 0.1 }}
                  >
                    <span className="text-accent mt-1 text-xs">▹</span>
                    <span className="text-gray-300 text-[16px]"><span className="text-white font-medium">{item.label}:</span> {item.value}</span>
                  </motion.div>
                ))}
              </div>,

              // Download CV Button
              <motion.div
                key="cv"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease, delay: 1.75 }}
              >
                <motion.a
                  href="#"
                  className="btn-outline inline-block"
                  whileHover={{ scale: 1.06, filter: 'brightness(1.15)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  Download CV
                </motion.a>
              </motion.div>,
            ]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
