import { defineConfig } from "vite";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production" ? "/mediapipe-example-pose/" : "/",
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./src/index.html",
      },
    },
  },
  server: {
    open: true,
  },
});
