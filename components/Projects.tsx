'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  project,
  index,
}: {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
  };
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({
      x: ((y - cy) / cy) * 6,
      y: ((cx - x) / cx) * 6,
    });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className="card p-7 md:p-8 h-full flex flex-col justify-between cursor-pointer"
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: 0.1 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      whileHover={{
        y: -8,
        boxShadow: '0 12px 40px rgba(212, 164, 58, 0.1)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 tracking-wide">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 font-heading">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
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

      {/* Links */}
      <div className="flex gap-5 pt-5 border-t border-white/5">
        <motion.a
          href="https://github.com/Praneethe358"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors cursor-pointer"
          whileHover={{ x: 3 }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FaGithub size={18} />
          <span className="text-sm font-medium">View on GitHub</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Online Tutoring Platform',
      category: 'Full-Stack | Deployed',
      description:
        'Built and deployed a full-stack online tutoring website with user roles (Student, Tutor, Admin). Admin can manage users and assignments. Implemented secure authentication, database handling, and successfully delivered to a real client.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'APIs', 'Deployment'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Gesture-Controlled Presentation Controller',
      category: 'Computer Vision',
      description:
        'Controlled presentation slides using hand swipe gestures with real-time gesture recognition. Implemented computer vision with focus on accuracy, responsiveness, and smooth interaction for seamless presentations.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Computer Vision'],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Fake News Detection System',
      category: 'NLP / Machine Learning',
      description:
        'Built a machine learning–based NLP system with text preprocessing, feature extraction, and model evaluation. Trained classification models focused on accuracy and real-world performance.',
      tech: ['Python', 'NLP', 'Scikit-learn', 'Machine Learning'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: '3D Road Simulation using MATLAB',
      category: 'Simulation / Modeling',
      description:
        'Designed and simulated a 3D road environment with modeled road structures and elevation in a 3D coordinate system. Demonstrated understanding of simulation logic and mathematical modeling with focus on visual simulation and geometry.',
      tech: ['MATLAB', '3D Plotting', 'Simulation', 'Mathematical Modeling'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="section bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
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
