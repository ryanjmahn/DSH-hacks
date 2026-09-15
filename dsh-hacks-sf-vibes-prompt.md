# DSH Hacks — SF-Vibe Design Elements Prompt

Follow-up pass on top of the existing dark/light theme system and typography (unchanged). This adds atmospheric, SF-tech-scene design elements — the kind of details that make f.inc's site feel like a specific place rather than a generic dark startup template. These are accents layered on top of what exists, not a restructure.

Note: DSH Hacks is an online/global hackathon, not physically SF-based — treat these as a stylistic homage to the SF startup-campus aesthetic (same reference point as f.inc), not literal claims about location. Keep any location-specific copy generic/omit it if it would read as misleading.

---

## 1. Fog / atmosphere as a design motif

SF's defining visual signature is fog — soft, directional, never flat.
- Add a subtle fog gradient (soft radial or diagonal blur, low opacity, blue-gray tinted) behind hero text or bleeding in from section edges — similar in spirit to the current arch texture but softer and more atmospheric
- On scroll, a very slow parallax drift on background texture layers (2–4px of movement, nothing dramatic) evokes fog rolling past rather than a static image
- Section transitions could fade through a soft fog-gray gradient instead of a hard cut, especially between the dark hero and lighter content sections

## 2. Grain and film texture

Keep leaning into the grainy, analog-photo treatment already present in the arch background:
- Apply a consistent subtle film-grain overlay (low opacity noise texture) across all photographic elements site-wide, not just the hero — this is what makes f.inc's photos feel "shot on location" rather than stock
- If adding any new photography (workshop stills, community shots), grade them in the same desaturated, slightly cool-toned treatment for consistency

## 3. Architectural line-art accents

Fort Mason (f.inc's actual campus) and SF more broadly have a strong industrial-pier/warehouse visual language — exposed trusses, arched openings, ship rigging. Options to echo this without copying:
- Thin single-line architectural sketches (like a blueprint line drawing) of an arch, truss, or pier structure as a faint background element in section dividers or the footer
- A subtle cable/suspension-line pattern (evoking bridge cables) as a decorative divider between major sections, replacing or supplementing the current plain horizontal rule
- Consider a small diamond/marker glyph (you already have one between "DSH Hacks V2" and "AI × Healthcare") repeated consistently as a section-break motif — a "we mark our territory" detail

## 4. Coordinate / location-tag micro-typography

A recurring device on premium SF tech sites: small-caps or monospace location/coordinate tags used as decorative metadata, e.g. in a footer or section corner:
- `ONLINE // GLOBAL` (you already have this in the hero stats — consider echoing the same tracked-out mono style elsewhere, like a small tag in the nav or footer)
- If you want a literal SF nod without misrepresenting the event's location, something like a small footer credit referencing the aesthetic inspiration is more honest than coordinates implying a physical address

## 5. Color accent option: warm secondary tone

Right now the palette is black/blue/white. SF's visual identity also carries warm tones — Golden Gate International Orange, sunset-over-the-bay ambers, streetlamp glow. Consider a **very sparingly used** warm accent (a muted burnt-orange or amber, e.g. `#C4623A`) reserved for:
- A single highlight moment (e.g. the countdown timer digits, or a "hot" prize category tag)
- Never as a primary color — this stays a rare accent against the black/blue/white system, used maybe once or twice per page max, so it reads as an intentional flourish rather than a second theme

## 6. Texture on surfaces, not just backgrounds

Cards (workshop tiles, prize tiers, sponsor grid) could pick up a very faint paper/concrete grain texture instead of being flat solid color — gives the "physical space" feeling f.inc's site has, where everything feels like it's sitting in a real room rather than floating in a UI.

## 7. Motion: understated, not gimmicky

- Fog-drift background movement (per #1) on load or slow scroll
- Soft fade-up on section content as it scrolls into view (100–150ms, subtle — not a bouncy animation library effect)
- Hover states on cards: a faint glow/lift rather than a hard shadow, consistent with the moody/atmospheric direction

## What to avoid

- Literal SF landmark iconography (Golden Gate Bridge silhouette, cable car icons, "SF" text badges) — reads as tourist-brochure kitsch rather than the understated aesthetic you're going for. f.inc never shows the Golden Gate Bridge; it shows grainy photos of people building things in a room. Mood over landmarks.
- Overusing the new warm accent color — if it shows up more than once or twice per page, it stops being an accent and starts fighting the black/blue/white identity
- Heavy, busy motion — everything here should feel slow and atmospheric (fog), not snappy or playful

---

**Deliverable:** layered visual/atmospheric details (fog gradients, grain, line-art dividers, subtle motion) applied on top of the existing dark/light theme tokens and typography — no structural or copy changes.
