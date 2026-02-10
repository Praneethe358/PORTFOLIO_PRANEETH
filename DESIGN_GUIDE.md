# 🎨 Visual Design & Motion Guide

## Color System

### Primary Colors
```
Accent Cyan:     #00d9ff  (Main action color)
Accent Purple:   #6c5ce7  (Secondary highlights)
Accent Pink:     #fd79a8  (Tertiary highlights)
```

### Neutral Colors
```
Background:      #0a0e27  (Main bg)
Bg Secondary:    #111628  (Secondary sections)
Bg Tertiary:     #16213e  (Hover/Alt)
Text Primary:    #ffffff  (Headings)
Text Secondary:  #e0e0e0  (Body text)
Text Tertiary:   #a0a0a0  (Meta text)
```

### Visual Example
```
┌─────────────────────────────────────┐
│ Dark Navy Background (#0a0e27)      │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Glassmorphic Card               │ │
│ │ (rgba 0.05 blur 10px)           │ │
│ │                                 │ │
│ │ Cyan Accent #00d9ff             │ │
│ │ Purple #6c5ce7  Pink #fd79a8    │ │
│ │                                 │ │
│ │ Hover: rgba 0.08 + Glow         │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Typography System

### Font Family
- **Primary**: Inter (sans-serif)
- **Fallback**: System fonts

### Font Sizes
```
H1 (Hero):       3.75rem (60px)
H2 (Sections):   2.25rem (36px)
H3 (Cards):      1.5rem (24px)
Body:            1rem (16px)
Meta:            0.875rem (14px)
```

### Font Weights
```
Bold/Headings:   700
Semibold:        600
Medium:          500
Regular:         400
```

### Example Hierarchy
```
┌─────────────────────────────────────┐
│                                     │
│  Praneeth                           │  ← H1 Bold (3.75rem)
│                                     │
│  AI & Data Science Student          │  ← Subtitle (1.25rem)
│                                     │
│  Lorem ipsum dolor sit amet...      │  ← Body (1rem)
│                                     │
└─────────────────────────────────────┘
```

---

## Spacing System

### Space Scale (Multiples of 0.25rem)
```
XS:  0.25rem (4px)
SM:  0.5rem  (8px)
MD:  1rem    (16px)
LG:  1.5rem  (24px)
XL:  2rem    (32px)
2XL: 2.5rem  (40px)
3XL: 3rem    (48px)
4XL: 4rem    (64px)
```

### Common Spacing
```
Section padding:     py-20 (80px top/bottom)
Container padding:   px-4 to px-16 (responsive)
Card padding:        p-8 (32px)
Element gap:         gap-4 to gap-8 (16-32px)
```

---

## Component States

### Button States
```
┌─────────────────────┐
│ DEFAULT             │  ← Normal state
│ bg-gradient cyan    │
│ text-white          │
│ border-none         │
└─────────────────────┘

┌─────────────────────┐
│ HOVER               │  ← Mouse over
│ scale: 1.05         │
│ shadow-lg           │
│ glow effect         │
└─────────────────────┘

┌─────────────────────┐
│ ACTIVE/TAP          │  ← Clicked/Tapped
│ scale: 0.95         │
│ opacity: 0.8        │
└─────────────────────┘
```

### Card States
```
┌─────────────────────┐
│ NORMAL              │  ← Default
│ glass               │
│ bg-white/5          │
│ blur: 10px          │
└─────────────────────┘

┌─────────────────────┐
│ HOVER               │  ← Mouse over
│ y: -5px             │
│ bg-white/8          │
│ border-cyan/30      │
│ shadow-cyan glow    │
└─────────────────────┘
```

---

## Animation Timing

### Duration Scale
```
Fast:      0.3s  (Quick micro-interactions)
Normal:    0.6s  (Section transitions)
Slow:      0.8s  (Hero animations)
VerySlow:  1.2s  (Background elements)
```

### Easing Curves
```
EaseOut:    [0.25, 0.46, 0.45, 0.94]
            ↑ Smooth deceleration

EaseInOut:  [0.4, 0, 0.2, 1]
            ↑ Both smooth in and out

Spring:     type: spring
            damping: 15
            stiffness: 150
            ↑ Natural, bouncy motion
```

### Example Animations
```
Fade In Up:
  Initial:  opacity 0, translateY(40px)
  Animate:  opacity 1, translateY(0px)
  Duration: 0.8s easeOut
  ↓
  Result: Element slides up & fades in

Staggered Children:
  Item 1: starts at 0s
  Item 2: starts at 0.15s
  Item 3: starts at 0.3s
  ↓
  Result: Sequential animation

3D Tilt:
  Mouse x: rotateY(±15°)
  Mouse y: rotateX(±15°)
  ↓
  Result: Card follows mouse in 3D space
```

---

## Visual Effects

### Glassmorphism
```
Property        Value
─────────────────────────────────────
Background:     rgba(255,255,255,0.05)
Backdrop Filter: blur(10px)
Border:         1px solid rgba(255,255,255,0.1)
Border Radius:  12px

On Hover:
Background:     rgba(255,255,255,0.08)  (more opaque)
Border:         rgba(0,217,255,0.3)     (cyan tint)
```

### Glow Effects
```
Default Glow:
  0 0 20px rgba(0, 217, 255, 0.3)

Strong Glow:
  0 0 40px rgba(0, 217, 255, 0.6)

Animated Glow:
  Pulses between 0.3 and 0.6 opacity
  Duration: 3 seconds
  Repeats: infinite
```

### Shadow System
```
sm:    0 1px 2px 0 rgba(0, 0, 0, 0.05)
md:    0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg:    0 10px 15px -3px rgba(0, 0, 0, 0.1)
xl:    0 20px 25px -5px rgba(0, 0, 0, 0.1)

Glow:  0 0 20px rgba(0, 217, 255, 0.3)
```

---

## Responsive Breakpoints

### Screen Sizes
```
Mobile:        < 640px   (Full-width, stacked)
Tablet:        640-1024px (2-column, optimized)
Desktop:       > 1024px  (Full-featured, 3+ columns)
```

### Responsive Text
```
Heading on Mobile:  1.5rem (24px)
Heading on Tablet:  2.25rem (36px)
Heading on Desktop: 3.75rem (60px)
```

### Responsive Layout
```
Mobile:
┌───────────────────┐
│ Card 1            │
├───────────────────┤
│ Card 2            │
├───────────────────┤
│ Card 3            │
└───────────────────┘

Tablet:
┌──────────────┬──────────────┐
│ Card 1       │ Card 2       │
├──────────────┼──────────────┤
│ Card 3       │ Card 4       │
└──────────────┴──────────────┘

Desktop:
┌──────────┬──────────┬──────────┐
│ Card 1   │ Card 2   │ Card 3   │
├──────────┼──────────┼──────────┤
│ Card 4   │ Card 5   │ Card 6   │
└──────────┴──────────┴──────────┘
```

---

## Animation Sequences

### Scroll-Based Animation
```
Viewport Edge
    ↓
   ┌─────────────────────────────────┐
   │                                 │
   │  Element starts hidden          │
   │  (opacity: 0, translateY: 40px) │
   │                                 │
   │─────────────────────────────────│ ← Element in viewport
   │                                 │
   │  Animation triggers:            │
   │  (opacity: 1, translateY: 0px)  │
   │  Duration: 0.8s                 │
   │                                 │
   │─────────────────────────────────│ ← Element fully visible
   │                                 │
   └─────────────────────────────────┘
```

### Hover Animation
```
BEFORE HOVER:
┌─────────────────────┐
│ Card                │  y: 0px
│                     │  scale: 1
└─────────────────────┘

ON HOVER:
┌─────────────────────┐
│ Card                │  ← y: -5px (lifted up)
│                     │  ← scale: 1.02 (slightly larger)
│                     │  ← shadow-lg (more shadow)
│                     │  ← glow (cyan light)
└─────────────────────┘
Duration: 0.3s easeOut
```

---

## Color Combinations

### Hero Section
```
Text: Gradient cyan → purple → pink
Background: Animated shapes (purple + cyan)
Result: Bold, eye-catching entrance
```

### Card Accents
```
Primary Badge:  bg-accent/20 text-accent
Secondary:      border-accent/50
Hover:          border-accent
Result: Consistent, subtle color guidance
```

### Gradients
```
Purple→Cyan:   #6c5ce7 → #00d9ff
Cyan→Pink:     #00d9ff → #fd79a8
Pink→Purple:   #fd79a8 → #6c5ce7

Used on:
- Gradient text
- Hover overlays
- Background animations
```

---

## Accessibility Considerations

### Color Contrast
```
Text on Dark Background:
  White (#fff) on #0a0e27  ✅ Excellent (21:1)
  Gray (#e0e0e0) on #0a0e27  ✅ Good (12:1)

Accent Colors:
  Cyan (#00d9ff) on dark  ✅ Good (8:1)
  Purple (#6c5ce7) on dark  ⚠️ Check (5:1)
```

### Motion Preferences
```
Respects: prefers-reduced-motion
- Animations reduce to 0.1s
- No parallax effects
- No complex transforms
```

### Interactive Elements
```
Buttons: Clear focus states
Links: Underlined or icon
Icons: Proper sizing (20px+)
Touch: Min 44px tap targets
```

---

## Mobile Optimization

### Mobile Animations
```
Desktop:           Mobile:
Complex 3D tilt → Simpler fade
Parallax scroll → Static layers
Many moving items → Fewer animations

Result: Smooth 60fps on mobile
```

### Touch Interactions
```
Button:
  Default: Normal size
  Hover: Not used (mobile has no hover)
  Tap: Scale 0.95 + feedback
  Release: Scale 1.0

Result: Clear tactile feedback
```

---

## Performance Metrics

### Target Scores
```
Lighthouse Performance:    90+
Lighthouse Accessibility: 95+
Lighthouse SEO:           100
Core Web Vitals:          All Green

Animation Performance:    60fps
First Contentful Paint:   < 1.5s
Largest Contentful Paint: < 2.5s
```

---

## Design Philosophy

### Principles Applied
```
1. Contrast
   High contrast text on dark background
   Clear visual hierarchy

2. Motion
   Purposeful animations (not decorative)
   Under 1s for most interactions
   Spring easing for natural feel

3. Space
   Generous padding
   Clear breathing room
   Logical grouping

4. Typography
   Large, readable fonts
   Clear font weight hierarchy
   Proper line height

5. Color
   Limited palette (3 accent colors)
   Consistent usage
   Accessible contrast
```

---

## Design Tokens Summary

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Heading | 1.5rem | 2rem | 3.75rem |
| Body | 1rem | 1rem | 1rem |
| Padding | 1rem | 1.5rem | 2rem |
| Gap | 1rem | 1.5rem | 2rem |
| Max Width | 100% | 90% | 80% |

---

## Visual Checklist

✅ Consistent color usage
✅ Proper spacing throughout
✅ Clear typography hierarchy
✅ Smooth animations
✅ Mobile optimized
✅ Accessible contrast
✅ Glassmorphism effects
✅ Glow/shadow effects
✅ Responsive layout
✅ Touch-friendly

---

## Quick Design Reference

**Primary Accent Color**: #00d9ff (Cyan)
**Secondary Accent**: #6c5ce7 (Purple)
**Tertiary Accent**: #fd79a8 (Pink)
**Background**: #0a0e27 (Dark Navy)
**Font**: Inter, sans-serif
**Animation Duration**: 0.6s normal
**Easing**: ease-out [0.25, 0.46, 0.45, 0.94]
**Spacing Unit**: 0.25rem (4px)

---

*This guide ensures visual consistency throughout the portfolio.*
