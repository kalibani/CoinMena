import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "@honkhonk/vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
      "@/": `${path.resolve(__dirname, "src/components")}/`,
      "@common/": `${path.resolve(__dirname, "src/components/common")}/`,
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://ghapi.huchen.dev",
        changeOrigin: true,
        secure: false,
        ws: false,
      },
    },
  },
});
