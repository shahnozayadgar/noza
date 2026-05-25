# noza — Personal Website

Personal portfolio site for Shahnoza Yadgar. Static-first, deployed on Vercel.

## Stack

- **Next.js 15+ (App Router)** — file-based routing, RSC by default, static export where possible
- **React 19** + **TypeScript 5.x** (strict mode)
- **Tailwind CSS v4** — single styling layer; no CSS-in-JS, no CSS Modules
- **Framer Motion** — page transitions and scroll/hover animations
- **lucide-react** — icon set
- **@vercel/analytics** — pageview analytics
- **Node 22+** (pinned via `.nvmrc`)

Deployment: Vercel (auto-deploy on push to `main`).

## Project Structure

```
app/
├── layout.tsx           # Root layout: <Header />, <Footer />, fonts, analytics
├── page.tsx             # Home / landing
├── projects/
│   ├── page.tsx         # Projects index
│   └── [slug]/page.tsx  # Dynamic project detail (reads from content/projects)
├── about/page.tsx
└── globals.css          # Tailwind directives only

components/
├── Header.tsx           # Single responsive component (no separate mobile variant)
├── Footer.tsx
├── ProjectCard.tsx
├── Section.tsx
├── Tag.tsx
└── motion/              # Reusable Framer Motion wrappers (FadeIn, Stagger, etc.)

content/
├── projects.ts          # Typed array of project metadata
├── publications.ts
└── news.ts

lib/
├── projects.ts          # getProject(slug), getAllProjects() — reads from content/
└── utils.ts             # cn() helper for Tailwind class merging

public/
├── images/              # Optimized via next/image
└── icons/               # SVG icons (prefer lucide-react when possible)
```

## Conventions

### Routing
- Use the **App Router** exclusively (no `pages/` directory).
- Project detail pages use dynamic segments: `app/projects/[slug]/page.tsx` reads from `content/projects.ts`.
- Generate static params for known projects via `generateStaticParams()` — the site should build fully static.

### Components
- **Server Components by default.** Add `"use client"` only when the component needs state, effects, or browser APIs (Framer Motion, event handlers).
- **One responsive component per concern.** Don't ship separate `Header` + `HeaderMobile` — use Tailwind responsive prefixes (`md:`, `lg:`).
- Co-locate small subcomponents in the same file unless reused.

### Styling
- **Tailwind only.** No styled-components, no CSS Modules, no inline `style={{}}` except for dynamic values that can't be expressed in classes.
- Use `clsx` + `tailwind-merge` (exposed as `cn()` in `lib/utils.ts`) for conditional classes.
- **Light mode only** — do not add `dark:` variants. If dark mode is requested later, it's a deliberate decision, not a default.
- Design tokens (colors, fonts, spacing scale) live in `tailwind.config.ts`, not scattered across components.

### Content
- Content lives in typed TS files under `content/` (same pattern as the prior `hyewon-me` site's `assets/strings/`).
- Each content file exports a typed array; the type definition lives alongside it.
- Adding a project = append an entry to `content/projects.ts`. The dynamic route renders it automatically.
- **No CMS, no MDX, no blog.** Portfolio-only by design.

### Images
- Always use `next/image` for raster images in `public/images/`.
- Provide explicit `width`/`height` to avoid layout shift.
- Use SVGs inline or via `lucide-react` for icons.

### Animation
- Framer Motion lives behind small wrapper components in `components/motion/` so pages stay declarative.
- Prefer CSS transitions for simple hover/focus states; reserve Framer Motion for orchestrated sequences and scroll-triggered effects.

### TypeScript
- `strict: true`, `noUncheckedIndexedAccess: true`.
- Path alias `@/*` → project root (Next.js default).
- No `any`. Use `unknown` + narrowing if a type is genuinely dynamic.

## Commands

```bash
npm run dev       # Local dev server on :3000
npm run build     # Production build (must pass before pushing)
npm run lint      # ESLint (next/core-web-vitals config)
npm run typecheck # tsc --noEmit
```

Run `npm run build && npm run typecheck` before considering any non-trivial change done.


## When Adding a Project

1. Add an entry to `content/projects.ts` with `slug`, `title`, `summary`, `tags`, `year`, `links`, `cover`.
2. Drop the cover image in `public/images/projects/{slug}.{webp|png}`.
3. If the project needs a custom detail layout, override `app/projects/[slug]/page.tsx` logic — otherwise the generic template handles it.
4. Verify locally with `npm run dev`, then `npm run build` to confirm static generation succeeds.
