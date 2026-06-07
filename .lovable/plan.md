## Scope

Edit only the "Differentiation" section in `src/routes/index.tsx` (the two cards below the phone mockups). No other files affected.

## Changes

### Other Trackers card (left)
Keep the existing three sentences but render them as a bulleted list with small solid black (foreground) dot bullets:

- Long list of peri and menopause symptoms.
- Numbers or charts without narrative.
- You are left to connect the dots alone.

Implementation: the `<ul>` already exists at lines 207–211. Add a custom bullet to each `<li>` — a small filled circle using `bg-foreground` inside a flex row (`flex items-start gap-3`), replacing default list styling.

### Luna card (right)
Replace the two paragraphs at lines 288–293 with a 4-item bulleted list. Each bullet is a small purple Luna mark — the same gradient circle + Sparkles icon used in the phone header (lines 223–226), scaled down to ~16px:

- Conversations turn symptoms into a clearer picture of what may be going on.
- Reveal cycle-related patterns to your symptoms.
- Top things you can do to address or prevent those symptoms effectively.
- Specific questions to ask your physician — including labs to consider.

Implementation: render a `<ul>` with `flex items-start gap-3` rows; bullet is `<span className="mt-1 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-gradient-luna text-primary-foreground"><Sparkles className="h-2.5 w-2.5" /></span>`.

## Out of scope

No design-token, layout, or copy changes elsewhere. No changes to phone mockups, pricing, Stripe wiring, or other sections.
