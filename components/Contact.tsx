'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaArrowRight,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

/* ───── Floating Orb Component ───── */
const FloatingOrb = ({
  size,
  color,
  x,
  y,
  delay,
  duration,
}: {
  size: number;
  color: string;
  x: string;
  y: string;
  delay: number;
  duration: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: 'blur(60px)',
    }}
    animate={{
      y: [0, -30, 0, 30, 0],
      x: [0, 20, 0, -20, 0],
      scale: [1, 1.1, 1, 0.9, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

/* ───── Tilting Card with 3D perspective ───── */
const TiltCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ───── Main Contact Component ───── */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'praneeth0358@gmail.com',
      href: 'mailto:praneeth0358@gmail.com',
      gradient: 'from-sky-400 to-blue-600',
      glow: 'rgba(56, 189, 248, 0.15)',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9080689844',
      href: 'tel:+919080689844',
      gradient: 'from-emerald-400 to-cyan-600',
      glow: 'rgba(52, 211, 153, 0.15)',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Coimbatore, India',
      href: '#',
      gradient: 'from-violet-400 to-purple-600',
      glow: 'rgba(167, 139, 250, 0.15)',
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/praneeth-e-4240a3349',
      label: 'LinkedIn',
      color: '#0A66C2',
      hoverBg: 'rgba(10, 102, 194, 0.15)',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/Praneethe358',
      label: 'GitHub',
      color: '#e6edf3',
      hoverBg: 'rgba(230, 237, 243, 0.1)',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:praneeth0358@gmail.com',
      label: 'Email',
      color: '#38bdf8',
      hoverBg: 'rgba(56, 189, 248, 0.15)',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build mailto link with form data
    const mailtoSubject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const mailtoBody = encodeURIComponent(
      `Hi Praneeth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    
    // Brief animation delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    window.location.href = `mailto:praneeth0358@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0b0f1a 0%, #080c16 50%, #0b0f1a 100%)' }}
    >
      {/* ───── Ambient Background ───── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingOrb size={500} color="rgba(56, 189, 248, 0.06)" x="10%" y="20%" delay={0} duration={20} />
        <FloatingOrb size={400} color="rgba(99, 102, 241, 0.05)" x="70%" y="60%" delay={2} duration={25} />
        <FloatingOrb size={300} color="rgba(139, 92, 246, 0.04)" x="50%" y="10%" delay={4} duration={18} />
        <FloatingOrb size={200} color="rgba(56, 189, 248, 0.03)" x="85%" y="30%" delay={1} duration={22} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial gradient center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ───── Section Header ───── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <HiSparkles className="text-accent text-sm" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-5">
            <span className="text-white">Let&apos;s Build </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)',
              }}
            >
              Something Amazing
            </span>
          </h2>

          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I&apos;m always excited to collaborate on innovative projects.
            Whether you have a question, proposal, or just want to say hi — my inbox is open.
          </motion.p>
        </motion.div>

        {/* ───── Contact Info Tiles ───── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.href}
                variants={itemVariants}
                className="group relative"
              >
                <TiltCard>
                  <div
                    className="relative p-6 rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-500 group-hover:border-accent/30"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(19, 24, 48, 0.8) 0%, rgba(11, 15, 26, 0.9) 100%)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background: `radial-gradient(circle at 30% 50%, ${item.glow} 0%, transparent 70%)` }}
                    />

                    <div className="relative flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-[1px] flex-shrink-0`}
                      >
                        <div className="w-full h-full rounded-xl bg-bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                          <Icon
                            size={18}
                            className="text-white transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider font-medium mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-semibold group-hover:text-accent transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute top-6 right-6 text-gray-600 group-hover:text-accent transition-colors"
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      <FaArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                      />
                    </motion.div>
                  </div>
                </TiltCard>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ───── Main Content: Form + Social ───── */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form — Takes 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="relative rounded-3xl border border-white/[0.06] overflow-hidden"
              style={{
                background:
                  'linear-gradient(145deg, rgba(19, 24, 48, 0.6) 0%, rgba(11, 15, 26, 0.8) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <FaPaperPlane size={14} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      Send a Message
                    </h3>
                    <p className="text-gray-500 text-xs">
                      Fill out the form and I&apos;ll get back to you
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="relative group">
                      <label className="block text-gray-500 text-xs uppercase tracking-wider font-medium mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-gray-600 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(56,189,248,0.08)]"
                          placeholder="John Doe"
                        />
                        <motion.div
                          className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-accent to-blue-500 rounded-full"
                          style={{ translateX: '-50%' }}
                          animate={{
                            width: focusedField === 'name' ? '90%' : '0%',
                            opacity: focusedField === 'name' ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <label className="block text-gray-500 text-xs uppercase tracking-wider font-medium mb-2">
                        Your Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-gray-600 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(56,189,248,0.08)]"
                          placeholder="john@example.com"
                        />
                        <motion.div
                          className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-accent to-blue-500 rounded-full"
                          style={{ translateX: '-50%' }}
                          animate={{
                            width: focusedField === 'email' ? '90%' : '0%',
                            opacity: focusedField === 'email' ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <label className="block text-gray-500 text-xs uppercase tracking-wider font-medium mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-gray-600 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(56,189,248,0.08)]"
                        placeholder="Project Collaboration"
                      />
                      <motion.div
                        className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-accent to-blue-500 rounded-full"
                        style={{ translateX: '-50%' }}
                        animate={{
                          width: focusedField === 'subject' ? '90%' : '0%',
                          opacity: focusedField === 'subject' ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <label className="block text-gray-500 text-xs uppercase tracking-wider font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-gray-600 outline-none transition-all duration-300 resize-none focus:border-accent/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(56,189,248,0.08)]"
                        placeholder="Tell me about your project idea..."
                      />
                      <motion.div
                        className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-accent to-blue-500 rounded-full"
                        style={{ translateX: '-50%' }}
                        animate={{
                          width: focusedField === 'message' ? '90%' : '0%',
                          opacity: focusedField === 'message' ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full md:w-auto group overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="relative px-8 py-4 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-3 transition-all duration-500"
                      style={{
                        background: submitted
                          ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                          : 'linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #8b5cf6 100%)',
                        backgroundSize: '200% 200%',
                        color: '#fff',
                      }}
                    >
                      {/* Shimmer effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.1) 50%, transparent 80%)',
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 2s infinite linear',
                        }}
                      />

                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          <span className="relative">Sending...</span>
                        </>
                      ) : submitted ? (
                        <>
                          <span className="relative">✓ Opening Email Client</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane
                            size={13}
                            className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                          <span className="relative">Send Message</span>
                          <FaArrowRight
                            size={12}
                            className="relative opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                          />
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* ───── Right Column: Social & CTA ───── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Social Links Card */}
            <div
              className="relative rounded-3xl border border-white/[0.06] overflow-hidden flex-1"
              style={{
                background:
                  'linear-gradient(145deg, rgba(19, 24, 48, 0.6) 0%, rgba(11, 15, 26, 0.8) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

              <div className="p-8 flex flex-col h-full">
                <h3 className="text-lg font-bold text-white mb-1 font-heading">
                  Connect With Me
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Find me on social platforms
                </p>

                <div className="space-y-4 flex-1">
                  {socialLinks.map((link, i) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.04] hover:border-white/[0.12] transition-all duration-400"
                        style={{ background: 'rgba(255,255,255,0.02)' }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + 0.1 * i }}
                        whileHover={{
                          backgroundColor: link.hoverBg,
                          x: 4,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                          style={{
                            background: `${link.hoverBg}`,
                            border: `1px solid ${link.color}22`,
                          }}
                        >
                          <Icon
                            size={20}
                            style={{ color: link.color }}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-semibold group-hover:text-accent transition-colors duration-300">
                            {link.label}
                          </p>
                          <p className="text-gray-600 text-xs">
                            {link.label === 'LinkedIn'
                              ? 'Professional network'
                              : link.label === 'GitHub'
                              ? 'Open source projects'
                              : 'Direct message'}
                          </p>
                        </div>
                        <FaArrowRight
                          size={12}
                          className="text-gray-600 group-hover:text-accent transition-all duration-300 transform group-hover:translate-x-1"
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick CTA Card */}
            <motion.div
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated border gradient */}
              <div
                className="absolute inset-0 rounded-3xl p-[1px]"
                style={{
                  background:
                    'linear-gradient(135deg, #38bdf8 0%, #6366f1 33%, #8b5cf6 66%, #38bdf8 100%)',
                  backgroundSize: '300% 300%',
                  animation: 'gradientShift 4s ease infinite',
                }}
              >
                <div className="w-full h-full rounded-3xl bg-bg-card" />
              </div>

              <a
                href="mailto:praneeth0358@gmail.com"
                className="relative block p-8"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.08) 0%, transparent 70%)',
                  }}
                />

                <div className="relative text-center">
                  <motion.div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-violet-500/20 border border-accent/20 flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(56,189,248,0.1)',
                        '0 0 40px rgba(56,189,248,0.2)',
                        '0 0 20px rgba(56,189,248,0.1)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FaEnvelope size={20} className="text-accent" />
                  </motion.div>

                  <h4 className="text-white font-bold font-heading mb-1.5">
                    Prefer email?
                  </h4>
                  <p className="text-gray-500 text-sm mb-4">
                    Drop me a direct message anytime
                  </p>

                  <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>praneeth0358@gmail.com</span>
                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ───── Bottom Availability Status ───── */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="relative flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-gray-500 text-sm">
              Currently available for freelance & collaboration
            </span>
          </div>
        </motion.div>
      </div>

      {/* ───── Keyframe Animations (injected via style tag) ───── */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
