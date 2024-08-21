import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), eslint()],
  plugins: [
    react(),
    eslint({
      // without explicit path resolve, eslint tries to lint external directories symlinked via `npm link`
      include: [
        `${path.resolve(__dirname, '')}/**/*.js`,
        `${path.resolve(__dirname, '')}/**/*.vue`,
      ],
    }),
  ],
});
