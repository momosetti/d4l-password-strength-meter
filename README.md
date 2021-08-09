## Project structure:

     📦d4l-password-strength-meter
     ┣ 📂src
     ┃ ┣ 📂components
     ┃ ┃ ┣ 📂emailInput
     ┃ ┃ ┃ ┗ 📜index.tsx
     ┃ ┃ ┣ 📂layout
     ┃ ┃ ┃ ┣ 📂registerFormWrapper
     ┃ ┃ ┃ ┃ ┣ 📜index.tsx
     ┃ ┃ ┃ ┃ ┗ 📜types.tsx
     ┃ ┃ ┃ ┗ 📂sectionWrapper
     ┃ ┃ ┃ ┃ ┣ 📜index.tsx
     ┃ ┃ ┃ ┃ ┗ 📜types.tsx
     ┃ ┃ ┣ 📂passwordInput
     ┃ ┃ ┃ ┣ 📜index.tsx
     ┃ ┃ ┃ ┗ 📜passwwordInput.test.tsx
     ┃ ┃ ┗ 📂passwordStrengthLogger
     ┃ ┃ ┃ ┣ 📂passwordStrengthContraint
     ┃ ┃ ┃ ┃ ┣ 📂__snapshots__
     ┃ ┃ ┃ ┃ ┃ ┗ 📜passwordStrengthConstraint.test.tsx.snap
     ┃ ┃ ┃ ┃ ┣ 📜index.tsx
     ┃ ┃ ┃ ┃ ┣ 📜passwordStrengthConstraint.test.tsx
     ┃ ┃ ┃ ┃ ┗ 📜types.ts
     ┃ ┃ ┃ ┣ 📜index.tsx
     ┃ ┃ ┃ ┣ 📜passwordStregthLogger.test.tsx
     ┃ ┃ ┃ ┗ 📜types.tsx
     ┃ ┣ 📂hooks
     ┃ ┃ ┣ 📜useDebounce.test.ts
     ┃ ┃ ┗ 📜useDebounce.tsx
     ┃ ┣ 📂types
     ┃ ┃ ┗ 📜utilsTypes.tsx
     ┃ ┣ 📂utils
     ┃ ┃ ┣ 📜passwordValidator.test.ts
     ┃ ┃ ┗ 📜passwordValidator.tsx
     ┃ ┣ 📜App.test.tsx
     ┃ ┣ 📜App.tsx
     ┃ ┣ 📜globalStyle.tsx
     ┃ ┣ 📜main.tsx
     ┃ ┗ 📜vite-env.d.ts
     ┣ 📜.eslintrc.json
     ┣ 📜.gitignore
     ┣ 📜index.html
     ┣ 📜jest.setup.js
     ┣ 📜package.json
     ┣ 📜README.md
     ┣ 📜tsconfig.json
     ┣ 📜vite.config.ts
     ┗ 📜yarn.lock

## How to run the app:

After clonging the repo. Using your prefred package manger (I used `Yarn`).

To install dependencies;

    cd <cloned_directory>
    yarn install

For starting the dev server:

    yarn dev

For testing:

    yarn test

Or `yarn test:w` to run test suites in watch mode.

## Tech Stack used:

- SPA library: React.js (TypeScript) .

- Build tool: [Vite.js](https://vitejs.dev/)

- Style: Styled-components.

- Source control version: GIT

- Linting & Formating: Eslint.

- Testing:

- Test runner: Jest

- React Testing library: [react-testing-library](https://testing-library.com/)
