import { test, expect } from "@playwright/test";
import { SignUpPage, MainUserPage } from "../../pages";
import {
  BETTING_STATE_ERROR_MSG,
  EMAIL_ALREADY_EXISTENT,
  PASSWORD_LENGTH_ERROR_MSG,
  SIGN_UP_PATH,
  VALID_EMAIL_ALREADY_TAKEN_ERROR_MSG,
  VALID_EMAIL_ERROR_MSG,
} from "../../utils/Constants";
import {
  generatePassword,
  getRandomStateCode,
  getUser,
  CreateUser,
} from "../../utils/Utils";
import { faker } from "@faker-js/faker";

let signUpPage: SignUpPage;
let mainUserPage: MainUserPage;
let testUser: CreateUser;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);

  await page.goto(SIGN_UP_PATH);
  signUpPage = new SignUpPage(page);
  mainUserPage = new MainUserPage(page);

  testUser = await getUser();
});

test("Allows a new user to successfully sign up", async ({ page }) => {
  await signUpPage.enterEmailForSignUp(testUser.email);
  await signUpPage.enterPasswordForSignUp(testUser.password);
  await signUpPage.enterStateCodeByValue(testUser.stateCode);

  await signUpPage.clickOnCreateAnAccountBtn();

  await mainUserPage.getMainUserPageTitle();
});

test.afterEach("Status check", async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});
