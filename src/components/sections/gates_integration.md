# DSH Hacks — Integrate Real Golden Gate Bridge Image (Hero)

Prompt for Claude Code. A real image has been added to the project: `as_photography_bridge` (the watercolor-filtered Golden Gate Bridge photo, originally from Pixabay, Pixabay Content License — free for commercial use). Wire it into the hero section as the actual background art, replacing the current placeholder/procedural line-art.

---

## What to do

1. **Locate the uploaded file** in the project (check the root, `/public`, `/src/assets`, or wherever recently-added images land in this repo) and move it into whatever static-asset location the rest of the site's images already use (e.g. `/public/images/` or `/public/watercolors/`), following existing naming conventions there. Rename it to something descriptive and consistent with any existing naming pattern, e.g. `hero-golden-gate.jpg`.

2. **Replace the hero background** currently rendered by the placeholder/procedural system (`WatercolorPlate` or equivalent, or the fallback line-art/arch texture) with this image, specifically in the hero section only — don't touch other sections' current art.

3. **Apply the following treatment in code** (this image is a raw, un-treated crop, so these need to be real CSS/component work, not pre-baked into the file):
   - `background-size: cover; background-position: center;` (or the `object-fit: cover` equivalent if rendered as an `<img>`/`next/image`) so it scales cleanly across viewport widths without distorting the bridge
   - A dark gradient overlay across the lower half to two-thirds of the image (transparent at top, fading to the site's near-black background color at the bottom) so the hero headline, stats, and buttons stay legible sitting on top of it — implement as a pseudo-element or gradient layer, not by pre-editing the image
   - Optional: a soft vignette at the left/right edges (radial or linear gradient mask fading to the background color) so the image doesn't feel like a hard-edged rectangle dropped onto the page — match the "dissolve at the edges" treatment used elsewhere in the design system, if that convention already exists in a shared plate/mask component
   - Keep a subtle grain/texture overlay consistent with whatever the rest of the site uses, if there's a shared grain layer already in place

4. **Responsive behavior:** verify the crop still reads well on mobile widths — the bridge towers and cables are the visual anchor, so if the image gets cropped narrower on small screens, keep the composition centered on the right-hand tower (where the bulk of the bridge structure sits) rather than letting it crop off-center.

5. **Accessibility:** give the image a proper `alt` text (e.g. "Golden Gate Bridge at sunset") if rendered as an `<img>`, or ensure a text alternative exists if it's a pure CSS background — the hero headline and copy already convey the page's content, so this can be simple.

6. **Performance:** this is a real photographic image (not an SVG), so make sure it's optimized for web — compress if the file is large, serve via whatever image-optimization pipeline the framework already provides (e.g. `next/image`, an image CDN, or a build-time compression step) rather than serving the raw upload as-is.

## What to remove or dial back

- Turn off or remove the procedural/placeholder art that was previously rendering in the hero slot (the arch/vault texture or the generated line-art fallback), so it doesn't render underneath or compete with the real photo
- If the hero previously had a separate decorative accent (e.g. a glow effect meant to simulate the bridge) that's now redundant with the real image, remove it too — don't layer effects designed for the placeholder on top of the real art

## What stays untouched

- Typography (serif headline, mono/grotesk labels), copy, and layout structure
- The black/blue/white color system elsewhere on the page
- All other sections' current background art — this change is scoped to the hero only

---

**Deliverable:** hero section rendering the real Golden Gate Bridge image with a code-applied gradient/vignette treatment for text legibility, responsive across breakpoints, with the old placeholder art removed from that section.
