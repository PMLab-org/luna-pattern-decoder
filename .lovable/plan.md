Remove the Premium Monthly tier from both the simple pricing preview on the homepage and the full pricing page, leaving only Free and Founding Member.

**`src/components/pricing-preview.tsx`**
- Remove the Premium Monthly card from the `plans` array.
- Keep Free and Founding Member as the two visible cards.

**`src/routes/pricing.tsx`**
- Remove the Premium Monthly plan from the `plans` array.
- Update the feature comparison table to only two columns (Free / Founding).
- In the comparison row for "Weekly summaries", change Free from `false` (dash) to `"Limited"`.
- Update Founding Member price to `$75/year` with copy explaining it's early-stage pricing that will become `$200/year` after 6 months.
- Update the hero and CTA copy to reflect the two-tier structure.
- Remove any comparison table mobile stack that references a third plan.