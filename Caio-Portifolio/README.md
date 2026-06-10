# Caio Bahia's Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Material-UI.

## 🎯 Overview

This is a full-featured portfolio application showcasing projects, skills, and professional experience with:

- ✨ **Responsive Design** - Fully responsive layout for all devices
- 🎨 **Dark/Light Theme** - Theme toggle with system preference detection
- 🌍 **Multi-Language** - Portuguese and English translations
- ♿ **Accessible** - WCAG 2.1 compliance
- ⚡ **Performance Optimized** - Fast loading and smooth animations

## 🛠️ Tech Stack

- **React** 19.2.4 - UI framework
- **TypeScript** 6.0.2 - Type-safe JavaScript
- **Vite** 8.0.4 - Build tool with HMR
- **Material-UI** 9.0.0 - Component library and theming
- **Context API** - State management and i18n

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer layouts
│   ├── pages/         # Page sections (Home, About, Projects, etc)
│   ├── shared/
│   │   ├── hooks/     # useTheme, useThemeColors
│   │   └── ui/        # Reusable components (FeatureCard)
│   └── theme/         # MUI theme providers
├── i18n/              # Translations (PT/EN)
├── types/             # Centralized TypeScript types
├── lib/               # Utilities (cn function)
└── assets/            # Static files
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
git clone <repo>
cd Caio-Portifolio
npm install
npm run dev
```

Visit `http://localhost:5173`

## 📝 Scripts

- `npm run dev` - Start dev server with HMR
- `npm run build` - Production build with TypeScript check
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Add Translations

Update `src/i18n/translations.ts`:

```typescript
export const translations = {
  pt: { /* Portuguese */ },
  en: { /* English */ }
}
```

### Use Theme Colors Hook

```typescript
import { useThemeColors } from '@/components/shared/hooks';

const { isDark, gradientColor, purpleGradient, boxShadowColor } = useThemeColors();
```

### Add New Pages

1. Create file in `src/components/pages/`
2. Add translations to `translations.ts`
3. Import in `src/components/Portfolio.tsx`
4. Add link in Header navigation

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation
- ✅ Color contrast compliance

## 📦 Build Info

- HTML: 0.46 kB (gzip: 0.30 kB)
- CSS: 0.42 kB (gzip: 0.22 kB)
- JavaScript: 481 kB (gzip: 146.95 kB)

## 🔧 TypeScript Configuration

Strict mode enabled:
- `noImplicitAny: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`

All types in `src/types/index.ts`

## 📄 License

© 2024 Caio Bahia. All rights reserved.
