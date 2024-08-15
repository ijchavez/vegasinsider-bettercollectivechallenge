import { test, expect } from "@playwright/test";
import { SignUpPage } from "../../pages";
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
let testUser: CreateUser;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(SIGN_UP_PATH);
  signUpPage = new SignUpPage(page);

  testUser = await getUser();
});

test("Prevents a user from signing up if every field is blank", async ({
  page,
}) => {
  await signUpPage.validateSigunUpPageTitle();
  await signUpPage.validatePurchaseDescriptionTexts();
  await signUpPage.validateEmailToSendConfirmationText();
  await signUpPage.validatePrivacyPolicyLink();
  await signUpPage.validateAccountCreationAgreementText();

  await signUpPage.clickOnCreateAnAccountBtn();

  await expect(await signUpPage.getValidationErrorsMessage()).toHaveText(
    ` ${VALID_EMAIL_ERROR_MSG}${PASSWORD_LENGTH_ERROR_MSG}${BETTING_STATE_ERROR_MSG}`
  );
});

test("Prevents a user from signing up if the email is not valid", async ({
  page,
}) => {
  await signUpPage.enterEmailForSignUp("invalidemail@");
  await signUpPage.enterPasswordForSignUp(testUser.password);
  await signUpPage.enterStateCodeByValue(testUser.stateCode);

  await signUpPage.clickOnCreateAnAccountBtn();

  await expect(await signUpPage.getValidationErrorsMessage()).toHaveText(
    ` ${VALID_EMAIL_ERROR_MSG}`
  );
});

test("Prevents a user from signing up if the betting state is not placed", async ({
  page,
}) => {
  await signUpPage.enterEmailForSignUp(testUser.email);
  await signUpPage.enterPasswordForSignUp(testUser.password);

  await signUpPage.clickOnCreateAnAccountBtn();

  await expect(await signUpPage.getValidationErrorsMessage()).toHaveText(
    ` ${BETTING_STATE_ERROR_MSG}`
  );
});

test("Prevents a user from signing up if the email already exists", async ({
  page,
}) => {
  await signUpPage.enterEmailForSignUp(EMAIL_ALREADY_EXISTENT);
  await signUpPage.enterPasswordForSignUp(testUser.password);
  await signUpPage.enterStateCodeByValue(testUser.stateCode);

  await signUpPage.clickOnCreateAnAccountBtn();

  await expect(await signUpPage.getValidationErrorsMessage()).toHaveText(
    ` ${VALID_EMAIL_ALREADY_TAKEN_ERROR_MSG}`
  );
});

test.afterEach("Status check", async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});
