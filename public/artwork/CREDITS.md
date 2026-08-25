# Artwork credits — DSH Hacks V2 (Renaissance atlas redesign)

All works below are in the public domain by age. Institutional rights statements are
recorded per item — none assert a reuse restriction beyond attribution of the digitization
itself, and Wellcome Collection's Public Domain Mark explicitly permits reuse without
attribution (credited here anyway, for the record). Every plate was desaturated, lifted
toward `--plaster`, feathered with a radial alpha mask, and overlaid with the plaster
mottling texture per Part 1's processing pipeline — done live in CSS/SVG at render time,
not baked into the exported files, so the same source crop can be re-treated without
re-processing.

---

## Anatomical

| # | Title | Artist / after | Date | Source | Identifier | License | Resolution | Used in |
|---|---|---|---|---|---|---|---|---|
| A1 | *Tabula II, Liber II* — an écorché figure walking, seen in profile | After Andreas Vesalius, engraving | 1568 | Wellcome Collection | [V0007742ER](https://wellcomecollection.org/works/wcsthtds) | Public Domain Mark | 1093×1707 | Beat 2 (The Dedication) — `public/plates/beat2-*` |
| A2 | A human skeleton leaning on a classical tomb, with urn and garland | After Vesalius; engraving by Benard | 18th c. | Wellcome Collection | [V0007853EL](https://wellcomecollection.org/works/rw2y2mvt) | Public Domain Mark | 1180×1679 | About — `public/plates/about-*` |
| A3 | An écorché figure, standing, arms extended (Pl. IV) | Engraving by J. Tinney, after Vesalius | 1743 | Wellcome Collection | [V0008022ER](https://wellcomecollection.org/works/wcsthtds) | Public Domain Mark | 1090×1755 | Sourced, not currently placed (backup) |
| A4 | *Anatomie* — full myology figure, front view, in a landscape | Engraving by Benard | 18th c. | Wellcome Collection | V0007834ER | Public Domain Mark | 2097×3362 | Sourced in the previous redesign pass; currently unused after Beat 2/About were reassigned to A1/A2 |
| A5 | Anatomy, Myology, Plate XIV — skeleton/muscle figure, back view | Engraving, 1803 | 1803 | Wellcome Collection | V0008061EB | Public Domain Mark | 2320×3078 | Sourced in the previous redesign pass; currently unused |
| A6 | Nervous system, branching tree diagram (Tab. XVI) | Engraving after Blankaart | 1686 | Wellcome Collection | V0007781EC | Public Domain Mark | 1181×1953 | Beat 2 — secondary collage layer, upper right — `public/plates/hero-accent.*` |

## Architectural

| # | Title | Artist | Date | Source | Identifier | License | Resolution | Used in |
|---|---|---|---|---|---|---|---|---|
| B2 | *Interno della Basilica di S. Maria Maggiore* — coffered barrel-vault ceiling, receding colonnade, single-point perspective toward the altar | Unattributed engraver, from *Raccolta di 50 vedute antiche, e moderne della città di Roma* | early 19th c. | Internet Archive | [raccoltadi50vedu00pira](https://archive.org/details/raccoltadi50vedu00pira), page 20 | Not in copyright (public domain) | 2514×2302 | Sourced; not currently placed as a photo — its coffered-vault structure became the direct reference for the procedural `.coffer-texture` SVG pattern instead |
| B3 | *Rovine dell'Amfiteatro Flavio di Roma* — the Colosseum, ruined arcade elevation | Unattributed engraver, from the same *Raccolta* | early 19th c. | Internet Archive | [raccoltadi50vedu00pira](https://archive.org/details/raccoltadi50vedu00pira), page 50 | Not in copyright (public domain) | 2514×2302 | Register — `public/plates/register-*`. A literal gathering place (an amphitheatre) for the section asking people to join; its arches echo the Frontispiece's portico |

A first architectural candidate — a Piranesi *Carceri d'invenzione* plate (Getty Research
Institute scan via Internet Archive, `gri_33125010859573`, page 10, not in copyright) — was
considered and dropped before processing: Carceri plates are prisons (chains, a torture
wheel, an imaginary dungeon), which reads closer to gothic than the brief's "scholarly,
warm, monumental" register. B2/B3 replaced it.

---

## Notes on the final set

Six plates in active use (A1, A2, A6, B3, plus the Frontispiece's purely-procedural SVG
arch and every section's `.coffer-texture`), inside the brief's 6–8 budget. A3–A5 and B2
were sourced and evaluated but didn't end up placed once Beat 2/About/Register were
finalized — kept in this manifest rather than deleted, since they're already-verified,
ready-to-use candidates if a later section wants a plate.
