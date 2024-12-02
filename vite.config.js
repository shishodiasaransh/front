import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from Render's environment
    port: process.env.PORT || 3000, // Use the PORT environment variable
  },
})
