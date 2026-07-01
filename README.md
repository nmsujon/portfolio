<div align="center">

# ✦ Nur Mohammad Sujon — Portfolio

**UI/UX Designer · Dhaka, Bangladesh**

A high-fidelity, dark-themed portfolio built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion** — engineered to showcase design craft at its finest.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.3-000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=000)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=fff)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)

</div>

---

## ⚡ Features

| Feature | Description |
| :--- | :--- |
| **Glassmorphic Navbar** | Floating pill navbar with scroll-aware backdrop blur, animated hover highlights & active glow indicators |
| **Hero Section** | Bold typographic hero with animated portrait, radial glow, and floating stats badge |
| **Categories** | Bento-grid service cards with staggered reveal animations |
| **Projects Showcase** | Case study cards with rich metadata, tech tags, and smooth viewport-triggered animations |
| **Countries Served** | Interactive globe / map visualization of global reach |
| **Contact CTA** | Service tag selector chips, glassmorphic modal with form validation & animated success state |
| **Custom Cursor** | Magnetic cursor follower with hover-aware scaling |
| **Social Sidebar** | Fixed vertical social links bar |
| **Film Grain Overlay** | Subtle animated noise texture for premium aesthetic |

---

## 🛠 Tech Stack

```
Framework    →  Next.js 16 (App Router + Turbopack)
Styling      →  Tailwind CSS 4 + Custom CSS utilities
Animation    →  Framer Motion 12
Icons        →  Lucide React + Custom SVG components
Typography   →  Geist Sans & Geist Mono (next/font)
Language     →  TypeScript 5
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/              # Images, logos, portraits
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, glass utilities, animations
│   │   ├── layout.tsx       # Root layout with Navbar, Cursor, SocialBar
│   │   └── page.tsx         # Home page composition
│   └── components/
│       ├── Navbar.tsx        # Glassmorphic floating navbar
│       ├── Hero.tsx          # Hero section with portrait & stats
│       ├── Categories.tsx    # Service category bento grid
│       ├── Projects.tsx      # Project showcase cards
│       ├── CountriesServed.tsx # Global reach visualization
│       ├── Contact.tsx       # CTA banner + glassmorphic form modal
│       ├── Cursor.tsx        # Custom magnetic cursor
│       ├── SocialBar.tsx     # Fixed social links sidebar
│       ├── Icons.tsx         # Custom SVG icon components
│       ├── Magnetic.tsx      # Magnetic hover wrapper
│       └── Grain.tsx         # Film grain noise overlay
├── package.json
├── tsconfig.json
├── next.config.ts
└── eslint.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — the app hot-reloads via Turbopack.

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Design System

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--background` | `#080808` | Page background |
| `--foreground` | `#ffffff` | Primary text |
| `--accent` | `#DDF247` | CTA buttons, highlights, glow effects |
| `--glass-bg` | `rgba(0,0,0,0.7)` | Glassmorphism panels |
| `--border` | `rgba(255,255,255,0.08)` | Subtle dividers |
| `--card-bg` | `#111112` | Card surfaces |

### Custom Utilities

- **`.glassmorphism`** — Frosted glass with `blur(40px)` + saturated backdrop
- **`.liquid-glass`** — High-refraction glass effect with inner glow
- **`.bento-card`** — Hover-lift card with border transition
- **`.text-gradient`** — White-to-slate gradient text
- **`.noise-bg`** — Animated film grain overlay

---

## 🌐 Deployment

Deploy instantly on [**Vercel**](https://vercel.com/new?utm_medium=default-template&filter=next.js):

```bash
npx vercel
```

Or connect your GitHub repo for automatic deployments on every push.

---

## 📄 License

This project is private and not licensed for redistribution.

---

<div align="center">

**Crafted with precision by [Nur Mohammad Sujon](https://github.com/your-username)**

*© 2026 · Dhaka, Bangladesh*

</div>
