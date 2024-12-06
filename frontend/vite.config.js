import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000", // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});