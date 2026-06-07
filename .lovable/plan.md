## Goal

Streamline the homepage FAQ to only the most critical questions, and provide a dedicated, comprehensive FAQ page for everything else. Link to it both from the homepage FAQ section ("For more questions") and from the footer (between Terms and For Clinicians).

## Changes

### 1. Trim homepage FAQ (`src/routes/index.tsx`)

Keep only 4 critical, high-intent questions in the `faqs` array. Drop the rest (they'll live on the full FAQ page):

- "What is Luna and how is it different from other symptom trackers?"
- "Is Luna a replacement for my doctor?"
- "How is my data protected?"
- "How much does it cost?"

### 2. Add a "For more questions" link under the FAQ accordion

Inside the `#faq` section, below the `<Accordion>`, add a centered link:

> Looking for more? → **See all FAQs**

Links to `/faq` (TanStack `<Link to="/faq">`).

### 3. Create `/faq` route (`src/routes/faq.tsx`)

A new route with `SiteHeader` + `SiteFooter`, route-specific `head()` metadata (title "FAQ — PM Lab", matching description, og tags), and the full FAQ content the user provided, organized into the 5 sections:

1. About PM Lab
2. Using the App
3. Insights and Summaries
4. Privacy and Data
5. Technical Problems

Each section renders as `<h2>` + an `<Accordion>` of Q/A items. Layout follows the existing legal/clinicians page pattern (max-width container, section spacing).

### 4. Update footer (`src/components/site-footer.tsx`)

The footer already has a "FAQ" link pointing to `/#faq`. Change it to:

- Route to `/faq` (the new full page) via `<Link to="/faq">`
- Keep ordering: Privacy · Terms · **FAQ** · For Clinicians (already correct)

### 5. Conflict check between short and long FAQ lists

The provided long FAQ uses PM Lab/Luna framing that differs slightly from the homepage's product-focused phrasing (e.g., 5-conversation process, beta status). To avoid contradictions:

- Long FAQ "What is PM Lab?" and "What makes this different…" stay verbatim from the user's text — these complement, not contradict, the homepage's Luna-focused entry.
- The homepage's beta, evidence-based, and PM Lab-identity questions are removed from the homepage and not duplicated on the long page (the long page already covers PM Lab identity and the "different from a regular tracker" angle).
- "Is Luna a replacement for my doctor?" (homepage) and "Is PM Lab medical advice?" / "Can PM Lab diagnose perimenopause?" (long page) cover overlapping but distinct angles — kept as-is, no contradictions.
- Pricing is only on the homepage short list (not in user's long list), so no conflict.

## Files

- edit `src/routes/index.tsx` — shorten `faqs`, add "See all FAQs" link
- create `src/routes/faq.tsx` — full FAQ page
- edit `src/components/site-footer.tsx` — point FAQ link to `/faq`
- `src/routeTree.gen.ts` — auto-regenerated
