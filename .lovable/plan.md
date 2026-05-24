## Replace hero image with emotional photo

**File**: `src/routes/index.tsx` (hero grid, right column)

### 1. Generate the photo
Use `imagegen--generate_image` (standard quality, 1024x1280, 4:5 portrait-ish to fit hero column) saved to `src/assets/hero-woman.jpg`.

Prompt:
> Candid documentary-style photograph of a woman aged 45–55 at home, sitting comfortably on a soft linen sofa near a window, looking at her phone with a quiet "aha" expression — slight relieved smile, eyes softened with recognition, shoulders relaxed. Warm natural morning light from the side, gentle shadows, neutral cozy palette (cream, oat, soft sage), shallow depth of field. She looks like a real person, not a model — unposed, authentic, grounded. No clinical or medical setting, no stress, no stocky overly-white-teeth posing. Cinematic, editorial wellness photography, 35mm.

### 2. Replace `<ChatMockup />` in the hero
In the hero grid (`src/routes/index.tsx`, hero section right column), swap `<ChatMockup />` for an `<img>`:

```tsx
import heroWoman from "@/assets/hero-woman.jpg";
...
<img
  src={heroWoman}
  alt="Woman at home reading her Luna pattern report with a quiet aha moment"
  className="w-full h-auto rounded-2xl object-cover shadow-[var(--shadow-soft)] aspect-[4/5]"
/>
```

Keep `ChatMockup` import/component definition in the file (still used elsewhere? — verify; if unused, remove the import to keep build clean). Only the hero usage changes.

### 3. No other changes
Hero copy, CTA, layout grid, and surrounding sections stay as-is.
