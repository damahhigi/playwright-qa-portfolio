# Playwright QA Automation Portfolio

This repository contains a Playwright test automation framework built with TypeScript.

The project demonstrates UI and API test automation using reusable test data, Page Object Model, custom Playwright fixtures, cross-browser testing, and continuous integration with GitHub Actions.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub Actions

## UI Test Coverage

### Login Tests

The login test suite covers:

- Successful login with valid credentials
- Login attempt with an invalid password
- Login attempt with an empty password
- Login attempt with an empty username

### Shopping and Checkout Tests

The shopping test suite covers:

- Login
- Product selection
- Add product to cart
- Cart content validation
- Checkout
- Customer information entry
- Order overview validation
- Successful purchase completion
- Order confirmation validation
- Missing first name validation
- Missing last name validation
- Missing postal code validation

## API Test Coverage

API tests use JSONPlaceholder to demonstrate REST API testing with Playwright.

The suite covers:

- GET all users
- GET a single user
- GET a non-existent user and validate a 404 response
- POST a new user
- PUT an existing user
- PATCH an existing user
- DELETE an existing user
- Response status validation
- Response body validation

> JSONPlaceholder is a mock REST API. POST, PUT, PATCH, and DELETE operations are simulated and changes are not persisted.

## Framework Structure

```text
playwright-portfolio/
├── api/
│   └── UsersApi.ts
├── fixtures/
│   ├── apiFixtures.ts
│   └── pageFixtures.ts
├── pages/
│   ├── CartPage.ts
│   ├── CheckoutOverviewPage.ts
│   ├── CheckoutPage.ts
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── test-data/
│   ├── apiData.ts
│   ├── checkoutData.ts
│   └── users.ts
├── tests/
│   ├── api.spec.ts
│   ├── login.spec.ts
│   └── shopping.spec.ts
└── playwright.config.ts
```

## Framework Design

The project uses:

- **Page Object Model (POM)** to separate UI interaction logic from test scenarios
- **API client classes** to centralize API request logic
- **Custom Playwright fixtures** to provide reusable page objects and API clients
- **Reusable test data** to keep test data separate from test logic
- **Dedicated Playwright projects** to separate UI and API execution
- **Cross-browser testing** using Chromium, Firefox, and WebKit
- **GitHub Actions** for continuous integration

## Running the Tests

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run the complete test suite:

```bash
npx playwright test
```

Run UI tests in Chromium:

```bash
npx playwright test --project=chromium
```

Run UI tests in Firefox:

```bash
npx playwright test --project=firefox
```

Run UI tests in WebKit:

```bash
npx playwright test --project=webkit
```

Run API tests only:

```bash
npx playwright test --project=api
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Test Execution

The framework currently contains:

- 8 UI test scenarios
- 7 API test scenarios
- UI tests executed across Chromium, Firefox, and WebKit
- API tests executed once through a dedicated API project
- 31 total test executions in a complete local run

## Continuous Integration

GitHub Actions automatically runs the Playwright test suite when changes are pushed to the repository.

The CI pipeline validates both UI and API automation and helps identify regressions before changes are accepted.

## Future Improvements

Planned improvements include:

- Environment variable and secret management
- Additional API negative testing
- Additional UI edge-case coverage
- Test tagging and selective execution
- Enhanced reporting