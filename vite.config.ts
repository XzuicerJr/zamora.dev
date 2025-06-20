import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: ['ea35-2601-8c0-d01-2d50-e49c-66a8-ac8e-bbdc.ngrok-free.app']
  }
});
