import { expect, test } from "@playwright/test";
import { navigateToAnchor } from "./helpers/nav";

test.describe("NavMenubar navigation", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`/`);
	});

	test("navigates to About section", async ({ page }) => {
		await navigateToAnchor(page, {
			name: "About",
			ariaLabel: "About",
		});
	});

	test("navigates to Experience section", async ({ page }) => {
		await navigateToAnchor(page, {
			name: "Experience",
			ariaLabel: "Experience",
		});
	});

	test("navigates to Education section", async ({ page }) => {
		await navigateToAnchor(page, {
			name: "Education",
			ariaLabel: "Education",
		});
	});

	test("navigates to Skills section", async ({ page }) => {
		await navigateToAnchor(page, {
			name: "Skills",
			ariaLabel: "Skills",
		});
	});

	test("Home link is visible and functional", async ({ page }) => {
		const homeLink = page.getByRole("link", { name: "Home" });
		await expect(homeLink).toBeVisible();
		await expect(homeLink).toHaveAttribute("href", "/");
	});
});
