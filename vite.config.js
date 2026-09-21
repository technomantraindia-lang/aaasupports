import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Keep assets rooted at the deployment origin so they also load on
  // deep links such as /services/site-supervision.
  base: '/',
  plugins: [react()],
})
