Project Overview
This is a highly composable Next.js template featuring a unique configurator designed for ultimate flexibility. The tool allows you to dynamically create, delete, and swap routes, which are automatically generated in the src/app directory. This architecture means the entire site structure is managed via the configurator, while all visual customization is handled by editing the components in src/components.
Tech Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Containerization: Docker & Docker Compose
- Deployment: Nginx
- Scripts: Makefile
Key Features
- Dynamic Routing: Use the configurator to make, delete, or swap routes instantly.
- Composable Architecture: Easily swap out sections and layouts without manual file management in src/app.
- Component-Driven UI: Complete control over the look and feel by customizing files in src/components.
- Dockerized Environment: Ready for consistent development and deployment.
Workflow
1. Configure: Use the configurator to define your site's routes and structure.
2. Customize: Edit the UI components in src/components to match your branding.
3. Deploy: Use Docker or the Makefile to manage your production environment.
Getting Started
1. Install Dependencies:
npm install
2. Run Development Server:
npm run dev
3. Build for Production:
npm run build
4. Docker Setup:
docker-compose up --build
