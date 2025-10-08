This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## End-to-end Testing (Playwright)

This project uses Playwright for end-to-end tests located in `e2e/`. Tests rely on a configurable `baseURL` so you can run against local or remote environments without changing specs.

### Base URL via environment

- Set `BASE_URL` in `.env` or `.env.local` to control where tests run.
- Defaults to `http://127.0.0.1:3000` if not provided.
- When `BASE_URL` hostname is `localhost` or `127.0.0.1`, the Playwright config automatically builds and starts Next.js before tests.
- For any other hostname (e.g., preview deployments), Playwright will not start a local server and will run against the provided remote URL.

See `playwright.config.ts` for details:

- `use.baseURL` is set from `BASE_URL` at runtime and always includes a port.
- `webServer` runs `npm run build && npx next start -p <port>` for local hosts and waits for `baseURL`.
- `timeout` is set to 180 seconds to avoid slow startup races.

### Quick start

- Local run:
  1. Create `.env.local` with `BASE_URL=http://127.0.0.1:3000`.
  2. Run `npm run test:playwright`.

- Test UI mode:
  - Run `npm run test:ui` to inspect tests interactively.

- Remote run (e.g., preview deploy):
  1. Set `BASE_URL` to your deployment URL, e.g. `https://your-preview.example.com`.
  2. Run `npm run test:playwright`.

An `.env.example` is provided documenting `BASE_URL` usage.

### Writing tests

- Use relative routes in specs, e.g. `await page.goto('/')`; the configured `baseURL` is applied automatically.
- Prefer accessibility-first selectors like roles, labels, and `aria-*` attributes.
- Reuse shared helpers (see `e2e/helpers/nav.ts`) to keep specs focused on user behavior.

### CI notes

### CI integration

- CI includes a Playwright E2E job that:
  - Sets `BASE_URL=http://127.0.0.1:3000` to run locally on CI.
  - Installs Playwright browsers via `npx playwright install --with-deps`.
  - Runs `npm run test:playwright` using `playwright.config.ts` for server start.
  - Uploads the HTML report artifact (`playwright-report`).
- View the HTML report on each workflow run under artifacts.
- For remote E2E runs, set `BASE_URL` to the deployment URL (e.g., `https://preview.example.com`) and the config will skip local server start.

### Troubleshooting

- Timeout waiting for server:
  - Ensure `BASE_URL` is a local hostname (`localhost` or `127.0.0.1`) and includes a port.
  - Confirm the port is available or change `PORT`/port in `BASE_URL`.
  - Kill any stale Next.js process on the same port (`lsof -i :3000` then terminate PID).
  - Clear `.next` and rebuild: `rm -rf .next && npm run build`.
- Wrong environment target:
  - Use relative routes in specs; set `BASE_URL` to switch environments.
- Report not opening:
  - Use `npx playwright show-report` or open `playwright-report/index.html` after a run.

### Useful commands

- Run in UI mode: `npm run test:ui`
- Run only Chromium: `npx playwright test --project=chromium`
- Debug/headed: `npx playwright test --headed`
- Show last HTML report: `npx playwright show-report`
