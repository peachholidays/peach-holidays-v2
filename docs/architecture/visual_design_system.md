# WebAURA Design System Matrix: Project Peach

**Design Philosophy**: "Quiet Luxury meets Soft-Neon" (High-end Millennial/Gen Z appeal).

## 1. Global CSS Variable Tokens (Webflow Ready)
These variables are designed for instant hot-swapping once the final brand kit is delivered.

| Token | Placeholder Value (HSL) | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `HSL(14, 100%, 65%)` | `--brand-primary` | Main CTA, Accent Highlights. |
| **Secondary** | `HSL(330, 40%, 90%)` | `--brand-secondary`| Sub-sections, Soft gradients. |
| **Accent** | `HSL(260, 100%, 75%)` | `--brand-accent` | Hover states, Interactive elements. |
| **Background**| `HSL(240, 10%, 4%)` | `--brand-bg` | Page background (Cosmic Black). |
| **Surface** | `rgba(255, 255, 255, 0.05)`| `--brand-surface` | Glass containers, Navigation. |

## 2. Structural Styling Logic
- **Border Radius**: `32px` (Outer containers), `16px` (Inner cards).
- **Glassmorphism**: `backdrop-filter: blur(24px) saturate(180%)`.
- **Shadow Depth**: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`.
- **Global Padding**: `120px` (Vertical section spacing), `5%` (Horizontal container safe zone).

## 3. Typography: "Quiet Luxury"
- **Headings**: **'Outfit'** (Sans-Serif, Geometric, Premium weight).
- **Body**: **'Inter'** (High-legibility, Optimized for mobile UI).

## 4. Animation Guidelines (GSAP Rules)
- **Mega-Search**: 
    - *Page Load*: Elastic Scale (0.9 -> 1.0) with Fade.
    - *Scroll Toggle*: Subtle blur transition as the user leaves the hero section.
- **Trip Cards**: 
    - *Hover*: Soft glow implementation with 1.02x scale + translation y(-10px).
    - *Stagger*: 0.15s delay between card entries on scroll.
- **Global Micro-interactions**: Duration `0.4s`, Ease `power3.out`.
