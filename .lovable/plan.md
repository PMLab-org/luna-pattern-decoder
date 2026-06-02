## Goal

Update the Luna phone mockup on the homepage (`src/routes/index.tsx`, lines ~215–277) so the "Your summary" card carries the new richer narrative copy, while keeping its height aligned with the left "Other apps" mockup.

## Changes in `src/routes/index.tsx`

1. **Shrink the pattern map preview** (line 239): reduce `h-28` to roughly `h-20` so vertical space is freed for the longer summary.

2. **Remove the bottom nav block** (lines 270–276): delete the Chat / Pattern / Library / Me row entirely.

3. **Rewrite the Summary card** (lines 261–268) into three labeled sub-sections, all using existing token classes (`text-foreground`, `text-muted-foreground`, `text-primary`) — no new colors:

   - **Your summary** (title)
     - "Your sleep and brain fog cluster 3 days before your period — likely a luteal-phase pattern. The symptoms you mention suggest an interplay between your cortisol and adrenal subsystems pointing to adrenal fatigue."
   - **For the next week try the following:**
     - "Start each day with a protein-rich breakfast within 30 minutes of waking to stabilise blood sugar."
     - "Add a 10-minute walk in natural light each afternoon to help regulate circadian rhythm."
   - **Speak to your practitioner about:**
     - "Cortisol testing"
     - "Thyroid panel testing"

   Use tight `text-[10px] leading-snug` body text and `text-[11px] font-semibold` section titles, with small `mt-2` spacing between sections, so the card stays compact and readable inside the phone frame.

4. Keep the `PhoneFrame` wrapper, header, progress dots, and "Your pattern map" progress bar unchanged. The left mockup is untouched.

## Note on copy

The user wrote "Cortisol and Adrenal Subsystems"; given the recent sweep to remove clinical/"systems" language for the general-audience surfaces, I'll use lowercase "cortisol and adrenal subsystems" inline. If you'd prefer the capitalized version verbatim, say the word and I'll switch it.
