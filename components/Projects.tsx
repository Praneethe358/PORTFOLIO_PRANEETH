'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  project,
  index,
}: {
  project: {
    id: number;
    lead?: string;
    title: string;
    category: string;
    summary: string;
    bullets: string[];
    tech: string[];
    badgeTone: string;
    meta: string;
    metaDot: string;
    github: string;
    live?: string;
    liveLabel?: string;
  };
  index: number;
}) => {
  return (
    <motion.div
      className="card p-7 md:p-8 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: 0.1 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -6,
        boxShadow: '0 18px 60px rgba(0, 0, 0, 0.35)',
      }}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            {project.lead && (
              <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                {project.lead}
              </span>
            )}
            <span
              className={`text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10 ${
                project.badgeTone
              }`}
            >
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className={`w-2 h-2 rounded-full ${project.metaDot}`} />
            <span>{project.meta}</span>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-heading">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.summary}
        </p>

        <ul className="space-y-2 text-sm text-gray-500 mb-6">
          {project.bullets.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <motion.span
              key={idx}
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400"
              whileHover={{ borderColor: 'rgba(212,164,58,0.5)', color: '#d4a43a' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
          whileHover={{ x: 3 }}
        >
          <FaGithub size={18} />
          <span className="text-sm font-medium">View on GitHub</span>
        </motion.a>
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
            whileHover={{ x: 3 }}
          >
            <FaExternalLinkAlt size={16} />
            <span className="text-sm font-medium">{project.liveLabel ?? 'Live site'}</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VOX — AI-Powered Exam Scribe Platform',
      category: 'Accessibility · Full-Stack · AI',
      summary:
        'A fully voice-navigated examination platform that replaces human scribes for students with accessibility needs.',
      bullets: [
        'Docker + Nginx + MongoDB · PWA with offline support · 13+ voice commands',
        'LLaMA 3 via Ollama for MCQ answer formatting · Web Speech API for STT/TTS',
      ],
      tech: [
        'React 18',
        'TypeScript',
        'FastAPI',
        'Python',
        'MongoDB',
        'Docker',
        'Ollama',
        'face-api.js',
        'Nginx',
        'PWA',
      ],
      badgeTone: 'text-amber-200 bg-amber-500/10',
      meta: 'Built',
      metaDot: 'bg-gray-500',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 2,
      title: 'Online Tutoring Platform',
      category: 'Full-Stack · Deployed',
      summary:
        'Full-stack tutoring platform with distinct student, tutor, and admin roles, shipped to a paying client.',
      bullets: [
        'Role-based access — student / tutor / admin with separate dashboards',
        'Live in production · delivered to a real client',
      ],
      tech: ['JavaScript', 'MongoDB', 'HTML/CSS', 'REST APIs', 'Vercel', 'Auth'],
      badgeTone: 'text-sky-200 bg-sky-500/10',
      meta: 'Live — real client',
      metaDot: 'bg-emerald-400',
      github: 'https://github.com/Praneethe358',
      live: '#',
      liveLabel: 'Live site',
    },
    {
      id: 3,
      title: 'Fisherman Border Detection — Marine Guardian AI',
      category: 'Computer Vision · AI',
      summary:
        'Maritime safety dashboard prototype that visualises coastal border risk zones and telemetry.',
      bullets: [
        'Border-risk visualisation · emergency SOS mesh network concept',
        'Live demo deployed on Render',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Social Impact'],
      badgeTone: 'text-emerald-200 bg-emerald-500/10',
      meta: 'Built',
      metaDot: 'bg-emerald-400',
      github: 'https://github.com/Praneethe358',
      live: '#',
    },
    {
      id: 4,
      title: 'Gesture-Controlled Presentation Controller',
      category: 'Computer Vision',
      summary:
        'Controls presentation slides hands-free using real-time hand gesture detection.',
      bullets: [
        '30+ FPS real-time performance · works with any presentation software',
        'Configurable swipe threshold and cooldown in config.py',
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Real-time'],
      badgeTone: 'text-indigo-200 bg-indigo-500/10',
      meta: 'Built · 30+ FPS',
      metaDot: 'bg-gray-500',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 5,
      title: 'AR Social App',
      category: 'Full-Stack · Social',
      summary:
        'Full-stack social app with a React + Vite frontend and Node.js backend deployed via Render.',
      bullets: ['React + Vite · structured API layer · Render deployment'],
      tech: ['React', 'Vite', 'JavaScript', 'Node.js', 'CSS', 'Render'],
      badgeTone: 'text-rose-200 bg-rose-500/10',
      meta: 'Built',
      metaDot: 'bg-amber-300',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 6,
      title: 'Fake News Detection System',
      category: 'NLP · Machine Learning',
      summary:
        'NLP pipeline that classifies misinformation in news articles with multiple classifier benchmarks.',
      bullets: [
        'Multi-model benchmarking with evaluation metrics comparison',
        'End-to-end pipeline: raw text → features → trained classifier → prediction',
      ],
      tech: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'Pandas', 'Classification'],
      badgeTone: 'text-orange-200 bg-orange-500/10',
      meta: 'Built',
      metaDot: 'bg-gray-500',
      github: 'https://github.com/Praneethe358',
    },
  ];

  return (
    <section id="projects" className="section bg-bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-white/5 blur-[140px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-[1]">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-3 inline-block">
            {'Featured Projects'.split('').map((char, i) => (
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
            className="h-1 bg-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-gray-500 text-sm md:text-base mt-4">
            Ranked by technical depth, uniqueness, and portfolio impact · all links go to
            individual repos
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
