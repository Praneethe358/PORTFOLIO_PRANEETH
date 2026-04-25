'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';


/* ─── Types ─── */
interface Project {
  id: number;
  title: string;
  category: string;
  summary: string;
  bullets: string[];
  tech: string[];
  badgeTone: string;
  accentColor: string;
  glowColor: string;
  meta: string;
  isLive?: boolean;
  github: string;
  live?: string;
  liveLabel?: string;
  featured?: boolean;
}



/* ─── Featured (full-width) Card ─── */
const FeaturedCard = ({ project, index }: { project: Project; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="relative h-full">
        {/* Animated border */}
        <div
          className="absolute -inset-[1px] rounded-3xl transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}40, transparent 50%, ${project.accentColor}20)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        <div
          className="relative rounded-3xl border border-white/[0.07] overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(19,24,48,0.85) 0%, rgba(11,15,26,0.95) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Top accent line */}
          <div
            className="h-[2px] w-full"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
          />

          {/* Ambient glow */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle, ${project.glowColor} 0%, transparent 70%)`,
              opacity: hovered ? 1 : 0.4,
              filter: 'blur(40px)',
            }}
          />

          <div className="relative p-8 md:p-10">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left: content */}
              <div className="flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    {/* Number badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 border"
                      style={{
                        background: `${project.accentColor}15`,
                        borderColor: `${project.accentColor}30`,
                        color: project.accentColor,
                      }}
                    >
                      {String(project.id).padStart(2, '0')}
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                        style={{
                          background: `${project.accentColor}10`,
                          borderColor: `${project.accentColor}30`,
                          color: project.accentColor,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {/* Status */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.isLive ? 'bg-emerald-400' : 'bg-sky-400'}`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-2 w-2 ${project.isLive ? 'bg-emerald-500' : 'bg-sky-500'}`}
                      />
                    </span>
                    <span className="text-gray-500 text-xs">{project.meta}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-2xl">
                  {project.summary}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.accentColor }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-white/[0.08] text-gray-400 transition-all duration-300"
                      whileHover={{
                        borderColor: `${project.accentColor}60`,
                        color: project.accentColor,
                        scale: 1.05,
                      }}
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right: links */}
              <div className="flex lg:flex-col gap-3 lg:items-end justify-start lg:justify-center flex-shrink-0">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.08] text-sm text-gray-300 font-medium transition-all duration-300 hover:border-white/20 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaGithub size={15} />
                  GitHub
                </motion.a>
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}CC 0%, ${project.accentColor}88 100%)`,
                      color: '#0b0f1a',
                    }}
                    whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaExternalLinkAlt size={12} />
                    {project.liveLabel ?? 'Live Site'}
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};



/* ─── Main Section ─── */
const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      featured: true,
      title: 'VOX — AI-Powered Exam Scribe Platform',
      category: 'Accessibility · Full-Stack · AI',
      summary:
        'A fully voice-navigated examination platform that replaces human scribes for students with accessibility needs. Designed for zero dependency on external humans during exams.',
      bullets: [
        'Docker + Nginx + MongoDB · PWA with offline support · 13+ voice commands',
        'LLaMA 3 via Ollama for MCQ answer formatting · Web Speech API for STT/TTS',
      ],
      tech: ['React 18', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'Docker', 'Ollama', 'face-api.js', 'Nginx', 'PWA'],
      badgeTone: 'text-sky-200 bg-sky-500/10',
      accentColor: '#38bdf8',
      glowColor: 'rgba(56,189,248,0.12)',
      meta: 'Built',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 2,
      title: 'Online Tutoring Platform',
      category: 'Full-Stack · Deployed',
      summary:
        'Full-stack tutoring platform with distinct student, tutor, and admin roles — shipped to a paying client.',
      bullets: [
        'Role-based access · separate dashboards',
        'Live in production · delivered to a real client',
      ],
      tech: ['JavaScript', 'MongoDB', 'HTML/CSS', 'REST APIs', 'Vercel', 'Auth'],
      badgeTone: 'text-sky-200 bg-sky-500/10',
      accentColor: '#34d399',
      glowColor: 'rgba(52,211,153,0.12)',
      meta: 'Live — real client',
      isLive: true,
      github: 'https://github.com/Praneethe358',
      live: '#',
      liveLabel: 'Live site',
    },
    {
      id: 3,
      title: 'Fisherman Border Detection',
      category: 'Computer Vision · AI',
      summary:
        'Maritime safety dashboard that visualises coastal border risk zones and telemetry for fishermen.',
      bullets: [
        'Border-risk visualisation · emergency SOS mesh network',
        'Deployed on Render',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      badgeTone: 'text-emerald-200 bg-emerald-500/10',
      accentColor: '#a78bfa',
      glowColor: 'rgba(167,139,250,0.12)',
      meta: 'Built',
      isLive: true,
      github: 'https://github.com/Praneethe358',
      live: '#',
    },
    {
      id: 4,
      title: 'Gesture-Controlled Presentation',
      category: 'Computer Vision',
      summary:
        'Controls slides hands-free using real-time hand gesture detection at 30+ FPS.',
      bullets: [
        '30+ FPS · works with any software',
        'Configurable swipe threshold in config.py',
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      badgeTone: 'text-indigo-200 bg-indigo-500/10',
      accentColor: '#818cf8',
      glowColor: 'rgba(129,140,248,0.12)',
      meta: '30+ FPS',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 5,
      title: 'AR Social App',
      category: 'Full-Stack · Social',
      summary:
        'Full-stack social app with React + Vite frontend and Node.js backend deployed via Render.',
      bullets: ['React + Vite · structured API · Render deployment'],
      tech: ['React', 'Vite', 'JavaScript', 'Node.js', 'CSS'],
      badgeTone: 'text-rose-200 bg-rose-500/10',
      accentColor: '#f472b6',
      glowColor: 'rgba(244,114,182,0.12)',
      meta: 'Built',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 6,
      title: 'Fake News Detection System',
      category: 'NLP · Machine Learning',
      summary:
        'NLP pipeline that classifies misinformation in news articles with multi-model benchmarking.',
      bullets: [
        'Multi-model benchmarking + evaluation metrics',
        'Raw text → features → classifier → prediction',
      ],
      tech: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'Pandas'],
      badgeTone: 'text-orange-200 bg-orange-500/10',
      accentColor: '#fb923c',
      glowColor: 'rgba(251,146,60,0.12)',
      meta: 'Built',
      github: 'https://github.com/Praneethe358',
    },
  ];



  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0b0f1a 0%, #0a0e1a 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(56,189,248,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
                Featured{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 60%, #c084fc 100%)' }}
                >
                  Projects
                </span>
              </h2>
            </div>

          </div>

          {/* Animated underline */}
          <motion.div
            className="mt-5 h-px"
            style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8, transparent)' }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>

        {/* ── Projects List (One by One) ── */}
        <div className="space-y-8">
          {projects.map((p, i) => (
            <FeaturedCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
