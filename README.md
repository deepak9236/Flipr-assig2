# Expense Tracker API Documentation

## Introduction
This API helps manage expenses by allowing users to register, log in, manage categories, and track spending.

## Base URL
All endpoints start with `/api`.

## User Authentication

### User Registration
- Endpoint: `/auth/signup`
- Method: POST
- Purpose: Sign up with username, email, and password.
- Response: Special code for app access.

### User Login
- Endpoint: `/auth/login`
- Method: POST
- Purpose: Log in with email and password.
- Response: Special code for app access.

## Expense Categories Management

### Retrieve All Expense Categories
- Endpoint: `/categories`
- Method: GET
- Purpose: See all categories for expenses.

### Add New Expense Category
- Endpoint: `/categories`
- Method: POST
- Purpose: Create a new expense category.
- Response: Success message.

### Delete Expense Category
- Endpoint: `/categories/{categoryId}`
- Method: DELETE
- Purpose: Remove a category.

## Expense Management

### Add New Expense
- Endpoint: `/expenses`
- Method: POST
- Purpose: Add a new expense with details.
- Response: Success message.

### Retrieve User's Expenses
- Endpoint: `/expenses`
- Method: GET
- Purpose: See a list of all expenses.

### Group User Expenses
- Endpoint: `/expenses/grouped`
- Method: GET
- Purpose: Group expenses by category, optionally by month.
- Response: Grouped expenses data.

### Monthly Expense Data for Specific Category
- Endpoint: `/expenses/category/{categoryId}/monthly`
- Method: GET
- Purpose: See total expenses per day for a category.
- Response: Monthly expense data.

## Validation
- Input data is validated for safety.

## Authentication Middleware
- Validates login for security.

## Pagination
- Expenses are paginated for easier browsing.

## Documentation
- Detailed guide provided for API usage.
