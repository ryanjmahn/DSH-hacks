# Artwork credits — DSH Hacks V2 (engraved folio redesign)

**Status: approved set — §12 step 3. Nothing here has been downloaded,
downscaled, or processed yet.** Each asset gets a final per-item licence
check (recorded inline below), is pulled at highest available resolution,
and is treated per §4 / §5C at the section's own checkpoint. Anything with
an ambiguous rights statement is dropped, not risked — there is more than
enough clearly-free material.

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
| **M4** | ***The School of Athens*** — **architecture only**: the coffered barrel vault, the receding arch openings, and the sky beyond, cropped from the upper zone above every figure | Raphael, fresco, Stanza della Segnatura | 1509–11 | Wikimedia Commons | `File:"The School of Athens" by Raffaello Sanzio da Urbino.jpg` — 3820×2964, "stitched together from vatican.va" | Public Domain (`Copyrighted: False`, `AttributionRequired: False`) | **Frontispiece** — the framing element (replaces the drawn portico). Bleached: high-contrast grayscale (`linear 1.5,−34`, `brightness 1.32`, `gamma 1.08`) so the coffering reads as structure, whites lifted toward `--paper`, all four edges feathered, no box, CSS presence **0.17**. Desktop + tighter mobile crop, AVIF/WebP/JPEG. Vanishing point behind the wordmark, arch opening behind the date. |

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

### Colour plates — the V1 Recap plate section (§5C)

The one place colour appears. Framed, captioned, full-opacity, hard-edged,
`PLATE I / II` in mono small caps. **Recommendation: two, not three** — keeps
the section under the §11 400 KB budget with margin, and a deliberate pair
reads better than a small gallery. Sourced for a blue near `--rubric`
(`#3636D3`) so the section reads as related to the rest of the site.

Both plates are from **Curtis's Botanical Magazine** — a deliberate pair: two
gentians, same publisher and engraving team, three years apart, both a deep
Prussian/ultramarine blue near `--rubric`. Genuine hand-coloured line
engravings with the off-register wash and paper foxing intact (§5C.3).
*Sourcing notes:* the Besler *Hortus Eystettensis* scan on Commons turned out
to be the uncoloured 1640 edition, and the "Bourgery anatomical" candidate
(`L0077000`) is a near-monochrome grid of skin-microscopy figures — neither
survived visual review. Curtis replaced both.

| Plate | Work | Artist / engraver | Date | Source | Identifier | Licence | Resolution used |
|---|---|---|---|---|---|---|---|
| **PLATE I** (`v1-plate-1`) | A gentian (*Gentiana*) — whole plant with root, star-form flowers | drawn Sydenham Edwards, engr. F. Sansom | 1800 | Wikimedia Commons / Biodiversity Heritage Library | *The Botanical Magazine* pl. 491, vol. 14 — `File:The Botanical Magazine, Plate 491 (Volume 14, 1800).png` | PD-old-100 / No Known Copyright Restrictions | 1892×3210 source → 1000w / 640w |
| **PLATE II** (`v1-plate-2`) | A gentian (*Gentiana*) — trumpet flowers, narrow leaves | drawn Sydenham Edwards, engr. F. Sansom, pub. T. Curtis | Feb 1803 | Wikimedia Commons / Biodiversity Heritage Library | *Curtis's Botanical Magazine* no. 723 — `File:Curtis's botanical magazine (No. 723) (8447532691).jpg` | PD-old-100 / No Known Copyright Restrictions | 1876×3200 source → 1000w / 640w |

**Treatment (§5C, minimal):** per-channel white balance sampled from a paper
patch, lifting the paper toward `--paper` and neutralising the yellowed-scan
cast; `gamma 1.03`, `saturation ×1.03`; **not** desaturated, duotoned, or
reduced in opacity. Off-register wash and foxing left as-is. Exported WebP +
progressive-JPEG fallback, art-directed at 1000w (desktop) / 640w (mobile).
Paper grain is the shared CSS `.grain-overlay`, not baked in — keeps the pair
of desktop WebPs at ~140 KB total, well under the §11 400 KB budget.

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
