# Portfolio Redesign Plan — Enhanced

## Color Palette (Light Mode Only)

| Role | Token | Value |
|------|-------|-------|
| Page background | `background` | `rgb(241 243 244)` slate-grey-50 |
| Card surface | `background.card` | `#ffffff` |
| Elevated surface | `background.elevated` | `rgb(237 247 247)` light-blue-50 |
| Primary accent | `primary` | `rgb(77 178 179)` light-blue-500 |
| Primary hover | `primary.dark` | `rgb(61 143 143)` light-blue-600 |
| Secondary accent | `secondary` | `rgb(156 99 156)` vintage-grape-500 |
| Danger | `danger` | `rgb(199 63 56)` cotton-rose-500 |
| Success | `accent` | `rgb(99 156 108)` evergreen-500 |
| Heading text | `text.primary` | `rgb(23 27 28)` slate-grey-900 |
| Body text | `text.secondary` | `rgb(69 80 84)` slate-grey-700 |
| Muted text | `text.tertiary` | `rgb(115 133 140)` slate-grey-500 |
| Borders | `border` | `rgb(199 206 209)` slate-grey-200 |
| Accent borders | `border.accent` | `rgb(184 224 224)` light-blue-200 |

---

## Phase 1 — Foundation (Design Tokens + Light Mode)
**Files:** `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`

### tailwind.config.ts
- Replace all old color palettes with 5 new custom palettes (light-blue, slate-grey, vintage-grape, cotton-rose, evergreen)
- Add semantic color tokens: `background`, `surface`, `border`, `primary`, `secondary`, `accent`, `danger`, `foreground`, `text`
- Add custom `tablet: '900px'` screen breakpoint (between md/768 and lg/1024)
- Fluid `fontSize` type ramp using `clamp()` for display sizes
- Soften glow box-shadows (lower opacity, light-blue instead of indigo)
- Add `card` and `card-hover` box shadows for premium feel
- Update `gradient-hero` and `gradient-aurora` to use new palette

### app/globals.css
- `:root` semantic CSS custom properties
- Fluid type ramp vars: `--text-hero: clamp(2.5rem, 5vw, 3.75rem)`
- Remove `.dark {}` block entirely
- Update aurora orbs: light-blue + vintage-grape, opacity 0.20/0.12
- Soften spotlight: `rgba(77, 178, 179, 0.06)`
- Update `gradient-text` and `glass-modern` for light mode
- Add `.project-card-container` with `container-type: inline-size`
- Update focus ring and `::selection` to light-blue

### app/layout.tsx
- `defaultTheme="light"` + `forcedTheme="light"` on ThemeProvider
- Single `themeColor: rgb(241 243 244)`

---

## Phase 2 — Layout + Navigation
**Files:** `components/navigation/SidebarLayout.tsx`

- Outer wrapper: `max-w-[1400px] mx-auto`
- Sidebar: `lg:w-[clamp(280px,38vw,480px)]` — fluid, never too narrow or wide
- Hero name: `text-4xl sm:text-5xl xl:text-6xl` fluid scaling
- Remove all `dark:` classes
- Update spotlight: `rgba(77, 178, 179, 0.06)` radius 500px
- Nav text: `text-text-tertiary` inactive → `text-primary` active
- Social icons: `text-text-tertiary` → hover `text-primary`

---

## Phase 3 — Sections + UI Components
**Files:** All 4 sections + RevealCard, Button, Badge, ProjectCard

### Sections (all 4)
- Responsive padding: `pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32`
- Remove every `dark:` prefixed class
- Projects/Contact: `lg:max-w-3xl`
- Bio card: light-blue + vintage-grape gradient overlay (8% opacity)
- Contact form: `bg-background-elevated border-border focus:border-primary/60`

### Stats — premium hierarchy
- Micro top-accent: `h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent`
- Icon: `w-5 h-5` positioned `absolute top-4 right-4`
- Label: `text-xs uppercase tracking-widest text-text-tertiary`

### RevealCard
- `glowColor`: `rgba(77, 178, 179, 0.08)`, `glowSize: 400`
- Base: `bg-white border-border` (no dark:)

### Button / Badge
- Remove all `dark:` classes, update to semantic tokens

### ProjectCard
- Image: `aspect-[16/9]` explicit ratio container
- Hover: `group-hover:shadow-card-hover group-hover:-translate-y-0.5`
- Metric cards: `border-l-2 border-primary/30` left accent
- Wrap in `.project-card-container` for container queries

---

## Responsive Breakpoints

| Screen | Width | Behavior |
|--------|-------|----------|
| mobile | <640px | Stacked, `pt-16` section padding |
| sm | 640px | `pt-24` section padding |
| tablet (custom) | 900px | Better grid layout |
| lg | 1024px | Sidebar `clamp(280px,38vw,480px)` |
| xl | 1280px | Sidebar caps ~480px |
| 2xl | 1536px | Layout capped at 1400px total |
