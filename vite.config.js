import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Remember to change 'your-repo-name' to your actual repo name
  base: '/is117-TriadicBalletMuseum/', 
  root: './', // Ensures Vite looks at the root for entry points
  build: {
    rollupOptions: {
      input: {
        // Pointing to the new location in src/pages/
        main: resolve(__dirname, 'src/pages/title.html'), 
        home: resolve(__dirname, 'src/pages/home.html'),
        bauhaus: resolve(__dirname, 'src/pages/bauhaus.html'),
        biography: resolve(__dirname, 'src/pages/biography.html'),
        archive: resolve(__dirname, 'src/pages/archive.html'),
        gallery: resolve(__dirname, 'src/pages/gallery.html'),
      },
    },
  },
})