import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(() => {
  // Determine base path based on environment
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
  const base = isGitHubPages ? '/Website-Portfolio/' : '/';

  return {
    plugins: [vue()],
    base,
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      sourcemap: false,
      minify: "esbuild",
      target: "es2015",
      rollupOptions: {
        output: {
          // Let Vite handle chunking automatically
          manualChunks: undefined,
        },
      },
      // Ensure assets are properly handled
      assetsDir: 'assets',
    },
    server: {
      port: 5173,
      open: true,
    },
    preview: {
      port: 4173,
      open: true,
    },
  };
});
