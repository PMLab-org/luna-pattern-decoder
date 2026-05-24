
## Change to `src/routes/for-clinicians.tsx`

Simplify the hero's right column to a single, beautifully framed page 1.

### Layout

- Replace the three-image peek arrangement with a single `<img>` of `reportPage1`.
- Wrapper: `relative mx-auto w-full max-w-[420px]` with `aspect-[8.5/11]` to preserve page proportions.
- Image classes: `h-full w-full rounded-2xl border border-border bg-card object-cover object-top shadow-xl`.
- Add a subtle soft "lift" via a second, slightly-offset shadow layer (a `::before`-equivalent done with an extra absolutely-positioned `div` behind the image: `absolute inset-0 -z-10 translate-y-3 rounded-2xl bg-foreground/5 blur-2xl`). This gives a premium grounded feel without competing visuals.

### Cleanup

- Remove imports for `reportPage2` and `reportPage3` (no longer used). Keep `reportPage1`.
- Delete the assets `src/assets/clinician-report-2.png` and `src/assets/clinician-report-3.png` to keep the project tidy.

### Untouched

- All other hero copy, testimonials, benefits, CTA, header/footer.
