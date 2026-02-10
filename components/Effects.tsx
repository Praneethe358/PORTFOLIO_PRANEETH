'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  depth?: number;
}

export const CardTilt = ({ children, depth = 15 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * depth;
    const rotY = ((centerX - x) / centerX) * depth;

    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ children, delay = 0 }: Props & { delay?: number }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export const GlowBox = ({
  children,
  color = 'from-accent to-accent-purple',
}: Props & { color?: string }) => {
  return (
    <motion.div
      className={`relative`}
      whileHover={{
        boxShadow: `0 0 30px rgba(0, 217, 255, 0.5)`,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 blur-xl rounded-xl`} />
      {children}
    </motion.div>
  );
};

export const PulseRing = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-accent"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{
        scale: 2,
        opacity: 0,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
      }}
    />
  );
};
