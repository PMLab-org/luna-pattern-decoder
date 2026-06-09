## Plan: Add testimonials + tidy up CTAs on the homepage

### 1. New testimonials section

Add a new section to `src/routes/index.tsx` titled **"Women are already finding clarity"** (or similar), placed **between the "Built with the care this moment deserves" trust section and `<PricingPreview />`**.

Why here:
- The page currently goes: Hero → Differentiation → How it works → Pricing → Trust ("Built with care") → Co-creation → FAQ → Final CTA.
- Social proof works hardest right before a money/decision moment. Moving `PricingPreview` to come *after* trust + testimonials gives the strongest flow:
  Hero → Differentiation → How it works → Trust → **Testimonials (new)** → Pricing → Co-creation → FAQ → Final CTA.
- This also breaks up the dense "founder + co-creation" block from the clinical-credibility block with real user voices.

Layout: 3 quote cards in a responsive grid (`md:grid-cols-3`), each with a large opening quote glyph, the quote, and an attribution line (name, age, country). Match existing card styling (`rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]`).

Quotes used verbatim:
1. Lisa W, 47, Australia — "I find my interactions, conversations actually help me bring attention to parts of my experience I'd have otherwise missed — both somatically and mentally. And that in turn helps me gain a different and sometimes more helpful perspective on things and then make more congruent choices. I feel like I'm leaning in and working with myself more than I ever have. Quite liberating 🌻"
2. Andrea, 48, USA — "I feel like a sense of relief, a sense of knowing, a sense of clarity and inner peace that comes just from having it all mapped out for me."
3. Barbara, 51, Canada — "Yes! This is what I've been looking for! And I can't wait to show my MD that I'm not crazy and it's not in my head! It's like this is giving me the proof I need to get what I deserve!"

(The longer Lisa quote will sit naturally in a slightly taller card; grid items align top.)

### 2. CTA audit

Current state of CTAs on the home page:
- Header → "Start Your First Entry" (links to `#start`)
- Hero → "Start Your First Entry" (no link, just a button)
- Co-creation section → "Start Your First Entry" (links to `#start`)
- Final CTA section → "Start Your First Entry" (no link)
- Plus a small "Are you a clinician?" link in the final CTA, and pricing-card links.

Issues / improvements:
- **Hero CTA has no href** — it doesn't scroll or do anything. Fix: link it to `#start` (or the eventual signup route) so it behaves like the header CTA. Same fix for the Final CTA button.
- **Repetition fatigue**: four identical "Start Your First Entry" buttons risk feeling samey. Suggested adjustments:
  - Hero (primary): keep "Start Your First Entry" — this is the page's key conversion.
  - After "How it works" section: add a new soft secondary CTA pair — primary "Start Your First Entry" + ghost "See pricing" link. This catches users who got curious from the 3-step explanation but aren't ready to commit.
  - Co-creation section CTA: relabel to **"Join the beta"** (more aligned with the section's "live beta · co-created with you" framing).
  - Final CTA section: keep "Start Your First Entry" as the dominant action, but add a secondary ghost link **"Read founding member pricing →"** alongside the existing "Are you a clinician?" link so cost-sensitive readers have somewhere to go.
- **FAQ section** currently ends with just "See all FAQs →". Add a small inline CTA below it: "Ready when you are — Start Your First Entry" to reduce dead-ends after the FAQ.

### Files touched

- `src/routes/index.tsx` — add testimonials section; reorder so `<PricingPreview />` comes after trust + testimonials; fix Hero and Final CTA hrefs; adjust co-creation button label; add post-"How it works" CTA pair; add FAQ-tail CTA.

### Out of scope (call out, not building)

- No new route, no DB change, no copy changes to the testimonials.
- Header and footer CTAs unchanged.
- If you'd rather keep `PricingPreview` in its current position (before Trust), say so — I'll just slot testimonials in between Co-creation and FAQ instead.
