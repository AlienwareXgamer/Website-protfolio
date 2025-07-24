import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === "production" ? "/Website-protfolio/" : "/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    // Fix crypto-hash build issues
    sourcemap: false,
    minify: "esbuild",
    target: "esnext",
    rollupOptions: {
      output: {
        // Let Vite handle chunking automatically
        manualChunks: undefined,
      },
    },
  },
  define: {
    // Fix crypto-hash issues in production
    global: "globalThis",
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
});
