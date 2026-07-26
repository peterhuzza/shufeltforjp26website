# Configurator & Component Integration

This document explains how the project's configurator interacts with the UI components to dynamically generate the application structure.

## Dynamic Field Generation Logic

The system operates on a "Prop-to-Field" mapping principle. The configurator analyzes the TypeScript `interface` defined within each component to build the user interface for data entry.

### How it Works:
1.  **Interface Analysis**: The configurator scans the component's prop definitions (e.g., `NewsArticlePageProps`).
2.  **UI Mapping**: Each property in the interface is automatically transformed into an editable field in the configurator UI.
    - `string` $\rightarrow$ Text Input / Textarea
    - `string[]` $\rightarrow$ Markdown input / Rich Textarea 

these are the main two types of interfaces that are edited that the configurator reads
theses have a simple text box for things like names or names of files for importing images from the public dir 
all the user does is enter the name of the file Ex: example.jpg and the configurator 
+ nextjs will handle everything else it will grab the corresponding image from the public dir
the user should have already put the image in the public dir if theses issues that may be a 
common problem to check for

3.  **Dynamic Injection**: Once the user enters data in the configurator, the system generates the corresponding code in `src/app`. 

**Note**: Users do not manually edit the files in `src/components/`. The configurator handles all updates to `src/app` based on these component definitions.

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



### There will be edge cases

example news page Once


```typescript
interface NewsArticlePageProps {
  articleTitle: string;
  publishDate: string;
  articleSummary: string;
  // FIX: Allow string OR string[] so GenPage data passes through
  articleContent: string | string[];
  backLinkText: string;
}
```
there are special functions of the configurator like an article editor 
for blogging functionality which uses a git based workflow ( CICD/github actions ) which 
new articles get "published" through git and then gets published to the public facing website


### Where is this saved

builder_config.json



#### what the basic configurator saves

this is what a new base template looks like
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

we dont edit this but this explains where the articles and content are saved for the 
configurator




