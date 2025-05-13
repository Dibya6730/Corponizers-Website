import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz', // optional, defaults to '.gz'
      threshold: 10240, // only assets >10kb are compressed
      filter: /\.(js|mjs|json|css|html)$/i, // compress these file types
}),
],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-bootstrap'] // example
        }
      }
    }
  },
})
