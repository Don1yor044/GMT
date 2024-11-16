import { defineConfig } from "vite"; // To'g'ri import
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
});
