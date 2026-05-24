## Hero section update (`src/routes/index.tsx`)

The current hero already matches the screenshot's recommended structure (H1, subhead, CTA, supporting line) except for the badge above the headline. Per the screenshot annotation ("REMOVE or change to: 'Your body is talking. Let's listen.'"), make one change:

**Remove the badge** ("✨ AI pattern mapping for menopause") above the H1 so the headline leads the hero. This also tightens vertical rhythm — the H1's `mt-5` is dropped to `mt-0` (or the `mt-5` removed) so spacing stays balanced.

Everything else stays as-is:
- H1: "Most apps track symptoms. We tell you what they mean."
- Subhead: "Your symptoms are not random. They form a pattern. Luna reveals it so you know what to do."
- CTA: "Start Your First Entry"
- Supporting line: "Five check-ins unlock your first meaningful pattern report…"

No layout, color, or component changes beyond removing the badge span and adjusting the H1's top margin.
