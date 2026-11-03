import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In dev, /api is proxied to the live backend so the chat works without running the Nest server locally.
// To use a local server instead: set VITE_PROXY_TARGET=http://localhost:3001 (npm run start:dev in ./server).
// host: true lets the app open on http://127.0.0.1:5173 as well as http://localhost:5173
// (Chrome keeps a separate zoom level for each address).
const target = process.env.VITE_PROXY_TARGET || 'https://chatbot.fsd2cloud.com';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: { '/api': { target, changeOrigin: true, secure: true } },
  },
});
