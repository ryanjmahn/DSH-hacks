# Blueprint redesign: notes

Working notes for the V2 "Blueprint" reskin. The brief is in `DSH_REDESIGN_BRIEF.md`.

## Audit

- Next.js 15 (App Router, static export), Tailwind v4 import plus hand-written CSS in `src/app/globals.css`. Fonts load through `next/font` in `src/app/layout.tsx`.
- Sections: `src/components/sections/*`. Data stays where it was: projects in `plates/projects.ts`, judges in `sections/judges.ts`, sponsors, talks, FAQ and ledger inline in their sections.
- Features kept: countdown, project wall (filters, search, Wall/List, dither on hover, lightbox), winners marquee, judges band, workshops, ledger, FAQ, terminal footer, Konami, heartbeat trace.

## Fonts

- arlanrakh.com uses **Departure Mono** (it's in `@font-face` in their CSS). It's free under the SIL OFL. The file in `src/app/fonts/` comes from the official release (github.com/rektdeckard/departure-mono v1.500), not from their site.
- Departure Mono is a pixel font drawn on an 11px grid. It's used for every label, number, button and nav item, at 11/22/44px.
- Body text stays **Geist Mono** at 14px. Departure is hard to read at paragraph length.
- Instrument Serif for display, unchanged. Doto was dropped.

## Decisions and deviations

- **Removed the dithered skyline field** (`world/Field.tsx`, `world/shapes.ts`): it was the old illustration treatment and the cobalt flood. Prizes and Register are now solid cyanotype sheets instead. The heartbeat trace stays.
- **Judges stay as the drifting pill band** (recolored, square, between hairlines) instead of the brief's bill-of-materials table. The band is recent work, and it already covers the "ticker" idea. "Judges from" is still the logo grid.
- **Sponsor logos stay monochrome on hover**, not full color, so a dark logo can't vanish on the dark ground.
- **Fig. 1 dimension reads "SIGNAL → CARE", not "4 WEEKS".** V2's hacking period length isn't stated anywhere on the site, and the line measures the pipeline it sits over.
- **Fig. 2 lit dots are a fixed pseudo-random scatter**, captioned "(illustrative)". The repo has no per-country data.
- Title-block revision is **REV C · 2026**: the latest ledger entry already issued. D (submissions close) is still in the future.
- Ledger isn't numbered as a sheet. The sheets are 00 cover, 01–06, and 07 register.
- The ghost-outline duplicate headings were removed, not just hidden.
- Copy additions are labels only: "Drawing index", "T-minus to submission close · Nov 07 23:45 PST", "Time →", "General notes", C1–C4, WS-01…, Q.01…, Pl. 001…, and figure captions. *next.* on the final CTA is now italic; the words didn't change.
- Not done: the `/_kit` route, the cursor crosshair (optional), parallax, the schedule "now" cursor (optional), the section-cut `A — A` markers, and a Lighthouse run.

## Content flags (not changed)

- Projects say "283 submissions", but `projects.ts` has 281 entries, so the filter shows "All 281".
- Ledger entry C has the date "2026" only.

## Assets

None deleted. `public/plates/*` (old watercolor/background images) and `public/artwork/traced` are no longer referenced by the page, but they're still in the repo.
