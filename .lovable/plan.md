## Goal

Replace the uniform 3-column testimonial grid on the home page with a warmer, more editorial layout: one large featured quote alongside two supporting quotes in a stacked column.

## File

- `src/routes/index.tsx` — only the `{/* TESTIMONIALS */}` section (~lines 414-463). Nothing else changes.

## Design changes (mapped to selected v2 prototype)

- **Layout**: switch from `md:grid-cols-3` to a 12-column grid. Featured quote (Lisa W) takes `md:col-span-7`; right column (`md:col-span-5`) is offset down (`md:mt-12`) and stacks Andrea + Barbara.
- **Featured card**: larger padding (`p-10 md:p-14`), `rounded-[3rem]`, soft purple-tinted shadow, a decorative soft circle accent in the top-right corner, oversized serif opening quote glyph, italic serif body type (Lora) at `text-xl md:text-2xl`, attribution as a small uppercase tracked label with a short divider line.
- **Andrea card**: translucent white with subtle backdrop blur, `rounded-[2.5rem]`, smaller serif quote, uppercase tracked attribution.
- **Barbara card**: soft lavender fill (`bg-[#f9f5ff]`) with light purple border to differentiate, same shape language.
- **Footer chip**: small pill below the trio reading "Real experiences from our perimenopause community" using the existing lavender accent token.

## Tokens & fonts

- Reuse existing tokens (`bg-card`, `border-border`, `text-gradient-luna`, `--shadow-card`) where they fit so the section still belongs to the design system. Map the prototype's purple/magenta accents to the existing `text-gradient-luna` gradient on "clarity" instead of inline hex.
- Add the Lora serif font once via a `<link>` in `src/routes/__root.tsx` head (TanStack v4 rule: never `@import` font URLs in `src/styles.css`). Register the family token in `src/styles.css` under `@theme` as `--font-serif-quote: "Lora", serif;` and apply with `font-[family-name:var(--font-serif-quote)]` on the quote elements.

## Quote text

Verbatim from the current file — no copy changes. Lisa W (47, Australia), Andrea (48, USA), Barbara (51, Canada).

## Motion

Subtle: add `transition-transform duration-300 hover:-translate-y-1` on each card. No scroll-triggered animation.

## Out of scope

- No changes to surrounding sections, CTAs, header/footer, route metadata, or pricing.
- No new images or avatars of the women.
- No copy edits.

## Verification

After implementation, capture a screenshot of the section in the preview at desktop and mobile widths to confirm the asymmetric layout and serif type render correctly.
