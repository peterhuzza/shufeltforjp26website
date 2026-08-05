# Agent Guidelines

## Project Overview
This project is a highly composable **Next.js** and **TypeScript** template featuring a unique configurator. It allows for dynamic creation, deletion, and swapping of routes, which are automatically generated in the `src/app` directory.

## Tech Stack
- **Framework**: Next.js (App Router, v16.2.6)
- **Language**: TypeScript
- **UI Library**: React (v19.2.0)
- **Styling**: Tailwind CSS (v4) with `@tailwindcss/typography`
- **Containerization**: Docker & Docker Compose
- **Deployment**: Vercel or GitHub Pages
- **Scripts**: Makefile

## Architecture & Conventions
- **Routing**: Managed via the configurator; logic lives in `src/app/`.
- **UI Components**: Visual customization is handled in `src/components/`.
- **Core Page Templates**: Located in `src/components/pageType/` (e.g., Home, News, About).
- **Article Components**: Located in `src/components/article/`.
- **Atomic Elements**: Located in `src/components/subcomponents/`.
- **Content Rendering**: Uses `react-markdown`.

## Development Workflow
1. **Configure**: Use the configurator to define site structure.
2. **Customize**: Edit UI components in `src/components` for branding.
3. **Deploy**: Use Docker or the Makefile for production environment management.

## Key Commands
- **Install**: `npm install`
- **Docker**: `docker-compose up --build`
