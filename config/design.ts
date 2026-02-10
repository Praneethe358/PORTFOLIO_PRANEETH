// Design tokens and constants for the portfolio

export const COLORS = {
  // Primary Accent — Yellow/Gold
  accent: '#d4a43a',
  accentDark: '#b8882e',
  accentLight: '#f0c95c',

  // Neutrals
  white: '#ffffff',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',

  // Backgrounds
  bg: '#0b0f1a',
  bgSecondary: '#101525',
  bgCard: '#131830',
};

export const ANIMATIONS = {
  // Durations (in seconds)
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  verySlow: 1.2,

  // Easing
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: { type: 'spring', damping: 15, stiffness: 150 },

  // Delays
  delay0: 0,
  delay1: 0.1,
  delay2: 0.2,
  delay3: 0.3,
  delay4: 0.4,
};

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
  '4xl': '4rem',
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  glow: '0 0 20px rgba(212, 164, 58, 0.3)',
  glowLarge: '0 0 40px rgba(212, 164, 58, 0.5)',
};

export const TYPOGRAPHY = {
  // Font families
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'monospace'],
  },

  // Font sizes
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
};

export const TRANSITIONS = {
  fast: 'all 0.15s ease-out',
  normal: 'all 0.3s ease-out',
  slow: 'all 0.5s ease-out',
};

export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Social media configuration
export const SOCIAL_LINKS = {
  email: 'praneeth@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
};

// Site metadata
export const SITE_CONFIG = {
  title: 'Praneeth - AI & Data Science Portfolio',
  description:
    'Portfolio of Praneeth, an AI & Data Science Student building intelligent systems with Python, Machine Learning, and NLP.',
  author: 'Praneeth',
  siteUrl: 'https://praneeth.dev',
  keywords: ['AI', 'Data Science', 'Machine Learning', 'NLP', 'Python', 'Portfolio'],
  socialImage: '/og-image.png',
};

// Project categories
export const PROJECT_CATEGORIES = {
  ml: 'Machine Learning',
  nlp: 'Natural Language Processing',
  ds: 'Data Science',
  web: 'Web Development',
  dataviz: 'Data Visualization',
};

// Skill categories
export const SKILL_CATEGORIES = {
  languages: 'Programming Languages',
  ml: 'ML & Data Science',
  data: 'Data & Libraries',
  web: 'Web Technologies',
  tools: 'Tools & Platforms',
};
