# SF Watercolor Nocturne — Landmark Prompts & Asset Paths

Companion to `src/components/ui/dsh-hacks-sf-watercolor-dark-theme-prompt.md`. The code side is already wired up (`WatercolorPlate` in `design-system.tsx`, one instance per section below) — it just needs these 8 files to exist. Until a file exists at its path, that section's `WatercolorPlate` silently hides itself (no broken-image icon) and falls back to the site's existing background art.

Generate all 8 in one sitting/session with the same tool so wash density, brush texture, and the blue-accent treatment stay consistent across the set — mismatched palettes will be more noticeable on a dark theme than a light one.

**Shared style anchor** (repeat verbatim in every prompt, landmark subject swapped in):
> watercolor illustration, San Francisco [landmark], deep blue and charcoal wash tones, moonlit/nocturne palette, electric blue accent highlights, dissolving into black background, loose brushwork, painterly, no text, no logos

**Format for every image:** wide/landscape (roughly 16:9 or wider — these sit as full-bleed section backgrounds), the landmark loosely composed off-center (masking crops toward one side per section, noted below), generous negative space at the edges since the code fades each image to transparent at its border.

---

### 1. Hero — `/plates/watercolor/hero-golden-gate.jpg`
Flagship image, most detail of the set.
> watercolor illustration, Golden Gate Bridge with hillside skyline behind it, deep blue and charcoal wash tones, moonlit/nocturne palette, electric blue accent highlights on the bridge cables and a few distant window lights, dissolving into black background, loose brushwork, painterly, no text, no logos

### 2. About — `/plates/watercolor/about-painted-ladies.jpg`
> watercolor illustration, Painted Ladies Victorian row houses silhouette at Alamo Square, deep blue and charcoal wash tones, moonlit/nocturne palette, a few windows picked out in electric blue accent light, dissolving into black background, loose brushwork, painterly, no text, no logos

### 3. V1 Recap — `/plates/watercolor/v1-coit-tower.jpg`
> watercolor illustration, Coit Tower on Telegraph Hill viewed from below, deep blue and charcoal wash tones, moonlit/nocturne palette, electric blue accent highlight on the tower's beacon light, dissolving into black background, loose brushwork, painterly, no text, no logos

### 4. Schedule — `/plates/watercolor/schedule-lombard-street.jpg`
> watercolor illustration, Lombard Street's switchback curves from above, deep blue and charcoal wash tones, moonlit/nocturne palette, electric blue accent highlights on streetlights tracing the switchbacks, dissolving into black background, loose brushwork, painterly, no text, no logos

### 5. Prizes — `/plates/watercolor/prizes-ferry-building.jpg`
> watercolor illustration, San Francisco Ferry Building clock tower and the Embarcadero waterfront, deep blue and charcoal wash tones, moonlit/nocturne palette, electric blue accent highlight on the clock face and water reflections, dissolving into black background, loose brushwork, painterly, no text, no logos

### 6. Sponsors — `/plates/watercolor/sponsors-downtown-skyline.jpg`
> watercolor illustration, San Francisco Financial District downtown skyline at night, deep blue and charcoal wash tones, moonlit/nocturne palette, electric blue accent highlights on scattered lit windows, dissolving into black background, loose brushwork, painterly, no text, no logos

### 7. Workshops — `/plates/watercolor/workshops-twin-peaks.jpg`
> watercolor illustration, view from Twin Peaks overlook across the city at night, deep blue and charcoal wash tones, moonlit/nocturne palette, electric blue accent highlights on the distant city lights below, dissolving into black background, loose brushwork, painterly, no text, no logos

### 8. FAQ — `/plates/watercolor/faq-neighborhood-bay-view.jpg`
Quiet, low-key close — the page winding down before the footer.
> watercolor illustration, a quiet San Francisco neighborhood street with a glimpse of the bay beyond, deep blue and charcoal wash tones, moonlit/nocturne palette, one or two windows picked out in electric blue accent light, dissolving into black background, loose brushwork, painterly, no text, no logos

---

## Dropping in a finished image

1. Save the file at the exact path listed above, under `public/` (e.g. `public/plates/watercolor/hero-golden-gate.jpg`).
2. Reload the page — no code changes needed, `WatercolorPlate` picks it up automatically.
3. If an image reads too strong or too faint behind the text, its `presence` value (opacity, 0–1) is set per section in the section's own file — search for `WatercolorPlate` in `src/components/sections/*.tsx`.
4. Once real art is in for a section, consider whether that section's existing procedural line-art background (fog, hills, pier, horizon — from the earlier cohesive-SF-scene pass) still earns its place alongside a painted backdrop, or reads as redundant and should be dialed back.
