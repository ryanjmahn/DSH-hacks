# Prompt: About image swap + blue background/white text for 6 sections

Two independent changes below.

---

## 1. About section — replace skeleton line art with the bridge crop

### Context

The About section ("Who we are" / "About" heading, DSH Hacks description,
"AI × Healthcare" line) has a boxed illustration on the right side: a thin
hairline-rule frame containing a faint gray line-art skeleton/anatomy
figure (leftover from the old "engraved folio" design direction — see
CREDITS.md plate M2, now outdated). This gets replaced.

### Task

1. Find the About section component and the element rendering that
   line-art illustration (likely an inline SVG or an `<img>` referencing
   a line-art asset).
2. Swap the illustration itself for `golden-gate-bridge-zoomed-tower.jpg`
   (provided separately — the tight crop on the main tower, cables
   fanning out symmetrically, that was originally made for the
   frontispiece before that section moved to the Transamerica Pyramid
   instead).
3. **Keep the existing thin-rule frame/border** around the image exactly
   as it is now — same border style, same padding/inset, same corner
   treatment. Only the content inside the frame changes, from the line-art
   skeleton to this photo.
4. Match the opacity/color treatment used elsewhere on the site for
   photo backgrounds (full color, not force-converted to grayscale line
   art) unless the frame's existing design specifically depends on a
   monochrome image to work visually — check that before deciding, and
   default to full color if it's ambiguous.
5. `aria-hidden="true"` / decorative, consistent with the rest of the
   site's images.

### Check after implementing

- The frame border still renders correctly around the new image at all
  breakpoints (no stretching/distortion of the frame itself).
- The tower stays centered/visible within the frame, not cropped
  awkwardly by the frame's aspect ratio — adjust `object-fit`/
  `object-position` on the image as needed to fit the existing frame
  shape.
- Body text in the left column is unaffected and stays legible.

---

## 2. Blue background / white text — Prizes, Sponsors, Workshops, Register, FAQ, Footer

### Context

Original plan was a landmark watercolor image behind every remaining
section. New direction: six sections switch to a solid blue background
with white text instead of getting a landmark image. This **replaces**
the earlier image plans for two of them:

- **Sponsors** — was going to get `painted-ladies-watercolor-v2.png`.
  Don't add that image now; use the blue/white treatment instead.
- **Workshops** — was going to get `stanford-hoover-tower-watercolor-v3.png`.
  Don't add that image now; use the blue/white treatment instead.

(Those two images are still made and available if this direction changes
again later — just not part of this task.)

Sections still keeping their landmark image plan, unaffected by this
change: Hero (Golden Gate Bridge), Frontispiece (Transamerica Pyramid),
V1 Recap (Palace of Fine Arts), Schedule (Lombard Street), About (bridge
tower crop, per part 1 above).

### Task

For each of: **Prizes, Sponsors, Workshops, Register, FAQ, Footer**

1. Set the section background to the site's existing blue accent color
   (the blue already used for links and the "AI × Healthcare" line /
   Register button — use that exact token/variable rather than picking a
   new blue).
2. Set all text within the section to white (headings, body copy, labels,
   stat numbers, etc.) — check contrast against the blue for the smallest
   text (e.g. FAQ body copy, footer links) and adjust the blue's
   lightness slightly if needed to keep AA contrast, rather than leaving
   any text hard to read.
3. Buttons/links within these sections (e.g. "Register on Devpost",
   "See prizes on Devpost", sponsor logo links, FAQ accordion carets)
   need a treatment that still reads clearly on blue — likely inverting
   to a white button with blue text, or a white outline button, matching
   whatever pattern the site already uses for a button-on-color-background
   elsewhere (check the hero's "Register on Devpost" button treatment
   first, since that's already a colored button on a light background —
   adapt consistently rather than inventing a new button style).
4. Sponsor logos (Sponsors section) — confirm each logo still reads
   against blue; several look like they're full-color or dark-on-transparent
   PNGs that may need a white-background chip/card behind each logo if they
   go illegible directly on blue.
5. Do **not** add any background image to these six sections as part of
   this task — solid color only.

### Check after implementing

- All six sections pass basic contrast checks (text vs. background) at
  their actual font sizes/weights.
- Sponsor logos are all still visibly legible.
- The transition between an image-background section (e.g. Schedule) and
  an adjacent blue section (e.g. Prizes) doesn't look jarring — a clean
  hard cut between sections is fine and expected here, just confirm
  there's no unintended overlap/bleed at the section boundary.
- Buttons and links inside blue sections are clearly clickable-looking
  and consistent with the site's existing button style, just recolored
  for contrast.
