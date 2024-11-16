import path from "path";

export default {
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};
