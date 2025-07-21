import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "build/**", "*.min.js"], // Global ignores at the top level
  },
  js.configs.recommended,
  ...vue.configs["flat/essential"],
  prettier,
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        console: "readonly",
        IntersectionObserver: "readonly",
        MutationObserver: "readonly", // Added this
        fetch: "readonly", // Added this
        setTimeout: "readonly",
        clearTimeout: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        self: "readonly", // Added for web workers/service workers
        global: "readonly", // Added for Node.js compatibility
        Element: "readonly", // Added for DOM elements
        SVGElement: "readonly", // Added for SVG elements  
        MathMLElement: "readonly", // Added for MathML elements
        // Node.js globals
        process: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "warn",
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["vite.config.js", "copy_icons.js"],
    languageOptions: {
      globals: {
        __dirname: "readonly",
        console: "readonly",
        process: "readonly",
      },
    },
  },
];
