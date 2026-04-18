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
      category: 'Tools & Platforms',
      pillClass: 'bg-bg/60 text-gray-200 border-white/10 hover:border-accent/40 hover:bg-accent/10',
      skills: ['Git & GitHub', 'VS Code', 'Jupyter', 'Docker', 'Postman', 'Linux'],
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
          <h2 className="text-2xl md:text-3xl font-bold text-accent uppercase tracking-[0.35em] mb-3 inline-block">
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
            className="h-1 bg-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Proficiency Grid */}
        <div className="grid grid-cols-1 gap-7">
          {proficiencies.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="relative overflow-hidden border border-white/10 rounded-2xl p-6 bg-bg-secondary/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.08 }}
              whileHover={{ borderColor: 'rgba(212, 164, 58, 0.35)' }}
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
              <div className="relative flex items-center justify-between gap-4 mb-5">
                <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
                  {category.category}
                </p>
                <span className="h-[2px] w-10 bg-accent/70 rounded-full" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill] ?? Dot;
                  return (
                    <span
                      key={skill}
                      className={`inline-flex w-full items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium border transition-all duration-300 ${category.pillClass}`}
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {skill}
                    </span>
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
