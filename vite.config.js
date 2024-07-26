import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,            // Opens the browser when the server starts
    host: '0.0.0.0',       // Allow access from the network
    strictPort: true,      // Fail if the port is already in use
    https: false,          // Enable HTTPS (requires a certificate)
    proxy: {               // Proxy specific requests
      '/api': 'http://localhost:5000'
    },
  },
});