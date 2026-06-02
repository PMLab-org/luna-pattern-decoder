## Tighten phone mockups — remove bottom whitespace

The two phone mockups in the differentiation section currently use a fixed `h-[600px]` inner frame. The Luna content fills it, but the OTHER TRACKERS content leaves a large empty gap below the chart, and Luna has a smaller gap below the summary card.

### Change

In `src/routes/index.tsx`, update `PhoneFrame` to size to its content instead of a fixed height:

- Replace `flex h-[600px] flex-col` with `flex flex-col` on the inner screen div (drop the fixed height entirely).
- Remove the `mt-auto` push on the OTHER TRACKERS bottom nav (Log / Trends / Cycle / Me) so it sits directly under the chart instead of being pushed to the bottom.

To keep both mockups visually aligned, the parent grid cards (`md:grid-cols-2`) already stretch to equal height via the grid — the captions below each phone will sit at slightly different vertical positions but the cards themselves stay aligned. If the user wants the phones themselves pixel-aligned at the top, that's already true (they share the same top within each card).

No other files or sections are touched.
