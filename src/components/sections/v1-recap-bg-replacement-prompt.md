# Prompt: Replace V1 Recap section background with Palace of Fine Arts watercolor image

## Context

The "V1 Recap" section of the DSH Hacks site (dshhacks.org) currently has a
faded grayscale architectural texture as its background (looks like a
line-art / photographic building facade, very low opacity, bleeding into the
section's light background). This needs to be swapped out for a watercolor
treatment of the Palace of Fine Arts (Golden Gate Bridge visible behind the
rotunda), matching the same faded, desaturated, "part of the background, not
a photo" feel as the current texture.

Reference screenshot of the current section: "V1 Recap" heading, dek
paragraph, a 4-column stat row (1,294 hackers registered / 283 projects
submitted / 70+ countries / 8 prize categories), and a "winning projects
included" list below. The architecture texture currently sits behind all of
this, full-bleed across the section, right-weighted (denser/more visible on
the right two-thirds, fading out toward the left where the text sits).

## Task

1. Find the component/section that renders the "V1 Recap" block (likely
   something like `V1Recap`, `RecapSection`, or similar in the site's
   components directory).
2. Locate the current background image/illustration element (architecture
   texture) and its associated CSS (background-image, mask/gradient fade,
   opacity, blend mode, positioning).
3. Replace the image asset with the new Palace of Fine Arts watercolor image
   (asset provided separately — see "Image asset" below).
4. Keep the exact same fade/blend treatment currently applied to the
   architecture texture (same left-side fade so it doesn't fight with the
   text, same overall opacity range, same responsive behavior at mobile
   widths) — only the underlying image changes, not the CSS mechanics.
5. Confirm the image doesn't get cropped awkwardly at common breakpoints
   (check that the dome + bridge stay roughly centered/visible in the
   visible crop area at both desktop and mobile widths — don't let it crop
   down to just sky or just water).

## Image asset

Two watercolor treatments of the Palace of Fine Arts (with the Golden Gate
Bridge visible in the background) are available — use whichever matches the
current texture's tone better once placed:

- `palace-of-fine-arts-watercolor-textured.png` — full color, vibrant,
  heavy paper-grain/watercolor texture. Use this if the section should read
  as a colored watercolor wash (matches the site's photographic hero
  treatment elsewhere).
- `palace-of-fine-arts-hero-watercolor.png` — desaturated/faded, warm
  reds kept only in the bridge, transparent PNG that already fades out at
  the edges. Use this if the section should stay closer to the current
  grayscale/monochrome architecture-texture look.

If the current texture is genuinely grayscale (not just low-opacity color),
also try converting whichever asset you pick to grayscale in CSS
(`filter: grayscale(1)`) rather than sourcing a third variant, so it stays
consistent with the rest of the site's muted background elements.

## Style constraints (carry over from the rest of the site)

- Site is a single dark-theme, black/blue/white palette with a serif
  display headline font and a tracked-out mono/grotesk for labels — the
  background texture should stay decorative and not compete with the
  black serif "V1 Recap" heading or the stat numbers.
- Background element should be `aria-hidden="true"` / purely decorative,
  not an `<img>` with meaningful alt text, consistent with how the rest of
  the site's atmospheric background elements (fog, grain, architectural
  line-art) are implemented.
- Keep it full-bleed behind the section, not a bounded/framed image.

## Things to double check after implementing

- The stat row (1,294 / 283 / 70+ / 8) stays fully legible against the new
  background at the opacity/contrast used.
- No layout shift — the new image's aspect ratio may differ from the old
  texture, so verify the section height doesn't jump.
- Dark mode / light mode: confirm which theme this section currently
  renders in (the site consolidated to a single dark theme per recent
  decisions — if this section is still on an old light treatment, flag
  that rather than just patching the image in place).
