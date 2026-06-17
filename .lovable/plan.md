# Luna logo extraction — v2

The previous render didn't match the in-app mark. The real header logo is:
- A perfectly round badge (`h-8 w-8 rounded-full`)
- Filled with the Luna gradient: 135° linear-gradient from purple `oklch(0.52 0.22 300)` → magenta `oklch(0.52 0.23 350)`
- Centered Lucide `Sparkles` glyph in white — a large 4-point star with a small "+" sparkle top-right and a tiny "o"/sparkle top-left
- Wordmark next to it: **Luna** (semibold) + ` by PM Lab` (regular, muted)

## What I'll deliver (Canva-ready files in `/mnt/documents/`)

1. **`luna-icon.png`** — 1024×1024 transparent PNG
   - Solid (no stroke) gradient-filled circle, exact 135° purple→magenta gradient
   - White Lucide Sparkles glyph centered, sized ~50% of the circle, with the small `+` accent top-right and small sparkle top-left preserved exactly as in the lucide icon
   - No drop shadow, no extra ring — matches the flat header badge

2. **`luna-wordmark.png`** — 1920×512 transparent PNG, horizontal lockup
   - Icon on the left, "Luna by PM Lab" on the right
   - "Luna" semibold near-black, " by PM Lab" lighter weight in muted gray, matching the header's visual hierarchy
   - Font: Inter (matches the site)

3. **`luna-wordmark-on-dark.png`** — same lockup, white text, for dark backgrounds

## How

Generate the icon programmatically (Python + Pillow/cairosvg) rather than via image-gen, so:
- the gradient hex values are exact,
- the Sparkles glyph is the actual Lucide SVG (not an AI approximation),
- the circle is mathematically perfect.

The wordmark composites the same icon with text rendered from the Inter font file.

Deliver all three as `<presentation-artifact>` downloads.
