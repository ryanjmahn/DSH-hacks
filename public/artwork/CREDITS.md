# Artwork credits — DSH Hacks V2 (engraved folio redesign)

**Status: processed and in use.** Each asset's licence is recorded inline.

**Colour system is INVERTED** — dark grounds are primary, three light relief
sections (About, V1 Recap, Sponsors, Workshops). Consequence for imagery:
every plate on a dark section is a **negative impression** (grayscale →
`invert(1)` → white line on black, 25–35%, feathered); the light relief
sections keep the **positive** treatment. The Dedication collage is the one
exception — not inverted but **deepened** (brightness pulled down so the
washed plate sits at mid-tone against the black, ~35% saturation kept).

All works are in the public domain by age (every named creator died before
1920; every plate predates 1910). The licence column records the *digitiser's*
rights statement, which is what actually governs reuse of a specific scan.

---

## What actually ships

The fresco build placed six monochrome plates. The folio brief routes most
sections to **procedural SVG line art** instead (see "Not sourced" below), so
the raster count drops to **three monochrome + two colour** — well under the
§4 budget of "six to eight monochrome, plus two or three colour". Fewer,
each earning its place.

### Monochrome plates — 3

| Plate | Work | Creator / after | Date | Source | Identifier | Digitiser licence | Placement | Treatment |
|---|---|---|---|---|---|---|---|---|
| **M1** | *Tabula II, Liber II* — écorché figure walking in profile | after Andreas Vesalius, engraving | 1568 | Wellcome Collection | V0007742ER / work `wcsthtds` | Public Domain Mark (re-verify) | **Beat 2 / Dedication** — bleached positive stain behind the type, feathered, 20–30%, no box | §4 monochrome positive |
| **M2** | Human skeleton leaning on a classical tomb, lateral view, after Vesalius | engr. J.R. Bénard after Vesalius | 1779 (after the 1543 woodcut) | Wellcome Collection | 36166i / work `rw2y2mvt` | **now shows CC BY 4.0** (was PDM) — attribution provided here, re-verify at processing | **About** — traced to a hairline `--rule` line-draw (anatomy posed against architecture: the whole thesis in one image) | §5 line art, `stroke-dashoffset` draw-in |
| **M3** | *Uranometria* — **Orion**, the figure with lion-skin and club | Johann Bayer; engr. Alexander Mair | 1603 | Wikimedia Commons | `File:Orion Picha.jpg`, 1785×2484 | PD-Mark 1.0 + PD-old-100 | **Footer** (`--ink`) — grayscale + normalise + contrast, then CSS `invert(1)` for the negative impression, feathered radial mask, ~30% (`footer-starchart.*`) | §4 monochrome negative |
| **M4** | ***The School of Athens*** — **architecture only**: the coffered barrel vault, the receding arch openings, and the sky beyond, cropped from the upper zone above every figure | Raphael, fresco, Stanza della Segnatura | 1509–11 | Wikimedia Commons | `File:"The School of Athens" by Raffaello Sanzio da Urbino.jpg` — 3820×2964, "stitched together from vatican.va" | Public Domain (`Copyrighted: False`, `AttributionRequired: False`) | **Frontispiece** — the framing element (replaces the drawn portico). Baked high-contrast grayscale (`linear 1.5,−34`, `brightness 1.32`, `gamma 1.08`) so the coffering reads as structure; then **negative on the dark ground** — CSS `invert(1)` → white coffering on black — feathered on all four edges, no box, CSS presence **0.26** (§ 25–35%). Desktop + tighter mobile crop, AVIF/WebP/JPEG. Vanishing point behind the wordmark, arch opening behind the date; scroll-linked 1.0→1.03. |

*M4 note — deliberate override.* §4 says "**Do not use *The School of Athens*… as reproduced images**." Placed here on explicit direction: the crop is architecture only, taken entirely above the figures (Plato, Aristotle, the crowd, and the Apollo/Athena niche statues are all outside the frame; the far-left statue's sliver is killed by the edge feather). Cropped this way it reads as Renaissance perspectival space, not the specific painting — which is the point. No Greek-key border in the crop.
*Contrast (§10, the section's highest-risk pairing):* `--ink` display type over the darkest coffer shadow of the bleached vault — measured against the **absolute darkest pixel** in the central band, not an average: local background luminance 0.81, **contrast 16.1:1** (mobile 16.2:1). At 0.17 presence the plate cannot pull the ground dark enough to threaten near-black type; passes AA with ~4× margin, no lift or scrim needed.

*M3 note:* this scan carries modern yellow star-dot overlays and two small
labels ("Beteigeuze", "Rigel"). At ~30% opacity, inverted, feathered, and
behind footer text they are not legible; if it ever reads as modified,
`Eridanus Uranometria.jpg` (4612×3459, unannotated) is the drop-in
replacement.

*Carried over from the fresco manifest, now cut:* **A3–A5** (spare écorché/myology
figures — no slot in the folio inventory) and **A6** (nervous-system tree, used
as Beat 2's "collage accent" — the folio Dedication is one clean plate behind
type, so the accent layer is decoration and goes). **B2** (S. Maria Maggiore
coffered vault) stays a *reference only* for the procedural coffer grid, not a
shipped image. **B3** (Colosseum) was the fresco Register plate; the folio
Register is an ECG pulse rule with no plate, so B3 is cut.

### Colour plates — CUT

The V1 Recap hand-coloured plate section is removed entirely — both gentian
plates (Curtis's Botanical Magazine 491/1800 and 723/1803), the framed-plate
treatment, the `PLATE I / II` captions, and the "From the archive" eyebrow.
The whole colour-plate concept is gone; the site is now single-ink (white +
blue on dark) throughout. The Curtis source files were reviewed and rejected
along the way — the Besler *Hortus Eystettensis* Commons scan was the
uncoloured 1640 edition and the "Bourgery anatomical" candidate was a
near-monochrome grid — but that's moot now.

**Replaced by M5** — a second crop of the same *School of Athens* source as
M4, so V1 Recap and the Frontispiece read as two views of one continuous
space:

| # | Work | Crop | Source | Licence | Used in |
|---|---|---|---|---|---|
| **M5** | ***The School of Athens*** — a **side pier and the angled coffering of the aisle**, seen obliquely (a different part of the architecture from M4's head-on barrel vault) | `left 0.50, top 0.10, w 0.22, h 0.28` of the full frame — no Greek-key border in it | same as M4 (`File:"The School of Athens"…jpg`, 3820×2964, stitched from vatican.va) | Public Domain (`Copyrighted: False`) | **V1 Recap** — negative impression, treatment identical to M4: baked high-contrast grayscale → CSS `invert(1)` → white line on the dark ground, feathered all edges, no box, shared `.grain-overlay`. **CSS presence 0.22** (below M4's 0.26 — it sits behind the winners list, not display type). `object-position: 90% 12%` so the architecture frames the left-aligned content. Desktop 1400w / mobile 950w, AVIF/WebP/JPEG (~120 / 79 KB desktop/mobile WebP). |

**No C3.** Two plates only — keeps V1 Recap under the §11 400 KB budget with
margin and reads as a deliberate pair. If a third is ever wanted, the safe
pick is a hand-coloured **Bloch fish** (1782–95) or a **kingfisher/jay**
ornithology plate — *not* **Haeckel, *Kunstformen der Natur***: printed
chromolithographs (no hand-colouring, none of the off-register quality
§5C.3 preserves), 1904, and the radiolarian/medusa forms read as a modern
biotech hero graphic — the exact failure §5 names.

---

## Not sourced — procedural SVG line art

Per §5B / §6, generated as hairline SVG in `--rule` / `--rule-inverse`,
1–1.5px, no fills, `svgo`'d, under 8 KB each. Built, not traced — tracing
copper engravings through potrace produces fills and 50 KB+ path soup (the
fresco build's `about-line.svg` / `register-line.svg` are 52–59 KB and get
replaced). Historic scans below are **visual reference only**, nothing from
them ships.

| Section | Element | Reference (not shipped) |
|---|---|---|
| Frontispiece | Portico arch + compass-construction arcs | — (geometry) |
| Dedication | Receding perspective arches + circle-and-square construction | — (geometry) |
| Countdown | Faint orbital ellipses (behind the dither field) | — (geometry) |
| Stats band | Golden-section construction: nested squares + spiral arc | — (geometry) |
| Schedule | DNA double helix — 2D projection, correct phase, scroll-linked | — (parametric) |
| Prizes | Rhombicuboctahedron, icosahedron, dodecahedron — hairline wireframes | Leonardo/Pacioli, *De Divina Proportione*, 1509 — Wikimedia (woodcut scans) |
| Sponsors | Coffer tessellation, perspective-skewed | fresco ref B2 (S. Maria Maggiore vault) |
| Workshops | Gear train / screw mechanism | Leonardo, *Codex Atlanticus* — gear & screw studies |
| FAQ | Water-vortex study — concentric spiral eddies | Leonardo, deluge / water-turbulence studies (Royal Collection asserts rights on its scans — reference the form only, don't reproduce a scan) |
| Register | ECG pulse rule — one PQRST, QRS spike in `--rubric`, draws once | — (parametric) |
| Footer | Printer's device / compositor's mark | — (drawn) |
| About | Leaf-venation margin study | any open botanical leaf plate (BHL) — or drawn |
| Dividers | Springing-line vault bases | — (geometry) |

---

## Paper grain (§4)

One fine, neutral, near-subliminal paper grain — inline SVG filter, static,
very low opacity. Consolidates the fresco build's two overlays
(`--grain-svg` + `--plaster-texture-svg`) and drops the ochre colour wash.
Generated, no source asset.

---

## Sourcing rules (§4) held to

- Explicit CC0 / PD-Mark preferred; ambiguous rights → dropped.
- Public domain by age ≠ public domain by digitisation — the licence column
  records the digitiser's statement per item and is re-checked at processing.
- Highest resolution available; these get downscaled and reprocessed.
- No *School of Athens*, no *Vitruvian Man* as reproduced images — structural
  grammar only. No wreaths, keys, marble, foil, columns as ornament.
