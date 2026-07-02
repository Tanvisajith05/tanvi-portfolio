# Tanvi S Ajith — Portfolio

A production-quality portfolio website built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌗 Dark / Light mode | System-aware default, persisted in `localStorage` |
| 📊 Scroll progress bar | Gradient bar fixed at top of viewport |
| ⬆️ Back-to-top button | Appears after 400px scroll, animated |
| 💫 Loading animation | Full-screen splash on first render |
| 🎞️ Framer Motion | Stagger reveals, layout animations, marquee |
| 📱 Fully responsive | Mobile-first, tested at 320 px → 1920 px |
| ⚡ Code splitting | Lazy-loaded sections for best LCP |
| ♿ Accessibility | ARIA labels, focus-visible, reduced-motion |
| 🔍 SEO | Meta tags, Open Graph, canonical URL, robots |
| 🔵 Filter tabs | Projects filterable by category |

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with mobile drawer
│   │   └── Footer.tsx       # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # Bio + stats
│   │   ├── Projects.tsx     # Filter + card grid
│   │   ├── Skills.tsx       # Category cards + marquee
│   │   ├── Experience.tsx   # Timeline
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx      # Form + social links
│   └── ui/
│       ├── FadeIn.tsx       # Scroll-reveal wrapper
│       ├── SectionHeader.tsx
│       ├── ScrollProgressBar.tsx
│       ├── BackToTop.tsx
│       └── LoadingScreen.tsx
├── data/
│   └── portfolio.ts         # ← Edit content here
├── hooks/
│   ├── useTheme.ts
│   ├── useScrollProgress.ts
│   └── useActiveSection.ts
├── styles/
│   └── index.css            # Tailwind + CSS variables + utilities
├── App.tsx
└── main.tsx
```

---

## 🚀 Quick Start

```bash
# 1. Install (React 19 needs legacy peer deps flag)
npm install --legacy-peer-deps

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## ✏️ Updating Content

All portfolio data lives in **`src/data/portfolio.ts`** — edit that file to change:

- Personal info, social links, availability status
- Projects (title, description, tags, category)
- Skill categories
- Work experience
- Certifications

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag-and-drop the `dist/` folder at app.netlify.com/drop
# Or: netlify deploy --dir=dist --prod
```

### GitHub Pages
```bash
# Add homepage to package.json: "homepage": "https://username.github.io/repo"
npm run build
npx gh-pages -d dist
```

### Static hosting (any)
After `npm run build`, upload the `dist/` directory. The site is a pure SPA — configure your host to serve `index.html` for all routes.

---

## 🎨 Theming

CSS custom properties in `src/styles/index.css` control the light/dark palette. Tailwind config extends the `brand` and `accent` color scales. Change `--brand` in `:root` and `.dark` to retheme the whole site.

---

## 📄 License

MIT — feel free to fork and personalise.
