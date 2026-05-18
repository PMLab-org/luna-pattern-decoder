In the "Help shape the future of menopause care" section of `src/routes/index.tsx`, rebalance the two columns so the founder card visually aligns with the three feedback/impact/protection cards on the right.

Changes:

1. **Extend the heading + subhead area** so it carries more visual weight:
   - Keep the heading as-is.
   - Expand the subhead into two short paragraphs for better readability and vertical rhythm. Suggested copy:
     - "Luna and The Perimenopause Lab are in active development, already used by over 90 women in a live beta."
     - "We're building the next version directly from your feedback — every story shapes what comes next."
   - Add a small label/eyebrow above the heading (e.g., "Live beta · Co-created with you") for extra height and signal.

2. **Align columns vertically**:
   - Change the grid wrapper from `md:items-center` to `md:items-stretch` so both columns share full height.
   - Make the left column a flex column so the founder card can stretch.
   - Make the founder card grow to fill available height (`flex-1`) so its bottom edge aligns with the bottom of the right column (cards + CTA).
   - Adjust grid ratio from `md:grid-cols-[1fr_1.4fr]` to `md:grid-cols-2` so columns are balanced.

3. **Inside the founder card**: keep the existing 3 paragraphs and attribution, but allow vertical breathing room (`justify-between` on inner content) so the card feels intentional when stretched, not empty.

No copy is removed; only the subhead is lightly expanded and one optional eyebrow added. No logic changes.