# Portfolio typography and layout QA

final result: passed

Scope: arrange the four Experience entries as a 2 by 2 grid, replace API Integration with programming training, improve typography across the site, and correct uneven card sizing, text wrapping, and section spacing. Preserve the existing visual identity, routes, assets, and hero portrait treatment.

## Source and rendered evidence

Source visual truth is the existing working site captured during this task, together with the user's requested changes. This is a scoped refinement of the existing product, rather than a new visual direction.

- Before screenshots: `.next/dev/typography-qa/before/`.
- Revised screenshots: `.next/dev/typography-qa/final/`.
- Settled card, dark theme, complete grid, blog, and project captures: `.next/dev/typography-qa/flow/`.
- Viewport measurements: `.next/dev/typography-qa/final/results.json`.
- Font loading, grid geometry, route and interaction checks: `.next/dev/typography-qa/flow/results.json`.

Baseline and final section views use matching 1440 x 1000 desktop and 390 x 844 mobile CSS viewports, with device scale factor 1 and no density resampling. Additional width checks cover 1280, 768, and 320px. Flow captures use 1000px viewport height; the full Experience image is a 1280px-wide section crop from a 1440px viewport, not a viewport screenshot.

The before and final images were opened and inspected. Full-view comparison covered composition, content order, spacing, and responsive structure. Focused inspection covered card headings and metadata, the training card, mobile navigation, and blog/project text. The complete Experience crop independently confirms all four entries in two rows.

## Audit findings and fixes

| Severity | Evidence from the existing site | Result |
| --- | --- | --- |
| P2 | Experience's first card spans both columns, leaving four entries unevenly distributed. | Removed the featured span. At 1440px all four cards measure 628 x 575.5px, arranged as two columns and two rows. The grid also has two columns at 768px and one column on mobile. |
| P2 | Services card bottoms vary with description length. | Stretched the grid wrappers and cards; all six cards measure 297.5px high at the checked desktop width. |
| P2 | Section titles are oversized relative to content, repeated H1 elements, and supporting line heights vary. | Added Sora display headings with a shared responsive size and spacing; section titles are H2s, and Experience role titles are H3s. Shared body text has explicit readable line height. |
| P2 | Short sections, particularly Education, retain a full viewport of height and excessive blank space. | Content sections now use natural height and consistent responsive vertical padding. |
| P2 | Narrow card headings compete with employment badges and metadata separators wrap awkwardly. | Experience headers stack at narrow widths; removed the orphanable metadata dot, protected icon widths, and retained wrapping. |
| P2 | Initial horizontal entrance transforms can expose a page-level horizontal scrollbar. | Used horizontal overflow clipping on the body while keeping normal vertical scrolling and sticky navigation. Final section checks found no overflowing content. |
| P3 | About card labels, contact text, and skill descriptions have inconsistent wrapping/padding. | Balanced section widths, reduced narrow-card padding, allowed contact strings to wrap, and removed the fixed-height skill-description truncation. |

## Required fidelity surfaces

- **Fonts and typography:** Manrope is the body/interface family and Sora is used for headings. Noto Sans Myanmar is available as a glyph fallback and for `lang="my"` content; an actual Myanmar font request returned a loaded face. Geist Mono remains for code and technical labels. Browser computed styles confirm Manrope on body/article content and Sora on the hero and card headings. The hero display size adapts at narrow widths.
- **Spacing and layout rhythm:** Section grids share an 80rem maximum width, consistent page gutters, responsive section padding, and common heading spacing. Experience and Services align with equal card heights on multi-column layouts. Mobile uses natural-height cards and a single column.
- **Colors and tokens:** Existing blue, slate, violet, and semantic accent colors are retained. Service copy contrast and dark-mode skill-filter surfaces were improved. Light and dark captures were visually inspected.
- **Image and asset fidelity:** Existing logo, circular portrait, project imagery, and blog covers are unchanged. Programming Training uses the existing Lucide GraduationCap icon rather than a generated asset.
- **Copy and content:** API Integration is replaced by Programming Training, with practical web/mobile/backend instruction and mentoring copy. The Services introduction now covers development and training. Existing experience claims, project details, and destinations are preserved.

## Comparison history

1. Captured and inspected the original homepage sections at desktop and mobile widths before editing. Identified the grid, uneven heights, spacing, and typography issues above.
2. Applied the layout and typography pass. Browser computed styles exposed that a Tailwind inline theme variable was not available to the global heading rule; changed that rule to reference the loaded heading font directly.
3. Early development captures included an intermediate Fast Refresh hydration mismatch while multiple component files were changing. A fresh navigation with cache disabled after edits settled recorded zero uncaught exceptions. No application workaround was added for that transient development state.
4. Recaptured all sections at 1440, 1280, 768, 390, and 320px. Found no content overflow. Then captured settled cards after their animations completed, and verified the complete 2 by 2 grid, dark theme, mobile menu, blog list, article, and project detail.
5. Final visual inspection found no remaining actionable P0/P1/P2 issues within this change.

## Verification

- TypeScript check passed.
- ESLint for changed source files passed with no errors; existing unused-symbol warnings remain in SkillSection and constants.
- Production webpack build passed and generated all 28 static pages. As before, the unconfigured database uses the application's existing curated-blog fallback.
- Experience count, row/column positions, equal desktop/tablet heights, and mobile stacking passed browser assertions.
- Six services remain; Programming Training is present, API Integration is absent, and card heights match.
- Dark theme selection, mobile menu width/section navigation, and Skills filtering/reset passed.
- Blog list, article, and project detail render with the new global fonts; article and project mobile scroll widths fit the viewport.
- Final homepage and cross-route browser runs recorded zero uncaught exceptions.

## Limits and handoff

- This is visual, DOM, and interaction verification; it is not a full assistive-technology or WCAG audit.
- Contact email submission and unrelated backend integrations were not exercised.
- Screenshot evidence is under ignored `.next/dev/typography-qa/` and may be removed by future Next.js maintenance.
- The local development preview remains available at `http://localhost:3000/`.

Implementation checklist: Experience grid, training service, global font setup, spacing/wrapping fixes, responsive inspection, route checks, and production build are complete.
