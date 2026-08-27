# DSH Hacks V2 — Complete Redesign Brief

**This is the only design document. Delete every earlier brief so they can't be read by mistake.** Read the whole thing before writing code.

---

## 1. The concept

Redesigning dshhacks.org end to end around one idea: **the site is an engraved scientific folio.**

Vesalius published *De Humani Corporis Fabrica* in 1543. Piranesi etched Rome. Leonardo filled notebooks with gears, vortices, and anatomy. Pacioli's *De Divina Proportione* — illustrated by Leonardo — worked out geometry in wireframe polyhedra. All of it is the same act: black line bitten into copper, pressed onto white paper, in service of understanding how things work.

Early printed books used two inks. Black for the body, a second color for initials and emphasis. The practice is called **rubrication**. Our brand blue is the second ink.

Books were also sold uncolored and then **hand-colored** by the publisher's colorists — transparent watercolor washed over the engraved line. Because coloring was expensive, color plates were bound together in a single gathering in the middle of the volume: a **plate section**. We do the same. One section of this site carries color; the rest is strictly two-ink.

**A hackathon is the same act, five centuries later.** People gathered to figure out how something works and draw it. The metaphor does the work — we never state it.

**The information architecture does not change.** Same sections, same order, same copy, same links, same routes. Everything about how the site *looks* changes. Nothing about what it *says* does.

**Register:** scholarly, precise, confident enough to be quiet. Not medieval, not steampunk, not fantasy-game UI, not "ancient Rome" stock assets.

---

## 2. Color

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FCFCFA` | Page ground. A hair off pure white — plate paper, not screen white |
| `--paper-alt` | `#F1F1EE` | Alternating light sections |
| `--ink` | `#0B0B0F` | Text on light grounds; ground for inverted sections |
| `--ink-soft` | `#57575F` | Secondary text, captions |
| `--rubric` | `#3636D3` | The second ink. Our brand blue |
| `--rubric-deep` | `#2A2AA8` | Hover states |
| `--rubric-pale` | `#B9B9EE` | Rubric on ink grounds, where full saturation fails contrast |
| `--rule` | `#D6D6DC` | Hairlines and graphic line art on light grounds |
| `--rule-inverse` | `#2A2A33` | Hairlines and line art on ink grounds |

Define centrally as CSS custom properties. No hardcoded hex in components.

### The rubrication rule

**Maximum two rubric elements per viewport** — the primary CTA and one accent word or marker per section. Everything else is `--ink`, `--ink-soft`, or `--rule`.

Rubrication worked because it was rare. A page where every heading is blue has no emphasis at all. Enforce this strictly.

### Inverted sections

The site must actually go black somewhere, not just be white with dark text.

| Ground | Sections |
|---|---|
| `--paper` | Frontispiece, Dedication, About, V1 Recap, Schedule, Sponsors, Workshops, FAQ |
| `--paper-alt` | Stats band, Prizes |
| `--ink` | **Countdown, Footer** |

On ink grounds: text is `--paper`, hairlines and line art are `--rule-inverse`, rubric shifts to `--rubric-pale` where full-saturation blue fails contrast — verify each case. Transitions between grounds are hard edges, never gradient fades.

---

## 3. Typography

Three faces, extreme scale contrast. The ratio between the smallest serif and the largest display size is roughly **1:8** — preserve it everywhere, don't flatten it.

- **Display:** a grotesque with humanist warmth — Söhne Breit, Founders Grotesk, or GT Alpina display weights. Uppercase, `letter-spacing: -0.025em`, `line-height: 0.85`
- **Serif:** the voice of the folio. Section eyebrows, pull quotes, specimen keys, plate captions, deadline notes, footer
- **Mono:** numerals and metadata only — countdown digits, dates, `01/` step numbers, plate numbers. Never body copy, never headings

| Token | Family | Size | Use |
|---|---|---|---|
| `--type-mega` | Display caps | `clamp(4rem, 12vw, 11rem)` | Opening sections only |
| `--type-display` | Display caps | `clamp(2.5rem, 6vw, 5rem)` | Section headings, stat numerals |
| `--type-title` | Display caps | `clamp(1.5rem, 2.5vw, 2.25rem)` | Row and card titles |
| `--type-eyebrow` | Serif italic | `1rem` | Above every section heading |
| `--type-quote` | Serif | `clamp(1.25rem, 2vw, 1.75rem)` | Pull quotes |
| `--type-body` | Sans | `1.0625rem` / `1.6` | Paragraphs |
| `--type-meta` | Mono, small caps, `letter-spacing: 0.12em` | `0.8125rem` | Metadata, nav, buttons, labels |

**Every section heading follows one pattern:** serif italic eyebrow, then display capitals directly beneath, tight leading. This repetition is what makes the site read as a designed system rather than a pile of sections.

Self-host fonts or use the framework's loader. `font-display: swap`. No FOUT.

---

## 4. Source the artwork

Do this before writing component code. The imagery is the foundation.

### What to find

**Anatomical:** Vesalius *Fabrica* (1543) — muscle-men écorché plates, skeletal figures, the anatomical theatre title page. Later atlases: Albinus, Cheselden, Gray's. Botanical and pharmacopoeia plates.

**Architectural:** Piranesi *Vedute* and *Carceri*. Serlio, Palladio's *Quattro Libri*, illustrated Vitruvius. Classical ruin studies, perspective diagrams, engraved portico frontispieces.

**Scientific:** Leonardo's notebooks — gear trains, screw mechanisms, water vortices, hand and muscle studies. Pacioli's *De Divina Proportione* wireframe polyhedra. Armillary spheres, star charts, Kepler's diagrams.

**Hand-colored** *(for the plate section only — see §5C):* hand-colored botanical, anatomical, and natural history plates. Search terms: *hand-coloured engraving*, *coloured plate*, *hand-colored lithograph*, plus a subject.

### Where

| Source | URL | Notes |
|---|---|---|
| Wellcome Collection | wellcomecollection.org | **Best first stop.** Huge medical archive, mostly CC0. Has the Vesalius plates, and hand-colored medical plates |
| Biodiversity Heritage Library | biodiversitylibrary.org | **Best for hand-colored botanical plates** — largest such collection |
| The Met Open Access | metmuseum.org/art/collection | CC0, filter "Open Access" |
| Rijksmuseum | rijksmuseum.nl/en/rijksstudio | Free high-res, strong Renaissance prints and colored natural history |
| Internet Archive | archive.org | Full scanned volumes |
| Royal Collection Trust | rct.uk | Leonardo notebook scans |

### Rules

- **Verify the license on every asset.** Public domain by age ≠ public domain by digitization; some institutions assert rights over their scans. Prefer explicit CC0. If terms are unclear, skip it — there is more than enough clearly-free material
- **Keep `/public/artwork/CREDITS.md`** listing every image: source institution, collection URL, original work and date, license. Non-negotiable, and it applies to the colored plates equally
- **Highest resolution available** — these get downscaled and reprocessed; starting small produces mush
- **Do not use *The School of Athens* or the *Vitruvian Man* as reproduced images.** We use their structural grammar — perspective, proportion, the circle-and-square construction — never the painting itself. Same reason: no laurel wreaths, no Greek key borders, no marble textures, no gold foil, no column clip-art. The classicism is structural, never ornamental

### Monochrome plate treatment

**On `--paper` sections — positive impression:**
1. High-contrast grayscale, pushing toward pure black line on white. Engravings are line art; they must read as line, not gray mush
2. Lift whites fully to `--paper` so there is no visible plate edge
3. Land at **20–30% opacity**
4. Feather edges with a radial alpha mask. **No bounding box, ever** — it reads as a stain, not a photograph

**On `--ink` sections — negative impression:**
1. Same conversion, then **invert**: white line on black. A real printmaking effect, and it looks striking
2. Land at **25–35% opacity**
3. Same feathered edges

**Texture:** a fine, neutral paper grain — laid or wove, slightly directional. Inline SVG filter, static, very low opacity. Almost subliminal; if you can clearly see it, halve it.

**Budget: six to eight monochrome plates sitewide**, plus two or three colored plates in the plate section.

---

## 5. Graphic elements — the system

This is what gives the site its character. **Every section carries a scientific graphic**, drawn as hairline line art.

### The governing rule

**Every graphic element is hairline SVG line art in `--rule` (or `--rule-inverse` on ink grounds), stroke weight `1–1.5px`.** No fills, no gradients, no 3D, no glow, no glossy rendering.

Everything must look like it came off the same press as the Vesalius plates.

**The test:** if it belongs in Leonardo's notebook, it's right. If it looks like a biotech company's hero graphic, it's wrong.

**Never build:** glowing helixes, floating particles, connected-node networks, rotating 3D molecules, circuit-board patterns, pulsing rings, matrix rain, glitch effects, animated gradients, 3D tilt, magnetic buttons, custom cursors, typewriter headings, confetti.

### 5A. Presence is not motion

This distinction governs everything below and is why the site can be dense without being noisy.

- **Presence budget: every section gets a graphic element.** Static line art at `15–30%` opacity, in margins or behind content. This is texture, and it should be everywhere
- **Motion budget: maximum two animated elements per viewport, one signature moment per section.** Most graphics simply sit there

A page full of quiet line art reads as a scientific document. A page full of moving line art reads as a screensaver. Density comes from presence; restraint comes from motion.

### 5B. Inventory

| Section | Graphic | Animated? |
|---|---|---|
| Frontispiece | Portico arch + compass construction arcs | Yes — draws on load |
| Dedication | Receding perspective arches + circle-and-square proportion construction | Yes — scroll drift |
| Countdown *(ink)* | **Dither field** + faint orbital ellipses | Yes — the dither field |
| About | Anatomical plate traced to stroke paths; leaf venation study in the margin | Yes — line-draw |
| Stats band | Golden-section construction: nested squares with the spiral arc through them | No — static |
| V1 Recap | **Hand-colored plate section** + specimen keys | Plates fade up on entry |
| Schedule | **DNA double helix** as the section spine | Yes — scroll-linked |
| Prizes | **Leonardo's polyhedra** — wireframe rhombicuboctahedron, icosahedron, dodecahedron, one per tier | No — static |
| Sponsors | Coffer tessellation grid, receding in perspective | No — static |
| Workshops | Gear train / screw mechanism from the notebooks | No — static |
| FAQ | Water vortex study — concentric spiral eddies | No — static |
| Register CTA | **ECG pulse rule** | Yes — draws once |
| Footer *(ink)* | Star chart / constellation plate + printer's device | No — static |

Sizes: margin elements `60–120px`. Background elements may run larger but never above `30%` opacity and never behind body copy at a density that hurts legibility.

### 5C. The plate section *(V1 Recap)*

The one place on the site where color appears. It is the showcase moment — past winners, the numbers, the proof this event works — and it earns it.

**Everywhere else, plates are feathered stains behind content at 20–30% opacity. Here they are actual plates** — framed, captioned, sitting *as* content.

- **Full opacity.** These are the real thing, not a wash
- **Hairline frame** in `--rule` around each plate, with generous white margin inside the frame — the way a plate sits on its page
- **Caption beneath each**, serif italic in `--ink-soft`, with a plate number in mono small caps: `PLATE I`, `PLATE II`, `PLATE III`, then a short line naming the original work and date. Real captions, not decoration
- **No feathering, no bleed.** Hard edges. The contrast with every other plate on the site is the point
- **Two or three plates maximum**

Because they are framed content rather than backgrounds, no body text sits over them — which removes the contrast problem entirely.

**Sourcing:** prefer plates whose palette includes a blue near `--rubric`, so the color section reads as related to the rest of the site rather than arriving from nowhere. Indigo, Prussian blue, and ultramarine all appear commonly in these plates.

**Treatment — minimal.** This is the one place the source material appears essentially as it was made.
1. Color-correct only enough to remove scanner cast and yellowed-paper tint — the paper should read close to `--paper`, the colors as the colorist laid them
2. **Do not desaturate. Do not duotone. Do not reduce opacity.** Full strength
3. **Preserve the off-register quality** if present — the slight misalignment between wash and line is the fingerprint of hand-coloring and must not be corrected
4. Apply the same paper grain as elsewhere so they sit on the same stock
5. Export WebP/AVIF with fallback, art-directed per breakpoint

**Layout.** Desktop: a row of two or three, captions beneath, generous space between, aligned to the section's baseline grid. Mobile: stacked, full width minus margin. The section's existing content — four V1 metrics, three winning projects as numbered rows — sits **above**; the plates close the section.

**The rule to hold:** color appears in exactly one section. After ten sections of black line on white paper, a full-color hand-colored plate is a genuine event. If color starts leaking into other sections, the plate section stops being special and the two-ink concept collapses. Flag it rather than extending it.

### 5D. The four elements that carry the site

**Dither field** *(Countdown, inverted ground).* Dithering is the same logic as engraved stipple — continuous tone faked with discrete marks. It belongs here, not as a modern effect bolted on.

- **Canvas, not DOM.** Thousands of cells; DOM nodes will not perform
- Square cells ~`10px` with a `2px` gap. Recompute on resize
- Cell value from 3D simplex noise at `(x * 0.06, y * 0.06, t * 0.0004)`. The slow time axis makes clusters drift and dissolve rather than flicker
- **Threshold hard:** below ~`0.55` renders nothing. This produces isolated clusters with empty space between them rather than a uniform field. Tune until 15–20% of cells are lit
- **Quantize to 5 steps** — never continuous opacity. Snapping to discrete levels is what makes it read as dithering rather than a blurry gradient
- Cells in `--paper`, the 5 steps mapping to opacity `0.10`–`0.45` against the ink ground
- Sits behind the countdown digits without compromising their legibility
- **Performance:** cap at 30fps with a frame limiter. Pause when off-screen via Intersection Observer and on `visibilitychange`. Single `fillRect` loop, no per-cell objects, no shadow or blur. If frame time exceeds 8ms on a mid-range laptop, increase cell size first

**Double helix** *(Schedule).* Replaces the plain spine. Functional, not decorative — it is the section's scroll progress indicator.

- Two sine waves in counter-phase with rung lines between them, running vertically down the left margin, ~`40px` wide
- Draws downward tracking **scroll position**, not time. Rungs appear in sequence as the line passes them
- The `01/`–`05/` node markers sit on the helix in `--rubric`
- A correct 2D projection with proper phase offset, not a decorative squiggle. It must read as a helix
- Below `1024px`, collapse to a plain vertical hairline

**Leonardo's polyhedra** *(Prizes).* Leonardo drew wireframe polyhedra for Pacioli's *De Divina Proportione* in 1509 — hollow-edged solids in perfect perspective, five centuries before anyone rendered a wireframe on a screen.

- One per prize tier: rhombicuboctahedron, icosahedron, dodecahedron
- Hairline wireframe, `140px`, `--rule`, static
- Trace from public-domain scans or construct geometrically

**ECG pulse rule** *(Register CTA).* A hairline with a single PQRST complex at center; the QRS spike in `--rubric`. Draws left to right on scroll entry, `1200ms`, then static. No looping pulse. **Exactly one instance sitewide** — it is punctuation, not a motif.

---

## 6. Structural motifs

Three devices from Renaissance architecture, used as layout structure rather than decoration. All generated SVG, not image assets, so they scale and recolor with tokens.

**Perspective.** The opening sections carry faint receding arch outlines diminishing toward a vanishing point. On scroll they scale to `1.04` and fade slightly — the user feels like they are walking into the hall.

**Bays.** Each major section is a bay, separated by a **springing line** — a horizontal hairline curving gently upward at both ends, suggesting the base of a vault.

**Coffers.** A low-opacity, perspective-skewed square grid as background texture on `--paper-alt` and Sponsors. Density low enough that text over it stays fully legible.

---

## 7. Sections

### Beat 1 — The Frontispiece *(new, above everything)*

A 16th-century engraved title page: title inside a drawn portico, imprint on the plinth, printer's device at the foot.

| Element | Content | Treatment |
|---|---|---|
| Attribution | `DeltaForge Hacks × NXT Horizon × STEMise` | The "publishers." Small caps, `--ink-soft`, above the arch |
| Portico | — | Hairline SVG arch on pilasters, `--rule` |
| Wordmark | `DSH HACKS` / `V2` | Display caps centered in the arch opening |
| Ornament | — | Thin rule with a lozenge at center — a compositor's mark |
| Theme | `AI × Healthcare` | Serif italic |
| **Date** | `NOV 7 2026` | **The largest element in the section — larger than the wordmark.** A hackathon's most urgent fact is *when* |
| Venue line | `ONLINE · GLOBAL · AGES 13+ · 100% FREE` | Small caps on the plinth, hairline dividers |
| CTA | `Register on Devpost` | `--rubric` fill |
| Deadline | `Submissions close November 7` | Serif italic, beneath the CTA |
| Device | DSH logo mark | Small, at the foot |

- Height `92vh`. **CTA and deadline visible without scrolling** on 1440×900 and 390×844. Verify both
- Clean `--paper`. No plate here — the contrast is what makes Beat 2 land
- Below `768px`: drop the pilasters, keep the arch curve and plinth rule. Do not scale the architecture down; it turns into a smudge
- **Optional, show me before deciding:** the date set twice — Arabic large, Roman (`VII · XI · MMXXVI`) small beneath

### Beat 2 — The Dedication

Full-viewport typographic statement over a bleached Vesalius plate. Small serif opener, display capitals across offset rows, small serif closer. Staggered, not centered.

**Headline — I must choose this. Do not pick autonomously.**

| Opener | Display rows | Closer |
|---|---|---|
| `a global` | `GATHERING` / `OF BUILDERS` | `1,294 hackers. 70+ countries. One question.` |
| `1,294 students.` | `SEVENTY` / `COUNTRIES` | `building the future of healthcare access.` |
| `the question is` | `WHO GETS` / `CARED FOR` | `and what we build to change it.` |

Keep the existing meta row and both CTAs.

**The two beats must read as one continuous space.** Align Beat 2's left margin to the frontispiece's left pilaster. No hard boundary, no ground change — Beat 2's plate begins fading in near the bottom of Beat 1. Beat 2's capitals are larger than the frontispiece date, so the eye is pulled forward.

### Countdown *(ink)*
Mono digits at `--type-display`, serif unit labels beneath, hairline verticals. Dither field behind. No card.

### About
Serif eyebrow, display heading. Two columns: copy left, traced anatomical plate right. Theme statement as a `--type-quote` pull quote between hairlines.

### Stats band *(paper-alt)*
Four oversized numerals, small-caps labels, hairline verticals. Golden-section construction diagram behind, static.

**Bug to fix:** the site currently ships `0+`, `0+`, `$0K+`, `0+` in static HTML — the count-up never seeds real values, so slow loads and crawlers see zeros. Render true numbers server-side; animate from zero on the client only.

### V1 Recap — the plate section
Same numeral treatment for the four metrics. Three winning projects as numbered rows with hairline separators and specimen keys (`a.`, `b.`, `c.`) in `--ink-soft` in the left margin. **Hand-colored plates close the section** — see §5C.

### Schedule
Numbered vertical list `01/`–`05/`, mono numerals. Helix spine on the left with `--rubric` node markers. Display-caps step titles, body beneath. No filled cards.

### Prizes *(paper-alt)*
Drop the trophy emoji entirely. Prize amount at `--type-display`, one polyhedron per tier. Judging criteria as four numbered items on hairline dividers with specimen keys.

### Sponsors
Logo grid over the coffer tessellation. Grayscale at rest, full color on hover, `--rubric` hairline wiping in beneath. Uniform max-height per logo so rows read evenly.

### Workshops
Keep the carousel. Hairline-bordered cards: thumbnail, speaker name in serif italic, title in display caps. Gear mechanism in the margin.

### FAQ
Accordion, hairline dividers only. Question in `--type-title`, answer in `--type-body`. Chevron rotates on open. Vortex study in the margin.

### Footer *(ink)*
`--paper` type, logo reversed out, star chart plate behind. Artwork credits link lives here.

---

## 8. Motion

**Budget:** maximum two animated elements per viewport, one signature moment per section. `400–700ms`, ease-out or `cubic-bezier(0.16, 1, 0.3, 1)`. Nothing bouncy. Everything runs once on entry except the dither field. Everything gates behind `prefers-reduced-motion: reduce` — content and graphics appear in final drawn state, loops frozen.

**Sitewide:**
- **Heading mask-reveal** — display capitals slide up from behind a clip mask, `600ms`; serif eyebrow fades in `150ms` earlier. Every section. This sets the page's rhythm
- **Springing-line dividers** — each bay's arch rule draws outward from center on entry, `800ms`
- **Hairline hovers** — Schedule and FAQ rows thicken their left hairline to `2px` `--rubric`; sponsor logos grayscale→color with a rubric hairline wiping in; secondary buttons fill left-to-right, not a fade

**Per section:**
1. **Frontispiece** — arch draws itself via `stroke-dashoffset` springing from the center and down the pilasters, `1400ms`. Contents fade up in sequence: attribution → wordmark → theme → date → venue → CTA, `400ms` each, `80ms` stagger
2. **Dedication** — perspective drift, scroll-linked
3. **Countdown** — dither field
4. **About** — traced plate draws itself, `1200–1800ms`, staggered across path groups so it builds
5. **Stats / V1 Recap** — numeral count-up, zero to value, `~1200ms`
6. **V1 Recap** — colored plates fade and rise `16px` on entry, `600ms`, `100ms` stagger. No line-draw, no parallax, no hover — they are finished objects, not diagrams being constructed. Specimen key hover: key shifts to `--rubric`, hairline leader draws to the item, `300ms`, fully legible without hover
7. **Schedule** — helix spine, scroll-linked
8. **Register** — ECG pulse rule draws once

Sponsors, Workshops, FAQ, and Footer carry sitewide effects only. They are the site's quiet stretches and they are necessary.

---

## 9. Implementation

- **Intersection Observer** for all scroll-entry triggers. No unthrottled scroll listeners. No animation library for effects this simple
- Animate **`transform` and `opacity` only**, plus `stroke-dashoffset` for line-draws. Never `width`, `height`, `top`, `left`
- Scroll-linked effects run inside `requestAnimationFrame`, reading scroll position once per frame
- `will-change` sparingly, removed after completion
- All SVG optimized with `svgo`. Graphic elements under 8KB each — simplify paths if a traced sketch exceeds it. Traced plates under 60KB, or fall back to the raster treatment for that instance
- Plates as WebP/AVIF, art-directed per breakpoint via `<picture>`. Lazy-load below the fold. Beat 2's plate is the LCP element — preload it
- **Nothing may cause layout shift.** Reserve space for every animating element

## 10. Accessibility

- Decorative graphics and background plates: `aria-hidden="true"`, empty `alt`, not focusable, no tab stops
- **The colored plates in §5C are content, not decoration** — real `alt` text describing each (subject, work, date), captions as real DOM text, never baked into the image
- **Recheck every contrast pairing** — the palette is new, so any earlier checks are void. `--rubric` on `--paper` passes comfortably; **`--rubric` on `--ink` does not** — use `--rubric-pale` on inverted grounds and verify
- Text over positive plates: check against the **darkest** region. Over negative plates and dither clusters: check against the **lightest** region
- Target WCAG AA: 4.5:1 body, 3:1 large display. **If a pairing fails, reduce the graphic's opacity — never add a scrim.** A scrim kills the effect
- Visible focus rings: `--rubric` on light, `--rubric-pale` on ink. No transition
- Full keyboard navigation on accordion, carousel, nav
- Semantic heading order with the frontispiece inserted — its wordmark becomes `h1`, everything below steps down
- No effect is the sole carrier of information

**Report every pairing you checked and its ratio.**

## 11. Performance

Report Lighthouse performance and CLS **before and after**. Two specific risks:

- **The dither field** — profile it and report frame time
- **The colored plates** — full-color at full opacity, the heaviest images on the site. They sit well below the fold, so lazy-load all of them and confirm no LCP impact. If the section exceeds ~400KB after compression, reduce to two plates rather than degrading quality

No regression from current scores is acceptable.

---

## 12. How to work

1. **Read the codebase.** Report the framework, styling system, where theme tokens live, how pages are defined, and every file you plan to touch. **Then stop and wait for approval**
2. **Swap the color tokens** across the existing build, change nothing else, and show me. This is the largest single visual change
3. **Source the artwork** — monochrome and hand-colored. Show me candidates and the `CREDITS.md` manifest before processing anything
4. **Build tokens and type scale**, apply to **Schedule** alone, and stop for review. It exercises the most patterns at once
5. **Frontispiece**, static, no motion. Show me
6. **Dither field** on Countdown — highest technical risk. Build it early enough to cut it if it won't hold frame rate. Show me
7. Wait for my **headline decision** before building Beat 2
8. Then remaining sections in order, then graphic elements, then motion. **Commit per section and per element**
9. Don't refactor unrelated logic, upgrade dependencies, or change build config unless a font or image format requires it

**If any element reads as decoration rather than instrument, say so and stop.** With this many specified, I expect to ship fewer than are listed. Cutting is the correct outcome, not a failure.

## Out of scope

Copy, section order, routes, external links, CMS, analytics, form logic, Devpost/Discord integration behavior.
