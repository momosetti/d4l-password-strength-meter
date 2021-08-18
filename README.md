[![Codacy Badge](https://app.codacy.com/project/badge/Grade/114804fdcf5c45f5befb20d0442a01e2)](https://www.codacy.com/gh/momosetti/d4l-password-strength-meter/dashboard?utm_source=github.com&utm_medium=referral&utm_content=momosetti/d4l-password-strength-meter&utm_campaign=Badge_Grade)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2ae33063-1eea-47c8-9ec1-ee1179e658b9/deploy-status)](https://app.netlify.com/sites/d4l-psm/deploys)

[![Build Status](https://app.travis-ci.com/momosetti/d4l-password-strength-meter.svg?branch=master)](https://app.travis-ci.com/momosetti/d4l-password-strength-meter)

> [Live Demo](https://d4l-psm.netlify.app)

## Project structure

```bash
d4l-password-strength-meter
├─ src
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ globalStyle.tsx
│  ├─ components
│  │  ├─ emailInput
│  │  │  └─ index.tsx
│  │  ├─ layout
│  │  │  ├─ registerFormWrapper
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ types.tsx
│  │  │  └─ sectionWrapper
│  │  │     ├─ index.tsx
│  │  │     └─ types.tsx
│  │  ├─ passwordInput
│  │  │  ├─ index.tsx
│  │  │  └─ passwordInput.test.tsx
│  │  └─ passwordStrengthLogger
│  │     ├─ index.tsx
│  │     ├─ passwordStrengthLogger.test.tsx
│  │     ├─ passwordStrengthConstraint
│  │     │  ├─ index.tsx
│  │     │  ├─ passwordStrengthConstraint.test.tsx
│  │     │  ├─ types.ts
│  │     │  └─ __snapshots__
│  │     │     └─ passwordStrengthConstraint.test.tsx.snap
│  │     └─ types.tsx
│  ├─ hooks
│  │  ├─ useDebounce.test.ts
│  │  └─ useDebounce.tsx
│  ├─ types
│  │  └─ utilsTypes.tsx
│  ├─ utils
│  │  ├─ passwordValidator.test.ts
│  │  └─ passwordValidator.tsx
│  └─ vite-env.d.ts
├─ .eslintrc.json
├─ .gitignore
├─ index.html
├─ jest.setup.js
├─ package.json
├─ README.md
├─ tsconfig.json
├─ vite.config.ts
└─ yarn.lock

```

## How to run the app

After cloning the repo. Using your preferred package manger (I use `Yarn`).

To install dependencies:

    git clone https://github.com/momosetti/d4l-password-strength-meter/ <cloned_directory>
    cd <cloned_directory>
    yarn install

For starting the dev server:

    yarn dev

For building:

    yarn build

For serving static files (after build the project):

    yarn serve

For testing:

    yarn test

Or `yarn test:w` to run test suites in watch mode.

## Tech Stack used

- SPA library: React.js (TypeScript) .

- Build tool: [Vite.js](https://vitejs.dev/)

- Style: Styled-components.

- Source control version: GIT

- Linting & Formatting: Eslint and Prettier (local Vscode configuration).

- Testing:

  - Test runner: Jest

  - React Testing library: [react-testing-library](https://testing-library.com/)
