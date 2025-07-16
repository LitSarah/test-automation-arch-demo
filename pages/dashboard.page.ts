import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage.page";

export class DashboardPage extends BasePage {
  // Locators
  private pageHeading: Locator;

  constructor(page: Page) {
    // Set the page object's URL
    super(page, `web/index.php/dashboard/index`);
    // Set the Locators
    this.pageHeading = page.getByRole(`heading`, { name: "Dashboard" });
  }

  // BasePage implementations
  async waitForPageLoad() {
    await this.page.waitForURL(this.URL);
    await expect(this.pageHeading).toBeVisible();
  }
}
