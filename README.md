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
- five components: `Button`, `Card`, `Checkbox`, `Input`, and `ListItem`
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

### Button

- variants: `primary`, `neutral`, `subtle`
- sizes: `sm`, `md`, `lg`
- disabled state
- `ariaLabel` prop for accessibility
- Storybook stories for common usage examples

### Card

- container component that wraps any children content
- Storybook stories

### Checkbox

- `label` and `checked` props
- disabled state
- checked state styles
- `ariaLabel` prop for accessibility (falls back to `label`)
- Storybook stories

### Input

- controlled text input with `value` and `onChange`
- `placeholder` and `disabled` props
- Storybook stories

### ListItem

- composes `Checkbox` and `Button` internally
- `label` and `checked` props
- `onToggle`, `onEdit`, and `onDelete` callbacks
- `ariaLabel` on the internal checkbox
- Storybook stories

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

Given more time, four areas would be prioritised:

**Feature-level components** — build `TaskList` and `ChecklistApp` that compose the design system primitives into a working product. This is where state management and business logic would be introduced, keeping that separation clean from the presentational layer below.

**Expanded Storybook documentation** — add more realistic edge case stories, such as a `ListItem` with a very long task name or an empty `Card` state. Good Storybook documentation makes the design system genuinely useful for other developers.

**Automated testing** — as the component library grows, manual Storybook verification becomes insufficient. Component tests would catch regressions early and make refactoring safer, especially for shared components like `Checkbox` and `Button`.

**Dark mode** — implement using `@media (prefers-color-scheme: dark)`. The token system is already structured for this and would only require overriding CSS custom properties in a media query, without touching any component code. This is exactly the kind of scalability a well-designed token system enables.

## Notes

This is an exploration project, so the system is intentionally evolving. Some decisions may change as the architecture becomes clearer through experimentation and iteration.
