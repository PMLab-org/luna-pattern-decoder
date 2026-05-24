## Goal
Make the "Other trackers" comparison card visually read as an app-based tracker by framing it as a phone screen, and update both captions.

## Changes (single file: `src/routes/index.tsx`, DIFFERENTIATION section)

### 1. "Other trackers" card → phone mockup
Wrap the existing list inside a phone-shaped frame:
- Outer container keeps the current card padding/border but centers a phone-shaped device inside.
- Phone frame: rounded-[2.5rem] with thick border (border-8 border-foreground/80), max-w-[280px], mx-auto, aspect-[9/19], bg-background, subtle inner shadow.
- Top notch: small rounded bar (w-16 h-5 bg-foreground/80, centered, -mt-1) for the speaker/camera.
- Status bar row inside: tiny time "9:41" left, small signal/battery dots right, muted text.
- App header row: "Tracker" title + a generic app icon dot.
- The existing symptom list ("Hot flashes — 3 today", etc.) renders inside the phone screen, scaled down (text-xs, tighter spacing) so it fits the device.
- Keep the "Other trackers" eyebrow label ABOVE the phone (outside the device), so the card still clearly labels the comparison.

### 2. Captions
- Under the Other trackers card (replacing current copy):
  > "Numbers or charts without narrative. You are left to connect the dots alone."
- Under the Luna card (replacing current "Conversations become a map…" line):
  > "Conversations turn symptoms into a clearer picture of what may be going on."

## Notes
- Pure presentational change in one section of `src/routes/index.tsx`. No new files, no token changes, no logic.
- Uses existing semantic tokens (foreground, background, muted, border) — no hardcoded colors.
- Mobile: phone mockup scales with max-w; on small screens the card still stacks cleanly above the Luna card.