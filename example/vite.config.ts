import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 8000
  },

  plugins: [
    vue()
  ],

  resolve: {
    alias: {
      "@": resolve(import.meta.dir, "./src")
    }
  }
});
