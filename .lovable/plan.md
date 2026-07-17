You connected Google Search Console to the wrong property, so we'll undo both sides of that setup.

## Steps

1. **Disconnect the Google Search Console connector** from this project via `standard_connectors--disconnect` (removes the connector secrets; the workspace connection itself stays available to re-link later).
2. **Remove the verification meta tag** from `src/routes/__root.tsx`:
   - Delete `{ name: "google-site-verification", content: "Ypd21r7fnUJ_dgWC8INdmcQjMVvelWsMYUzD1zKSx_s" }` from the root `head().meta` array.

## Follow-up (not in this change)

When you're ready to re-verify against the correct property, reconnect GSC, request a fresh META token for `https://luna-pattern-decoder.lovable.app/`, and add the new tag back into `__root.tsx`.
