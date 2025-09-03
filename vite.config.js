import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: {
    sourcemap: true,
    // ...your other settings
  },
  plugins: [react()],
  resolve: {
    alias: {
      // any import of @mui/styled-engine → @mui/styled-engine-sc
      "@mui/styled-engine": path.resolve(
        __dirname,
        "node_modules/@mui/styled-engine-sc"
      ),
    },
    // make sure we don’t accidentally bundle multiple copies
    dedupe: ["react", "react-dom", "styled-components"],
  },
  optimizeDeps: {
    // pre-bundle styled-components & the MUI SC engine
    include: ["styled-components", "@mui/styled-engine-sc"],
  },
});
