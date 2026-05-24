## Issue

The Luna phone mockup renders shorter than the Other trackers one because its inner content is less tall. The `PhoneFrame` has no min-height, so each instance sizes to its content.

## Fix

In `src/routes/index.tsx`, give `PhoneFrame`'s inner screen a consistent min-height so both phones render at the same device size regardless of content.

- Add `min-h-[460px]` (and `flex flex-col`) to the inner screen div of `PhoneFrame`.
- No other changes — both phones inherit the same height automatically.
- If added hight in the Luna phone mock up results in white space add text: Heading Your summary, sub heading cross system analysis Content: your results indicate a high burden in teh Cortisol Subsystem. For the next week try the following and speak to your practioner about