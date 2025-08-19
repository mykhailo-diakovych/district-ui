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
});
