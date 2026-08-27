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
| **M3** | *Uranometria* Tab. 35 — **Orion**, the figure with lion-skin and club (a whole engraved body, not just a dot-field) | Johann Bayer; engr. Alexander Mair | 1603 | Wikimedia Commons | `Orion Picha.jpg`, else `Eridanus Uranometria.jpg` (4612×3459) as fallback | PD-Mark 1.0 + PD-old-100 | **Footer** (`--ink` ground) — negative impression: white line on black, feathered, 25–35% | §4 monochrome negative + invert |

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

| Plate | Candidate | Why | Source | Licence | Blue |
|---|---|---|---|---|---|
| **C1** *(anatomical)* | A hand-coloured plate from **Bourgery & Jacob, *Traité complet de l'anatomie de l'homme*** — venous or nervous-system plate | hand-colour + anatomy + blue + the healthcare through-line, all in one | Wikimedia Commons, per-plate, digitised by Wellcome — e.g. `File:Plate 88 Ter. Anatomie Microscopique De La Peau. Wellcome L0077000.jpg`, and the `Wellcome L0077xxx` / `L0010xxx` Bourgery plate set; full volumes also at Internet Archive `BIUSante_02083x01`–`x08` | Wellcome PDM / CC BY 4.0 per plate (re-verify) | venous plates: veins washed in a strong blue over the litho line; off-register wash present |
| **C2** *(botanical)* | **Besler, *Hortus Eystettensis*** (1613) — a blue iris or larkspur (*Iris*, *Consolida/Delphinium*) plate | true hand-coloured engraving, unmistakable off-register fingerprint, folio-era (1613 sits inside the site's imagery window); a clean tonal contrast with the anatomical plate | Wikimedia Commons `Category:Hortus Eystettensis` — high-res institutional scans | PD-old-100 (re-verify per plate) | ultramarine / indigo flower is the subject |

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
