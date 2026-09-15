# Playwright QA Automation Portfolio
![Playwright Tests](https://github.com/damahhigi/playwright-qa-portfolio/actions/workflows/playwright.yml/badge.svg)

This repository contains a Playwright test automation framework built with TypeScript.

The project demonstrates UI and API test automation using reusable test data, Page Object Model, custom Playwright fixtures, environment-based configuration, test tagging, cross-browser testing, and continuous integration with GitHub Actions.

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

- Product selection
- Add product to cart
- Cart content validation
- Remove product from cart
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
- GET user with ID zero and validate boundary behavior
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
├── .env.example
├── playwright.config.ts
└── README.md
```

## Framework Design

The project uses:

- **Page Object Model (POM)** to separate UI interaction logic from test scenarios
- **API client classes** to centralize API request logic
- **Custom Playwright fixtures** to provide reusable page objects and API clients
- **Reusable test data** to keep test data separate from test logic
- **Environment variables** to manage UI and API base URLs
- **Test tags** for smoke, regression, and API test selection
- **Dedicated Playwright projects** to separate UI and API execution
- **Cross-browser testing** using Chromium, Firefox, and WebKit
- **GitHub Actions** for continuous integration

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

### Environment Setup

Create a `.env` file in the project root using `.env.example` as a template:

```bash
cp .env.example .env
```

The project uses:

```text
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://jsonplaceholder.typicode.com
```

The `.env` file is excluded from Git. The `.env.example` file documents the environment variables required to run the project.

## Running the Tests

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

Run the dedicated API project:

```bash
npx playwright test --project=api
```

### Run Tests by Tag

Run critical smoke tests:

```bash
npx playwright test --grep @smoke
```

Run regression tests:

```bash
npx playwright test --grep @regression
```

Run API-tagged tests:

```bash
npx playwright test --grep @api
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Test Execution

The framework currently contains:

- 9 UI test scenarios
- 8 API test scenarios
- UI tests executed across Chromium, Firefox, and WebKit
- API tests executed once through a dedicated API project
- **35 total test executions** in a complete run

## Continuous Integration

GitHub Actions automatically runs the Playwright test suite on pushes, pull requests, and a daily scheduled execution at 05:00 UTC.

The CI workflow:

- Installs project dependencies
- Installs Playwright browsers
- Provides environment configuration for UI and API tests
- Runs the complete Playwright test suite
- Uploads the Playwright HTML report as a workflow artifact
- Runs the full suite daily to build continuous execution history and help identify intermittent or environment-related failures

## What I Chose Not to Automate and Why

Automation is most valuable when tests are repeatable, deterministic, and provide useful regression feedback. I therefore chose not to automate every possible scenario in this portfolio.

- **Visual appearance and layout checks** – These are better suited to dedicated visual regression testing. The current framework focuses on functional behavior rather than pixel-level UI comparison.

- **CAPTCHA, MFA, and other human-verification flows** – These mechanisms are intentionally designed to prevent automated interaction and would normally require test-environment support or controlled bypasses.

- **Real payment processing** – The demo application does not integrate with a real payment provider. Automating real financial transactions would also require a controlled sandbox and appropriate test data.

- **Extensive negative API validation** – JSONPlaceholder is a mock API and accepts or simulates many write operations without enforcing realistic business validation. I avoided creating tests with invented expectations that are not supported by the API's actual behavior.

- **Large numbers of similar test cases** – I prioritized representative risk and behavior coverage rather than increasing the test count with scenarios that validate essentially the same behavior.

The goal of this portfolio is to demonstrate maintainable automation and thoughtful test selection rather than automate every possible case.

## Future Improvements

Planned improvements include:

- Additional API contract and negative testing
- Additional UI edge-case coverage
- Enhanced test reporting
- Secure secret management when authentication or private APIs are introduced