import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    //vitest configuration
     globals: true,
    environment: 'jsdom',
  }
})
