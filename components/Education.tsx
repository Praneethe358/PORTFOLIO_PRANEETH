'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaAward } from 'react-icons/fa';

const Education = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: 'B.Tech — AI & Data Science',
      place: 'Karunya Institute of Technology and Sciences',
      location: 'Coimbatore, India',
      period: '2022 — 2026',
      description:
        'Comprehensive curriculum in artificial intelligence, machine learning, data science fundamentals, algorithms, and real-world application development.',
    },
  ];

  const coursework = [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Data Structures & Algorithms',
    'Database Management (SQL)',
    'Statistical Analysis',
    'Computer Vision',
    'Big Data Analytics',
  ];

  return (
    <section id="education" className="section bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-3">
            Education
          </h2>
          <motion.div
            className="h-1 bg-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education Card */}
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="card p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 12px 40px rgba(212, 164, 58, 0.1)',
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {item.title}
                    </h3>
                    <p className="text-accent text-sm font-semibold mt-1">
                      {item.place}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">{item.location}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                    {item.period}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

          {/* Coursework Card */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{
              y: -6,
              boxShadow: '0 12px 40px rgba(212, 164, 58, 0.1)',
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <FaBook size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Key Coursework
                </h3>
                <p className="text-gray-500 text-sm mt-1">Core subjects studied</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((course, idx) => (
                <motion.span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-300 bg-white/[0.03]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  whileHover={{
                    borderColor: 'rgba(212,164,58,0.4)',
                    color: '#d4a43a',
                  }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
