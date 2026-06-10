## 1. Wire the Stripe payment link

Point every "Join as a founding member" / "Join as founding member" CTA to the Stripe Checkout link:
`https://buy.stripe.com/3cI3cxgJn8b0gAEf0x4F200`

Files and changes:

- `**src/routes/pricing.tsx**`
  - `PriceCard` CTA currently renders `<a href="/#start">{plan.cta}</a>`. For the Founding Member plan, swap to the Stripe URL (open in new tab with `target="_blank" rel="noopener noreferrer"`). Free plan keeps `/#start`.
  - Final CTA section's "Join as a founding member" button → same Stripe URL, new tab. "Start free" keeps `/#start`.
- `**src/components/pricing-preview.tsx**`
  - The Founding Member card's "See plan" button currently links to `/pricing`. Change to the Stripe URL, new tab. Free plan stays linking to `/pricing` (or we can keep both going to `/pricing` — see Question 1).
- `**src/routes/index.tsx**` — search for any remaining "Join as a founding member" / founding-member CTAs (hero, sticky bar, footer band) and route them to the Stripe URL, new tab. Free / "Start your first entry" buttons untouched.

Using a plain `<a>` (not `<Link>`) since it's an external URL.

## 2. QR code placement — recommendation

The QR resolves to the same subscribe/Stripe flow, so it's only useful where someone would scan with a *different* device (i.e. they're looking at the site on desktop and want to pay/save on their phone). My recommendation, in priority order:

1. **Inside the Founding Member pricing card on desktop only** — a small QR (~96px) tucked under the CTA with the label "Or scan to subscribe on mobile." Hidden on mobile (`hidden md:block`) because scanning your own screen is awkward. This is the highest-intent moment.
2. **Final CTA band on `/pricing**` — same desktop-only treatment next to the "Join as a founding member" button, for users who scroll all the way down without clicking.
3. *(Optional, lower value)* Founder note / "A note from the founder" section on the homepage as a soft secondary prompt.

I'd do #1 only to start — it's the cleanest, keeps the page uncluttered, and matches the buying intent. We can add #2 later if you want belt-and-suspenders.

The QR image itself would be saved as a Lovable asset from the upload and imported into the pricing card.

## Questions before I build

1. **Pricing preview card on the homepage** — should the Founding Member "See plan" button also jump straight to Stripe, or keep going to `/pricing` (so users see the full comparison first)? I'd lean keep it on `/pricing`.
  - It should keep going to /pricing
2. **QR placement** — go with just option #1 (Founding Member card, desktop only), or also add #2 (final CTA band)?
  Yes just option #1 