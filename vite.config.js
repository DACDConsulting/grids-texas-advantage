import { defineConfig } from "vite";

// Bolt and StackBlitz serve the dev server from the project root.
// A relative base makes that preview report "no preview available".
export default defineConfig({
  base: "/",
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true
  }
});
