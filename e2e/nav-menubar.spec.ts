import { test } from "@playwright/test"
import { navigateAndAssert } from "./helpers/nav"

test.describe("NavMenubar navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`)
  })

  test("navigates to Home and highlights active link", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "Home",
      href: "/",
      ariaLabel: "Content",
      preNavigateUrl: `/about`,
      assertHome: true,
    })
  })

  test("navigates to Portfolio and highlights active link", async ({
    page,
  }) => {
    await navigateAndAssert(page, {
      name: "Portfolio",
      href: "/portfolio",
      ariaLabel: "Projects",
    })
  })

  test("navigates to Profile and highlights active link", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "Profile",
      href: "/profile",
      ariaLabel: "Profile",
    })
  })

  test("navigates to Services and highlights active link", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "Services",
      href: "/services",
      ariaLabel: "Services",
    })
  })

  test("navigates to Fake shop and highlights active link", async ({
    page,
  }) => {
    await navigateAndAssert(page, {
      name: "Fake shop",
      href: "/shop",
      ariaLabel: "Shop",
    })
  })

  test("navigates to About and highlights active link", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "About",
      href: "/about",
      ariaLabel: "About",
    })
  })
})
