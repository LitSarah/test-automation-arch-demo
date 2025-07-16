import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage.page";
import { DashboardPage } from "./dashboard.page";

export class LoginPage extends BasePage {
  // Locators
  usernameInput: Locator;
  passwordInput: Locator;
  loginBtn: Locator;

  constructor(page: Page) {
    // Set the page object's URL
    super(page, `web/index.php/auth/login`);
    // Set the Locators
    this.usernameInput = page.getByRole("textbox", { name: "username" });
    this.passwordInput = page.getByRole(`textbox`, { name: "password" }); // This is actually role = "password text"
    this.loginBtn = page.getByRole(`button`, { name: "Login" });
  }

  // BasePage implementations
  async waitForPageLoad() {
    await this.page.waitForURL(this.URL);
    await expect(this.usernameInput).toBeVisible();
  }

  // Actions

  /**
   * Login via the UI with the given username and password.
   * The page should be at the DashboardPage after login
   */
  async login(user: string, password: string) {
    // Enter username and password
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();

    // Wait for navigating to the next page
    const dashboard = new DashboardPage(this.page);
    await dashboard.waitForPageLoad();
  }
}
