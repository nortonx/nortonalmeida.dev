# Migration to Biome.js Report

I have successfully replaced ESLint and Prettier with Biome.js. Below is the performance comparison and details of the migration.

## Performance Comparison

| Task           | Tool      | Time (Total) | Speedup   |
| :------------- | :-------- | :----------- | :-------- |
| **Linting**    | ESLint    | ~2.31s       | -         |
|                | **Biome** | **~0.49s**   | **~4.7x** |
| **Formatting** | Prettier  | ~2.17s       | -         |
|                | **Biome** | **~0.63s**   | **~3.4x** |

> **Note**: Biome combines linting and formatting into a single `check` command which took **~0.94s**, still significantly faster than running the previous tools separately (Total ~4.48s).

## Changes Implemented

1. **Removed Dependencies**: Uninstalled `eslint`, `prettier`, and related config/plugin packages.
2. **Installed Biome**: Added `@biomejs/biome`.
3. **Configuration**:
   - Created `biome.json` with recommended defaults and CSS modules enabled.
   - Added `.biomeignore` to exclude CSS files (due to Tailwind v4 syntax compatibility).
   - Updated `.husky/pre-commit` to use `npm run check`.
4. **Code Fixes**:
   - Fixed `no-array-index-key` issues in `Timeline.tsx`.
   - Removed unused imports in `Hero.tsx`, `SkillCloud.tsx`, `Timeline.tsx`, `header.tsx`, `mode-toggle.tsx`.
   - Added explicit `type="button"` in `header.test.tsx`.
   - Updated `playwright.config.ts` to use `node:path`.
