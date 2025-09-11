import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
    }),

    // Purge only your global CSS, not modules
    purgecss({
      content: ["./index.html", "./src/**/*.jsx"],
      css: ["./src/index.css"], // <<— only purge this file
      safelist: [
        // you can still safelist any globals you need:
        /^Mui/,
        /^slick/,
        "active",

        // if you ever import Swiper CSS here
        /^swiper/,
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
