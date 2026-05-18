# NetReward Landing Page

This is the standalone landing page for the NetReward ecosystem. It is built using Vite, React, TypeScript, and Vanilla CSS to ensure a premium, highly-customizable aesthetic inspired by modern Web3 and AI platforms.

## Tech Stack
*   **Vite** - Fast frontend tooling
*   **React + TypeScript** - Component architecture and type safety
*   **Vanilla CSS** - Full design control (no Tailwind) utilizing CSS variables and modular stylesheets
*   **Lucide React** - Vector icons

## Folder Structure
```
landing/
├── src/
│   ├── assets/          # Static assets like the NRT logo
│   ├── components/      # React components divided by layout, ui, and sections
│   ├── styles/          # Global CSS variables and keyframe animations
│   ├── App.tsx          # Main entry component
│   └── index.css        # Global resets and custom scrollbars
```

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The application will typically start on `http://localhost:5173`.

3.  **Build for Production**
    ```bash
    npm run build
    ```
    This generates optimized static files in the `dist/` directory, ready to be deployed to any static hosting service (e.g., Vercel, Netlify, Cloudflare Pages).

## Design System

The styling is governed by `src/styles/variables.css`. To change the core brand colors (currently centered around Cyan/Blue `var(--accent-primary)`), simply update the hexadecimal values in this file. The global "Glassmorphism" effect is achieved using backdrop filters defined in utility classes like `.glass-panel`.
