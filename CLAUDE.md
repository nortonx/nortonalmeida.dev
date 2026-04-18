# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Norton Almeida (nortonalmeida.dev) — a Senior Front-End Developer / Solutions Architect with 16+ years in software development. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Commands

| Task             | Command                                    |
| ---------------- | ------------------------------------------ |
| Dev server       | `npm run dev`                              |
| Build            | `npm run build`                            |
| Lint             | `npm run lint`                             |
| Format           | `npm run format`                           |
| Format check     | `npm run format:check`                     |
| Tests + coverage | `npm test`                                 |
| Watch mode       | `npm run test:watch`                       |
| Update snapshots | `npm run test:updateSnapshot`              |
| Single test      | `npx jest __tests__/path/to/file.test.tsx` |
| E2E tests        | `npm run test:playwright`                  |
| E2E UI mode      | `npm run test:ui`                          |

Pre-commit hooks (Husky) run: lint, format:check, build, test. All must pass. Node >= 24.11, npm >= 11.6.

## Architecture

- **`src/app/`** — App Router pages and server actions (`actions/`). `"use client"` only where needed.
- **`src/components/ui/`** — Generic UI primitives (Button with CVA variants, Input, etc.).
- **`src/components/custom/`** — Domain components (Hero, GitHubHeatmap, Timeline, SkillCloud, TypewriterText, ScrollAnimatedSection, XSection, XButton, XInput). `X`-prefixed = opinionated wrappers around UI primitives.
- **`src/lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge).
- **`__tests__/`** — Jest unit tests mirroring `src/`. Uses React Testing Library with accessibility-first selectors (`getByRole`, `getByLabelText`).
- **`e2e/`** — Playwright E2E tests with shared helpers in `e2e/helpers/`.
- **`__mocks__/framer-motion.tsx`** — Mocks motion components as plain HTML and `useInView` as `() => true`.

Path aliases: `@/*` = `src/*`, `public/*` = `public/*`. Prettier: no semicolons, double quotes, trailing commas, 80 char width. Styling: Tailwind CSS v4 with OKLch colors, CSS variables for theming, `tw-animate-css`.

## IMPORTANT: Typewriter Effect (framer-motion)

**Critical feature — keep this section current whenever the implementation changes.**

ALL text on the page uses a typewriter animation. Three mechanisms:

| Mechanism                  | File                 | Trigger                    | Used for                                                          |
| -------------------------- | -------------------- | -------------------------- | ----------------------------------------------------------------- |
| `useTypewriter` hook       | `Hero.tsx`           | On mount with `startDelay` | Hero name, subtitle, bio, education note, tech tags               |
| `useTypewriterInView` hook | `XSection.tsx`       | Scroll (`useInView`)       | Section headings                                                  |
| `TypewriterText` component | `TypewriterText.tsx` | Scroll (`useInView`)       | About, Education, Timeline, SkillCloud, Certifications, Languages |

All share the same pattern: progressive `setInterval` reveal, `done` state tracking, optional blinking cursor. `ScrollAnimatedSection` adds a framer-motion fade+slide-up wrapper used by XSection.

**Any new text content added to the site MUST use the typewriter animation.**

## Page Content (src/app/page.tsx)

Content is driven by data arrays defined in `page.tsx`:

- **experienceData** — Work history (Amaris Consulting, NACS, 87Labs, Defensoria Publica, Avenue Code, AgilityFeat, Self-Employed)
- **SKILLS** — Technical skills (48 items)
- **CERTIFICATIONS** — Google Agile Essentials, Google AI Essentials, Datadog Foundation
- **LANGUAGES** — English, Portuguese, Spanish
- **CAUSES** — Social causes

Sections rendered: GitHubHeatmap (above-the-fold, 1s fade-in on mount, fetches from `github-contributions-api.jogruber.de`, silent-hides on error via `errorMessage=""`), Hero, About, Experience, Education, Skills, Certifications, Languages, Causes. CV source of truth: `NortonAlmeidaCvCompact2026.docx`.
