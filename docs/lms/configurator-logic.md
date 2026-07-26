# Configurator & Component Integration

This document explains how the project's configurator interacts with the UI components to dynamically generate the application structure.

## Dynamic Field Generation Logic

The system operates on a "Prop-to-Field" mapping principle. The configurator analyzes the TypeScript `interface` defined within each component to build the user interface for data entry.

### How it Works:
1.  **Interface Analysis**: The configurator scans the component's prop definitions (e.g., `NewsArticlePageProps`).
2.  **UI Mapping**: Each property in the interface is automatically transformed into an editable field in the configurator UI.
    - `string` $\rightarrow$ Text Input / Textarea
    - `string[]` $\rightarrow$ Multi-select / Dynamic List
    - `number` $\rightarrow$ Numeric Input
3.  **Dynamic Injection**: Once the user enters data in the configurator, the system generates the corresponding code in `src/app`. 

**Note**: Users do not manually edit the files in `src/components/`. The configurator handles all updates to `src/app` based on these component definitions.

## Example: News Article Page

Consider the `NewsArticlePage1` component. The configurator uses its interface to generate the following input fields:

```typescript
interface NewsArticlePageProps {
  articleTitle: string;       // Maps to a Text Input
  publishDate: string;         // Maps to a Date Picker / Text Input
  articleSummary: string;      // Maps to a Textarea
  articleContent: string | string[]; // Maps to a Rich Text Editor or Dynamic List
  backLinkText: string;        // Maps to a Text Input
}
```

### Data Flow Summary
- **Configurator UI**: User enters "Breaking News" into the `articleTitle` field.
- **Data Extraction**: The configurator captures `"Breaking News"`.
- **Code Generation**: The system generates a page in `src/app` where the `articleTitle` prop is passed the value `"Breaking News"`.

This ensures that the UI remains consistent and type-safe while providing a highly flexible, non-technical way to build pages.
