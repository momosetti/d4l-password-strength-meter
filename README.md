> [Live Demo](https://d4l-psm.netlify.app)

## Project structure:

     📦d4l-password-strength-meter
     ┣ 📂src
     ┃ ┣ 📂components
     ┃ ┣ 📂hooks
     ┃ ┣ 📂types
     ┃ ┣ 📂utils
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

After cloning the repo. Using your preferred package manger (I use `Yarn`).

To install dependencies;

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

## Tech Stack used:

- SPA library: React.js (TypeScript) .

- Build tool: [Vite.js](https://vitejs.dev/)

- Style: Styled-components.

- Source control version: GIT

- Linting & Formatting: Eslint and Prettier (local Vscode configuration).

- Testing:

  - Test runner: Jest

  - React Testing library: [react-testing-library](https://testing-library.com/)
