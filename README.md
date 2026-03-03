# Frontend Design Challenge

This repository contains a small React application built with Vite and Tailwind CSS. It was created as part of a design challenge: the goal was to deliver a polished dashboard interface for a fictional cybersecurity scanning product.

The focus isn’t on backend functionality––all data is mocked––but the UI includes a realistic login experience, a responsive dashboard with light/dark theming, and a detailed scan view to demonstrate component reuse, state management, and layout techniques.

---

## 🚀 Tech stack

- **React 19** with hooks and context
- **Vite** as the build tool (fast HMR, ES modules)
- **Tailwind CSS 3** for utility‑first styling
- **React Router v6** for client‑side navigation
- **Lucide & react-icons** for vector icons
- Plain JavaScript (no TypeScript) – keep it lightweight

---

## 📁 Project structure

```
src/
├─ assets/          # static files (logo, svg, etc)
├─ components/      # reusable UI bits (Sidebar, ScanTable, cards…)
├─ context/         # theme provider
├─ data/            # mocks used by pages
├─ pages/           # entry points (Login, Dashboard, ScanDetail)
├─ index.css        # Tailwind entrypoint
├─ main.jsx         # application bootstrap
└─ App.jsx          # router + theme wrapper
```

The Tailwind config (`tailwind.config.js`) uses `darkMode: 'class'` and scans the `src` folder and `index.html` for class names. PostCSS is configured via `postcss.config.cjs`.

---

## 🛠 Getting started

```bash
# clone the repo
git clone <repo-url> frontend-design-challenge
cd frontend-design-challenge

# install dependencies
npm install

# start development server
npm run dev

# build for production
npm run build
npm run preview    # serve the built output
```

Tailwind and Vite both require the dev server to be restarted when you modify their configuration files.

---

## ✨ Features

- **Login page** with animated background blobs, email/password form, and social buttons
- **Dashboard**
  - Responsive sidebar that collapses on mobile
  - Search/filter toolbar, export/scan actions (mocked toasts)
  - Stats overview and severity cards
  - Scan table component with progress bars and color‑coded badges
  - Dark/light theme toggle persisted in localStorage
- **Scan detail view**
  - Skeleton loading state
  - Step progress tracker, metadata grid, live console & findings log
  - Sticky header and status bar for consistent UX
- **Theme context** managing `dark` mode class on `<html>` and syncing with system pref

All data comes from `src/data/mockData.js` so you can easily tweak it while iterating on the UI.

---

## 🧩 Styling notes

- Tailwind is used exclusively; there’s no extra CSS except the `index.css` imports.
- Colors are extended (e.g. custom teal) via the config, and utility classes like `dark:bg-[#141414]` are scattered throughout.
- A few simple animations (`animate-fade-in-*`) are defined inline in components for page transitions.

---

## 📌 Developer pointers

- The `ThemeContext` in `src/context/ThemeContext.jsx` handles theme toggling and persistence.
- `ScanTable.jsx` is a drop‑in component used by the dashboard; it uses the `scans` mock and applies click handlers for navigation.
- The mock dataset includes both overview stats and detailed scan logs; altering the shape there updates the UI automatically.
- When adding new pages, update `App.jsx`’s router accordingly and ensure the sidebar contains the link.

---

## 📦 Dependencies

See `package.json` for the full list, but the key packages are:

- `react`, `react-dom`
- `vite`, `@vitejs/plugin-react`
- `tailwindcss`, `autoprefixer`
- `react-router-dom`, `lucide-react`, `react-icons`

Run `npm audit` if you want to check for vulnerabilities.

---

## 📝 License

This code is provided as-is for educational/demo purposes. Feel free to fork, tweak, and learn from it.

---

Happy hacking! 🎯
