'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const proficiencies = [
    {
      category: 'AI & Machine Learning',
      pillClass: 'bg-indigo-500/20 text-indigo-200 border-indigo-400/30',
      skills: ['Computer Vision', 'NLP', 'LLMs', 'Gesture Recognition', 'AI Automation', 'Prompt Engineering'],
    },
    {
      category: 'Frameworks & Libraries',
      pillClass: 'bg-sky-500/20 text-sky-200 border-sky-400/30',
      skills: ['LangChain', 'Ollama', 'OpenCV', 'MediaPipe', 'Hugging Face', 'Scikit-learn'],
    },
    {
      category: 'Languages',
      pillClass: 'bg-amber-500/20 text-amber-200 border-amber-400/30',
      skills: ['Python', 'JavaScript', 'HTML / CSS', 'SQL', 'Bash'],
    },
    {
      category: 'Web & APIs',
      pillClass: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
      skills: ['FastAPI', 'Flask', 'REST APIs', 'Telegram Bot API', 'Vercel', 'React'],
    },
    {
      category: 'Tools & Platforms',
      pillClass: 'bg-orange-500/20 text-orange-200 border-orange-400/30',
      skills: ['Git & GitHub', 'VS Code', 'Jupyter', 'Docker', 'Postman', 'Linux'],
    },
    {
      category: 'Domains & Concepts',
      pillClass: 'bg-lime-500/20 text-lime-200 border-lime-400/30',
      skills: ['RAG', 'Offline-first AI', 'Voice Interfaces', 'AI Accessibility', 'EdTech', 'Production Deployment'],
    },
    {
      category: 'Data & Backend',
      pillClass: 'bg-rose-500/20 text-rose-200 border-rose-400/30',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Vector Databases', 'Data Preprocessing', 'ETL Pipelines'],
    },
    {
      category: 'Soft Skills',
      pillClass: 'bg-zinc-500/30 text-zinc-200 border-zinc-400/30',
      skills: ['Client Communication', 'Problem Solving', 'Self-directed Learning', 'Project Ownership', 'Technical Documentation'],
    },
    {
      category: 'MLOps & System Design',
      pillClass: 'bg-red-500/20 text-red-200 border-red-400/30',
      skills: ['Model Serving', 'API Containerization', 'CI/CD Pipelines', 'Inference Optimization', 'System Architecture', 'Edge Deployment'],
    },
    {
      category: 'Multimodal & Interfaces',
      pillClass: 'bg-teal-500/20 text-teal-200 border-teal-400/30',
      skills: ['Speech Recognition', 'Text-to-Speech', 'Webcam / Sensor Input', 'PDF Processing', 'Slide Generation', 'Bot Interfaces'],
    },
  ];

  return (
    <section id="skills" className="section bg-bg py-10 md:py-12" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 inline-block">
            {'Technical Proficiency'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true, margin: '-50px' }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Proficiency Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {proficiencies.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="border border-white/10 rounded-xl p-5 bg-white/[0.03]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.08 }}
              whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-4">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${category.pillClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
