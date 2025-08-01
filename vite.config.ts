import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import RemixRouter from 'vite-plugin-remix-router'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    RemixRouter({
      // configuration options
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
})
