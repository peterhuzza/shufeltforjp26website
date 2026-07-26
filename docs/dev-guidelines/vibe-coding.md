# Vibe Coding Guidelines

"Vibe Coding" in this project is a collaborative development style where you and the AI work together to build features by focusing on high-level intent, architectural patterns, and the "vibe" of the existing codebase, rather than manual micro-management of every line.

## Core Principles

### 1. The Interface is the Contract
The most critical element for "vibe coding" to work with our configurator is the **TypeScript Interface**.
- When adding a new feature or page type, always define a clear `interface` for the props. These define the pieces of content on your page, such as image names or raw text content.
- The AI uses these interfaces to build both the components and the data entry logic.
- If the interface is correct, the configurator picks it up dynamically in the page builder. After editing a component, simply press the refresh button, and the interface will appear in the configurator.

### 2. Pattern Matching & Context Management
The AI is highly capable of mimicking the existing style. To get the best "vibe":
- **Provide Context**: Point the AI to existing components (e.g., "Build this like `HomePage1`").
- **Keep Components Granular**: To keep context small and efficient (especially for smaller on-device models), avoid putting all custom components into a single Page Type file in `src/components/`.
- **Split Components**: Instead of creating an entire page in one file, split it into smaller, modular components.

### 3. Component Composition
Avoid monolithic pages by embracing the existing modularity:
- Build small, reusable sub-components in `src/components/subcomponents/`.
- Compose these into larger sections in `src/components/Midsection/` or `src/components/HeroSection/`.
- Finally, assemble these sections into "Page Types" in `src/components/pageType/`.

### 4. AI Workflow for New Features
To vibe code a new feature efficiently:
1.  **Contextualize**: Describe what you want to build and show the AI 1-2 relevant files.
2.  **Define the Shape**: Ask the AI to define the `interface` first. Review and approve the data shape.
3.  **Generate**: Let the AI build the component using that interface.
4.  **Verify**: Check that the component renders correctly and that the props match the interface.

## Why this works
By following these guidelines, you allow the AI to handle the heavy lifting of boilerplate and styling while you maintain control over the "vibe"—the actual functionality and user experience. 

**Flexibility**: You are not restricted to AI generation; you can write components yourself or port existing code. As long as you define the interface and correctly pass those props into your component's return statement (e.g., `<Component prop={data.prop} />`), it will work seamlessly with the Next.js environment and the configurator.
