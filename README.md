# Praneeth's Portfolio - Installation & Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable React components
│   ├── Animation.tsx      # Framer Motion animation wrappers
│   ├── Navigation.tsx     # Top navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Education.tsx      # Education section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Featured projects
│   ├── Contact.tsx        # Contact/Connect section
│   └── Footer.tsx         # Footer
├── styles/
│   └── globals.css        # Global styles + custom utilities
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

---

## 🎨 Key Features

### 🌀 Animations & Motion
- **Framer Motion** for smooth transitions
- Staggered animations on scroll
- Micro-interactions on hover
- Parallax effects on background elements
- 3D tilt effects on project cards
- Spring-based easing for natural motion

### 🧊 Visual Effects
- **Glassmorphism**: Glass-effect cards with backdrop blur
- **Gradient Text**: Multi-color gradient text
- **Floating Elements**: Animated background shapes
- **Smooth Scrolling**: Native HTML scroll-behavior

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Simplified animations on mobile

### 🎯 Performance
- Next.js 14+ app directory
- CSS-in-JS optimization
- Lazy loading with viewport detection
- 60fps animations

---

## 🔧 Customization

### Change Personal Details
Edit `app/page.tsx` and component files to update:
- Name and role
- About information
- Education details
- Skills and tech stack
- Project information
- Social media links

### Customize Colors
Edit `tailwind.config.ts` to modify:
- Accent colors
- Gradient colors
- Glassmorphism opacity
- Animation durations

### Add New Sections
1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Use animation wrappers from `Animation.tsx`

---

## 📦 Dependencies

### Core
- **Next.js 14**: React framework
- **React 18**: UI library
- **TypeScript**: Type safety

### Styling
- **Tailwind CSS**: Utility-first CSS
- **PostCSS**: CSS processing

### Animation
- **Framer Motion**: Animation library

### Icons
- **React Icons**: Icon library with multiple sets

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm run build
npm run export
```

### Deploy to Netlify
Connect your GitHub repository to Netlify for automatic deployments.

---

## 📊 Performance Checklist

- ✅ 60fps animations
- ✅ Optimized images
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Viewport-based rendering
- ✅ Accessible animations (respects prefers-reduced-motion)

---

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

---

## 📝 License

This portfolio is open source and available under the MIT License.

---

## 💡 Tips for Success

1. **Customize with Real Data**: Replace placeholder content with actual projects and information
2. **Add Social Links**: Update email and social media URLs in Contact and Footer components
3. **Optimize Images**: Use next/image for profile pictures and project images
4. **Test Responsiveness**: Use Chrome DevTools to test on different screen sizes
5. **Monitor Performance**: Use Lighthouse to check performance metrics
6. **Get Feedback**: Share with peers and mentors before deploying

---

Built with ❤️ using **Next.js**, **Framer Motion**, and **Tailwind CSS**
