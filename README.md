# Frontend Design Challenge  

This project is a small React dashboard application I built as part of a frontend design challenge. The goal was to create a clean, polished UI for a fictional cybersecurity scanning product.

There’s no backend connected — all the data is mocked — but the interface is designed to feel realistic and production-ready. It includes a proper login screen, a responsive dashboard layout, dark/light theme support, and a detailed scan view to demonstrate component reuse, layout structuring, and state management.

---

##  Tech Stack  

- **React 19** (hooks + context API)  
- **Vite** for fast development and HMR  
- **Tailwind CSS v3** for utility-first styling  
- **React Router v6** for navigation  
- **Lucide & react-icons** for icons  
- Plain **JavaScript** (no TypeScript — intentionally lightweight)  

---

##  Project Structure  

```bash
src/
├─ assets/          # static files (logo, svg, etc)
├─ components/      # reusable UI components (Sidebar, ScanTable, cards…)
├─ context/         # theme provider
├─ data/            # mocked data for pages
├─ pages/           # page-level components (Login, Dashboard, ScanDetail)
├─ index.css        # Tailwind entrypoint
├─ main.jsx         # app bootstrap
└─ App.jsx          # router + theme wrapper
```

Tailwind is configured with `darkMode: 'class'` and scans the `src` folder and `index.html` for class names.  
PostCSS is configured via `postcss.config.cjs`.

---

##  Getting Started  

```bash
# Clone the repository
git clone <repo-url> frontend-design-challenge
cd frontend-design-challenge

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

> Note: If you modify Tailwind or Vite configuration files, restart the dev server.

---

##  Features  

###  Login Page  
- Animated background blobs  
- Email/password form UI  
- Social login buttons (UI only)  
- Smooth transitions and subtle animations  

###  Dashboard  
- Responsive sidebar (collapses on mobile)  
- Search & filter toolbar  
- Mocked export/scan actions  
- Overview stats cards  
- Severity-based color coding  
- Scan table with progress bars and badges  
- Dark/light theme toggle (persisted in `localStorage`)  

###  Scan Detail View  
- Skeleton loading state  
- Step progress tracker  
- Metadata grid  
- Live console + findings log  
- Sticky header and status bar  

---

##  Styling Notes  

- Tailwind CSS is used almost exclusively.  
- No additional CSS except the `index.css` Tailwind imports.  
- Custom colors (e.g., teal) extended via `tailwind.config.js`.  
- Dark mode handled using `dark:` utility classes.  
- Simple inline animations for page transitions.  

---

##  Theme Handling  

The `ThemeContext` (`src/context/ThemeContext.jsx`) handles:  

- Toggling the `dark` class on `<html>`  
- Persisting theme preference in `localStorage`  
- Syncing with system preference on initial load  

---

##  Core Dependencies  

Main packages used:

- `react`, `react-dom`  
- `vite`, `@vitejs/plugin-react`  
- `tailwindcss`, `autoprefixer`  
- `react-router-dom`  
- `lucide-react`, `react-icons`  

You can run:

```bash
npm audit
```

to check for vulnerabilities.

---

## Notes  

This project focuses purely on frontend architecture, UI polish, and component-driven design.  
All data lives in `src/data/mockData.js` and can be modified easily for experimentation.