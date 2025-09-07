# GEMINI.md

## Project Overview

This project, "cute-kit," is a React and TypeScript-based component library built with Vite. It uses Storybook for interactive component development and demonstration. The project is structured to support the creation of a design system with individual components, each with its own styles, stories, and implementation.

The codebase is written in TypeScript and follows modern React practices, including the use of functional components and hooks. The styling is done using CSS with CSS variables for theming, as seen in the `src/styles/vars.css` file.

## Building and Running

To get started with this project, you'll need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    This will start a Vite development server and open the application in your browser.
    ```bash
    npm run dev
    ```

3.  **Run Storybook:**
    This will start the Storybook server, which is the primary way to view and develop the components.
    ```bash
    npm run sb
    ```

4.  **Build the project:**
    This will create a production-ready build of the application in the `dist` folder.
    ```bash
    npm run build
    ```

5.  **Lint the project:**
    This will run ESLint to check for any code quality issues.
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Component Structure:** Components are organized into individual folders within `src/components`. Each component folder contains the component's source code (`.tsx`), styles (`.css`), and Storybook stories (`.stories.tsx`).
*   **Styling:** The project uses CSS Modules for component-level styling, with global styles and CSS variables defined in `src/styles/index.css` and `src/styles/vars.css`.
*   **Naming Conventions:** Component files are named in PascalCase (e.g., `Button.tsx`), while their corresponding styles and stories are in lowercase (e.g., `button.css`, `Button.stories.tsx`).
*   **TypeScript:** The project uses TypeScript for static typing. Pay attention to the existing types and interfaces when adding new components or modifying existing ones.
*   **Storybook:** Every component should have a corresponding Storybook story to document its usage and variations. Stories are written in CSF (Component Story Format) and are located alongside the component.
*   **Class Names:** The `class-names.ts` helper is used for conditionally applying CSS classes.
*   **Committing:** (TODO: Add information about commit message conventions if any).
