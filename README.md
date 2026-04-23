# Design System Exploration

This project is a personal learning space for exploring how to build a scalable design system with React and TypeScript.

The goal is not just to make individual components look good, but to understand how a system grows in a structured way through reusable tokens, consistent styling, clear component APIs, documentation, and accessibility-minded decisions.

## Purpose

This project is focused on learning how to:

- create reusable UI components
- define and organize design tokens
- connect design decisions to code in a consistent way
- document components in Storybook
- build a foundation that can scale over time

## Current Scope

Right now the project includes:

- a token layer for colors, spacing, radius, borders, and typography
- global styles in `src/styles/globals.css`
- a `Button` component with variants and sizes
- Storybook stories for component exploration and documentation
- a Vite-based React + TypeScript development setup

## Tech Stack

- React
- TypeScript
- Vite
- Storybook
- CSS Modules
- CSS custom properties
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development app:

```bash
npm run dev
```

Start Storybook:

```bash
npm run storybook
```

Build the app:

```bash
npm run build
```

Build the Storybook site:

```bash
npm run build-storybook
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
.
├── .storybook/            # Storybook configuration
├── src/
│   ├── components/        # Reusable UI components
│   ├── styles/            # Global styles and CSS variables
│   ├── tokens/            # Design tokens in TypeScript
│   ├── App.tsx            # Simple app sandbox
│   └── main.tsx           # App entry point
├── package.json
└── README.md
```

## Component Status

The first component in the system is `Button`.

Current `Button` features:

- variants: `primary`, `neutral`, `subtle`
- sizes: `sm`, `md`, `lg`
- disabled state
- Storybook stories for common usage examples

## Design System Approach

This project is being built from the inside out:

- tokens first, so visual decisions are reusable
- components second, so UI patterns stay consistent
- documentation alongside development, so the system stays understandable

The system currently mixes TypeScript token files with CSS custom properties. That makes it easier to experiment while learning how to bridge design decisions between logic and styling.

## Learning Goals

This project is helping me explore questions like:

- how should design tokens be structured?
- when should styles live in CSS versus TypeScript?
- what makes a component API scalable?
- how can Storybook support documentation and testing?
- how do accessibility and consistency shape component design?

## Next Steps

Likely next areas to expand:

- add more foundational components such as `Input`, `Card`, and `Tag`
- improve token coverage and naming consistency
- strengthen accessibility patterns
- add more Storybook docs and controls
- introduce tests for components and behavior
- define clearer conventions for scaling the system

## Notes

This is an exploration project, so the system is intentionally evolving. Some decisions may change as the architecture becomes clearer through experimentation and iteration.
