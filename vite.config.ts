import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

const svgDirs = [path.resolve(process.cwd(), "public/icons")];

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      tsconfigPaths(),
      createSvgIconsPlugin({
         iconDirs: svgDirs,
         symbolId: "icon-[dir]-[name]",
         inject: "body-last",
         customDomId: "__svg__icons__dom__",
      }),
   ],
   server: {
      port: 3000,
   },
   resolve: {
      alias: {
         "@/": `${path.resolve(__dirname, "src")}/`,
         "@/components/": `${path.resolve(__dirname, "src/components")}/`,
         "@/styles/": `${path.resolve(__dirname, "src/styles")}/`,
         "@/lib/": `${path.resolve(__dirname, "src/lib")}/`,
         "@/utils/": `${path.resolve(__dirname, "src/utils")}/`,
         "@/constants/": `${path.resolve(__dirname, "src/constants")}/`,
         "@/config/": `${path.resolve(__dirname, "src/config")}/`,
      },
   },
   base: "/",
   build: {
      outDir: "dist",
      sourcemap: true,
   },
});
