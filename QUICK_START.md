# 🎯 Quick Reference Card - Praneeth's Portfolio

## 📍 Location
`C:\Users\prane\OneDrive\Desktop\PORTFOLIO_FINAL`

---

## ⚡ Quick Start (3 Commands)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **README.md** | Setup overview and dependencies |
| **SETUP_GUIDE.md** | Getting started (start here!) |
| **CUSTOMIZATION.md** | How to update your content |
| **DEPLOYMENT.md** | How to deploy live |
| **COMPONENT_REFERENCE.md** | API documentation |
| **COMPLETION_SUMMARY.md** | What's been created |

---

## 🎨 Main Files to Customize

| What | File | Where |
|------|------|-------|
| Your Name | `components/Hero.tsx` | Line ~30 |
| Your Role | `components/Hero.tsx` | Line ~33 |
| Bio Text | `components/About.tsx` | Line ~15 |
| School | `components/Education.tsx` | Line ~18 |
| Skills | `components/Skills.tsx` | Line ~15 |
| Projects | `components/Projects.tsx` | Line ~13 |
| Email | `components/Contact.tsx` | Line ~28 |
| Colors | `tailwind.config.ts` | Line ~15 |

---

## 🏗️ Project Structure

```
PORTFOLIO_FINAL/
├── app/                 # Next.js pages
│   ├── layout.tsx       # HTML structure
│   ├── page.tsx         # Main portfolio
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Animation.tsx     # Animation helpers
│   ├── Effects.tsx       # Visual effects
│   ├── Navigation.tsx    # Top nav
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Education.tsx    # Education section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects grid
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── config/              # Configuration
│   └── design.ts        # Design tokens
├── styles/              # CSS files
│   └── globals.css      # Global styles
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind config
├── tsconfig.json        # TypeScript config
└── next.config.js       # Next.js config
```

---

## 🎯 Sections & Features

### Hero
- Name with gradient text
- Role description
- CTA buttons
- Animated background
- Scroll indicator

### About
- Bio text
- 3 stat cards
- Responsive layout
- Hover animations

### Education
- Degree info
- School details
- Dates & description
- Interactive card

### Skills
- 3 categories
- Tech icons
- Interactive hover
- Visual display

### Projects
- 4 featured projects
- Category badges
- Tech stack tags
- GitHub/Live links
- Hover effects

### Contact
- Call to action
- Social media buttons
- Email CTA
- Responsive layout

---

## 🎨 Colors You Can Change

**File**: `tailwind.config.ts` (lines 15-20)

```javascript
accent: '#00d9ff',          // Cyan (change this)
accentPurple: '#6c5ce7',    // Purple (change this)
accentPink: '#fd79a8',      // Pink (change this)
```

---

## 🚀 Commands

```bash
# Development
npm run dev              # Start dev server (port 3000)

# Production
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Check for errors

# Deployment
git push origin main     # Push to GitHub for auto-deploy
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All animations adapt automatically.

---

## 🔗 Important Links

| Purpose | URL |
|---------|-----|
| Live Dev | http://localhost:3000 |
| Deploy | https://vercel.com |
| GitHub | https://github.com |
| Next.js Docs | https://nextjs.org |
| Framer Motion | https://framer.com/motion |
| Tailwind | https://tailwindcss.com |

---

## 📊 File Counts

- **Total Files**: 25+
- **Components**: 10
- **Config Files**: 4
- **Docs**: 6
- **Styles**: 2

---

## 💡 Key Technologies

| Tech | Purpose |
|------|---------|
| **Next.js 14** | React framework |
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Framer Motion** | Animations |
| **Tailwind CSS** | Styling |
| **React Icons** | Icons |

---

## ✅ Customization Steps

1. **Update Content** (30-60 mins)
   - Edit each component file
   - Follow CUSTOMIZATION.md

2. **Test Locally** (10 mins)
   - Run `npm run dev`
   - Check mobile with DevTools

3. **Deploy** (5-15 mins)
   - Push to GitHub
   - Deploy via Vercel

4. **Go Live** (5 mins)
   - Add custom domain
   - Verify everything works

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Cache
```bash
npm run build
```

### Update Dependencies
```bash
npm update
```

### Mobile Testing
- F12 → Device Toolbar
- Test at different sizes

---

## 🎓 Learning Path

1. Read **SETUP_GUIDE.md** (5 mins)
2. Run **npm install** (1 min)
3. Run **npm run dev** (1 min)
4. Browse portfolio (5 mins)
5. Read **CUSTOMIZATION.md** (5 mins)
6. Update content (30-60 mins)
7. Read **DEPLOYMENT.md** (5 mins)
8. Deploy to Vercel (5-15 mins)

---

## 🎯 Checklist

Before sharing:
- [ ] Content updated
- [ ] No placeholders
- [ ] Mobile tested
- [ ] Links working
- [ ] Deployed live
- [ ] Analytics added
- [ ] Social links verified

---

## 📞 Where to Get Help

1. **CUSTOMIZATION.md** - For content updates
2. **DEPLOYMENT.md** - For publishing
3. **COMPONENT_REFERENCE.md** - For API docs
4. **Code comments** - In component files

---

## 🌟 Key Features

✨ Dark futuristic design
🌀 Smooth 60fps animations
📱 Fully responsive
🎨 Glassmorphism effects
🚀 Performance optimized
🔐 TypeScript typed
📚 Well documented
🎯 Easy to customize

---

## 🚀 Ready to Start?

```bash
cd "C:\Users\prane\OneDrive\Desktop\PORTFOLIO_FINAL"
npm install
npm run dev
```

Then open: **http://localhost:3000**

---

## 📖 Read First

1. This file (you are here)
2. **SETUP_GUIDE.md**
3. **CUSTOMIZATION.md**
4. **DEPLOYMENT.md**

---

**Everything is ready. Time to customize and ship!** 🎉

For detailed help, see the documentation files.
