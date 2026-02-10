# 📖 Component Reference Guide

## Overview

This guide provides a quick reference for all components, their props, usage, and customization.

---

## Animation Components (`components/Animation.tsx`)

### AnimatedContainer
Wraps multiple elements with staggered animations.

**Usage:**
```typescript
<AnimatedContainer>
  <FadeInUp>Content 1</FadeInUp>
  <FadeInUp>Content 2</FadeInUp>
</AnimatedContainer>
```

**Props:**
- `children` (React.ReactNode) - Child elements
- `delay` (number, optional) - Initial delay in seconds

---

### AnimatedItem
Individual item within animation sequence.

**Props:**
- `children` (React.ReactNode)
- `direction` ('left' | 'right' | 'up' | 'down') - Animation direction

---

### FadeInUp
Fade and slide up animation.

**Usage:**
```typescript
<FadeInUp delay={0.2}>
  <h2>Section Title</h2>
</FadeInUp>
```

**Props:**
- `children` (React.ReactNode)
- `delay` (number) - Delay in seconds

---

### ScaleIn
Scale animation from smaller to normal size.

**Usage:**
```typescript
<ScaleIn delay={0.1}>
  <div>Content</div>
</ScaleIn>
```

---

### StaggerContainer
Container that staggers children animations.

**Usage:**
```typescript
<StaggerContainer>
  <FadeInUp>Item 1</FadeInUp>
  <FadeInUp>Item 2</FadeInUp>
</StaggerContainer>
```

---

## Effect Components (`components/Effects.tsx`)

### CardTilt
Mouse-follow 3D tilt effect on cards.

**Usage:**
```typescript
<CardTilt depth={15}>
  <div className="card">Content</div>
</CardTilt>
```

**Props:**
- `children` (React.ReactNode)
- `depth` (number, default: 15) - Tilt intensity

---

### FloatingElement
Continuous floating animation.

**Usage:**
```typescript
<FloatingElement delay={0.5}>
  <div>Content</div>
</FloatingElement>
```

**Props:**
- `children` (React.ReactNode)
- `delay` (number) - Animation delay

---

### GlowBox
Box with glowing hover effect.

**Usage:**
```typescript
<GlowBox color="from-accent to-accent-purple">
  <div>Content</div>
</GlowBox>
```

**Props:**
- `children` (React.ReactNode)
- `color` (string) - Gradient classes

---

### PulseRing
Expanding ring animation.

**Usage:**
```typescript
<div className="relative">
  <PulseRing delay={0} />
  <button>Click Me</button>
</div>
```

**Props:**
- `delay` (number) - Animation delay

---

## Page Sections

### Navigation (`components/Navigation.tsx`)

**Features:**
- Fixed positioning
- Glassmorphic effect
- Scroll detection
- Active section tracking
- Mobile menu button

**Customization:**
```typescript
const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  // Add more items
];
```

---

### Hero (`components/Hero.tsx`)

**Features:**
- Gradient text
- Animated background shapes
- CTA buttons
- Scroll indicator
- Staggered animations

**Customize:**
```typescript
<h1>Your Name</h1>
<p>Your Role</p>
<p>Your Tagline</p>
```

---

### About (`components/About.tsx`)

**Features:**
- Glassmorphic stats cards
- Bio section
- Hover animations
- Responsive grid

**Customize:**
```typescript
const stats = [
  { label: 'Projects', value: '10+' },
  // Add more stats
];
```

---

### Education (`components/Education.tsx`)

**Features:**
- Single education card
- Hover lift effect
- Date range display
- Description section

**Customize:**
- School name
- Degree title
- Graduation date
- Description

---

### Skills (`components/Skills.tsx`)

**Features:**
- Category-based layout
- Icon display
- Hover animations
- 3-column grid

**Customize:**
```typescript
const skillCategories = [
  {
    title: 'Category Name',
    skills: [
      { name: 'Skill', icon: Icon, color: '#hex' },
    ],
  },
];
```

---

### Projects (`components/Projects.tsx`)

**Features:**
- Project grid
- Category badges
- Tech stack tags
- GitHub/Live links
- Gradient overlays
- Hover animations

**Customize:**
```typescript
{
  id: 1,
  title: 'Project Title',
  category: 'Category',
  description: 'Description',
  tech: ['Tech1', 'Tech2'],
  color: 'from-accent to-purple',
  github: 'url',
  live: 'url',
}
```

---

### Contact (`components/Contact.tsx`)

**Features:**
- Social media links
- Glassmorphic buttons
- Email CTA
- Hover animations

**Customize:**
```typescript
const socialLinks = [
  {
    name: 'Platform',
    icon: Icon,
    href: 'url',
    color: 'hover:text-color',
  },
];
```

---

### Footer (`components/Footer.tsx`)

**Features:**
- Copyright year
- Description
- Glassmorphic styling
- Fade in animation

**Customize:**
- Site name
- Description
- Copyright year (auto)

---

## Utility Classes (CSS)

### Glassmorphism
```html
<div class="glass">Content</div>
```

With hover:
```html
<div class="glass glass-hover">Content</div>
```

### Gradient Text
```html
<h1 class="gradient-text">Praneeth</h1>
```

### Buttons
```html
<!-- Primary -->
<button class="btn-primary">Action</button>

<!-- Secondary -->
<button class="btn-secondary">Action</button>
```

### Sections
```html
<section class="section">Content</section>
```

---

## Design Tokens (`config/design.ts`)

### Colors
```typescript
import { COLORS } from '@/config/design';

COLORS.accent        // Cyan
COLORS.accentPurple  // Purple
COLORS.accentPink    // Pink
```

### Animations
```typescript
import { ANIMATIONS } from '@/config/design';

ANIMATIONS.fast      // 0.3s
ANIMATIONS.normal    // 0.6s
ANIMATIONS.slow      // 0.8s
ANIMATIONS.easeOut   // Easing function
```

### Shadows
```typescript
import { SHADOWS } from '@/config/design';

SHADOWS.glow         // Cyan glow
SHADOWS.glowLarge    // Larger glow
```

---

## Common Patterns

### Section with Animation
```typescript
<section className="section">
  <div className="max-w-6xl mx-auto">
    <StaggerContainer>
      <FadeInUp delay={0}>
        <h2 className="text-4xl font-bold gradient-text">Title</h2>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <p>Content</p>
      </FadeInUp>
    </StaggerContainer>
  </div>
</section>
```

### Card with Hover
```typescript
<motion.div
  className="glass p-8 rounded-xl"
  whileHover={{
    y: -5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Interactive Button
```typescript
<motion.button
  className="btn-primary"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

---

## Tailwind Classes Used

### Colors
- `text-white`, `text-gray-300`, `text-gray-400`
- `bg-bg`, `bg-bg-secondary`
- `border-white/10`

### Spacing
- `px-4`, `py-6` (padding)
- `mb-6`, `mt-4` (margins)
- `gap-4`, `gap-8` (gaps)

### Display
- `flex`, `grid`
- `md:grid-cols-2`, `lg:grid-cols-3`
- `hidden`, `md:flex`

### Effects
- `backdrop-blur`, `rounded-xl`
- `shadow-lg`, `transition-all`

---

## Icon Libraries

### React Icons included:
- **Font Awesome** (`Fa*` prefix)
- **Feather** (`Fi*` prefix)
- **Simple Icons** (`Si*` prefix)

**Example:**
```typescript
import { FaPython, FaGithub } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';

<FaPython size={28} color="#3776ab" />
```

---

## Responsive Design

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

### Usage
```html
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Items
</div>
```

---

## Performance Tips

1. **Use viewport detection**
   ```typescript
   viewport={{ once: true, margin: '-100px' }}
   ```

2. **Optimize images**
   ```typescript
   import Image from 'next/image';
   ```

3. **Code split large components**
   ```typescript
   const Component = dynamic(() => import('./Component'));
   ```

4. **Limit concurrent animations**
   - Max 2-3 animated elements visible

---

## Customization Checklist

When adding new components:

- [ ] Add animations with `FadeInUp` or `ScaleIn`
- [ ] Use `glass` class for cards
- [ ] Add hover states with `whileHover`
- [ ] Make responsive with Tailwind classes
- [ ] Use design tokens from `config/design.ts`
- [ ] Test on mobile
- [ ] Check Lighthouse performance

---

## Troubleshooting

### Animations Not Smooth
- Check for `useEffect` without cleanup
- Reduce element count
- Profile with DevTools

### Layout Breaking on Mobile
- Check responsive classes
- Use `md:` prefixes
- Test with Chrome DevTools

### Icons Not Showing
- Verify import statement
- Check icon name spelling
- Ensure react-icons is installed

---

## Quick Reference

| Need | File | Class/Component |
|------|------|---|
| Section | components/* | `.section` |
| Animation | Animation.tsx | `FadeInUp` |
| Card | globals.css | `.glass` |
| Button | globals.css | `.btn-primary` |
| Text Gradient | globals.css | `.gradient-text` |
| Icon | react-icons | `FaPython` |

---

**Happy building!** ✨

For more details, see component source files.
