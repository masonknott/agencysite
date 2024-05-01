import { defineConfig } from 'vite';
import laravel from 'vite-plugin-laravel';
// Include any other necessary plugins like Vue or React depending on your setup

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css', // Path to your main CSS file
        'resources/js/app.js'    // Path to your main JavaScript file
      ],
      refresh: true
    }),
    // Include other plugins as necessary
  ],
  build: {
    rollupOptions: {
      input: {
        app: 'resources/js/app.js' // Point to your main JavaScript entry file
      }
    }
  }
});
