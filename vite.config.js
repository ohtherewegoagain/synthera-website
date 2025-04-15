import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Replace this with your actual repo name!
const repoName = 'synthera-website'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      external: ['@/components/ui/card.jsx']  // Externalize the card.jsx module
    }
  }
});
