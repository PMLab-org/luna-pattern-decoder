# Accessibility contrast pass — Luna landing page

## Findings (against WCAG AA 4.5:1 for normal text, 3:1 for ≥24px or ≥18.66px bold)

Audited `src/styles.css` tokens and every text/background pairing in `src/routes/index.tsx`.

| # | Where | Pairing | Issue |
|---|---|---|---|
| 1 | All gradient CTA buttons (hero, nav, final CTA) | White text on `--gradient-luna` (purple→magenta) | Magenta end (#EC4899-equivalent, oklch 0.65) on white is ~3.3:1 → **fails** for normal-size button text |
| 2 | Final CTA white button | `text-primary` (oklch 0.58) on white | ~4.3:1 → **borderline fail** |
| 3 | "Are you a clinician?" link | `text-primary-foreground/90` (90% white) on magenta side of gradient | Opacity drop pushes it under 4.5:1 |
| 4 | User chat bubble in mockup | White body text on gradient | Same magenta-end issue as #1 |
| 5 | "by PM Lab" tagline, "Logged", "Entry 3 of 5", various small labels | `text-muted-foreground` (oklch 0.45) on cream | ~4.55:1 → passes but with zero margin; small chip text is fragile |
| 6 | `accent-foreground` on `accent` (hero chip) | oklch 0.25/320 on oklch 0.94/330 | Passes (~8:1) — no change |

Headlines using `text-gradient-luna` (h1/h2) are ≥30px so the 3:1 large-text threshold applies → keep as-is.

## Plan

Single file change: `src/styles.css`. No component edits required because everything funnels through tokens / the `--gradient-luna` variable / `bg-gradient-luna` utility.

1. **Darken the gradient** so both stops clear 4.5:1 with white:
   - `--gradient-luna`: shift to `linear-gradient(135deg, oklch(0.52 0.22 300), oklch(0.52 0.23 350))` (deeper purple → deeper magenta). White on the magenta end goes from ~3.3:1 to ~5.2:1.
2. **Darken `--primary`** from oklch(0.58 0.22 305) to oklch(0.48 0.22 305) so:
   - `text-primary` on white (final-CTA button, FAQ open state, hover states) reaches ~6:1.
   - `--ring` (aliased to primary) stays visible.
3. **Strengthen `--muted-foreground`** from oklch(0.45 0.02 280) to oklch(0.40 0.02 280) → ~5.7:1 on cream, giving small-label headroom.
4. **Fix the clinician link in `src/routes/index.tsx`**: drop the `/90` opacity (`text-primary-foreground` only) and add `underline` so it isn't carried solely by color — that's the one component-level edit.
5. **Verify** by re-screenshotting the preview after the change and spot-checking the hero CTA, final CTA, and chat mockup against the new gradient.

## Out of scope

No layout, copy, or imagery changes. Brand identity (purple→magenta gradient) is preserved — only the lightness is reduced so white text passes AA.
