# DESIGN SYSTEM: ORGANIC EDITORIAL MINIMALISM
**Reference Architecture:** *Elena Heatherwick* / *Ffern*  
**Aesthetic Profile:** Tactile, quiet, light-flooded, editorial, print-inspired.

---

## 1. DESIGN PHILOSOPHY & CORE PRINCIPLES

1. **Digital as Paper:** The browser viewport is treated as an unbound sheet of heavy, unbleached paper—not a luminous screen.
2. **Negative Space as Structure:** Layout structure is established through generous whitespace and precise typography alignments, avoiding visual dividers, box outlines, or drop shadows.
3. **Subtle Tactility:** Colors and contrasts avoid harsh electronic extremes (`#000000` or `#FFFFFF`).
4. **Quiet Interaction:** Animations are strictly limited to soft, linear opacity fades. Micro-interactions should feel instantaneous yet gentle.

---

## 2. COLOR PALETTE

### Design Tokens
| Name | Hex Code | HSL / Usage |
| :--- | :--- | :--- |
| **Canvas Main** | `#F9F7F2` | `hsl(43, 30%, 96%)` — Warm off-white / unbleached paper |
| **Canvas Secondary** | `#F0ECE1` | `hsl(42, 28%, 91%)` — Light beige for hover states & callouts |
| **Ink / Text Body** | `#2B2927` | `hsl(30, 4%, 16%)` — Soft charcoal / dark umber |
| **Ink Muted** | `#75716B` | `hsl(33, 5%, 44%)` — Warm grey for metadata & captions |
| **Accent / Ochre** | `#A88B68` | `hsl(33, 27%, 53%)` — Muted earth accent |

```css
:root {
  --bg-primary: #F9F7F2;
  --bg-secondary: #F0ECE1;
  --text-main: #2B2927;
  --text-muted: #75716B;
  --accent: #A88B68;
}