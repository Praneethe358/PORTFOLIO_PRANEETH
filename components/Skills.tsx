'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Accessibility,
  Aperture,
  Atom,
  AudioLines,
  Bot,
  BookOpen,
  Box,
  Brain,
  Briefcase,
  Camera,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  DatabaseZap,
  Dot,
  Eye,
  FileText,
  Filter,
  FlaskConical,
  Flame,
  Gauge,
  GitBranch,
  GitMerge,
  GraduationCap,
  Hand,
  Layers,
  Layout,
  Link2,
  MessageCircle,
  Mic,
  Monitor,
  Network,
  Presentation,
  Puzzle,
  Rocket,
  Router,
  Send,
  Server,
  Share2,
  Smile,
  Sparkles,
  Speech,
  Terminal,
  Users,
  Wand2,
  WifiOff,
  Workflow,
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const iconColorMap: Record<string, string> = {
    'Computer Vision': 'text-emerald-400',
    NLP: 'text-sky-400',
    LLMs: 'text-purple-400',
    'Gesture Recognition': 'text-sky-400',
    'AI Automation': 'text-rose-400',
    'Prompt Engineering': 'text-fuchsia-400',
    LangChain: 'text-cyan-400',
    Ollama: 'text-indigo-400',
    OpenCV: 'text-lime-400',
    MediaPipe: 'text-teal-400',
    'Hugging Face': 'text-pink-400',
    'Scikit-learn': 'text-blue-400',
    Python: 'text-sky-300',
    java: 'text-blue-400',
    'C++': 'text-blue-300',
    JavaScript: 'text-sky-300',
    'HTML / CSS': 'text-rose-300',
    SQL: 'text-emerald-300',
    Bash: 'text-gray-300',
    FastAPI: 'text-emerald-400',
    Flask: 'text-red-300',
    'REST APIs': 'text-sky-300',
    'Telegram Bot API': 'text-cyan-300',
    Vercel: 'text-white',
    React: 'text-cyan-400',
    Next: 'text-gray-200',
    'Git & GitHub': 'text-blue-400',
    'VS Code': 'text-blue-400',
    Jupyter: 'text-sky-400',
    Docker: 'text-sky-400',
    Postman: 'text-blue-300',
    Linux: 'text-lime-300',
    RAG: 'text-fuchsia-300',
    'Offline-first AI': 'text-emerald-300',
    'Voice Interfaces': 'text-purple-300',
    'AI Accessibility': 'text-rose-300',
    EdTech: 'text-indigo-300',
    'Production Deployment': 'text-sky-300',
    MongoDB: 'text-emerald-400',
    PostgreSQL: 'text-sky-400',
    Firebase: 'text-sky-300',
    'Vector Databases': 'text-teal-400',
    'Data Preprocessing': 'text-lime-400',
    'ETL Pipelines': 'text-cyan-400',
    'Model Serving': 'text-purple-400',
    'API Containerization': 'text-blue-400',
    'CI/CD Pipelines': 'text-rose-400',
    'Inference Optimization': 'text-sky-400',
    'System Architecture': 'text-emerald-400',
    'Edge Deployment': 'text-blue-400',
    'Speech Recognition': 'text-fuchsia-400',
    'Text-to-Speech': 'text-sky-400',
    'Webcam / Sensor Input': 'text-teal-400',
    'PDF Processing': 'text-red-300',
    'Slide Generation': 'text-sky-300',
    'Bot Interfaces': 'text-cyan-400',
    'Client Communication': 'text-rose-300',
    'Problem Solving': 'text-lime-300',
    'Self-directed Learning': 'text-indigo-300',
    'Project Ownership': 'text-blue-300',
    'Technical Documentation': 'text-sky-300',
  };

  const categoryColorMap: Record<string, string> = {
    'AI & Machine Learning': 'text-emerald-200 drop-shadow-[0_0_10px_rgba(16,185,129,0.55)]',
    'Frameworks & Libraries': 'text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]',
    Languages: 'text-sky-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.55)]',
    'Web & APIs': 'text-rose-200 drop-shadow-[0_0_10px_rgba(251,113,133,0.55)]',

    'Domains & Concepts': 'text-lime-200 drop-shadow-[0_0_10px_rgba(163,230,53,0.55)]',
    'Data & Backend': 'text-sky-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.55)]',
    'MLOps & System Design': 'text-indigo-200 drop-shadow-[0_0_10px_rgba(99,102,241,0.55)]',
  };

  const iconMap: Record<string, LucideIcon> = {
    'Computer Vision': Eye,
    NLP: MessageCircle,
    LLMs: Brain,
    'Gesture Recognition': Hand,
    'AI Automation': Wand2,
    'Prompt Engineering': Sparkles,
    LangChain: Link2,
    Ollama: Bot,
    OpenCV: Aperture,
    MediaPipe: Share2,
    'Hugging Face': Smile,
    'Scikit-learn': Layers,
    Python: Code2,
    JavaScript: Code2,
    'HTML / CSS': Layout,
    SQL: Database,
    Bash: Terminal,
    FastAPI: Rocket,
    Flask: FlaskConical,
    'REST APIs': Server,
    'Telegram Bot API': Send,
    Vercel: Cloud,
    React: Atom,
    'Git & GitHub': GitBranch,
    'VS Code': Monitor,
    Jupyter: BookOpen,
    Docker: Box,
    Postman: Compass,
    Linux: Terminal,
    RAG: Layers,
    'Offline-first AI': WifiOff,
    'Voice Interfaces': Mic,
    'AI Accessibility': Accessibility,
    EdTech: GraduationCap,
    'Production Deployment': Rocket,
    MongoDB: Database,
    PostgreSQL: DatabaseZap,
    Firebase: Flame,
    'Vector Databases': DatabaseZap,
    'Data Preprocessing': Filter,
    'ETL Pipelines': Workflow,
    'Client Communication': Users,
    'Problem Solving': Puzzle,
    'Self-directed Learning': BookOpen,
    'Project Ownership': Briefcase,
    'Technical Documentation': FileText,
    'Model Serving': Cpu,
    'API Containerization': Box,
    'CI/CD Pipelines': GitMerge,
    'Inference Optimization': Gauge,
    'System Architecture': Network,
    'Edge Deployment': Router,
    'Speech Recognition': AudioLines,
    'Text-to-Speech': Speech,
    'Webcam / Sensor Input': Camera,
    'PDF Processing': FileText,
    'Slide Generation': Presentation,
    'Bot Interfaces': Bot,
  };
  
  const proficiencies = [
    {
      category: 'AI & Machine Learning',
      pillClass: 'bg-bg/60 text-gray-200 border-white/10 hover:border-accent/40 hover:bg-accent/10',
      skills: ['Computer Vision', 'NLP', 'LLMs', 'Gesture Recognition', 'AI Automation', 'Prompt Engineering'],
    },
    {
      category: 'Frameworks & Libraries',
      pillClass: 'bg-bg/60 text-gray-200 border-white/10 hover:border-accent/40 hover:bg-accent/10',
      skills: ['LangChain', 'Ollama', 'OpenCV', 'MediaPipe', 'Hugging Face', 'Scikit-learn'],
    },
    {
      category: 'Languages',
      pillClass: 'bg-bg/60 text-gray-200 border-white/10 hover:border-accent/40 hover:bg-accent/10',
      skills: ['Python','java','C++', 'JavaScript', 'HTML / CSS', 'SQL', 'Bash'],
    },
    {
      category: 'Web & APIs',
      pillClass: 'bg-bg/60 text-gray-200 border-white/10 hover:border-accent/40 hover:bg-accent/10',
      skills: ['FastAPI', 'Flask', 'REST APIs', 'Telegram Bot API', 'Vercel', 'React','Next'],
    },

    {
      category: 'Domains & Concepts',
      pillClass: 'bg-bg/60 text-gray-200 border-white/10 hover:border-accent/40 hover:bg-accent/10',
      skills: ['RAG', 'Offline-first AI', 'Voice Interfaces', 'AI Accessibility', 'EdTech', 'Production Deployment'],
    },
    {
      category: 'Data & Backend',
      pillClass: 'bg-bg/60 text-gray-200 border-white/10 hover:border-accent/40 hover:bg-accent/10',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Vector Databases', 'Data Preprocessing', 'ETL Pipelines'],
    },
    {
      category: 'MLOps & System Design',
      pillClass: 'bg-bg/60 text-gray-200 border-white/10 hover:border-accent/40 hover:bg-accent/10',
      skills: ['Model Serving', 'API Containerization', 'CI/CD Pipelines', 'Inference Optimization', 'System Architecture', 'Edge Deployment'],
    },
  ];

  return (
    <section id="skills" className="section bg-bg py-10 md:py-12 relative overflow-hidden" ref={sectionRef}>
      <motion.div
        className="absolute -top-32 left-0 h-56 w-56 rounded-full bg-accent/10 blur-[120px]"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 right-0 h-64 w-64 rounded-full bg-white/5 blur-[140px]"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-2xl md:text-3xl font-bold mb-3 inline-block">
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
            className="h-1 bg-sky-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Proficiency Grid */}
        <div className="grid grid-cols-1 gap-5 md:gap-7">
          {proficiencies.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="group relative overflow-hidden border border-white/10 rounded-2xl px-6 pt-6 pb-4 md:px-8 md:pt-7 md:pb-5 min-h-[230px] bg-bg-secondary/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.08 }}
              whileHover={{ borderColor: 'rgba(56, 189, 248, 0.45)', y: -4 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderImage: 'linear-gradient(120deg, rgba(56,189,248,0.9), rgba(59,130,246,0.9), rgba(99,102,241,0.9)) 1' }} />
              <motion.div
                className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/5 blur-3xl"
                animate={{ opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-0 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  background:
                    'radial-gradient(600px circle at 15% 20%, rgba(56,189,248,0.08), transparent 45%)',
                }}
              />
              <motion.div
                className="absolute -left-1/2 top-0 h-full w-1/2 opacity-0"
                animate={{ x: ['-50%', '160%'], opacity: [0, 0.6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background:
                    'linear-gradient(110deg, transparent, rgba(56,189,248,0.18), transparent)',
                }}
              />
              <div className="relative flex items-center justify-between gap-4 mb-5">
                <p
                  className={`text-xs uppercase tracking-[0.26em] ${
                    categoryColorMap[category.category] ?? 'text-accent/80'
                  }`}
                >
                  {category.category}
                </p>
                <span className="h-[2px] w-10 bg-accent/70 rounded-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill] ?? Dot;
                  const iconTone = iconColorMap[skill] ?? 'text-accent';
                  return (
                    <motion.span
                      key={skill}
                      className={`inline-flex w-full items-center gap-3 rounded-full px-5 py-2.5 text-[15px] font-semibold border transition-all duration-300 ${category.pillClass}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.35 }}
                      whileHover={{ y: -3, scale: 1.02, borderColor: 'rgba(56, 189, 248, 0.55)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className={`h-4 w-4 ${iconTone}`} />
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
