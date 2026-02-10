'use client';

import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'praneeth0358@gmail.com',
      href: 'mailto:praneeth0358@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9080689844',
      href: 'tel:+919080689844',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Coimbatore, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/praneeth-e-4240a3349', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Praneethe358', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:praneeth0358@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="section bg-bg">
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
            Get In Touch
          </h2>
          <motion.div
            className="h-1 bg-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Message + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I&apos;m always interested in hearing about new projects and
              opportunities. Feel free to reach out if you&apos;d like to
              collaborate or just chat about AI and data science!
            </p>

            <div className="space-y-5">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-gray-300 text-sm font-medium">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Social Links + CTA */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="card p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                Follow Me
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Connect on social media
              </p>

              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-colors"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>

              <motion.a
                href="mailto:praneeth0358@gmail.com"
                className="btn-accent inline-block w-full text-center"
                whileHover={{ scale: 1.04, filter: 'brightness(1.15)' }}
                whileTap={{ scale: 0.96 }}
              >
                Send Me an Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
