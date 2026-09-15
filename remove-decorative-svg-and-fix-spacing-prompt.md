# Prompt: Remove leftover procedural SVG decorations + fix section spacing

## Context

Several sections still have faint procedural SVG line-art decorations
left over from the old "engraved folio" design direction (see
CREDITS.md — now outdated, replaced by the current SF watercolor landmark
direction). Examples visible right now:

- The **hero** section ("Gathering of builders") has a faint arc/circle
  construction line behind the "a global" eyebrow text, on top of the
  Golden Gate Bridge watercolor.
- The **Countdown** section has a large faint dot-grid "world map" pattern
  plus a thin arc line with a small diamond marker above the numbers —
  this is the old "Stats band: golden-section construction" / world-map
  decoration.

These don't fit the current photo-driven direction, and — more
concretely — the Countdown section in particular has a lot of dead
vertical space above the actual countdown numbers that looks like it was
sized to fit this decoration, not the content.

## Task

1. **Audit all sections** for leftover procedural SVG decorative elements
   from the old design: orbital ellipses / arcs, dot-grid "map" patterns,
   golden-section/nested-square construction lines, and any other
   hairline geometric ornamentation that isn't a landmark photo, a
   heading, or functional content. Cross-reference against CREDITS.md's
   "Not sourced — procedural SVG line art" table if useful for finding
   where each one is implemented (Countdown's orbital ellipses, Stats
   band's golden-section construction, etc.) — but treat that table as a
   list of things to now remove, not a spec to keep building.
2. **Remove them** (or hide via a feature flag / comment out, whichever
   is more reversible) from every section, including the hero and the
   Countdown section specifically.
3. **Fix the resulting spacing**: after removing the decoration, re-check
   each affected section's padding/min-height/margin. Several of these
   were likely sized to accommodate the decorative element (e.g. Countdown
   has a large gap above the numbers) — reduce that to a normal, tight
   spacing appropriate for the actual content (heading + eyebrow label +
   the four numbers), not the old decoration's footprint.
4. Do this section by section and visually check each one after the
   edit — don't do a single blanket CSS change and assume every section's
   spacing collapses correctly, since sections may have set spacing
   slightly differently.

## Check after implementing

- No visible leftover arcs, dot-grids, or construction-line ornamentation
  anywhere on the page.
- Countdown section: the "Time remaining" label, "Countdown" heading, and
  the four numbers sit with normal, consistent spacing — no large dead
  gap above them.
- Hero section: "a global" / "Gathering of builders" area has no leftover
  arc line competing with the bridge image behind it.
- Re-check every other section that had one of these decorations (per the
  CREDITS.md "Not sourced" list — Dedication, Schedule's old DNA helix if
  still present, Prizes' wireframe polyhedra, Sponsors' coffer
  tessellation, Workshops' gear train, FAQ's water-vortex, Register's ECG
  pulse rule, Footer's printer's device, About's leaf-venation margin,
  Dividers' vault bases) — confirm each is actually gone and its section's
  spacing was fixed, not just the two called out above. Some of these may
  already have been replaced by landmark images or the new blue/white
  sections per other prompts — in that case just confirm no orphaned
  decoration is still rendering underneath/behind the new treatment.
- Page doesn't feel like it lost too much vertical rhythm overall — this
  is a cleanup, not a full re-layout, so keep general section spacing
  consistent with sections that never had these decorations to begin with.
