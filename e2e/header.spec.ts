import { test } from "@playwright/test"
import {
  assertHeaderVisible,
  assertModeToggleMenu,
  navigateAndAssert,
} from "./helpers/nav"

test.describe("Header navigation and controls", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`)
    await assertHeaderVisible(page)
  })

  test("mode toggle menu renders items", async ({ page }) => {
    await assertModeToggleMenu(page)
  })

  test("navigate via header: Home", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "Home",
      href: "/",
      ariaLabel: "Content",
      preNavigateUrl: `/about`,
      assertHome: true,
    })
  })

  test("navigate via header: Portfolio", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "Portfolio",
      href: "/portfolio",
      ariaLabel: "Projects",
    })
  })

  test("navigate via header: Profile", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "Profile",
      href: "/profile",
      ariaLabel: "Profile",
    })
  })

  test("navigate via header: Services", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "Services",
      href: "/services",
      ariaLabel: "Services",
    })
  })

  test("navigate via header: Fake shop", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "Fake shop",
      href: "/shop",
      ariaLabel: "Shop",
    })
  })

  test("navigate via header: About", async ({ page }) => {
    await navigateAndAssert(page, {
      name: "About",
      href: "/about",
      ariaLabel: "About",
    })
  })
})
