import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- 1. Agrega esta importación

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- 2. Agrega el plugin aquí
  ],
})