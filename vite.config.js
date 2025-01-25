import { defineConfig } from 'vite'
import VitePluginSitemap  from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  build: {
    outDir: 'dist',  
  },
  plugins: [
    react(),
    VitePluginSitemap({
      robotsTxt: '/public/robots.txt',
    }),
  ],
})
