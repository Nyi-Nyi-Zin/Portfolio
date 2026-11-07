# Blog listing scroll-reveal follow-up — 2026-10-20

final result: passed

- Removed the featured article section and its unused styles. All 15 posts, including the latest post, now appear in the same article grid.
- Latest refinement follows the homepage Project cards: cards begin transparent and 50px below their final position, fade/slide into place over 0.5 seconds, and use the same -60px viewport margin. A 0.12-second stagger repeats in groups of three so later posts do not accumulate long delays. Revealed cards remain visible. Reduced-motion preferences disable movement, duration, and delay.
- Removed the former featured-section spacing so the article archive follows the introduction naturally.
- Focused browser verification against the updated production preview passed at 1440, 768, 390, and 320px: lower cards stay hidden before scrolling, reveal on entry, remain revealed when scrolling away, and category filtering still reveals matching cards. No horizontal overflow or uncaught JavaScript exceptions.
- Evidence: `.next/dev/journal-scroll-qa/results.json`, `desktop-initial.png`, `desktop-scrolled.png`, `mobile-initial.png`, and `final-desktop.png`. Screenshots were opened and inspected.
- TypeScript, focused ESLint, production webpack build, and whitespace checks passed. The existing development preview had stale client assets; final browser verification used the rebuilt production preview on port 3002.

---

# Blog journal and article redesign QA — 2026-10-20

final result: passed

Scope: improve `/blogs` and `/blogs/[id]` within the existing Portfolio design system. The existing code and archived screenshots are the design references; this is an intentional redesign, not a pixel-for-pixel reproduction.

## Visual evidence

- Historical source screenshots: `.next/dev/typography-qa/flow/blogs-desktop.png`, `blogs-mobile.png`, and `article-mobile.png`. These predate the current brand refinements and are not claimed as exact pre-edit captures.
- Final implementation screenshots and structured browser results: `.next/dev/journal-qa/` and `results.json`.
- Combined before/after comparisons: `list-comparison.png`, `mobile-list-comparison.png`, `mobile-detail-comparison.png`.
- Focused title/metadata comparison: `typography-comparison.png`. Article reading, active contents, and sharing states: `detail-reading.png`, `detail-dark.png`.
- English light-mode comparisons use matching 1440 x 1000 desktop and 390 x 1000 mobile CSS viewports, device scale factor 1. Source and implementation images have matching pixel dimensions; comparisons are placed side by side without resampling. The focused comparison uses equal-size crops from each mobile image.
- Additional responsive checks: 1024, 768, and 320px. Myanmar and dark-mode captures cover both routes at 390px.

## Findings and resolved issues

- [P2, historical baseline] The listing lacks an introduction and article hierarchy; heavy card borders and horizontally scrolling categories compete with article content. Added a journal introduction, featured latest article, lighter article grid, wrapping category buttons, and visible search next to the archive.
- [P2, historical baseline] Centered article copy, inconsistent metadata, and no contents navigation make longer reading harder. Added a left-aligned title/deck, author byline, readable article column, sticky contents on desktop, inline contents on mobile, anchored section navigation, and end-of-article controls.
- [P2, first implementation pass] Article metadata was too small and the scroll indicator produced a positioning warning. Increased card metadata to 12px and gave the journal a positioned container. Revised screenshots show readable dates/read times and stable article navigation.
- [P1, local configuration] Repeated article requests could stall after failed database queries when DATABASE_URL was absent. Both blog routes now use the existing curated fallback directly when configuration is absent. Twenty-four consecutive production article requests returned complete successful responses after the guard.
- No actionable P0/P1/P2 visual findings remain in the inspected routes and states.

## Required design surfaces

- Typography: retained Manrope body/interface text, Sora headings, and Noto Sans Myanmar content fallback. Verified browser font families, Myanmar font availability, single page H1, heading hierarchy, wrapping, and article line height.
- Spacing: consistent 1216px content container, intentional hero/archive separation, responsive grid tracks, image proportions, readable article measure, and mobile gutters. No horizontal document overflow at any tested width.
- Colors: retained the site's semantic blue/slate tokens, with theme-aware cards, borders, category states, and contents highlighting. Light and dark screenshots were opened and inspected.
- Assets: reused the existing logo, portrait, and blog covers, with responsive image sizing. No new raster assets or substitute illustrations were needed.
- Copy: added coherent journal, search, empty-state, author, and footer copy in English/Myanmar. Existing article titles, descriptions, and HTML content remain available in both languages.

## Interaction and implementation checks

- Final complete browser run against the built app at `http://127.0.0.1:3002`: category filtering, keyboard-entered keyword search, empty state, reset, article navigation, contents anchors below the sticky header, clipboard success feedback, language selection/query persistence, dark mode, and reduced-motion behavior passed.
- Final browser run recorded zero uncaught JavaScript exceptions. The existing Vercel Analytics script returns a local-only 404 outside Vercel; no article assets or core navigation requests failed.
- TypeScript and focused ESLint checks passed. Production webpack build passed and generated 28 static pages. Existing baseline-browser-mapping freshness notice remains informational.
- React review covered hook ordering/cleanup, stable keys, typed props, semantic button/link use, accessible labels/status feedback, image sizing, and scoped styles. Existing unrelated workspace edits were preserved.

## Iteration and limits

The first visual pass increased metadata size and corrected the progress-container position, then recaptured both routes. The final pass used matching source/implementation comparison boards and inspected desktop/mobile, dark, and Myanmar states. QA script issues involving DOM serialization, synthetic input, clipboard focus, stale development assets, and scrollbar-width assertions were corrected in the QA tooling; the completed production run is the acceptance evidence.

Live database content was not verified because DATABASE_URL is not configured. The public curated-content fallback was verified. No deployment was performed. Local production preview remains running on port 3002.

---

# Earlier Portfolio typography and layout QA

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

## Header brand refinement — 2026-10-20, revised to supplied badge reference

final result: passed

Scope: match the user's subsequent ByarPar badge reference: a pale blue rounded surface, blue serif name, uppercase Portfolio subtitle, and blue underline. Keep the original logo unchanged. A shared `components/common/header/Brand.tsx` serves the homepage, mobile menu, and journal header.

### Visual evidence and comparison

- Source visual: the user-attached ByarPar badge reference in the latest request. The earlier implementation is captured in `.next/dev/brand-qa/before/`.
- Revised implementation: `.next/dev/brand-qa/after/`.
- Direct comparison: latest attached reference and `after/brand-light.png`, a 284 x 108px crop of a 1440 x 900 CSS viewport at device scale factor 1. The reference uses a different logo and name, which are intentionally replaced by the user's existing logo and NyiNyiZin. Focused inspection confirms the rounded blue surface, serif name, uppercase label, and underline follow the reference. The badge is sized for the existing navigation rather than enlarging the entire header to match the reference crop.
- Full header comparison: matching before/after `header-1440.png` and `header-390.png` captures, with additional revised captures at 1280, 768, and 320px. Header captures are 112px tall at device scale factor 1.
- State evidence: `brand-dark.png`, `brand-focus.png`, `menu-dark.png`, `journal-320.png`, and `journal-1440.png` in the revised directory. The focused crops, desktop header, narrow homepage/journal headers, and dark mobile menu were opened and inspected.
- Browser measurements and uncaught exceptions: `.next/dev/brand-qa/after/results.json`.

### Findings and results

- **Typography:** Georgia supplies the bold blue serif name, with Times New Roman and the system serif family as fallbacks. The name is 20px on mobile and 28px from 640px. Manrope supplies the uppercase Portfolio label with increased tracking. The displayed name is consistently `NyiNyiZin`, following the compact wordmark in the reference.
- **Spacing:** A single text stack has an underline beneath the Portfolio label. Logo/text gaps are 8px on mobile and 12px from 640px. The logo is 36px on mobile and 52px on larger screens. The badge measures approximately 157 x 54px on mobile and 223 x 73px on larger screens and fits all five checked header widths without overlap.
- **Color and states:** Per the latest request, the background and underline are transparent at rest. Hover reveals a pale blue surface and blue underline in light mode, or a navy surface and lighter blue underline in dark mode. The blue name and slate subtitle remain visible. Keyboard focus shows a 2px outline with a 4px offset. The existing badge screenshots predate this hover-only adjustment.
- **Asset fidelity:** `/logo.png` is reused without cropping or alteration, with an appropriate responsive image size. No replacement artwork or icons were introduced.
- **Copy and accessibility:** The home link retains the explicit accessible label Nyi Nyi Zin portfolio - home. Its adjacent name supplies visible identity, so the logo uses empty alternative text to avoid redundant speech. The same name and Portfolio label remain visible on mobile, including the journal.

### Verification and limits

- TypeScript passed with no emitted files.
- Scoped ESLint for the revised Brand component passed with zero errors and zero source warnings. The earlier header-wide check found three existing unused-import warnings in `BlogNavBar.tsx` (TagTabs, Card, and useEffect).
- Browser checks passed at 1440, 1280, 768, 390, and 320px. No header overflow, logo loading failures, or navigation/brand overlap was found.
- Keyboard focus visibility, dark mobile menu fit, Escape dismissal, and journal header fit passed. Browser runs recorded zero uncaught exceptions.
- Latest hover adjustment: browser computed styles confirm transparent resting backgrounds/underlines and colored hovered backgrounds/underlines in both themes. Badge width and height remain unchanged between states. Scoped Brand ESLint passed.
- Underline motion refinement: a 300ms ease-out scale animation reveals the line from its left edge on hover. The reserved border space preserves layout. Reduced-motion preferences disable the transition. Browser checks verify hidden, intermediate, and fully revealed scales, a left-edge transform origin, unchanged badge dimensions, and disabled transitions under reduced motion. Scoped Brand ESLint passed.
- Latest logo motion reference: `D:/obs-videos/2026-10-20 21-20-47.mp4` (12.37 seconds, 1920 x 1080). Frames around 6-10 seconds show a clockwise tilt and zoom that hold during hover, then reset on exit. Reference frames and a timestamped contact sheet are saved under `.next/dev/logo-motion-reference/`.
- The logo now eases to a 12-degree clockwise tilt and 1.10 scale over 500ms, holds until pointer exit, and returns smoothly. The earlier floating loop and its keyframes were removed. The logo asset, background hover, and underline reveal are preserved.
- Visual inspection compared `crop-6.60.png` with `implementation-hover.png` in the reference evidence directory. The source has a different square logo, while the implementation intentionally retains the user's existing circular mark. The clockwise orientation and hover enlargement follow the supplied reference. These crops differ in size because they show different products; the comparison evaluates motion direction and brand composition rather than exact pixel fidelity.
- Browser checks confirmed positive intermediate rotation, final 12-degree rotation and 1.10 scale, a stable held pose after a further 1.6 seconds, unchanged badge dimensions, and a full reset on pointer exit. Reduced-motion mode disables the transforms and transition. Scoped Brand ESLint passed.
- The homepage's existing entrance motion can transiently extend document scroll width at narrow viewports; this also occurs in the baseline. Header geometry is independently measured and remains within the viewport. The body already clips horizontal overflow. This scoped brand refinement does not change the hero animation.
- This is a scoped component check; unrelated backend features and a production build were not rerun for this presentational change.

Implementation checklist: shared component, responsive sizing, name/subtitle hierarchy, consistent header usage, light/dark visual inspection, keyboard focus, TypeScript, and scoped browser checks are complete. No actionable P0/P1/P2 issues remain within the changed component.

## Site fonts, hero details, and compact navigation — 2026-10-20

final result: passed

This section supersedes earlier header size measurements. Scope: complete font coverage across the existing website, blink the hero name's trailing dot, shift the desktop portrait slightly right/up, and reduce navigation height. Preserve the accepted logo artwork, serif brand name, clockwise logo hover, background hover, and left-to-right underline reveal.

### Source, implementation, and visual comparison

- Source visual truth: the existing site before this scoped change, captured in `.next/dev/final-polish-qa/before/`, plus the user's requested adjustments.
- Revised browser evidence: `.next/dev/final-polish-qa/after/`.
- Matching desktop comparison: `before/home-1440.png` and `after/home-1440.png`, both 1440 x 1000 CSS/pixel viewports, device scale factor 1.
- Matching mobile comparison: `before/home-390.png` and `after/home-390.png`, both 390 x 844 CSS/pixel viewports, device scale factor 1. No density normalization or resampling was needed.
- The source and revised desktop screenshots were opened together for full composition and focused header, name, portrait, and controls comparison. The revised mobile hero, dark desktop hero, dark mobile menu, Myanmar blog list, and Myanmar article were also opened and inspected.
- Focused geometry, font, and behavior evidence is in `before/results.json`, `after/results.json`, and `after/flows.json` beneath that evidence directory.

### Findings, fixes, and fidelity surfaces

- **Fonts and typography:** The existing Manrope body and Sora heading faces were already applied to most visible content. Font variables lived on body, leaving the root's default monospace variable unable to resolve Geist Mono. Moving loaded font variables to html fixes that inheritance across all routes and native code elements. Added coverage for H5/H6, card/sheet titles, controls, and code/pre/kbd/samp. Browser computed styles verify Sora for heading/title samples, Manrope for controls and body, and Geist Mono for code. The accepted Georgia brand wordmark is retained.
- **Myanmar:** Explicit language metadata now selects Noto Sans Myanmar for translated blog cards, article titles/descriptions/content, and the language button. Myanmar headings use a 1.5 line height; body text retains the existing 1.85 line height and normal tracking. Actual Myanmar list/article captures show the loaded face and no article viewport overflow.
- **Spacing and proportions:** Main navigation height is reduced from 105 to 80px at desktop/tablet widths and from 86 to 70px at narrow mobile widths. Reduced brand dimensions, navigation container padding, and desktop contact button height keep proportions balanced. Mobile controls retain their existing usable size. The journal header uses matching vertical padding.
- **Portrait and imagery:** Within the desktop hero, the unchanged 400px circular portrait moves 24px right and 24px up relative to its previous section position. The smaller navbar additionally raises the entire hero by 25px. At tablet/mobile widths the stacked portrait stays centered. No logo, portrait, project image, or blog image asset is replaced.
- **Motion:** The decorative name dot blinks once per 1.2-second cycle using opacity only, preserving text layout. The dot remains visible without animation under reduced motion and is hidden from assistive technology. The portrait entrance now also respects reduced motion. Existing brand hover motion and underline remain intact.
- **Colors and copy:** Existing semantic colors, light/dark surfaces, name text, navigation destinations, and section content remain in place. Only the decorative dot gains animation.

### Comparison and verification history

1. Captured the existing hero/navigation and font families at 1440, 1280, 768, 390, and 320px. The 105px desktop/86px mobile header and old portrait position provide the baseline.
2. Applied the compact header, portrait offset, blink, and extended font rules. A browser font probe exposed the root monospace inheritance issue; moved the loaded font variables to html and confirmed Geist Mono on native code elements.
3. Myanmar article reload exposed the existing server/client language initialization mismatch. Language state now starts consistently in English, and the journal navbar restores a validated saved language after hydration. Repeated the actual saved-Myanmar article load; the final run records no uncaught exceptions.
4. Final captures and geometry checks show no hero/header overflow at the five tested widths. Desktop portrait section-relative coordinates change by exactly +24/-24px. At 390/320px the portrait remains centered in the stacked layout.
5. Dot tests inspect visible/hidden animation phases and confirm a static visible dot under reduced motion. Dark mobile menu fit and Escape dismissal pass. Contact navigation lands within 1px of the new 80px header offset. Blog list, Myanmar article reload, and project detail render with the intended font families.
6. Final changed-file ESLint passed with no source warnings. TypeScript passed, and the final production webpack build passed with all 28 static pages generated. The existing unconfigured database continues to use the curated-blog fallback.

### Limits and handoff

- Verification covers the changed presentation, responsive layout, font inheritance, language restoration, and navigation flows. Contact email delivery, AI responses, and unrelated backend integrations were not exercised.
- The prior development error indicator can persist in a captured development session after a recovered earlier error; the final browser run's recorded uncaught exception list is empty.
- Evidence is saved under ignored `.next/dev/` and can be removed by Next.js maintenance. The local preview remains running at `http://localhost:3000/`.

Implementation checklist: global font coverage, Myanmar text styles and reload behavior, blinking name dot, desktop portrait offset, compact responsive headers, preserved brand effects, browser comparison, lint, TypeScript, and final production build are complete. No actionable P0/P1/P2 findings remain within this scope.

## Hero technology card reference refinement - 2026-10-20

final result: blocked

- Source visual truth: the user-attached 949 x 286 screenshot in the current conversation, showing muted role text and one rounded JavaScript card with a blue dot and amber lightning icon.
- Implementation: components/home/Home.tsx. The previous badge list is replaced with a single 292px-wide, 92px-tall card. JavaScript appears first; the nine technologies rotate every 2.4 seconds with vertical fade transitions. Hover and keyboard focus pause rotation; reduced motion disables rotation. The card links to the existing Skills section.
- The original requested role and technology names remain. The subtitle uses uniform muted text rather than a bold opening phrase. Existing portrait, name, and experience changes remain intact.
- Implementation screenshot, viewport, pixel dimensions, density normalization, full-view comparison, and focused comparison: unavailable. This session exposes no browser tool. No rendered visual comparison or browser interaction checks were performed, so fonts, wrapping, spacing, colors, and icon fidelity have not passed visual QA.
- Static validation: TypeScript, scoped ESLint, and diff whitespace checks passed. No new production build was run for this scoped presentation change.
- Remaining verification: compare the hero card with the supplied crop in desktop/mobile and light/dark states; observe a complete rotation, hover/focus pause, reduced motion, and Skills navigation. Earlier browser evidence in this document does not verify this refinement.

## Hero sizing adjustment - 2026-10-20

final result: blocked

- Source: the latest user-attached 916 x 523 hero crop showing oversized name, subtitle, and React Native card. The user requests smaller, balanced proportions.
- Changed only the hero presentation: responsive name size is now 34-64px instead of 44-128px; subtitle is 16-18px instead of 18-24px. The technology card is 216 x 60px instead of 292 x 92px, with a 17px label, 10px dot, 16px lightning icon, smaller corners, and softer shadow.
- Tightened the subtitle, card, action, and social spacing. Action buttons retain a 44px height. Existing copy, technology rotation, hover/focus pause, reduced-motion behavior, and portrait remain.
- Scoped ESLint and diff whitespace checks passed. This change only updates presentation classes and animation distances; no new production build or TypeScript run was needed.
- Visual verification remains blocked because this session has no browser tool. No implementation capture, viewport comparison, density normalization, or browser interaction evidence exists for this adjustment. Typography, spacing, colors, and copy wrapping must still be checked against the supplied crop in an actual browser.
