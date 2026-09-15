# DSH Hacks — Cohesive San Francisco Theme Revamp

Follow-up prompt for an AI coding agent. Builds on the current dark theme, serif/mono typography, and black/blue/white palette — all of that stays. This pass is about turning the page into one continuous, illustrated San Francisco "scene" the way calhacks.io does, instead of separate sections each with their own disconnected background texture.

Reference: https://www.calhacks.io/

---

## The core idea (what to actually borrow from Cal Hacks)

Cal Hacks' site isn't just "SF-themed decoration" — its defining trick is that the **whole page is one continuous illustrated environment**. Scrolling down moves you through connected scenery: sky → clouds → mountains → grassy terrain → ocean → landmark (Palace of Fine Arts), with each section's background bleeding into the next rather than resetting.

That's the structural idea to copy — not their specific cartoon-cloud illustration style, which would clash with what you already have. Your site already uses a **thin-line engraving/etching illustration style** (the anatomical skeleton line-art in About, the DNA-helix timeline in Schedule, the architectural truss art in V1 Recap). Extend that exact illustration style into SF motifs, and connect it into one continuous scene as the user scrolls, instead of each section having its own unrelated dark arch texture.

## The continuous scene, mapped to your sections

Think of the page as one long illustrated etching that changes as you scroll — like a single engraved scroll of the city, not a slideshow of stock images:

1. **Hero** — current arched/vaulted structure stays (it already reads as a grand interior space); could gradually reveal itself as a bridge tower's underside or a pier structure as you scroll past it
2. **About** — keep the current line-art illustration approach, but the connecting scenery visible at the section edges could shift toward a **fog bank drifting across hills**, rendered in the same thin white/gray linework
3. **V1 Recap** — the current truss/architecture line art already reads as Bay Area industrial-pier structure; lean into it, extending it into a **pier/dock silhouette with the bay visible beyond**
4. **Schedule** — the DNA-helix timeline graphic is a nice existing motif; could sit against a faint **cable/suspension-line pattern** (echoing bridge cables) running down the same vertical track
5. **Prizes/Sponsors/FAQ** — scenery settles into a **bay-water horizon line** near the footer, with a distant **bridge silhouette** (rendered in the same engraving linework, not a literal photo) as the page's final visual landmark before the footer

Each section's illustration should visually connect to the one above and below it — same line weight, same etching/engraving texture, continuous horizon or structural lines that carry across section boundaries — so scrolling feels like moving through one drawn cityscape rather than flipping between stock backgrounds.

## Illustration style guide (extending what already exists)

- **Line weight & treatment:** thin, single-weight white/light-gray linework on the dark background, same as the current skeleton and truss illustrations — no fills, no shading blocks, just contour lines
- **Subject matter for new illustrations (SF-coded, kept abstract/architectural rather than postcard-literal):**
  - Suspension bridge cables and tower structure (evokes Golden Gate/Bay Bridge without literally labeling it)
  - Hill contour lines (SF's rolling terrain)
  - Pier/dock trusses and pilings (Fort Mason/Embarcadero-style industrial waterfront — also ties back to f.inc's actual campus)
  - Fog banks as soft, sparse contour lines rather than solid gradients — consistent with the linework style, not a photographic blur
  - Streetcar/cable car rail lines as a subtle divider motif (thin parallel lines with cross-ties, used the way you'd use a horizontal rule)
- **What NOT to do:** don't mix in flat vector illustrations, cartoon clouds, or filled-color landmark icons (calhacks' literal style) — that would clash with the etched/engraved look you've already established and that makes the current site feel premium

## Layering & motion

- Treat the illustrations as parallax layers: distant elements (bridge, hills) scroll slower than foreground elements (fog wisps, near structures) — subtle, a few px of offset, not a dramatic 3D effect
- Fog-line elements can drift very slowly (slow horizontal loop) as an ambient animation, similar in spirit to how clouds drift on Cal Hacks but rendered as sparse linework instead of filled shapes
- Keep the same restrained motion philosophy as your existing site: nothing bouncy or playful, everything slow and atmospheric

## Color usage

No new colors needed — this is entirely achievable within the current black background / off-white linework / blue accent system:
- Illustration linework: off-white or light gray, matching existing body text tone
- Occasional accent: the blue used exactly as it already is (italic subheads, CTA buttons) — e.g. a single cable line or fog wisp picked out in blue at a key moment (like near the countdown or a section transition) as a rare highlight, not a recurring device

## Technical notes for implementation

- Build the connected scenery as layered SVGs (or a single tall SVG/illustration split into section-anchored layers) so it can scroll continuously behind the content rather than being cropped per-section
- Reuse/extend the existing skeleton and truss SVG assets' style (same stroke width, same opacity) when generating new bridge/hill/pier linework so everything reads as one artist's hand
- Since DSH Hacks is online/global rather than physically SF-based, keep the SF motifs abstract/architectural (bridge, hills, fog, pier structures) rather than literal named-landmark labels or address callouts — this is a stylistic homage, not a venue claim

## What stays untouched

- Typography (serif headlines, mono/grotesk labels) — confirmed working, no changes
- Black/blue/white color tokens and the light/dark theme system already in place
- Copy, layout structure, section order, and all existing content
- The diamond marker, pill buttons, and other UI components already established

---

**Deliverable:** one continuous, etching-style illustrated SF scene (bridge, hills, fog, pier/waterfront structures) that runs behind and connects all sections, built as an extension of the site's existing line-art illustrations rather than a new visual style layered on top.
