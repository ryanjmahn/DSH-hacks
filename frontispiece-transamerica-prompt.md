# Prompt: Frontispiece background — Transamerica Pyramid (replaces bridge-crop plan)

## Context

Previous plan was to reuse a tighter crop of the same Golden Gate Bridge
photo for the frontispiece (the "DSH Hacks V2" splash screen above the
"Gathering of builders" hero). That's been dropped — scrolling from
frontispiece into the hero read as one repeated image rather than two
distinct moments, since it was the same source photo both times.

New plan: the frontispiece gets a different landmark — the Transamerica
Pyramid — so it's visually distinct from the bridge-themed hero directly
below it, while staying in the same watercolor treatment/palette family as
the rest of the site.

## Task

1. Find the frontispiece component and its current background image
   reference (the old pale monochrome arch/vault engraving —
   `plates/frontispiece-vault-mobile.jpg` or similar).
2. Replace it with `transamerica-pyramid-watercolor-v3.png` (provided
   separately) — an aerial view with the pyramid as the clear vertical
   focal point, bay and hills behind it. This is the final chosen pass:
   clean, defined edges with a graphic/cartoon-ish boldness on the
   buildings and skyline, while still holding recognizable detail
   (windows, streets) rather than dissolving into flat abstract washes.
   Use this version, not any earlier draft.
3. Full-bleed behind the section, same general placement as the current
   engraving. Given the pyramid's strong vertical line, center it roughly
   behind the "DSH Hacks V2" / date text block, similar to how the vault's
   arch was centered.
4. Add/adjust a light overlay (white/cream translucent scrim, or reduce
   image opacity) so the centered title, "AI × Healthcare" line, date, and
   nav bar all stay clearly legible against it — this image has more
   contrast (blue sky, sharp pyramid edge) than the pale engraving it's
   replacing, so don't skip this step.
5. `aria-hidden="true"` / decorative, consistent with the rest of the
   site's background images.

## Check after implementing

- Confirm this no longer visually reads as "the same bridge photo again"
  when scrolling from frontispiece into the hero — it should feel like a
  deliberate change of landmark/scene.
- Nav links and Register button stay legible at the top.
- Centered title/date block stays legible against the pyramid and sky.
- Pyramid doesn't get cropped awkwardly at mobile widths — check
  `object-position` so the spire stays in frame on narrow viewports.
