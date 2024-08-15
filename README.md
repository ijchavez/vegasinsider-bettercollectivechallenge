# VegasInsider Automation Challenge

This repository contains the automation project for VegasInsider as part of the Better Collective challenge. The project is built using Playwright for its simplicity and speed, and TypeScript as the programming language for better type safety and maintainability.

## Project Setup

To set up the project and install the necessary dependencies, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/vegasinsider-automation.git
   cd vegasinsider-bettercollectivechallenge
   ```

2. Install dependencies

   ```
       npm install --save-dev @types/node @playwright/test @faker-js/faker
   ```

3.Initialize Playwright:

```
    npm init playwright@latest
```

## Why Playwright

I chose Playwright for this project due to its ability to easily handle modern web applications, its cross-browser support, and its speed in executing tests. Playwright provides a robust API for testing different scenarios, including handling dynamic content, interacting with different browsers, and automating complex workflows.

## Test Scenarios

The following table outlines the test scenarios automated for the VegasInsider website:

| Test Scenario                                                                  | Description                                                                                                       |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Validate flow to sign up page                                                  | Ensures the user is correctly navigated to the sign-up page when clicking the "Sign Up" button and dropdown link. |
| Allows a new user to successfully sign up                                      | Verifies that a new user can successfully complete the sign-up process by entering valid credentials.             |
| Prevents a user from signing up if every field is blank                        | Validates that the form shows appropriate error messages when all required fields are left blank during sign-up.  |
| Prevents a user from signing up if the email is not valid                      | Ensures the system shows an error message when the user enters an invalid email format during sign-up.            |
| Prevents a user from signing up if the betting state is not selected           | Checks that an error message is displayed when the betting state is not provided in the sign-up form.             |
| Prevents a user from signing up if the email already exists                    | Validates that the form displays an error message when trying to sign up with an email that is already in use.    |
| Prevents a user from signing up if the password is less than 6 characters long | Validates that the form shows appropriate error message when a password less than 6 characters long is placed.    |
