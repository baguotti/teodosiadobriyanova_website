# DESIGN.md — Teodosia Dobriyanova Portfolio

**Aesthetic:** Elevated low-effort, archival, print-first minimalism.  
**Reference spirit:** Independent cinema programme notes, ICA / Barbican curatorial handouts, quiet ink on bright gallery paper.

---

## 1. Core Principles

1. **Unpolished over SaaS-slick:** Prefer plain typography, native HTML lists, and whitespace over cards, borders, shadows, badges, or UI chrome.
2. **Instant over animated:** No page fade-ins, no slide transitions, no eased hover fades. Navigation and hover states snap instantaneously like turning a page.
3. **One subtle human mark:** The only decorative element is the rough, single-stroke hand-drawn underline (`HandDrawnUnderline`), used sparingly on active nav links, section headings, and Home work-link hovers.
4. **Content first, always:** All site copy lives in `src/data/*.json` (managed via Pages CMS in `.pages.yml`). Components never hardcode copy.

---

## 2. Color Palette (`src/index.css`)

| Token | Tailwind Class | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `--color-canvas` | `bg-canvas` | `#FEFEFD` | Bright gallery-paper background (+ subtle `0.032` opacity SVG fractal-noise paper grain on `body::before`) |
| `--color-canvas-subtle` | `bg-canvas-subtle` | `#F4F3F1` | Selection highlight & subtle image loading placeholder |
| `--color-border` | `text-border` | `#E5E4E1` | Quiet inline middot (`·`) separators |
| `--color-ink` | `text-ink` | `#1E1F22` | Primary text, titles, active nav |
| `--color-ink-muted` | `text-ink-muted` | `#66686E` | Secondary metadata, outlets, italic subtitles, list bullets |
| `--color-earth` | `text-earth` | `#2F4B8A` | Archival fountain-pen cobalt — hand-drawn underlines, link hover states, status notes, and `credits` toggles |

**Rules:**
- Never hardcode hex colors in `.tsx` files; always use Tailwind theme tokens (`text-ink`, `text-ink-muted`, `text-earth`, `bg-canvas`, etc.).
- Every text/background pair must pass WCAG AA (`>= 4.5:1`).

---

## 3. Typography

- **Single font family:** **IBM Plex Sans** (self-hosted via `@fontsource/ibm-plex-sans`, weights `400`, `400 italic`, `500`; native Latin + Bulgarian Cyrillic support).
- **Hierarchy via italics & restraint, not big size jumps:**
  - Site name (`Navbar`): `text-lg`, lowercase (`teodosia dobriyanova`)
  - Primary list items / titles / bio: `text-[15px]`, `leading-snug`
  - Nav links, section headings, metadata, descriptions, credits: `text-sm` (`14px`)
  - Secondary / note text: `text-xs` (`12px`)
- **Casing:**
  - Navigation links, site name, section headings (`work`, `film`, `interactive installation`, `curated seasons`, `festival roles`, `video journalism`, `film criticism`, `selected projects`), and UI toggles (`credits`, `instagram`) are **always lowercase**.
  - Proper titles of films, articles, venues, festivals, and people preserve their real capitalization.
- **Italics:** Use `italic text-ink-muted` for outlets, categories, venues/dates, and English translations in parentheses rather than switching fonts or adding badges.
- **Numerals:** Use `tabular-nums` for dates and years.

---

## 4. Layout & Spacing

- **Container:** `w-full max-w-[1440px] mx-auto px-5 sm:px-8` across both `Navbar` and `PageWrapper` (wide, spread-out sheet with slim outer margins).
- **No horizontal layout shift:** `html { scrollbar-gutter: stable; }` keeps pages locked in place regardless of vertical scrollbars.
- **Header (`Navbar`):** Left-clustered—lowercase name on line 1, lowercase nav links directly beneath it (`gap-x-5`). No right-aligned navbar, no mobile hamburger drawer (links wrap naturally).
- **No footer:** Contact info (`email · instagram`) lives quietly on the Home (About) page.
- **Vertical rhythm:**
  - Between major sections on a page: `PageWrapper` `<main className="space-y-12">`, subsequent sections use `pt-2`.
  - Section heading to content: `space-y-3.5`.
  - Standard bullet lists: `list-disc pl-5 marker:text-ink-muted space-y-1 max-w-4xl`, with content directly inside `<li className="text-[15px] leading-snug">` (no extra wrapper `<div>` inside `<li>`).

---

## 5. Components & Patterns

- **Hand-drawn underline (`src/components/ui/HandDrawn.tsx`):**
  - Single-stroke organic SVG path (`vectorEffect="non-scaling-stroke"`), positioned tightly at `-bottom-[2px]`.
  - Always pass distinct `variant={0 | 1 | 2 | 3}` values to adjacent underlines so no two nearby marks look stamped.
  - Use `hoverOnly` on Home `work` links; always-on for active nav items and section headings.
- **Photography & stills:**
  - Bare images sitting flush on the paper: `overflow-hidden rounded-[3px] bg-canvas-subtle/40`.
  - Zero drop shadows, zero borders, zero hover zoom.
  - Always compress images into `public/assets/` (target `<= 250 KB`, max width `1200px`), set explicit `width`/`height`, `decoding="async"`, and `loading="lazy"` on below-the-fold stills.
  - Keep `Directing` film stills at `max-w-[490px]` matching their natural aspect ratio (`aspect-[3/2]` for `lneh.jpg`).
- **Expandable credits (`Directing`, `Producing`):**
  - Hidden behind a quiet inline lowercase `credits` button (label always stays `credits`; clicking again collapses).
  - Rendered as a single running programme-note paragraph (`Role: Name · Role: Name`) rather than a multi-column grid.
- **Links:**
  - Direct clickable titles (`hover:text-earth hover:underline decoration-earth/45`), zero `↗` external-link icons, zero `"View →"` labels, zero transitions.

---

## 6. Hard Bans (Do Not Add)

- No ALL-CAPS tracked eyebrows/kickers above headings.
- No cards, bordered boxes, drop shadows, or hover background fills on list rows.
- No page fade-ins, CSS transitions (`transition-*`), or hover micro-animations.
- No third-party animation/icon libraries (`gsap`, `lucide-react`, etc.).
- No duplicate page `<h1>` repeating the active nav item (use `<h1 className="sr-only">` for accessibility on subpages).
- No platform brackets like `(YouTube)` or `(Vimeo)` next to titles.
- No unoptimized multi-megabyte images in `public/assets/`.

---

## 7. Content & Deployment Workflow

- **Content files:** `src/data/about.json`, `src/data/directing.json`, `src/data/film-programming.json`, `src/data/journalism.json`, `src/data/producing.json`.
- **CMS:** Configured via `.pages.yml` for [Pages CMS](https://app.pagescms.org). Any new editable field must be added to both the JSON file and `.pages.yml`.
- **Verification before pushing:** Always run `npm run lint && npm run build` (`oxlint` + `tsc -b` + `vite build`).
