Language sweep across the site to remove clinical/naturopath terminology and lead with empowerment.

## `src/routes/__root.tsx`

Update all three meta descriptions (`description`, `og:description`, `twitter:description`):

- From: "Luna is an AI-powered perimenopause symptom tracker that reveals systems-level patterns."
- To: "Luna is an AI perimenopause companion that connects the dots between your symptoms so you understand what your body is telling you."

## `src/routes/index.tsx`

**Hero description (line 35)** — change:

- From: "Luna is an AI perimenopause symptom tracker that finds systems-level patterns. After 5 check-ins, see which systems are under burden."
- To: "Luna is an AI perimenopause companion that connects the dots between your symptoms. After 5 check-ins, see what your body is telling you."

**FAQ #1 (line 50)** — change:

- From: "...short conversations — and Luna surfaces the systems-level patterns connecting what you're feeling."
- To: "...short conversations — and Luna connects the dots between what you're feeling so it finally makes sense."

**FAQ #2 (line 58)** — change:

- From: "Most women complete the 5-conversation pattern map over 1–2 weeks."
- To: "Most women complete the 5 conversations, get personalized summary of how your symptoms interact and you can download your first clinician-ready report over 1–2 weeks."
  &nbsp;

**Mock preview labels (lines 238, 253, 264, 266)**:

- Comment "Pattern map preview" → No change
- Label "Your pattern map" →  No change
- Caption "Cross-system analysis" → "Your symptoms, connected"
- Body "Your results indicate a high burden in the Cortisol subsystem. For the next week, try the suggested practices and speak to your practitioner about next steps."  
→ "Your stress patterns stand out this week. Try the suggested practices to feel more like yourself."

## Untouched

- The comparison column line "You are left to connect the dots alone" — kept because it's the deliberate contrast against Luna (sets up "Luna connects them for you").
- All other copy (testimonials, pricing, benefits) — already on-brand.