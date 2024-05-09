import { defineConfig } from 'vite';
import { ReactPluginOptions } from '@vitejs/plugin-react';

// Vite configuration for a React project
const config = defineConfig({
  plugins: [
    // Configure the @vitejs/plugin-react plugin with default options
    react({
      // Optional: customize the plugin options
      // See https://www.npmjs.com/package/@vitejs/plugin-react#options for more details
      ...<ReactPluginOptions>,
    }),
  ],
});

export default config;
