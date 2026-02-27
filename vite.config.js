import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necesario para GitHub Pages: la app se sirve en https://<user>.github.io/encuesta-brief/
  base: '/encuesta-brief/',
})
