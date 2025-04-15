import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Replace this with your actual repo name!
const repoName = 'synthera-website'

export default defineConfig({
  plugins: [react()],
});
