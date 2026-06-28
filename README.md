# WebGPU Portfolio

A dynamic, premium personal portfolio web application built with React and Vite. This portfolio showcases real-time, in-browser WebGPU experiences, starting with the `LFM2.5-VL-450M-WebGPU` embedded directly into the application.

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## Architecture

- **React & Vite**: Core framework for fast development and rendering.
- **Glassmorphic UI**: Custom CSS (`index.css` & `App.css`) for a premium, sleek dark mode aesthetic.
- **Embedded WebGPU Spaces**: The portfolio seamlessly embeds WebGPU code via iframes. The local `LFM2.5-VL-450M-WebGPU` assets are located in `public/lfm2.5-space/` and `public/assets/`.

## Managing Spaces

To add a new WebGPU space:
1. Drop your WebGPU space files into a new folder inside `public/`.
2. Ensure any absolute paths in your space's `index.html` or compiled JS files are updated to relative paths or handled via Vite's proxy/public routing so they don't 404 when embedded.
3. Add a new entry to the `SPACES` array in `src/App.tsx`.

## AI Agent Instructions

If you are using an AI coding assistant (like Antigravity) to help you develop this project, please refer to the `.agents/AGENTS.md` file for project-specific rules and guidelines.
