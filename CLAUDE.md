# CLAUDE.md — Project Instructions for Claude Code

## Project
**Gaurav Patel's Portfolio** — Next.js 16 + Tailwind CSS + TypeScript
Live URL: set via `NEXT_PUBLIC_SITE_URL` env var
Dev server: `npm run dev` → http://localhost:3000

---

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + custom CSS layers in `app/globals.css`
- **Animations**: Framer Motion, GSAP, Lenis (smooth scroll)
- **Fonts**: Inter (body), Space Grotesk (display), JetBrains Mono (code)
- **Theme**: `next-themes` — dark mode default
- **Forms**: react-hook-form + zod
- **Icons**: react-icons (Fi prefix = Feather Icons)

---

## Key File Map
| Path | Purpose |
|------|---------|
| `app/page.tsx` | Root page — section composition |
| `app/layout.tsx` | Global layout, fonts, metadata, providers |
| `app/globals.css` | CSS variables, Tailwind layers, spotlight, aurora |
| `tailwind.config.ts` | Design tokens — colors, fonts, shadows, animations |
| `components/navigation/SidebarLayout.tsx` | Two-column sticky layout (Brittany Chiang blueprint) |
| `components/sections/About.tsx` | Bio, focus areas, stats |
| `components/sections/Experience.tsx` | Work timeline (extracted from About) |
| `components/sections/Projects.tsx` | Project cards |
| `components/sections/Contact.tsx` | Contact form + social links |
| `hooks/useIntersectionObserver.ts` | Active section tracking for nav |
| `data/` | Static data: projects, skills |

---

## Design Tokens (tailwind.config.ts)
- `primary`: `#4426d9` (deep purple) — light mode
- `secondary`: `#3d84c2` (sky blue)
- `accent`: `#fe1201` (red)
- `background` light: `#fcf3f8` / dark: `#0d1117`

---

## Conventions
- **Components**: Functional, TypeScript, `'use client'` only when needed
- **Animations**: Use `fadeInUp` + `staggerContainer` Framer Motion variants (already defined in each section)
- **Cards**: Use `RevealCard` from `components/ui/RevealCard` for hover-lift cards
- **Buttons**: Use `Button` from `components/ui/Button` with `variant="glass"`
- **Borders**: Always `border-gray-400 dark:border-slate-500`
- **Section bg**: `bg-background dark:bg-gradient-to-b dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark`
- **No Twitter**: Twitter was intentionally removed — keep only GitHub, LinkedIn, Email socials
- **No emojis** in code or UI unless user explicitly asks

---

## Personal Info (do not change without being asked)
- Name: Gaurav Patel
- Role: Full Stack Engineer / Frontend Developer / Backend Developer / MERN Stack Developer
- Experience: 3+ years
- Location: Mumbai, India
- Email: gp627853@gmail.com
- GitHub: gaurav0909-max
- LinkedIn: gaurav-patel-webdev
- Current company: Nova (Startup), Software Developer II

---

## Git Workflow
- **Always work on a feature branch** — never commit or push directly to `main`
- Branch → commit → push → merge to `main` via PR

## Git Commit Rules
- **Never** include `Co-Authored-By: Claude` or any `Co-Authored-By` line in commit messages
- **Never** include `🤖 Generated with Claude Code` or any Claude/AI attribution in commit messages
- Keep commit messages clean, human-written, and concise
- Write commit messages in **past tense** (e.g., "removed Twitter link", "updated experience section")

---

## What NOT to do
- Do not add Twitter/social media links (personal accounts excluded from portfolio)
- Do not add docstrings or comments to unchanged code
- Do not create new files unless strictly necessary
- Do not use `git add -A` — always stage specific files
- Do not push to remote unless explicitly asked
