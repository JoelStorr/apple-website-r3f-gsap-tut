import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/apple-website-r3f-gsap-tut",
  plugins: [react()],
});
