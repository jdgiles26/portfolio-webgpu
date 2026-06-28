import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Custom middleware plugin to return 404 for missing assets/models instead of SPA fallback
const fallback404Plugin = () => ({
  name: 'fallback-404',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      const url = req.url || '';
      
      // If it looks like a model asset or config file, ensure real 404 instead of SPA fallback
      const isAsset = /\.(json|onnx|bin|wasm|wasm\.map|onnx\.map)$/.test(url) || url.includes('/models/');
      
      if (isAsset) {
        const cleanUrl = url.split('?')[0];
        const filePath = path.join(__dirname, 'public', cleanUrl);
        
        if (!fs.existsSync(filePath)) {
          res.statusCode = 404;
          res.end('Not Found');
          return;
        }
      }
      next();
    });
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), fallback404Plugin()],
})
