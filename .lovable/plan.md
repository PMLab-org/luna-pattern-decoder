Re-fix alignment in the "Help shape the future of menopause care" section in `src/routes/index.tsx`:

The intent: Daniella's founder card should align top + bottom with the row of three cards (Feedback / Impact / Protected) — not stretch past them to match the CTA height.

Changes:

1. **Move the "Start Your First Entry" CTA out** of the right column. Place it below the whole grid, centered, so it no longer adds height to the right side.

2. **Right column becomes just the 3 cards** with `h-full` on the grid so the cards stretch to fill column height.

3. **Left column stays as flex column**, founder card keeps `flex-1` — now its bottom will land exactly at the bottom of the 3 cards row, since both columns share the same height (`md:items-stretch`).

4. Keep all copy as-is (eyebrow, heading, two-paragraph subhead, founder card content).

Result: heading + subhead sit at the top-left, founder card occupies the lower-left and aligns visually with the 3 cards on the right; CTA sits centered below the grid.