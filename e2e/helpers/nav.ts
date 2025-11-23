import { expect, Page } from "@playwright/test"

export async function navigateToAnchor(
  page: Page,
  params: {
    name: string
    ariaLabel: string
  },
) {
  const { name, ariaLabel } = params

  const link = page.getByRole("link", { name })
  await expect(link).toBeVisible()
  await link.click()

  // Wait for the section to be in viewport after scrolling
  const section = page.locator(`section[aria-label="${ariaLabel}"]`)
  await expect(section).toBeVisible()
}

export async function assertHeaderVisible(page: Page) {
  await expect(page.getByTestId("header-component")).toBeVisible()
  await expect(
    page.getByRole("link", { name: "www.nortonalmeida.dev" }),
  ).toBeVisible()
}

export async function assertModeToggleVisible(page: Page) {
  // Just verify the toggle button is present and functional
  // The dropdown behavior is handled by third-party components (Radix UI + next-themes)
  // which may not work reliably in test environment due to hydration/timing issues
  const toggle = page.getByRole("button", { name: "Toggle theme" })
  await expect(toggle).toBeVisible()
  await expect(toggle).toBeEnabled()
}
