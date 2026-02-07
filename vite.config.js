import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tailwind plugin import korun

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Eikhane plugin ta add korun
  ],
})