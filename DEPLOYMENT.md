# 🚀 Deployment & Advanced Setup Guide

## Local Setup

### 1. Install Node.js
Download from [nodejs.org](https://nodejs.org) (LTS recommended)

### 2. Navigate to Project
```bash
cd C:\Users\prane\OneDrive\Desktop\PORTFOLIO_FINAL
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Locally
```bash
npm run dev
```

Visit `http://localhost:3000`

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - 5 minutes)

**Why Vercel?**
- Next.js creators
- Free tier
- Instant deployments
- Custom domain support
- SSL included
- Analytics included

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Click "Deploy"
   - Wait 2-3 minutes

3. **Add Custom Domain**
   - In Vercel dashboard → Settings → Domains
   - Add your domain
   - Update DNS records

---

### Option 2: Netlify

**Steps:**

1. **Connect GitHub**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

3. **Custom Domain**
   - Site settings → Domain management
   - Add custom domain

---

### Option 3: GitHub Pages

**Steps:**

1. **Update `next.config.js`**
   ```javascript
   const nextConfig = {
     output: 'export',
     reactStrictMode: true,
   };
   ```

2. **Build & Export**
   ```bash
   npm run build
   npm run export
   ```

3. **Push to GitHub**
   - Repository must be `YOUR_USERNAME.github.io`
   - Push `out/` folder contents

---

### Option 4: Self-Hosted (Linux Server)

**Requirements:**
- Ubuntu/Debian server
- Node.js 18+
- PM2 (process manager)

**Steps:**

1. **SSH into Server**
   ```bash
   ssh user@your-server.com
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   npm install
   npm run build
   ```

4. **Install PM2**
   ```bash
   sudo npm install -g pm2
   ```

5. **Start Application**
   ```bash
   pm2 start npm -- start --name "portfolio"
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx (Reverse Proxy)**
   ```bash
   sudo apt-get install nginx
   ```

   Create `/etc/nginx/sites-available/default`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Enable SSL (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## 🔧 Environment Variables

### Create `.env.local`
```bash
# API endpoints (if using backend)
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email service (if implementing contact form)
NEXT_PUBLIC_EMAIL_SERVICE_ID=service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=public_key
```

---

## 📊 Analytics Setup

### Google Analytics

1. **Get Tracking ID**
   - Visit [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get measurement ID

2. **Add to Project**
   ```bash
   npm install @next/third-parties
   ```

3. **Update `app/layout.tsx`**
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'

   export default function RootLayout() {
     return (
       <html>
         <body>
           {/* Your content */}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

---

## 📧 Email Contact Form

### Using EmailJS

1. **Install**
   ```bash
   npm install @emailjs/browser
   ```

2. **Create Email Component**
   ```typescript
   'use client';
   import emailjs from '@emailjs/browser';
   import { useState } from 'react';

   export default function ContactForm() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: '',
     });

     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       
       try {
         await emailjs.send(
           'service_id',
           'template_id',
           {
             from_name: formData.name,
             from_email: formData.email,
             message: formData.message,
           },
           'public_key'
         );
         alert('Message sent!');
       } catch (error) {
         console.error('Error:', error);
       }
     };

     return (
       <form onSubmit={handleSubmit}>
         {/* Form fields */}
       </form>
     );
   }
   ```

---

## 🔒 Security Best Practices

1. **Environment Variables**
   - Never commit `.env.local`
   - Use `.env.example` for reference
   - Store secrets in deployment platform

2. **CORS Configuration**
   ```typescript
   // next.config.js
   const nextConfig = {
     headers: async () => {
       return [
         {
           source: '/:path*',
           headers: [
             { key: 'X-Content-Type-Options', value: 'nosniff' },
             { key: 'X-Frame-Options', value: 'DENY' },
           ],
         },
       ];
     },
   };
   ```

3. **Content Security Policy**
   ```typescript
   // next.config.js
   const csp = `
     default-src 'self';
     script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google-analytics.com;
     style-src 'self' 'unsafe-inline';
   `;
   ```

---

## 📱 PWA Setup (Optional)

Make portfolio installable:

```bash
npm install next-pwa
```

Update `next.config.js`:
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  reactStrictMode: true,
});
```

---

## 📈 Performance Optimization

### Image Optimization
```typescript
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Profile"
  width={400}
  height={400}
  priority
  quality={80}
/>
```

### Code Splitting
```typescript
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('./Projects'), {
  loading: () => <p>Loading...</p>,
});
```

### API Routes Caching
```typescript
// app/api/projects/route.ts
export const revalidate = 3600; // Cache for 1 hour
```

---

## 🐛 Debugging

### Development Mode
```bash
npm run dev
```

### Build Testing
```bash
npm run build
npm start
```

### Error Logs
- Check browser console (F12)
- Check terminal output
- Check deployment logs (Vercel/Netlify)

---

## 📦 Build & Bundle Size

### Analyze Bundle
```bash
npm install --save-dev @next/bundle-analyzer
```

Update `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
```

Run:
```bash
ANALYZE=true npm run build
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      - run: npm run lint
      
      - name: Deploy to Vercel
        run: npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

---

## 🎯 Post-Deployment Checklist

- [ ] Domain configured and working
- [ ] SSL certificate active
- [ ] Analytics installed and tracking
- [ ] Contact form working
- [ ] Social media links functional
- [ ] Mobile responsiveness verified
- [ ] Lighthouse score checked
- [ ] SEO metadata correct
- [ ] 404 page customized
- [ ] Performance monitored

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com

---

Happy deploying! 🚀
