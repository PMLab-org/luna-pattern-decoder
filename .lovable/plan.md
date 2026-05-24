
## Changes to `src/routes/for-clinicians.tsx`

### 1. Hero: add a fanned/angled stack of the 3 report pages

- Convert the 3 pages of `user-uploads://PMlab-Report-Ivayla-2026-05-24.pdf` into PNGs (`pdftoppm`) and save into `src/assets/clinician-report-1.png`, `-2.png`, `-3.png`.
- Restructure the hero into a two-column layout on `md+`:
  - **Left column** (md:col-span-7): existing pill, H1, subheadline, and "Book a demo" button — unchanged copy.
  - **Right column** (md:col-span-5): a relative container roughly 360×460px showing the 3 report pages as a fanned stack. Each page is an `<img>` inside an absolutely-positioned wrapper with rounded corners, soft border, subtle shadow:
    - Page 3 (back): rotate `-6deg`, slight up/left offset, lower z-index
    - Page 2 (middle): rotate `3deg`, centered, mid z-index
    - Page 1 (front): rotate `-2deg`, slight down/right offset, top z-index
  - On mobile: stacks below the text, scaled down (fan still visible but tighter).
- Use semantic tokens for borders/shadows (no new gradients). Alt text describes "Sample clinical report from Luna".

### 2. Replace "How Luna supports care" with clinician testimonials

- Remove the entire `HOW IT WORKS` section.
- Insert a new section in its place: "What clinicians are saying" (H2, same typography scale as the prior H2).
- Crop the 3 circular headshots from `user-uploads://Screenshot_2026-05-24_at_14.27.20.png` into `src/assets/clinician-monique.png`, `clinician-negin.png`, `clinician-zeynep.png` (use ImageMagick to crop each headshot region and mask to a circle, or simply crop a tight square and let CSS `rounded-full` handle the circle).
- Render a `grid md:grid-cols-3 gap-6` of testimonial cards (same `rounded-2xl border border-border bg-card p-6` styling already used on the page) containing:
  1. Avatar (80px, `rounded-full`, centered)
  2. Quote in `text-muted-foreground` italic
  3. Name in `font-semibold text-foreground` (no orange — keep restrained, matches the "no gradients/glow" rule from existing memory)
  4. Credentials + location in `text-sm text-muted-foreground`
- Testimonials (verbatim from screenshot):
  - **Dr. Monique Mitchell** — PhD, Portland, USA — "What you are building will be revolutionary for women's health! I know so many women who need this!"
  - **Dr. Negin Sayar** — ND, Toronto, Canada — "This is awesome! Women truly NEED to have access to evidence-based info for their health and especially transitions!"
  - **Dr. Zeynep Uraz** — ND, Toronto, Canada — "This is such a thoughtful and important initiative — women in perimenopause deserve exactly this kind of resource and supportive community."

### Untouched

- Three benefits section, final CTA section, SiteHeader/SiteFooter, route metadata.

## Technical notes

- PDF → PNG: `pdftoppm -png -r 150 /tmp/report.pdf /tmp/report` then move pages into `src/assets/`.
- Headshot crops: `magick` (ImageMagick via `nix run nixpkgs#imagemagick`) — crop the three avatar regions from the screenshot using approximate normalized coords identified visually, save as square PNGs ~200×200.
- Imports: ES6 `import reportPage1 from "@/assets/clinician-report-1.png"` (and similar) at top of `for-clinicians.tsx`.
- Keep `mailto` constant and existing benefits/CTA exactly as they are.
