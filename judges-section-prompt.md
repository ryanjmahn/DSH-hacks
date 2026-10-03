# Prompt: Add a "Judges From" Section to DSH Hacks (dshhacks.org)

## Context

DSH Hacks (dshhacks.org) is a free, global, online student hackathon (AI × Healthcare, Nov 7 2026), hosted by DeltaForge Hacks, NXT Horizon, and STEMise. The site is currently a single-page-scroll site with sections in this order:

Frontispiece → About → V1 Recap → Schedule → Prizes → Sponsors → Workshops → Register → FAQ → Footer

The site is on a single permanent dark theme (black/blue/white palette), serif display headline font paired with a tracked-out mono/grotesk for labels/nav. Prizes, Sponsors, Workshops, Register, FAQ, and Footer all use a solid blue background with white text (rather than the watercolor SF landmark imagery used in earlier sections like About and V1 Recap).

The About section already surfaces the stat "80+ Professional judges," and the V1 Recap section separately mentions V1 was judged by engineers from Microsoft, Apple, Amazon, Meta, and PayPal — but there's currently no dedicated visual section showcasing judge affiliations.

## Reference

Attached/described: a reference screenshot from a similar hackathon site showing a "JUDGES FROM" section — large serif purple headline "JUDGES FROM," a subhead ("Interested in judging our event? Email [address]"), a horizontal rule, then a row of monochrome (white/grayscale) sponsor-style logos (Amazon, Google, Microsoft, Stanford, Visa, Y Combinator, etc.) on a solid black background.

## Task

Add a new "Judges" section to the DSH Hacks site, styled consistently with the existing solid-blue sections (Prizes/Sponsors/Workshops/Register/FAQ), not the black/purple palette from the reference screenshot — treat the screenshot only as a structural/layout reference, not a color reference.

### Placement

Insert the new Judges section immediately **after the Sponsors section** and **before Workshops**, so the flow becomes:

... Prizes → Sponsors → **Judges** → Workshops → Register ...

Rationale: Sponsors already establishes the "logo grid on a colored background" visual pattern, so Judges reads as a natural companion section reinforcing credibility right after it, before moving on to Workshops content.

### Content

- Small eyebrow/label text: "Who evaluates your work" (match the style of existing eyebrow labels like "Who we are," "Who supports us," "What you can win")
- Section heading: "Judges" (match H2 styling used elsewhere — e.g. "## Sponsors", "## Prizes")
- Subhead line: "Interested in judging DSH Hacks? Email [hackathon manager email / contact — confirm actual address, do not invent one]"
- A horizontal divider rule (matching the site's existing thin-rule dividers), consistent with the reference screenshot's structural layout
- A row/grid of judge-affiliation logos — reuse the same logo-grid component/pattern already used in the Sponsors section (same sizing, spacing, grayscale/white treatment, hover states, responsive wrapping)
- Logos to feature: pull from the "judged by engineers from Microsoft, Apple, Amazon, Meta, and PayPal" list already referenced in the V1 Recap copy — confirm final V2 judge company list before hardcoding logos (do not assume V1's roster carries over to V2)

### Styling requirements

- Solid blue background, white text/logos — matching Prizes/Sponsors/Workshops/Register/FAQ sections (NOT the black background + purple headline shown in the reference screenshot)
- Serif display font for the "Judges" heading, consistent with other section headings
- Tracked-out mono/grotesk for the eyebrow label and subhead, consistent with nav/label styling elsewhere on the site
- Logo treatment: monochrome/white version of each logo (same treatment as Sponsors section logos), evenly spaced, wrapping responsively on smaller viewports
- Reuse existing CSS classes/components from the Sponsors section wherever possible rather than introducing new ones, to keep styling consistent and maintainable

### Navigation

- Decide whether "Judges" should be added to the top nav (currently: About / Schedule / Prizes / FAQ) and footer link lists (currently "Hackathon" column has Register/Rules/Flyer/Prizes/Sponsors; "Community" column has Workshops/Discord/YouTube/Gallery/FAQ). If added, put it in the "Hackathon" footer column near Sponsors, and add an anchor link `#judges` to the nav only if nav space allows without crowding — otherwise a footer-only link is acceptable.

### Technical notes

- Match existing section markup patterns (section id, anchor scroll target, container/wrapper classes) used by the Sponsors section — inspect that section's implementation first and mirror its structure exactly for the new Judges section
- Ensure the section is fully responsive (mobile logo grid should wrap/stack same as Sponsors does)
- Use real logo assets (SVG or PNG, monochrome/white) for each confirmed judge-affiliation company — do not use placeholder or stock logos
- Confirm actual contact email before publishing (do not hardcode a guessed address)

## Deliverable

Updated site code with the new Judges section inserted between Sponsors and Workshops, styled per the above, plus any nav/footer link updates as decided.
