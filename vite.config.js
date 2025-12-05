import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 8080,
    allowedHosts: [
      // Allow all Render domains
      '*.onrender.com',

      // (Optional) Keep your old ones
      'portfolio-1-auke.onrender.com',
      'portfolio-2-hubu.onrender.com'
    ]
  }
})
