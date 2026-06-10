Update all "Start Your First Entry" / "Start free" CTAs to point to `https://luna.perimenopauselab.com/` (open in new tab). Update the "Join the beta" CTA to point to the Stripe checkout URL `https://buy.stripe.com/3cI3cxgJn8b0gAEf0x4F200` (new tab).

Files:
- `src/components/site-header.tsx` — header "Start Your First Entry" → luna URL
- `src/routes/index.tsx` — four "Start Your First Entry" / "Ready when you are…" links (lines 91, 364, 657, 678) → luna URL; "Join the beta" (line 614) → Stripe URL
- `src/routes/pricing.tsx` — Free plan `PriceCard` CTA (line 348) and final CTA "Start free" (line 277) → luna URL

All external links get `target="_blank" rel="noopener noreferrer"`. Founding Member Stripe links remain unchanged.