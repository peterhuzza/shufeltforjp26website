# Vibe Coding Guidelines

"Vibe Coding" in this project is a collaborative development style where you and the AI work together to build features by focusing on high-level intent, architectural patterns, and the "vibe" of the existing codebase, rather than manual micro-management of every line.

## Core Principles

### 1. The Interface is the Contract
The most important thing for "vibe coding" to work with our configurator is the **TypeScript Interface**. 
- When adding a new feature or page type, always define a clear `interface` for the props. these will be the pieces of content on your page like the name of a picture or the raw text content on your website
- The AI will use these interfaces to build both the components and the data entry logic.
- If the interface is correct, the configurator should pick it up in the page builder dynamically which means when you make edits to the component press the refresh button and the interface should pop up in the configurator

### 2. Pattern Matching
The AI is highly capable of mimicking the existing style. To get the best "vibe":
- Provide context by pointing the AI to existing components (e.g., "Build this like `HomePage1`").
- we should try to keep components carpentmentalized as to keep context small when working 
with ai moddels this esp helps when using small on device moddels. in `src/components/`
instead of creating an entire page and putting all of its custom components in one pageType component instead consider spliting up components

### 3. Component Composition
Instead of writing monolithic pages, "vibe" with the existing modularity:
- Build small, reusable sub-components in `src/components/subcomponents/`.
- Compose these into larger sections in `src/components/Midsection/` or `src/components/HeroSection/`.
- Finally, assemble these into "Page Types" in `src/components/pageType/`.

### 4. AI Workflow for New Features
To vibe code a new feature efficiently:
1.  **Contextualize**: Tell the AI what you want to build and show it 1-2 relevant files.
2.  **Define the Shape**: Ask the AI to define the `interface` first. Review and approve the data shape.
3.  **Generate**: Let the AI build the component using that interface.
4.  **Verify**: Check that the component renders correctly and that the props match the interface.

## Why this works
By following these guidelines, you allow the AI to do the heavy lifting of boilerplate and styling while you maintain control over the "vibe"—the actual functionality and user experience. The configurator then bridges this gap, allowing non-technical users to interact with your high-quality "vibe-coded" components. you can also just write the componets yourself or copy things online and paste in the editor pretty much as long as you have your interface and you use them in the function you export inside return(<tags></tags>) its just regular nextjs and it should just work
