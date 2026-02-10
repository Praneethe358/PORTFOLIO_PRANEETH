# 🎨 Portfolio Customization Guide

## Personal Information

### 1. Update Your Name & Role
**File**: `components/Hero.tsx`

```typescript
// Change this:
<h1>Praneeth</h1>
<p>AI & Data Science Student | Aspiring Data Scientist</p>
```

### 2. Update About Section
**File**: `components/About.tsx`

Edit the bio text and stats to match your profile.

### 3. Update Education Details
**File**: `components/Education.tsx`

```typescript
<h3>Bachelor of Technology</h3>
<p>AI & Data Science</p>
<span>2022 - 2026</span>
<p>Karunya Institute of Technology and Sciences</p>
```

---

## 🛠️ Customization Checklist

### Color Theme
**File**: `tailwind.config.ts`

```javascript
colors: {
  accent: '#00d9ff',           // Cyan accent
  'accent-purple': '#6c5ce7',  // Purple accent
  'accent-pink': '#fd79a8',    // Pink accent
}
```

**Change colors**:
1. Open `tailwind.config.ts`
2. Modify hex codes in the colors section
3. Colors will update globally

### Typography
**Font**: Inter (via Google Fonts)

To change font:
1. Edit `app/layout.tsx`
2. Update Google Fonts link
3. Modify `tailwind.config.ts` fontFamily

### Background Gradients
**File**: `styles/globals.css`

```css
body {
  background: linear-gradient(135deg, #0a0e27 0%, #111628 50%, #0a0e27 100%);
}
```

---

## 📁 File Locations for Content Updates

| Section | File | What to Update |
|---------|------|----------------|
| Hero | `components/Hero.tsx` | Name, role, tagline, CTA text |
| About | `components/About.tsx` | Bio, description, stats |
| Education | `components/Education.tsx` | School, degree, dates, description |
| Skills | `components/Skills.tsx` | Tech stack, categories, icons |
| Projects | `components/Projects.tsx` | Project titles, descriptions, links |
| Contact | `components/Contact.tsx` | Email, social media links |
| Navigation | `components/Navigation.tsx` | Nav items, scroll behavior |
| Footer | `components/Footer.tsx` | Copyright year, tagline |

---

## 🎬 Animation Customization

### Change Animation Speed
**File**: `components/Animation.tsx`

```typescript
transition: {
  duration: 0.8,  // Change this (0.3 = fast, 1.0 = slow)
  delay,
  ease: [0.25, 0.46, 0.45, 0.94],
}
```

### Add New Animation Type
In `components/Animation.tsx`:

```typescript
export const CustomAnimation = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
```

---

## 🔗 Update Social Links

**File**: `components/Contact.tsx`

```typescript
const socialLinks = [
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:your-email@example.com',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yourprofile',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/yourprofile',
  },
];
```

---

## 📸 Add Project Images

To add project images:

1. Create `public/projects/` folder
2. Add images (e.g., `project1.jpg`)
3. Update `components/Projects.tsx`:

```typescript
import Image from 'next/image';

<Image
  src="/projects/project1.jpg"
  alt="Project title"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

---

## 🎯 Add More Projects

**File**: `components/Projects.tsx`

Add to `projects` array:

```typescript
{
  id: 5,
  title: 'Your Project Title',
  category: 'Category',
  description: 'Project description',
  tech: ['Tech1', 'Tech2'],
  color: 'from-accent-purple to-accent',
  github: 'https://github.com/...',
  live: 'https://project-demo.com',
},
```

---

## 🎨 Modify Glass Effect

**File**: `styles/globals.css`

```css
.glass {
  background: rgba(255, 255, 255, 0.05);    /* Change opacity */
  backdrop-filter: blur(10px);               /* Change blur amount */
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## ✨ Add Custom Sections

### Step 1: Create Component
**New file**: `components/YourSection.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer } from './Animation';

const YourSection = () => {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer>
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Section Title
            </h2>
          </FadeInUp>
          {/* Your content */}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default YourSection;
```

### Step 2: Add to Page
**File**: `app/page.tsx`

```typescript
import YourSection from '@/components/YourSection';

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <YourSection />
    </main>
  );
}
```

---

## 📱 Mobile Optimization

Responsive breakpoints (Tailwind):
- `sm`: 640px
- `md`: 768px (most common)
- `lg`: 1024px
- `xl`: 1280px

Example:
```html
<div class="text-2xl md:text-4xl lg:text-6xl">
  Responsive text
</div>
```

---

## 🚀 Performance Tips

1. **Optimize Images**:
   ```typescript
   import Image from 'next/image';
   <Image src="path" width={400} height={300} priority />
   ```

2. **Code Split Components**:
   ```typescript
   const ProjectCard = dynamic(() => import('./ProjectCard'));
   ```

3. **Reduce Animation Count**: Too many animations slow down performance

4. **Use CSS Classes** instead of inline styles

---

## 🔍 SEO Customization

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Role',
  description: 'Your professional description',
  keywords: 'keyword1, keyword2, keyword3',
};
```

---

## 🌐 Deployment URLs

Update throughout site:
- `Contact.tsx`: Email href
- `Navigation.tsx`: Logo link
- `Footer.tsx`: Copyright links
- Open Graph images

---

## 📞 Quick Reference

| Need to change | File | Line/Section |
|---|---|---|
| Your name | Hero.tsx | h1 tag |
| Your role | Hero.tsx | p tag |
| Your email | Contact.tsx | href="mailto:..." |
| Site colors | tailwind.config.ts | colors object |
| Animation speed | Animation.tsx | transition.duration |
| Projects | Projects.tsx | projects array |
| Education | Education.tsx | Card content |
| Footer year | Footer.tsx | currentYear |

---

## 💡 Pro Tips

1. **Test on Mobile**: Use `npm run dev` then open DevTools
2. **Check Performance**: Lighthouse in Chrome DevTools
3. **Preview Changes**: Hot reload works automatically
4. **Version Control**: Commit changes to Git
5. **Backup Original**: Keep backup of original files

---

## 🆘 Common Issues

### Animations Not Working
- Check Framer Motion is installed: `npm install framer-motion`
- Ensure component has `'use client'` directive

### Styles Not Applying
- Run `npm run build` to rebuild
- Check Tailwind classes are in HTML
- Clear browser cache (Ctrl+Shift+Del)

### Images Not Loading
- Ensure images are in `public/` folder
- Use correct relative paths
- Check Next.js Image component usage

---

## 📖 Further Learning

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Next.js Guide](https://nextjs.org/docs)
- [React Docs](https://react.dev)

---

Happy customizing! 🎉
