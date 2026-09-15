# Prompt: Swap V1 Recap background to the new dusk watercolor Palace of Fine Arts image

## Context

The "V1 Recap" section already has a Palace of Fine Arts image as its
full-bleed background (dome + arches faded under a light overlay, behind
the "V1 Recap" heading, dek paragraph, the 1,294 / 283 / 70+ / 8 stat row,
and the "winning projects included" list). That's the right general setup —
this is just an asset swap, not a rebuild.

## Task

1. Find wherever the current Palace of Fine Arts background image is
   referenced in the "V1 Recap" section component (image path, CSS
   `background-image`, or `<img>` element).
2. Replace that image file with the new one:
   `palace-of-fine-arts-dusk-watercolor.png` (provided separately).
3. Do not touch the surrounding CSS — keep the exact same overlay/fade
   treatment, opacity, positioning, and object-fit/crop behavior that's
   already applied to the current image. Only the underlying image file
   changes.

## Why this asset

The new image is a reprocessed version of the Palace of Fine Arts dusk
shot with a genuinely watercolor look — soft bled edges, visible paper
grain, warm glow through the columns — rather than the flatter/more
photographic version currently in place. It should read as more obviously
"painted" once the section's existing light overlay is applied on top.

## Things to double check after swapping

- Crop/position: the dome should still land roughly where it currently
  sits (centered, lower-middle of the section) — recheck the CSS
  `background-position` / `object-position` if the new image's aspect
  ratio or composition shifts it.
- Text legibility: confirm the heading, dek, and stat numbers are still
  easily readable against the new image at the same overlay opacity —
  the new image has a bit more contrast/texture than the current one, so
  nudge the overlay opacity up slightly if anything looks busier behind
  the text.
- Check both desktop and mobile breakpoints, since the new image's
  detail (grain, bleed) may read differently at smaller sizes.
