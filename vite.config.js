// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import purgecss from "vite-plugin-purgecss";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
    }),

    purgecss({
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      // defaultExtractor lets PurgeCSS catch hashed CSS-Module class names
      defaultExtractor: (content) => {
        return content.match(/[A-Za-z0-9-_:/]+/g) || [];
      },
      safelist: [
        // MUI & any state classes
        /^Mui/,
        "active",

        // Swiper’s core and fade classes
        /^swiper/,

        // Your CSS-Module selectors (hashed names will be captured by defaultExtractor)
        /^slide/,
        /^slide-image/,
        /^text_content/,
      ],
    }),
  ],

  resolve: {
    alias: { "@mui/styled-engine": "@mui/styled-engine-sc" },
    dedupe: ["react", "react-dom", "styled-components"],
  },

  optimizeDeps: {
    include: ["styled-components", "@mui/styled-engine-sc"],
  },

  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          mui: ["@mui/material"],
        },
      },
    },
  },
});
