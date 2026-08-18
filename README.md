# Richa Jha - Portfolio

A personal portfolio site built with React, Vite, Tailwind CSS v4, and Framer Motion. Dark theme, smooth scroll-reveal animations, fully responsive.

## Tech stack

- **React 19** + **Vite**: fast dev server and build
- **Tailwind CSS v4**: styling (via `@tailwindcss/vite`, no separate config file needed)
- **Framer Motion**: scroll-reveal and hero animations
- **React Icons**: GitHub / LinkedIn / mail / UI icons

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf        ← powers the "Resume" download button
├── src/
│   ├── data/
│   │   └── resume.js      ← ALL your content lives here (single source of truth)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Reveal.jsx      ← scroll-in-view fade/slide wrapper
│   │   └── SectionHeading.jsx
│   ├── hooks/
│   │   └── useActiveSection.js  ← highlights the active nav link on scroll
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           ← theme colors, fonts, global styles
├── index.html
└── vite.config.js
```

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd portfolio
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). The page hot-reloads as you edit.

To create a production build:

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally to sanity-check it
```

## Customizing your content

Almost everything on the page is pulled from **`src/data/resume.js`**: your name, links, summary, experience, projects, skills, education, certifications, and achievements are all plain JS objects/arrays there. Edit that one file to update the site; you shouldn't need to touch the components for text changes.

A few other things you may want to personalize:

- **Resume PDF**: replace `public/resume.pdf` with your latest resume (same filename, or update `resumeUrl` in `resume.js`).
- **Profile photo**: `public/profile.jpg`, on a studio-style gray backdrop. Swap in a new one (same filename, or update `photo` in `resume.js`) any time; a portrait-oriented photo (roughly 4:5) works best with the current frame.
- **Colors**: the accent gradient (teal to violet) and dark background are defined as CSS variables in `src/index.css` under the `@theme` block (`--color-accent`, `--color-accent-2`, `--color-bg`, etc.). Change those to restyle the whole site.
- **Fonts**: Inter (body) and JetBrains Mono (labels/code accents) are loaded via Google Fonts at the top of `index.css`.
- **Favicon**: `public/favicon.svg`, a simple "RJ" monogram; swap for your own initials/logo.
- **Phone number**: left off the public Contact section on purpose (it's in your resume PDF if someone wants it, but most public portfolios skip listing a phone number directly on the page). Add it in `Contact.jsx` if you'd rather have it visible.
- **Contact form**: the Contact section currently links directly to email/GitHub/LinkedIn rather than a submission form, since a static site has no backend to receive form submissions. If you want an actual contact form, the easiest options are [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/), both work with a static site and just need a form endpoint pasted in.

## Hosting it (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **New Project**.
3. Import the repo. Vercel auto-detects Vite, leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live URL like `your-portfolio.vercel.app` in about a minute.
5. Optional: add a custom domain under Project → Settings → Domains.

Every future push to your main branch auto-deploys.

### Alternative hosts

The same `npm run build` → `dist/` output works on **Netlify**, **GitHub Pages** (via an action or `gh-pages` package), or **Cloudflare Pages** if you'd rather use one of those instead.
