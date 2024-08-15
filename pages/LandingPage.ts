import { Page } from "@playwright/test";

export class LandingPage {
  constructor(public page: Page) {
    this.page = page;
  }

  async clickOnSignUpBtn() {
    await this.page.locator(".button.matte.slim").click();
  }

  async clickOnSignUpDropDownLink() {
    await this.page.locator("a[href='/register/?ref=new']").click();
  }
}
