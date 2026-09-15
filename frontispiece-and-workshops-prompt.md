# Prompt: Frontispiece bridge swap + Workshops Hoover Tower background

Two independent changes below. Do them separately — they touch different
sections and different assets.

---

## 1. Frontispiece — swap to the zoomed-in bridge tower crop

### Context

The frontispiece (the very first splash screen — "DSH Hacks V2", DeltaForge
Hacks × NXT Horizon × STEMise, "AI × Healthcare", "Nov 7 2026", the Register
button) currently has a pale, low-contrast monochrome arch/vault engraving
as its background (`plates/frontispiece-vault-mobile.jpg` or similar —
check the frontispiece component for the exact reference). That's the old
"engraved folio" design direction and is being replaced.

The hero section directly below the frontispiece ("Gathering of builders")
already uses the full wide shot of the Golden Gate Bridge (both towers,
hillside, rocks) as its background.

### Task

1. Find the frontispiece component and its current background image
   reference (likely `background-image` in CSS, or an `<img>`/`<picture>`
   element).
2. Replace it with `golden-gate-bridge-zoomed-tower.jpg` (provided
   separately) — a tighter crop of the same source photo, centered on the
   main tower with the cables fanning out symmetrically. Deliberately a
   different, closer composition from the wide shot used in the hero, so
   the two sections don't feel repetitive back to back even though it's
   the same bridge/palette.
3. Full-bleed behind the section, same general placement style as the
   current engraving (centered, vertically filling the section).
4. Preserve legibility: the current background is very pale/low-contrast
   specifically so the centered black serif title and text stay easy to
   read. Since this new image is full color and higher-contrast than the
   engraving it replaces, add or increase a light overlay (white/cream
   translucent scrim, or reduce the image's own opacity) so
   "DSH Hacks V2" / "AI × Healthcare" / "Nov 7 2026" and the nav bar stay
   clearly legible against it. Match the overlay approach already used
   elsewhere on the site for text-over-image sections (e.g. the hero) if
   one exists, rather than inventing a new technique.
5. `aria-hidden="true"` / decorative, consistent with other background
   images on the site.

### Check after implementing

- Nav links (About/Schedule/Prizes/FAQ) and the Register button stay
  legible at the top of the section.
- The centered title block, date, and tags stay legible against the busier
  part of the image (the tower/cables).
- No layout shift; crop doesn't get cut off awkwardly on mobile widths —
  recheck `object-position` so the tower stays roughly centered at
  narrower viewports.

---

## 2. Workshops section — add Hoover Tower (Stanford) background

### Context

The Workshops section ("Learn from professionals" / "Workshops" heading,
workshop video carousel, "Subscribe on YouTube") currently has no
background artwork — it's plain. Per the current section-by-section
artwork plan, this section gets Hoover Tower at Stanford, since it fits
the academic/STEM feel of the workshop content.

### Task

1. Find the Workshops section component.
2. Add `stanford-hoover-tower-watercolor-v3.png` (provided separately) as
   a full-bleed decorative background, using the same pattern as the other
   sections that already have a background plate (e.g. V1 Recap) — same
   general opacity range, fade/overlay treatment, and `aria-hidden` setup,
   so it matches rather than introducing a new visual pattern.
3. This image is people-removed and architecture-emphasized (tower + the
   Main Quad arcade both read slightly sharper/more saturated than the
   lawn and sky around them), so it should hold up fine at fairly low
   opacity without losing the tower's silhouette.

### Check after implementing

- The heading, workshop video thumbnails/carousel, and "Subscribe on
  YouTube" button stay fully legible against the new background.
- No layout shift from adding a background where there wasn't one before
  — confirm section height/padding are unaffected.
- Consistent crop/position at mobile widths (tower shouldn't get cropped
  out entirely on narrow screens — keep it visible, even if off-center).
