## Plan: Enhance the How Luna Works Section

### Changes

1. **Subheader** — Replace current subtext with:
  > Three quiet steps. Two ways to walk away with clarity.
2. **Step 3 card** — Convert from a single text block into one card containing two stacked outcome blocks:
  - **Title:** Walk away with both
  - **For you** — What your body has been saying, in plain language. Plus what to try this week.
  - **For your doctor** — A meaninguful report they can read in 30 seconds.
3. **Steps 1 & 2** — No changes (titles and body copy remain identical).
4. **Footer line** — No changes.

### Implementation Notes

- The section lives in `src/routes/index.tsx` inside the "HOW IT WORKS" block.
- Step 3 currently uses the `Stethoscope` icon; it will continue to use it.
- The two stacked outcomes will be styled as distinct blocks within the same card, visually separated (e.g., subtle divider or spacing) while keeping the card’s existing `rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]` styling.

### Acceptance Criteria

- Subheader reads exactly: "Three quiet steps. Two ways to walk away with clarity."
- Step 3 card shows the title "Walk away with both" followed by the "For you" and "For your doctor" blocks.
- Steps 1 and 2 are untouched.
- Footer line remains: "Your first pattern report unlocks at check-in five. Ongoing entries help Luna track how your symptoms connect and change over time."