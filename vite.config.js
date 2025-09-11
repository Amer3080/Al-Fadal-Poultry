import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
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
  plugins: [
    purgecss({
      content: ["./index.html", "./src/**/*.jsx"], // Adjust paths to match your project
      css: ["./src/index.css"],
      safelist: [
        /^Mui/, // MUI classes
        /^slick/, // Slick carousel classes
        "active", // Any active state class
        /^swiper/, // ✅ Keep all Swiper classes
        /^swiper-slide/,
        /^swiper-wrapper/,
        /^swiper-pagination/,
        /^swiper-button/,
        /^swiper-fade/,
        /^slide/, // ✅ keep .slide
        /^slide-image/, // ✅ keep .slide-image
        /^text_content/, // ✅ keep .text_content
      ],
    }),
    react(),
    visualizer({
      open: true, // open report in browser
      filename: "stats.html", // report filename
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
    dedupe: ["react", "react-dom", "styled-components"],
  },
  optimizeDeps: {
    // pre-bundle styled-components & the MUI SC engine
    include: ["styled-components", "@mui/styled-engine-sc"],
  },
});
