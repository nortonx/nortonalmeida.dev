import { expect, Page } from "@playwright/test"

export async function navigateAndAssert(
  page: Page,
  params: {
    name: string
    href: string
    ariaLabel?: string
    preNavigateUrl?: string
    assertHome?: boolean
  },
) {
  const { name, href, ariaLabel, preNavigateUrl, assertHome } = params

  if (preNavigateUrl) {
    await page.goto(preNavigateUrl)
  }

  const link = page.getByRole("link", { name })
  await expect(link).toBeVisible()
  await link.click()

  if (assertHome) {
    await expect(page.getByTestId("home-page")).toBeVisible()
    await expect(page.locator('section[aria-label="Content"]')).toBeVisible()
  } else if (ariaLabel) {
    await expect(
      page.locator(`section[aria-label="${ariaLabel}"]`),
    ).toBeVisible()
  }

  await expect(
    page.locator(`a[href="${href}"][data-active="true"]`),
  ).toBeVisible()
}

export async function assertHeaderVisible(page: Page) {
  await expect(page.getByTestId("header-component")).toBeVisible()
  await expect(
    page.getByRole("link", { name: "www.nortonalmeida.dev" }),
  ).toBeVisible()
}

export async function assertModeToggleMenu(page: Page) {
  const toggle = page.getByRole("button", { name: "Toggle theme" })
  await expect(toggle).toBeVisible()
  await toggle.click()
  await expect(page.getByText("Light")).toBeVisible()
  await expect(page.getByText("Dark")).toBeVisible()
  await expect(page.getByText("System")).toBeVisible()
}
