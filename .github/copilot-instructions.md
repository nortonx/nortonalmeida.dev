# AI Coding Agent Instructions

## Project Overview

This is a **Next.js 16+ personal portfolio website** built with TypeScript, React 19, and Tailwind CSS v4. The site features a personal brand presence with portfolio sections, a theme switcher, and a responsive navigation system. The architecture emphasizes clean component separation and comprehensive test coverage (unit, integration, E2E).

## Architecture & Key Patterns

### Component Organization

- **UI Components** (`src/components/ui/`): Base design system components built with Radix UI primitives and CVA (class-variance-authority) for variant management. Examples: `button.tsx`, `dropdown-menu.tsx`, `navigation-menu.tsx`
- **Custom Components** (`src/components/custom/`): Project-specific components that wrap or enhance UI components. Examples: `XButton`, `XSection`, `Hero` — follow the "X" prefix convention
- **Feature Components** (`src/components/`): Page-level and feature components like `header.tsx`, `nav-menubar.tsx`, `mode-toggle.tsx`

**Key Pattern**: Custom components extend base UI components with domain-specific defaults. Example: `XButton` wraps `Button` with `rounded-full` styling and optional `label` prop.

### Layout & Routing

- **App Router**: Uses Next.js 16 App Router with server components by default
- **Path Alias**: `@/*` resolves to `src/` directory (configured in `tsconfig.json`)
- **Root Layout** (`src/app/layout.tsx`): Provides `ThemeProvider` wrapper, global styles, font setup (Geist font family), and main container constraints (`max-w-4xl`)
- **Dynamic Pages**: Each route has its own `page.tsx` (e.g., `about/`, `portfolio/`, `shop/`, `services/`)

### Styling Approach

- **Tailwind CSS v4** with PostCSS (`tailwind.config.ts` via `@tailwindcss/postcss`)
- **Dark Mode**: Managed via `next-themes` library; `ThemeProvider` component handles theme persistence and system preference detection
- **Class Utilities**: Use `cn()` utility (from `src/lib/utils.ts`) to merge Tailwind classes; use `clsx` for conditional classes
- **Animation**: `tw-animate-css` package available but not heavily used; prefer Tailwind's built-in transitions

### Server-Side Logic

- **Server Actions** (`src/app/actions/`): Use `"use server"` directive for server-side functions like `getRepos.ts` which fetches GitHub data via `api.github.com`
- **Error Handling**: Catch errors, log to console (check for `typeof console` in server context), and return gracefully
- **Type Safety**: All server functions should be TypeScript-typed with explicit return types

## Testing Strategy

### Unit & Component Tests (Jest)

**Location**: `__tests__/` mirrors `src/` directory structure  
**Command**: `npm test` (with coverage) | `npm run test:watch`

**Pattern**:

```tsx
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "@jest/globals"

describe("ComponentName", () => {
  it("should render correctly", () => {
    render(<Component />)
    expect(screen.getByTestId("component-id")).toBeDefined()
  })
})
```

- Use `data-testid` attributes for component queries (prefer over class selectors)
- Test snapshots for UI components (update with `npm run test:updateSnapshot`)
- Use `@testing-library/react` for rendering and user-centric assertions

### E2E Tests (Playwright)

**Location**: `e2e/` directory  
**Commands**: `npm run test:playwright` | `npm run test:ui` (interactive mode)

**Pattern**:

```typescript
import { test, expect } from "@playwright/test"

test("Feature Name", async ({ page }) => {
  await page.goto("/") // Uses baseURL from env or config
  await expect(page).toHaveTitle("www.nortonalmeida.dev")
})
```

**Key Rules**:

- Use relative routes (`/`, `/about`); `baseURL` is applied automatically
- Prefer accessibility selectors: `getByRole()`, `getByLabel()`, `aria-*` attributes
- Reuse helpers from `e2e/helpers/nav.ts` to avoid duplication
- `BASE_URL` env var controls test target (defaults to `http://127.0.0.1:3000`)
- Playwright auto-builds and starts Next.js for local hosts; skips for remote URLs

### Configuration

- **Jest**: `jest.config.ts` + `jest.setup.ts` (imports Testing Library DOM matchers)
- **Playwright**: `playwright.config.ts` manages server startup, timeouts (180s for slow builds), and browser selection
- **Coverage**: Enabled by default; reports in `coverage/` directory

## Development Workflow

### Commands

| Command                   | Purpose                                              |
| ------------------------- | ---------------------------------------------------- |
| `npm run dev`             | Start Next.js dev server (port 3000)                 |
| `npm run build`           | Build production bundle                              |
| `npm run lint`            | Run ESLint on `src/`, `__tests__/`, `e2e/` + configs |
| `npm run format`          | Format code with Prettier                            |
| `npm test`                | Run Jest with coverage                               |
| `npm run test:watch`      | Jest in watch mode                                   |
| `npm run test:playwright` | Run all Playwright E2E tests                         |
| `npm run test:ui`         | Playwright debug UI mode                             |

### Code Quality

- **ESLint**: Flat config (`eslint.config.mjs`); uses TypeScript parser, Prettier integration
- **Prettier**: Version 3.6.2; auto-configured via eslint-config-prettier
- **Git Hooks**: Husky manages pre-commit checks (see `"prepare": "husky"` in package.json)
- **TypeScript**: Strict mode enabled; target ES2017; ESM modules with Node bundler resolution

## Conventions & Patterns

### Naming & File Structure

- **Custom Components**: Prefix with `X` (e.g., `XButton`, `XSection`); one component per file
- **Test Files**: Mirror source structure with `.test.ts` / `.test.tsx` suffix
- **Type Files**: Use `React.ComponentProps<typeof BaseComponent>` for extending component props
- **Exports**: Default exports for components; named exports for utilities/types

### React Component Patterns

- **"use client" Directive**: Only interactive components (header, nav, mode-toggle) explicitly use `"use client"` to opt into client rendering
- **Theme-Aware**: Dark mode requires `suppressHydrationWarning={true}` on `body` when using `next-themes`
- **Typed Props**: Extend from base component types:
  ```tsx
  interface XButtonProps extends React.ComponentProps<typeof Button> {
    label?: string
  }
  ```

### CSS & Variant Management

- **CVA (class-variance-authority)**: Used in `button.tsx` for variant definitions
- **Conditional Classes**: Prefer `cn()` over ternaries; examples in `XButton` and custom components
- **Responsive**: Tailwind's mobile-first breakpoints (no custom breakpoints observed)

## Important Files & References

- **Layout Root**: [src/app/layout.tsx](src/app/layout.tsx) — Theme setup, fonts, global container
- **UI System**: [src/components/ui/button.tsx](src/components/ui/button.tsx) — CVA variant patterns
- **Theme Management**: [src/components/theme-provider.tsx](src/components/theme-provider.tsx) — next-themes wrapper
- **Jest Config**: [jest.config.ts](jest.config.ts) — Test setup, module mapping
- **Playwright Config**: [playwright.config.ts](playwright.config.ts) — E2E server management
- **Type Aliases**: [tsconfig.json](tsconfig.json) — `@/*` → `src/`, `public/*` → `public/`
- **Server Actions**: [src/app/actions/getRepos.ts](src/app/actions/getRepos.ts) — Error handling pattern

## Common Tasks

### Add a New Page

1. Create `src/app/[route]/page.tsx`
2. Import layout components (header provided globally)
3. Use `NSection` (custom) to structure content
4. Add route to navigation in `nav-menubar.tsx`
5. Create test in `__tests__/app/[route].test.tsx`

### Add a New UI Component

1. Create `src/components/ui/component.tsx` with CVA variants
2. Export from a barrel file if part of system
3. Write tests in `__tests__/components/ui/component.test.tsx`
4. Use `cn()` for class merging

### Add a Custom Component

1. Wrap UI component(s) with "X" prefix in `src/components/custom/`
2. Extend base component props; add domain-specific defaults/features
3. Mirror structure in `__tests__/components/custom/XComponent.test.tsx`

### Add Server-Side Logic

1. Create in `src/app/actions/` with `"use server"` at top
2. Type the function with explicit return type
3. Handle errors gracefully; log to console
4. Write tests in `__tests__/app/actions/`

## Environment & Dependencies

- **Node.js**: 24.13 (per mise.toml)
- **npm**: >= 11.6
- **Key Libraries**: Next.js 16, React 19, Tailwind v4, Radix UI, TypeScript 5
- **Test Runners**: Jest 30, Playwright 1.51+
- **Formatting**: Prettier 3.6.2, ESLint 9

---

**Last Updated**: January 2026  
**For questions on patterns or workflows, refer to the specific files and test examples linked above.**
