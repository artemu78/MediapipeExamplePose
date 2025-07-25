# MediaPipe Pose Detection - Vite Setup

This project has been configured with Vite to build TypeScript into a dist folder.

## Setup Complete ✅

The following files have been created/configured:

- `package.json` - Contains build scripts and dependencies
- `vite.config.js` - Vite configuration for building from src to dist
- `tsconfig.json` - TypeScript configuration (relaxed for MediaPipe compatibility)
- `src/index.html` - Updated with proper HTML structure and TypeScript import

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project to dist folder
- `npm run preview` - Preview the built project
- `npm run build-check` - Build with TypeScript type checking (may have MediaPipe import errors)

## Project Structure

```
src/
  ├── index.html    # Main HTML file
  ├── index.ts      # TypeScript source code
  └── index.css     # Styles

dist/               # Built output (generated by npm run build)
  ├── index.html    # Processed HTML
  └── assets/       # Bundled JS and CSS files
```

## Usage

1. **Development**: Run `npm run dev` to start the development server
2. **Build**: Run `npm run build` to create production build in dist folder
3. **Preview**: Run `npm run preview` to preview the built version

The TypeScript file will be bundled and optimized into the dist folder when you run the build command.
