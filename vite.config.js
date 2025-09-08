import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  build: {
    sourcemap: true,
    // ...your other settings
  },
  plugins: [
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
