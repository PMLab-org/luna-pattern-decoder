# Pricing page + homepage preview

## 1. Shared navigation (update header in `src/routes/index.tsx` and new pricing route)

Replace the current single-CTA header with:

- Left: `Pricing`, `For Clinicians` text links
- Right: `Luna by PM Lab` wordmark + logo (links to `/`)
- Primary CTA button: `Start Your First Entry`
- Sticky on scroll (`sticky top-0 z-40 bg-background/80 backdrop-blur border-b`)

Extract this into `src/components/site-header.tsx` so `/` and `/pricing` share it. Same for a small `site-footer.tsx` with Privacy, Terms, FAQ, For Clinicians links (placeholder `#` hrefs since no routes specified).

Add placeholder routes so links don't 404: `src/routes/for-clinicians.tsx` (minimal "Coming soon" page with proper head meta). Privacy/Terms/FAQ can remain anchor links for now (FAQ → `/#faq`, others as `#`).

## 2. New route: `src/routes/pricing.tsx`

Own `head()` meta: title "Pricing — Luna by PM Lab", description about founding member pricing.

### Hero

- H1: "Simple pricing for deeper symptom clarity"
- Sub: "Luna is actively used by women globally. Lock in founding member pricing and help shape the future of menopause care."
- Small line: "Built for women in perimenopause who want to connect the dots and feel more prepared."
- Centered, generous whitespace, no image — calm and editorial.

### Pricing cards (3-up grid, stacked on mobile)

Reusable `<PriceCard>` component. Founding Member emphasized via:

- Gradient border (`bg-gradient-luna p-[1.5px]` wrapper, matches existing Luna card pattern on home)
- "Best value" pill badge
- Slightly larger shadow
- Primary gradient CTA; other two cards use outline/secondary CTAs

Cards:

1. **Free** — $0 · Unlimited symptom tracking, Daily check-ins, Limited insights, Basic pattern view · CTA "Start Your First Entry"
2. **Premium Monthly** — $10/month · "Everything in Free, plus" Weekly summaries, Full symptom reports, Priority access to new features · CTA "Choose monthly"
3. **Founding Member Annual** (emphasized) — $75/year · Everything in Premium, Locked-in founding member pricing, Priority access to new features · CTA "Join as founding member"

All check items use `Check` icon (already imported pattern). Price rendered large with `/month` or `/year` muted suffix.

### Comparison table

Mobile-first: on `<md`, render as stacked plan columns with feature labels; on `md+`, render as a real table.

Rows: Symptom tracking, Voice logging, AI chat, Weekly summaries, Full reports, Clinician-ready summary, Priority feature access.
Columns: Free / Premium / Founding.
Cells: `Check` icon, `—`, or short text. Light borders, no zebra stripes — calm and readable.

Reasonable mapping:


| Feature                 | Free    | Premium | Founding |
| ----------------------- | ------- | ------- | -------- |
| Symptom tracking        | ✓       | ✓       | ✓        |
| Voice logging           | ✓       | ✓       | ✓        |
| &nbsp;                  | &nbsp;  | &nbsp;  | &nbsp;   |
| Weekly summaries        | Limited | ✓       | ✓        |
| Full reports            | —       | ✓       | ✓        |
| Clinician-ready summary | —       | ✓       | ✓        |
| Priority feature access | —       | ✓       | ✓        |


### FAQ

Reuse `Accordion` from existing FAQ. 6 items:

- What's included in the free plan?
- When does Premium make sense?
- What does founding member pricing mean?
- Will my price stay the same?
- Can I cancel anytime?
- Is Luna a replacement for medical care?

Answers: 1–2 short sentences each, reassuring tone matching existing FAQ copy.

### Final CTA

Same `bg-gradient-luna` rounded panel as homepage final CTA:

- H2: "Your body is talking. Let's listen."
- Sub: "Start tracking for free or unlock Premium for deeper insights and clearer next steps."
- Two buttons: "Start free" (light bg) and "Join as a founding member" (outline on gradient)

### Footer

Privacy · Terms · FAQ · For Clinicians + copyright + clinical-decision-support disclaimer.

## 3. Homepage pricing preview

New component `<PricingPreview>` inserted between "How Luna works" and "TRUST" sections (the brief says before FAQ/testimonials; cleanest insertion point that matches intent is right after How Luna works).

Compact 3-up summary:

- Section heading: "Simple pricing" with one-line sub
- Three minimal cards: plan name, price, 1-line value prop, single CTA → `/pricing`
- Founding Member highlighted with gradient border
- Below: text link "Compare all features →" → `/pricing`

Visually lighter than full pricing cards (no feature checklist) to avoid duplicating the pricing page.

## 4. Styling notes

- All colors via existing tokens (`bg-card`, `bg-gradient-luna`, `text-muted-foreground`, `var(--shadow-soft)`, `var(--shadow-card)`, `--luna-sage`). No new tokens.
- Cards: `rounded-2xl`, generous padding (`p-8`), consistent with home.
- Mobile: single column, larger tap targets, comparison table converts to stacked plan blocks.
- Sticky header uses backdrop blur for premium feel.

## Files

- New: `src/routes/pricing.tsx`, `src/routes/for-clinicians.tsx`, `src/components/site-header.tsx`, `src/components/site-footer.tsx`, `src/components/pricing-preview.tsx`
- Edit: `src/routes/index.tsx` (use shared header/footer, insert `<PricingPreview />` after How Luna works)