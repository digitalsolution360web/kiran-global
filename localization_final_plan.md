# Italian Localization Finalization Plan

## Current Status
- Centralized `LanguageContext` is operational.
- Most primary sections (Hero, About, Products, Industries, etc.) are localized.
- Basic breadcrumbs and common labels have been added to `translations.ts`.

## Remaining Tasks

### 1. UI Infrastructure
- [ ] Localize Breadcrumbs in all pages (`Home`, `Blog`, `Industries`, `Products`).
- [ ] Localize Error States (e.g., "Article Not Found") in details pages.
- [ ] Localize Sidebar titles (e.g., "Related Insights").

### 2. Large Data Structures
- [ ] **Industries Detail Data (`industryData`):**
    - Move `industryData` from `app/industries/[slug]/page.tsx` to a new field in `TranslationData`.
    - Provide full English and Italian translations for all 15+ industries (Descriptions, Benefits, Headings).
- [ ] **Blog Content:**
    - Ensure all blog articles in `translations.ts` have correct Italian versions (already partially done).
    - Fix any fallback text in `BlogDetailPage.tsx`.

### 3. Verification
- [ ] Systematic sweep of all `/app` pages for hardcoded strings.
- [ ] QA test of the Italian site version for flow and tone.

## Implementation Steps for `industryData`
Since `industryData` is large, I will update `translations.ts` in chunks:
1. Update `TranslationData` interface to include the deep structure.
2. Populate `en` object with current English data.
3. Populate `it` object with Italian translations (using professional business Italian).
4. Refactor `app/industries/[slug]/page.tsx` to consume `t.industryDetailPageData[slug]`.
