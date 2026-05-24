
## Change to `src/routes/for-clinicians.tsx`

Replace the fanned/angled stack in the hero's right column with a clean horizontal arrangement: page 1 centered and prominent, with pages 2 and 3 peeking from behind on either side — all straight (no rotation).

### Layout

- Container: `relative mx-auto w-full max-w-[420px]` with a fixed aspect ratio matching the report page (`aspect-[3/4]`-ish — actual report is letter-ish, so use `aspect-[8.5/11]`).
- Three stacked `<img>` layers, all absolutely positioned, straight (no `rotate`):
  - **Page 2 (left peek)**: `left-[-14%] top-[4%] h-[92%] w-[60%]`, `z-10`, slightly dimmed (`opacity-70`) so it recedes.
  - **Page 3 (right peek)**: `right-[-14%] top-[4%] h-[92%] w-[60%]`, `z-10`, `opacity-70`.
  - **Page 1 (front, centered)**: `inset-x-0 mx-auto top-0 h-full w-[78%]`, `z-20`, full opacity, stronger shadow + border.
- All pages: `rounded-xl border border-border bg-card object-cover object-top`. Front page gets `shadow-xl`; side pages get `shadow-md`.
- On mobile, the container scales naturally and the peek effect remains (uses percentage offsets).

### Untouched

- Hero copy, button, testimonials section, benefits, CTA, header/footer, imports of report images.

## Technical notes

- Pure JSX/Tailwind change — no new assets, no new imports.
- Keep alt text "Sample Luna clinical report page".
