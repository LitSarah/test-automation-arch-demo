import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("Login to the site", async ({ page }) => {
  // Instantiate LoginPage
  const loginPage = new LoginPage(page);

  // Navigate to login page
  await loginPage.goto();

  // Log into the site
  await loginPage.login("Admin", "admin123");

  // Validate we're on the correct page -- we should have a heading of "Dashboard"
  // Playwright expect must be awaited; otherwise it not wait for the element to exist
  await expect(page.getByRole("heading")).toHaveAccessibleName("Dashboard");
  // Technically this expect is handled in `LoginPage.login()`, but when it comes to testing, having explicit assertions can be useful for understanding.
  // There's always the off chance that the assertion in login() is removed, so having it here is a good backup too
});
