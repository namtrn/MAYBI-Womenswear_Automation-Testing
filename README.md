# Maybi.com - Automated Testing Project

This repository contains automated tests for **Mayby.com** using [Playwright](https://playwright.dev/) with **TypeScript**.

## Project Structure

- **pages/**: Contains classes representing each page (e.g., `LoginPage.ts`, `HomePage.ts`).
- **tests/**: Contains test files that utilize the Page Object classes to perform actions.
- **helpers/**: Directory containing the helper functions.

- **package.json**: Contains project dependencies and scripts.
- **playwright.config.ts**: Configures Playwright settings and test behaviors.
- **tsconfig.json**: TypeScript configuration file.

## Using the Page Object Model (POM)

This project implements the **Page Object Model (POM)** design pattern. Each page of the application under test has a corresponding **Page Object Class** that contains methods and locators related to that specific page. This structure enhances test maintainability and readability by keeping the locators and actions in dedicated classes.

Contains classes related to navigation, managing actions like routing to different pages, handling menus, and other app navigation workflows. These classes make it easy to centralize navigation actions in one place, improving code reusability and clarity in test cases.

To use a Page Object, import the class in your test and call its methods. For example:

```typescript
import { PageManager } from '../pages/PageManager'

test('Valid Login', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loginPage();
  await pm.onLoginPage().enterCredentials('valid-user', 'valid-password');
  await pm.onLoginPage().waitForNumberOfSeconds(2) 
  await pm.onLoginPage().clickSignInButton()
})
```

## Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 14.x)
- npm (Node package manager, included with Node.js)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/namtrn/shop_maybi.git
   cd shop_maybi
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

Review and adjust settings in `playwright.config.ts` if necessary, such as:

- **Browser type** (e.g., Chromium, Firefox, WebKit)
- **Headless mode** or **headed mode**
- **Test directories and files**

## Running Tests

Execute tests with the following commands:

- Run all tests:

  ```bash
  npx playwright test
  ```

- Run tests in headed mode:

  ```bash
  npx playwright test --headed
  ```

- Run tests with a specific tag:

  ```bash
  npx playwright test -g "tag-name"
  ```

## Generating Reports

Playwright supports multiple report formats. To generate a test report:

```bash
npx playwright show-report
```

Reports will be available in the `playwright-report` folder after test execution.

## Additional Information

For more detailed information on configuring and using Playwright, refer to the [Playwright documentation](https://playwright.dev/docs/intro).