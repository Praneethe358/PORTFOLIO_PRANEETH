'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Database,
  CurlyBraces,
  FileCode,
  Palette,
  Coffee,
  Brain,
  MessageCircle,
  Layers,
  TrendingUp,
  Package,
  Filter,
  Microscope,
  BarChart3,
  PieChart,
  Github,
  BookOpen,
  Code2,
  Box,
  Wrench,
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Category with icon and skills
  const proficiencies = [
    {
      category: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Python', icon: Code },
        { name: 'JavaScript', icon: Code2 },
        { name: 'Java', icon: Coffee },
        { name: 'TypeScript', icon: Code2 },
      ],
    },
    {
      category: 'AI & Automation',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', icon: Brain },
        { name: 'NLP', icon: MessageCircle },
        { name: 'OpenAI API', icon: Layers },
        { name: 'Prompt Eng.', icon: TrendingUp },
      ],
    },
    {
      category: 'Data Science',
      icon: BarChart3,
      skills: [
        { name: 'Data Prep', icon: Filter },
        { name: 'EDA', icon: Microscope },
        { name: 'Statistics', icon: BarChart3 },
        { name: 'Visualization', icon: PieChart },
      ],
    },
    {
      category: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: Github },
        { name: 'Jupyter', icon: BookOpen },
        { name: 'Docker', icon: Box },
        { name: 'Tableau', icon: BarChart3 },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-bg py-8 md:py-10" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white italic mb-2 inline-block">
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
          {proficiencies.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.category}
                className="border border-white/10 rounded-lg p-5 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                whileHover={{ borderColor: 'rgba(212, 164, 58, 0.3)', backgroundColor: 'rgba(212, 164, 58, 0.03)' }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-5">
                  <CategoryIcon size={20} className="text-accent" />
                  <h3 className="text-base font-semibold text-white italic">{category.category}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{
                          duration: 0.4,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ y: -4 }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-2 bg-white/[0.05] border border-white/10"
                          whileHover={{
                            backgroundColor: 'rgba(212, 164, 58, 0.15)',
                            borderColor: 'rgba(212, 164, 58, 0.3)',
                            boxShadow: '0 0 20px rgba(212, 164, 58, 0.15)',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <SkillIcon size={24} className="text-accent" />
                        </motion.div>
                        <p className="text-xs font-medium text-gray-300">{skill.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
