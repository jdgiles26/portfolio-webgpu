# Agentic AI Coding Assistance Guidelines

Welcome, AI Agent! When you are working in this workspace (`portfolio-webgpu`), please adhere to the following strict guidelines to ensure the project remains high-quality and consistent.

## 1. Design Aesthetics (CRITICAL)
- **Visual Excellence**: Maintain the premium, dark-mode glassmorphic aesthetic established in `index.css` and `App.css`.
- **No Tailwind CSS**: Do NOT install or use Tailwind CSS unless the user explicitly requests it. Rely on the vanilla CSS design system and variables.
- **Dynamic Micro-animations**: Keep UI elements interactive. Hover effects, transitions, and subtle glows should be preserved or enhanced on new components.

## 2. WebGPU Space Embedding Rules
- **Local First**: WebGPU spaces are embedded locally from the `public/` directory (e.g., `public/lfm2.5-space`). 
- **Asset Paths**: When integrating new spaces, ensure that their compiled `index.html` uses relative paths (`./assets/...`) and that shared assets (like `.wasm` files or fonts) are correctly mapped to the root `public/` directory to avoid Vite SPA fallback errors (the "Unexpected token '<'" error).
- **Model Fetching**: Be highly cautious of any Hugging Face / ML library (like `transformers.js`) configs overriding `localModelPath` or `allowLocalModels`. Ensure they fetch from the remote HF hub unless the gigabyte model weights are explicitly hosted locally.

## 3. Tool Usage
- Prioritize native UI/UX solutions.
- When creating new WebGPU integrations, you may use `scripts/drift.js` to analyze differences between the local embedded files and the remote repository.

Please acknowledge and apply these rules for any feature additions or debugging sessions in this repository.
