import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: ['4d84-2601-8c0-d01-2d50-e8b2-ffb9-4799-a660.ngrok-free.app']
  }
});
