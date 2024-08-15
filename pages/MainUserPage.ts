import { Page } from "@playwright/test";

export class MainUserPage {
  constructor(public page: Page) {
    this.page = page;
  }

  async getMainUserPageTitle() {
    const validationMessageElement = await this.page.getByRole("heading", {
      name: "Sports Betting and Gambling",
    });
    return validationMessageElement;
  }
}
