Rewrite `src/routes/for-clinicians.tsx` with a clean, restrained clinician landing page. Keep existing route definition, head() metadata, `SiteHeader`, `SiteFooter`.

Sections:

1. **Hero** — left-aligned in centered max-w container.
  - Small "Build By Clinicians For Clinicians" pill (muted, no gradient)
  - H1: "Better symptom tracking for better menopause care"
  - Sub: "Luna helps patients track symptoms over time, then turns those entries into clear clinical summaries you can use in practice."
  - Primary `<Button>` linked via `<a href="mailto:drremynd@gmail.com?subject=Luna%20clinician%20demo">Book a demo</a>` (email, no Calendly)
2. **Three benefits** — `grid md:grid-cols-3` of plain cards (border + bg-card, no gradients, no glow). Each card: small lucide icon (Stethoscope/FileText/TrendingUp or similar already-imported icons), title, body. Titles + copy per spec.
3. **How it works** — H2 "How Luna supports care", three numbered steps in a 3-col grid: numeric badge (01/02/03), short label per spec, no body text.
4. **Final CTA** — Bordered card (no gradient), H2 "See how Luna can support your practice", body per spec, "Book a demo" mailto button.

Design rules:

- Use semantic tokens (bg-background, bg-card, text-foreground, text-muted-foreground, border-border). No `bg-gradient-luna`, no glow shadows.
- Warm neutral feel from existing tokens.
- Tight vertical rhythm (py-16 md:py-24), max-w-[1100px] container.
- Mobile: single column stacks.

SiteHeader already highlights "For Clinicians" via active route — no change needed there.