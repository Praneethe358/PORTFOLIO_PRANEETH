'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock3, Code2, Target, MapPin } from 'lucide-react';

const ease = [0.25, 0.46, 0.45, 0.94];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const quickInfoColors: Record<string, string> = {
    Status: 'text-sky-300',
    'Core Stack': 'text-amber-300',
    Focus: 'text-emerald-300',
  };
  const focusPillColors = [
    'bg-amber-500/10 text-amber-200 border-amber-400/30',
    'bg-cyan-500/10 text-cyan-200 border-cyan-400/30',
    'bg-emerald-500/10 text-emerald-200 border-emerald-400/30',
    'bg-rose-500/10 text-rose-200 border-rose-400/30',
    'bg-indigo-500/10 text-indigo-200 border-indigo-400/30',
  ];

  const quickInfo = [
    { label: 'Status', value: 'B.TECH 2nd year at Karunya Institute of Technology and Sciences', icon: Clock3 },
    { label: 'Core Stack', value: 'Python, SQL, Machine Learning , MERN', icon: Code2 },
    { label: 'Focus', value: 'Deployed AI systems', icon: Target },
    
  ];

  const focusItems = ['Computer Vision', 'NLP', 'Machine Learning', 'AI Accessibility', 'Web Development'];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-bg-secondary/40 py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title — text reveal animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-3 inline-block">
            {'About Me'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="h-1 bg-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        {/* Content Grid — Image Left, Text Right */}
        <div className="grid md:grid-cols-[320px,1fr] lg:grid-cols-[360px,1fr] gap-12 md:gap-12 lg:gap-14 items-start">
          {/* Left — Portrait slides in from left */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: -120 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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
                className="text-white/90 text-[17px] md:text-[18px] leading-relaxed mb-4 font-heading"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, ease, delay: 0.3 }}
              >
                I build AI systems that make <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text font-medium">real-world services</span> accessible to everyone.
              </motion.p>,

              <motion.p
                key="workflow"
                className="text-gray-300 text-[16px] leading-relaxed mb-4"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, ease, delay: 0.45 }}
              >
                I&apos;m Praneeth, an AI &amp; Data Science student at <span className="text-white font-medium">Karunya Institute of Technology and Science</span>, driven by one goal: building systems that work in the real world. My work spans computer vision, NLP, and end-to-end ML pipelines - from raw data to deployed product.
              </motion.p>,

              <motion.p
                key="foundation"
                className="text-gray-300 text-[16px] leading-relaxed mb-5"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, ease, delay: 0.6 }}
              >
                I&apos;ve shipped a tutoring platform to a paying client, built a gesture-controlled presentation system using OpenCV and MediaPipe, and developed an AI coding assistant using RAG and LangChain. I also built a fisherman border-detection system as a proof of how AI can protect lives.
              </motion.p>,

              <motion.p
                key="quickinfo-label"
                className="text-white/85 text-[15px] leading-relaxed mb-4 font-heading"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.7, ease, delay: 0.75 }}
              >
                
              </motion.p>,

              <motion.div
                key="quickinfo"
                className="space-y-2.5 mb-5"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease, delay: 0.9 }}
              >
                {quickInfo.map((item, index) => {
                  const tone = quickInfoColors[item.label] ?? 'text-accent/80';
                  return (
                    <motion.div
                      key={item.label}
                      className={`flex items-start gap-2.5 pb-2.5 ${index < quickInfo.length - 1 ? 'border-b border-white/10' : ''}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.12 }}
                    >
                      <span className={`mt-0.5 ${tone}`}>
                        <item.icon className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className={`text-[10px] uppercase tracking-[0.24em] ${tone}`}>
                          {item.label}
                        </p>
                        <p className="text-white text-[14px] font-semibold">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>,

              <motion.div
                key="focus-label"
                className="text-gray-400 text-[12px] uppercase tracking-[0.24em] mb-3 font-heading"
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                transition={{ duration: 0.6, ease, delay: 1.25 }}
              >
                Areas of Focus
              </motion.div>,

              <motion.div
                key="focus-pills"
                className="flex flex-wrap gap-2.5 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, ease, delay: 1.35 }}
              >
                {focusItems.map((item, idx) => (
                  <motion.span
                    key={item}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${focusPillColors[idx % focusPillColors.length]}`}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>,

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
