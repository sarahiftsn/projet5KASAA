import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/projet5KASAA/', // Remplacez par le nom de votre dépôt GitHub
  plugins: [react()],
})
