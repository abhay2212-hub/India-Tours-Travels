import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hotels: resolve(__dirname, 'hotels.html'),
        tours: resolve(__dirname, 'tours.html'),
        rentals: resolve(__dirname, 'rentals.html'),
        story: resolve(__dirname, 'story.html'),
      }
    }
  }
})
