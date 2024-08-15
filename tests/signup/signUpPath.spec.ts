import { test, expect } from "@playwright/test";
import { SignUpPage, LandingPage } from "../../pages";
import { SIGN_UP_PATH, VEGASINSIDER_URL } from "../../utils/Constants";

let signUpPage: SignUpPage;
let landingPage: LandingPage;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto("/");

  signUpPage = new SignUpPage(page);
  landingPage = new LandingPage(page);
});

test("Validate flow to sign up page", async ({ page }) => {
  await landingPage.clickOnSignUpBtn();
  await landingPage.clickOnSignUpDropDownLink();

  await expect(page).toHaveURL(VEGASINSIDER_URL + SIGN_UP_PATH);
});

test.afterEach("Status check", async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});
