# Playwright QA Automation Portfolio

This repository contains a Playwright test automation project built with TypeScript.

The project demonstrates automated testing of a sample e-commerce application, including login validation and a complete end-to-end purchase flow.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub Actions

## Test Coverage

### Login Tests

The login test suite covers:

- Successful login with valid credentials
- Login attempt with an invalid password
- Login attempt with an empty password
- Login attempt with an empty username

### End-to-End Shopping Test

The shopping test covers the complete user journey:

- Login
- Select a product
- Add product to cart
- Verify cart contents
- Proceed to checkout
- Enter customer information
- Verify order overview
- Complete purchase
- Verify successful order confirmation

## Running the Tests

Install dependencies:

```bash
npm install