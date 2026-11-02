import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In dev, /api is proxied to the Nest server in ./server (npm run start:dev there).
// host: true lets the app open on http://127.0.0.1:5173 as well as http://localhost:5173
// (Chrome keeps a separate zoom level for each address).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: { '/api': 'http://localhost:3001' },
  },
});
