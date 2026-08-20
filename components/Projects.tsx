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

          <div className="relative p-6 md:p-10">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* Left: content */}
              <div className="flex-1">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    {/* Number badge */}
                    <div
                      className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs md:text-sm flex-shrink-0 border"
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
                        className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 md:px-2.5 md:py-1 rounded-full border"
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
                  <div className="flex items-center gap-1.5 flex-shrink-0 bg-white/[0.03] px-2 py-1 rounded-lg border border-white/5 w-fit">
                    <span className="relative flex h-2 w-2">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.isLive ? 'bg-emerald-400' : 'bg-sky-400'}`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-2 w-2 ${project.isLive ? 'bg-emerald-500' : 'bg-sky-500'}`}
                      />
                    </span>
                    <span className="text-gray-500 text-[10px] md:text-xs font-medium">{project.meta}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-3xl font-extrabold font-heading text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 max-w-2xl">
                  {project.summary}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[11px] md:text-sm text-gray-400">
                      <span
                        className="mt-1.5 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full flex-shrink-0"
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
                      className="text-[10px] md:text-xs px-3 py-1 rounded-full border border-white/[0.08] text-gray-400 transition-all duration-300"
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
              <div className="mt-8 lg:mt-0 flex lg:flex-col gap-3 lg:items-end justify-start lg:justify-center flex-shrink-0">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] text-xs md:text-sm text-gray-300 font-medium transition-all duration-300 hover:border-white/20 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaGithub size={15} />
                  Source Code
                </motion.a>
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
      title: 'TruBill — WhatsApp-Native GST Invoicing SaaS',
      category: 'FINTECH · SAAS · FULL-STACK',
      summary:
        'Multi-tenant GST invoicing platform built for small textile and footwear retail shops, with invoices delivered straight to a customer\'s WhatsApp — zero app download required.',
      bullets: [
        'GST-compliant invoicing (GSTR-1/3B, ITC, credit notes) · barcode/Code128 label generation',
        'WhatsApp Cloud API delivery · Supabase RLS for multi-tenant isolation · live paying shops in Tiruppur/Coimbatore',
      ],
      tech: ['Next.js 14', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'WhatsApp Cloud API', '@react-pdf/renderer', 'Vercel'],
      badgeTone: 'text-emerald-200 bg-emerald-500/10',
      accentColor: '#34d399',
      glowColor: 'rgba(52,211,153,0.12)',
      meta: 'Live — real clients',
      isLive: true,
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 2,
      title: 'LexiCore — Hybrid RAG Platform',
      category: 'AI · RETRIEVAL · ENTERPRISE-GRADE',
      summary:
        'An enterprise-grade retrieval-augmented generation system combining dense and sparse retrieval for higher-accuracy document Q&A than vector search alone.',
      bullets: [
        'Hybrid retrieval: BM25 + dense embeddings fused via Reciprocal Rank Fusion (RRF)',
        'RAGAS-based evaluation pipeline · Dockerized with full CI/CD via GitHub Actions',
      ],
      tech: ['FastAPI', 'Qdrant', 'BAAI/bge', 'OpenRouter', 'Docker', 'GitHub Actions'],
      badgeTone: 'text-sky-200 bg-sky-500/10',
      accentColor: '#38bdf8',
      glowColor: 'rgba(56,189,248,0.12)',
      meta: 'Built',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 3,
      title: 'AgentOps — Multi-Agent Task Orchestrator',
      category: 'MULTI-AGENT · ORCHESTRATION · PRODUCTION-GRADE',
      summary:
        'A production-grade orchestration system that coordinates multiple AI agents through stateful, resumable task graphs.',
      bullets: [
        'LangGraph StateGraph for agent coordination · async Postgres checkpointing for crash-safe resumability',
        'Docker SDK integration for sandboxed execution · Streamlit ops dashboard · CI/CD via GitHub Actions',
      ],
      tech: ['LangGraph', 'FastAPI', 'Docker SDK', 'Streamlit', 'AsyncPostgresSaver', 'GitHub Actions'],
      badgeTone: 'text-violet-200 bg-violet-500/10',
      accentColor: '#a78bfa',
      glowColor: 'rgba(167,139,250,0.12)',
      meta: 'Built',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 4,
      title: 'MSME Credit Score Engine',
      category: 'MACHINE LEARNING · FINTECH · EXPLAINABLE AI',
      summary:
        'An ML-driven credit scoring model built on TruBill\'s own invoicing schema, designed to give small merchants a path to formal credit access.',
      bullets: [
        'Random Forest classifier at 95.8% accuracy on 6 engineered financial-behavior features',
        'SHAP explainability layer · Next.js dashboard with CSV upload and recharts visualization',
      ],
      tech: ['FastAPI', 'scikit-learn', 'XGBoost', 'SHAP', 'Supabase', 'Next.js 14'],
      badgeTone: 'text-pink-200 bg-pink-500/10',
      accentColor: '#f472b6',
      glowColor: 'rgba(244,114,182,0.12)',
      meta: 'Built',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 5,
      title: 'EchoNode — AI API Gateway with Semantic Caching',
      category: 'AI INFRASTRUCTURE · SYSTEMS · RELIABILITY',
      summary:
        'A gateway layer that sits in front of LLM APIs, cutting cost and latency through semantic response caching and high-availability routing.',
      bullets: [
        'Semantic caching via Redis to deduplicate near-identical prompts',
        'Streaming response interception · telemetry layer · HA fallback routing · full CI/CD pipeline',
      ],
      tech: ['FastAPI', 'Redis', 'Python', 'Docker', 'GitHub Actions'],
      badgeTone: 'text-orange-200 bg-orange-500/10',
      accentColor: '#fb923c',
      glowColor: 'rgba(251,146,60,0.12)',
      meta: 'Built',
      github: 'https://github.com/Praneethe358',
    },
    {
      id: 6,
      title: 'Z-Axis — AI-Powered 2D-to-3D Asset Converter',
      category: 'COMPUTER VISION · 3D · GENERATIVE AI',
      summary:
        'A pipeline that converts flat 2D images into interactive 3D assets, combining background removal with generative 3D reconstruction.',
      bullets: [
        'Background removal via rembg · 3D mesh generation via TripoSR (HuggingFace Gradio)',
        'Interactive 3D viewer built with React Three Fiber · Vite/TypeScript frontend',
      ],
      tech: ['FastAPI', 'rembg', 'TripoSR', 'Vite', 'React', 'TypeScript', 'React Three Fiber'],
      badgeTone: 'text-teal-200 bg-teal-500/10',
      accentColor: '#2dd4bf',
      glowColor: 'rgba(45,212,191,0.12)',
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
