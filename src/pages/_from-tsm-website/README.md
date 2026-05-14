# Quarantined imports from theschreckmethod.com

Files in this folder were moved here from the TSM-WEBSITE repo. They are
**NOT** wired into App.tsx or routing yet. They are parked here so the
content/state exists in the Agoge codebase when the time comes to wire
them up.

## Library.tsx · imported 2026-05-13

The intelligence-library e-book grid that lived at
`theschreckmethod.com/library`. Pulled out of the TSM marketing site per
Shane 2026-05-13 (TSM = ICA only; Agoge = everything else).

**Dependencies that came with the import (NOT copied):**

- `../components/ScrollReveal` — needs to exist on Agoge side before use
- `../components/EquilibriumBackdrop` — TSM-branded backdrop; will need
  an Agoge equivalent (bronze + crimson + Cinzel, not TSM aurum gold)
- CSS classes: `.glass-card`, `.btn-gold`, `.btn-ghost`, `.label-mono`,
  `.gradient-text`, `.hero-headline`, `.section-headline`, `.badge`,
  `.badge-gold`, `.grid-pattern`, `.orb-field`, `.orb`, `.section`,
  `.container` — all TSM design system; re-theme when wiring up
- CSS vars: `--bg-base` — same

**API source:**

- Reads ebook catalogue from `https://command.theschreckmethod.com/api/ebooks/list`
- That endpoint lives on schreck-command (Railway). When Agoge wires
  this in, decide whether to keep the cross-property API call or fork a
  copy of the catalogue into the Agoge backend.

**Brand work before going live:**

- Replace EquilibriumBackdrop with the Agoge equivalent
- Replace gold token references (`#C8A04A`, `#B8962E`, `rgba(184,150,46,...)`)
  with bronze + crimson
- Replace Outfit/DM Sans typography with Cinzel + body face per Agoge
  brand register
- Ebook cover art currently uses `/assets/brand/ebook-cover-blank.png`
  (an S-emblem TSM cover); generate an Agoge-themed blank cover

**To wire it up:**

1. Move `Library.tsx` out of this folder into `src/pages/`
2. Re-theme per brand notes above
3. Add `<Route path="/library" element={<Library />} />` to App.tsx
4. Add a nav entry
5. Delete this README + folder once nothing remains in it
