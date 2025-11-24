import { test, expect } from "@playwright/test"
import {
  assertHeaderVisible,
  assertModeToggleVisible,
  navigateToAnchor,
} from "./helpers/nav"

test.describe("Header navigation and controls", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`)
    await assertHeaderVisible(page)
  })

  test("mode toggle button is visible", async ({ page }) => {
    await assertModeToggleVisible(page)
  })

  test("navigate to About section", async ({ page }) => {
    await navigateToAnchor(page, {
      name: "About",
      ariaLabel: "About",
    })
  })

  test("navigate to Experience section", async ({ page }) => {
    await navigateToAnchor(page, {
      name: "Experience",
      ariaLabel: "Experience",
    })
  })

  test("navigate to Education section", async ({ page }) => {
    await navigateToAnchor(page, {
      name: "Education",
      ariaLabel: "Education",
    })
  })

  test("navigate to Skills section", async ({ page }) => {
    await navigateToAnchor(page, {
      name: "Skills",
      ariaLabel: "Skills",
    })
  })

  test("Home link navigates to home page", async ({ page }) => {
    // First navigate away by scrolling to a section
    await navigateToAnchor(page, {
      name: "About",
      ariaLabel: "About",
    })

    // Then click Home link
    const homeLink = page.getByRole("link", { name: "Home" })
    await expect(homeLink).toBeVisible()
    await homeLink.click()

    // Should see the home page with Hero section
    await expect(page.getByTestId("home-page")).toBeVisible()
  })
})
