# DSH Hacks — Light Mode / Theme Toggle Revamp Prompt

Use this as a follow-up instruction prompt for an AI coding agent. It builds on the existing dark redesign (typography, layout, and component shapes are staying — this pass is about color only).

---

## Goal

Keep everything currently working (the serif/mono type pairing, layout, spacing, button shapes, textured arch background) exactly as-is. Add a **light theme** and a **toggle** so the site can switch between dark and light mode, defaulting to the user's system preference (`prefers-color-scheme`) with a manual override the user can click.

Do this by converting all existing hardcoded colors into CSS custom properties (design tokens) if they aren't already, so both themes read from the same variable names and nothing has to be duplicated per-component.

## Step 1: Extract color tokens

Define a token set like this (adjust names to match existing CSS structure):

```css
:root {
  --bg-primary: #0A0A0C;
  --bg-surface: #151518;
  --text-primary: #F5F4F0;
  --text-secondary: #9A9A9E;
  --accent-blue: #5B6EF5;
  --border: rgba(255, 255, 255, 0.08);
  --divider: rgba(255, 255, 255, 0.15);
}

[data-theme="light"] {
  --bg-primary: #FAFAF8;
  --bg-surface: #FFFFFF;
  --text-primary: #17171A;
  --text-secondary: #5C5C61;
  --accent-blue: #3D4FE0;
  --border: rgba(0, 0, 0, 0.08);
  --divider: rgba(0, 0, 0, 0.12);
}
```

Every component (nav, hero, cards, buttons, dividers, footer) should reference these variables instead of hardcoded hex values, so the toggle flips the whole site at once.

## Light mode palette details

- **Background:** off-white (`#FAFAF8`), not stark pure white — keeps the same "not harsh" philosophy as the dark theme's near-black
- **Surface (cards, sponsor tiles, workshop cards):** pure white (`#FFFFFF`) so cards lift slightly off the off-white page background, mirroring how dark-mode surfaces sit slightly lighter than the page background
- **Primary text:** near-black (`#17171A`), not pure black — same reasoning as the dark theme's off-white text
- **Secondary/muted text:** a mid-gray (`#5C5C61`) — needs to be darker than the dark-mode equivalent to hold AA contrast on a light background
- **Accent blue:** darken/saturate the blue slightly from the dark-mode version (`#5B6EF5` → `#3D4FE0` or similar) — the current blue is tuned for a dark backdrop and will look washed out and low-contrast on white; test button text (white-on-blue) still passes contrast
- **Borders/dividers:** flip from low-opacity white to low-opacity black (`rgba(0,0,0,0.08–0.12)`)
- **Italic accent text** (e.g. "AI × Healthcare", "Submissions close November 7"): keep using the accent blue in both themes, just the darkened light-mode version

## Step 2: Background texture

The dark hero uses a textured/arched background image. For light mode:
- Either generate or source a light-toned equivalent of the same texture (same arch/motif, inverted tonally so it reads as a subtle light-on-white pattern rather than dark-on-black), OR
- Reuse the same image but flip it to a very low-opacity dark line-art treatment on the light background (e.g. `opacity: 0.04–0.06`, similar to how it currently sits faint against the dark background) — test both and use whichever keeps the texture visible-but-subtle without muddying text contrast

Don't just invert the image's colors programmatically without checking — arches/textures often look wrong (flat, harsh) when naively inverted. A manual tonal pass is worth it if the image supports one.

## Step 3: Buttons and pills

- Primary CTA ("Register", "Register on Devpost") stays blue-filled with white/off-white text in both themes — just swap in the theme-appropriate blue token
- Confirm the pill button's white text still has strong contrast against the light-mode blue (darker blue variant should handle this)
- Any outline/secondary buttons: dark-mode uses light borders on dark surface; light-mode should use dark borders on light surface — same token swap

## Step 4: Toggle control

- Add a small toggle (sun/moon icon or switch) in the nav bar, likely near the Register button or in a corner that doesn't crowd the existing ABOUT / SCHEDULE / PRIZES / FAQ links
- On click, set `data-theme="light"` or `data-theme="dark"` on `<html>` (or `<body>`), and persist the choice in `localStorage` so it's remembered on return visits
- On first load (no stored preference), respect `prefers-color-scheme: dark` / `light` from the OS
- Transition colors with a short CSS transition (150–200ms) on `background-color`, `color`, and `border-color` so the switch doesn't feel jarring

## What NOT to change

- Typography (font families, sizes, weights, letter-spacing) — this is confirmed working and should carry over unchanged to light mode
- Layout, spacing, and component shapes (pill buttons, card corners, divider placement)
- Copy and content
- The dark theme's current values — light mode is additive, not a replacement

## QA checklist for the agent to self-verify

- [ ] Every section (Hero, About, V1 Recap, Schedule, Prizes, Sponsors, Workshops, Register, FAQ, Footer) renders correctly in both themes — check for any leftover hardcoded colors that didn't pick up the token swap
- [ ] Text contrast passes WCAG AA in both themes (body text and button text especially)
- [ ] Sponsor logos (many of which may have transparent backgrounds assuming a dark backdrop) still look correct on the light-mode white cards — flag any that need a light-mode-specific logo variant or a subtle background chip
- [ ] Toggle state persists across page reloads and respects system preference on first visit
- [ ] No flash of wrong theme on page load (apply the stored/system theme before first paint, not after)
