import { expect, Page } from "@playwright/test";

export class SignUpPage {
  constructor(public page: Page) {
    this.page = page;
  }

  async enterEmailForSignUp(email: string) {
    await this.page
      .getByRole("textbox", { name: "Email" })
      .fill(email.toLowerCase(), { timeout: 5000 });
  }

  async enterPasswordForSignUp(password: string) {
    await this.page
      .locator("//input[@name='password']")
      .fill(password, { timeout: 5000 });
  }

  async enterStateCodeByValue(stateCode: string) {
    await this.page
      .locator("//select[@name='state']")
      .selectOption(stateCode, { timeout: 5000 });
  }
  async clickOnCreateAnAccountBtn() {
    await Promise.all([
      await this.page
        .getByRole("button", { name: "Create Account" })
        .click({ timeout: 5000 }),
    ]);
  }
  //general validation, this is why is abstracted from the test
  async validateSigunUpPageTitle() {
    await expect(
      this.page.getByRole("heading", { name: "Create Your Free Account" })
    ).toBeVisible();
  }
  //general validation, this is why is abstracted from the test
  async validatePurchaseDescriptionTexts() {
    await expect(
      this.page.getByText("Access to VI Free Picks for")
    ).toBeVisible();
    await expect(
      this.page.getByText("Access to VI Opening Line")
    ).toBeVisible();
    await expect(
      this.page.getByText("Access to VI Betting Trends")
    ).toBeVisible();
    await expect(
      this.page.getByText("Access to VI Consensus Picks")
    ).toBeVisible();
    await expect(this.page.getByText("Daily Betting Columns")).toBeVisible();
    await expect(
      this.page.getByText("Exclusive Sportsbook Offers")
    ).toBeVisible();
  }
  //general validation, this is why is abstracted from the test
  async validateEmailToSendConfirmationText() {
    await expect(
      this.page.getByText("We will send a confirmation").first()
    ).toBeVisible();
  }
  //general validation, this is why is abstracted from the test
  async validatePrivacyPolicyLink() {
    await expect(
      this.page.getByRole("link", { name: "Privacy Policy" })
    ).toBeVisible();
  }
  //general validation, this is why is abstracted from the test
  async validateAccountCreationAgreementText() {
    await expect(
      this.page.getByText("By creating an account, you agree to our")
    ).toBeVisible();
  }
  //general validation, this is why is abstracted from the test
  async validateAlreadyHavingAnAccountText() {
    await expect(
      this.page.getByText("Already have an account on")
    ).toBeVisible();
  }

  async getValidationErrorsMessage() {
    const validationMessageElement = await this.page.locator(
      "//div[@class='notification active']"
    );
    return validationMessageElement;
  }
}
