# Purpose

This file defines the standards and expectations for all AI-assisted work in this repository.
Claude (or any AI contributing code) must adhere strictly to these guidelines when creating, updating, or refactoring files.

## General Expectations

- All work must be **production-quality** and follow **best practices** for readability, performance, and maintainability..
- Every change should be **cohesive, justified, and minimal** — avoid unrelated edits in the same commit.
- Explanations should be concise and professional.

## Project Rules

- Use custom hooks for reusable logic
- Use the Context API for state management when needed
- Use memo and callback hooks for performance optimization when necessary
- Use proper list rendering with keys
- Prefer composition over inheritance
- No use of `any` or `Function` types — always use explicit, strongly-typed interfaces or function signatures.
- Only create additional components if it makes sense from following the code quality principles
- Follow best practices for the nextjs app router

## Code Quality

- Code must be modular, readable, and easy to maintain.
- Use clear naming conventions (camelCase for variables, PascalCase for components).
- Avoid magic numbers, duplication, and deeply nested conditionals.
- All external dependencies must be justified and minimal.

## Libraries

- shadcn
- react-hook-form with zod

## Project Structure

- shadn components should be placed in `app/components/ui`
- helpers should be placed in `app/helpers`
- hooks should be placed in `app/hooks`
