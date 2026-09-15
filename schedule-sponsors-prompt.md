# Prompt: Add Lombard Street (Schedule) + Painted Ladies (Sponsors) backgrounds

Two independent changes below. Do them separately — different sections,
different assets.

---

## 1. Schedule section — add Lombard Street background

### Context

The Schedule section ("What to expect" / "Schedule" heading, the 5-step
Registration → Workshops → Hacking Period → Submission Deadline →
Judging & Winners list) currently has no background artwork. Per the
section-by-section artwork plan, this section gets Lombard Street — the
winding switchback street is a natural visual match for a step-by-step
timeline.

### Task

1. Find the Schedule section component.
2. Add `lombard-street-watercolor.png` (provided separately) as a
   full-bleed decorative background, matching the same opacity range,
   fade/overlay treatment, and `aria-hidden` setup already used on other
   sections with a background plate (e.g. V1 Recap) — don't invent a new
   pattern.
3. The switchback road/flowerbeds are the visual anchor of this image and
   sit roughly center-left of frame — keep that area in view rather than
   cropping it out at any breakpoint.

### Check after implementing

- The five numbered schedule steps stay fully legible against the
  background.
- No layout shift from adding a background where there wasn't one.
- The switchback road stays visible (not cropped away) at mobile widths.

---

## 2. Sponsors section — add Painted Ladies background

### Context

The Sponsors section ("Who supports us" / "Sponsors" heading, sponsor
logo grid) currently has no background artwork. Per the plan, this
section gets the Painted Ladies (Postcard Row) — a row of distinct houses
standing together reads well as a metaphor for a group of sponsors.

### Task

1. Find the Sponsors section component.
2. Add `painted-ladies-watercolor-v2.png` (provided separately) as a
   full-bleed decorative background, same opacity/fade/overlay pattern
   and `aria-hidden` setup as the other background-plate sections.
3. The row of houses sits in the lower half of the frame with the downtown
   skyline above — keep the houses in view; the skyline can crop more
   freely if needed at narrow widths.

### Check after implementing

- The sponsor logo grid stays fully legible/high-contrast against the
  background — this section has many small logos, so err toward a lower
  opacity here if there's any legibility risk.
- No layout shift from adding a background where there wasn't one.
- Houses stay visible (not cropped away) at mobile widths.
