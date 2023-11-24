import path from "path";

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@router": path.resolve(__dirname, "src/router"),
      "@guide": path.resolve(__dirname, "src/views/_guide"),
    },
  },
};
