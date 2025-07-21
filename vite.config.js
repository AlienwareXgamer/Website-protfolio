import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@utils": resolve(__dirname, "src/utils"),
      "@config": resolve(__dirname, "src/config"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
  build: {
    // Enable source maps for production debugging
    sourcemap: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue"],
          animations: ["gsap", "lottie-web", "vue3-lottie"],
          utils: ["@vueuse/core", "@vueuse/motion"],
        },
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
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
