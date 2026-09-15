# DSH Hacks — Remove Theme Toggle, Consolidate to Single Dark Theme

Prompt for Claude Code. Earlier work added a light/dark mode toggle with a full light-theme token set (see the light-mode prompt from earlier in this project). That's being reverted: the site should go back to a single, permanent dark theme — no toggle, no light mode, no system-preference detection.

---

## What to remove

1. **The toggle control itself** — the sun/moon icon or switch in the nav bar. Remove the component and its click handler entirely.
2. **Light theme tokens** — delete the `[data-theme="light"]` (or equivalent) CSS variable overrides block. Keep only the dark values from the `:root` (or base) token set.
3. **Theme-switching logic** — remove:
   - The `localStorage` read/write that persisted the user's theme choice
   - The `prefers-color-scheme` media-query detection used to set the initial theme
   - Any `data-theme` attribute toggling on `<html>`/`<body>`
   - The "no flash of wrong theme on load" script, if one was added, since there's only one theme now
4. **Any conditional rendering** in components that branched on theme state (e.g. swapping icons, image variants, or copy based on light vs. dark) — collapse these back to a single unconditional path using the dark values.

## What to keep

- The dark theme's actual color values (near-black background, off-white text, blue accent, etc.) — these become the site's only palette, not a "dark mode" variant of anything
- All the watercolor/hero-image work, typography, layout, and components built since — none of that changes, it just no longer needs to account for a second theme
- If any CSS variables are still useful as named tokens (e.g. `--bg-primary`, `--text-primary`) for maintainability, keep the variable structure but hardcode it to the dark values only — no need to inline every color, just remove the alternate theme's values

## Cleanup check

- Search the codebase for any remaining references to `theme`, `data-theme`, `light`, `dark-mode`, or similar toggle-related naming to make sure nothing is orphaned
- Confirm the site renders identically to its current dark appearance with no toggle visible anywhere, on both desktop and mobile

---

**Deliverable:** the light/dark toggle, its UI control, its persistence logic, and the light theme's token set are fully removed. The site permanently renders the current dark black/blue/white theme with no user-facing mode switch.
