# Configurator & Component Integration

This document explains how the project's configurator interacts with the UI components to dynamically generate the application structure.

## Dynamic Field Generation Logic

The system operates on a "Prop-to-Field" mapping principle. The configurator analyzes the TypeScript `interface` defined within each component to build the user interface for data entry.

### How it Works:
1.  **Interface Analysis**: The configurator scans the component's prop definitions (e.g., `NewsArticlePageProps`).
2.  **UI Mapping**: Each property in the interface is automatically transformed into an editable field in the configurator UI.
    - `string` $\rightarrow$ Text Input / Textarea
    - `string[]` $\rightarrow$ Markdown input / Rich Textarea 
    - **File Assets**: Simple text boxes are used for names or filenames for importing images. The user enters the filename (e.g., `example.jpg`), and the configurator (along with Next.js) resolves the corresponding image from the `public/` directory. Users are responsible for ensuring the image exists in the `public/` folder.
3.  **Dynamic Injection**: Once the user enters data in the configurator, the system generates the corresponding code in `src/app`. 

**Development Note**: This system is designed to be developer-friendly. While the configurator handles the generation of pages in `src/app`, you have full freedom to edit and build out the components in `src/components/`. As long as the interfaces are correctly set up and the values are properly passed and used within the component, you can build the site entirely within a "Page Type" component or define custom sub-components that are then consumed by those Page Type components. These serve as the root components that the configurator uses to assemble the final pages.

## Example: Home Page

Consider the `HomePage1` component. The configurator uses its complex nested interfaces to generate various data entry modules:

```typescript
interface HomeProps {
  aboutMe: AboutMeData;
  midsectionContent: MidsectionData;
}

interface AboutMeData {
  moto: string;
  backgroundSrc: string;
  imageSrc: string;
  altText: string;
  emblemSrc: string;
  emblemAlt: string;
  textunderbutton: string;
  primaryLinkHref: string;
  primaryLinkLabel: string;
  secondaryLinkHref: string;
  secondaryLinkLabel: string;
}

interface MidsectionData {
  mapSrc: string;
  content: string | string[];
}
```

### Data Flow Summary
- **Configurator UI**: The user sees grouped sections (e.g., "About Me", "Midsection"). For `backgroundSrc` or `imageSrc`, the user simply enters the filename (e.g., `hero-bg.jpg`).
- **Data Extraction**: The configurator captures the filename and the associated text fields (like `moto`).
- **Code Generation**: The system generates a page in `src/app` where these values are passed to `HomePage1`. Next.js then resolves the image paths from the `public/` directory.

This ensures that complex, multi-part components can be configured by non-technical users while maintaining strict type safety for the generated code.

## Edge Cases & Special Features

### News & Blogging Workflow
While standard pages are generated via the configurator, specialized functionality like the **Article Editor** handles a different workflow:
- **Git-based Workflow**: New articles are "published" through a Git-based CI/CD pipeline (GitHub Actions).
- **Public Facing**: Once pushed through the workflow, articles are automatically published to the public-facing website.

## Data Persistence

### builder_config.json
The configurator's state is persisted in `builder_config.json`. 

#### Basic Configurator Schema
This JSON structure illustrates a new base template. It defines global data, page selections, route mappings, and the content for specific routes:

```json
{
    "global_data": {
        "candidateName": "Jane Doe",
        "campaignName": "Jane for Council",
        "email": "",
        "facebookUrl": "",
        "instagramUrl": "",
        "tiktokUrl": "",
        "blueskyUrl": "",
        "twitterUrl": "",
        "volunteerUrl": ""
    },
    "selections": {
        "home": "AboutMePage1"
    },
    "route_data": {
        "home": {
            "title": "",
            "content": [],
            "imageSrc": ""
        }
    },
    "route_names": {
        "1": "Home Page"
    },
    "route_map": {
        "1": "home"
    },
    "hidden": {
        "home": false
    },
    "articles": []
}
```

This file acts as the source of truth for the configurator, defining where articles and content are stored without requiring manual edits to the underlying component logic.
