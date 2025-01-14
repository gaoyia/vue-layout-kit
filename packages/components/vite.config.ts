import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import fs from "fs";
import path from "path";
import pkg from "./package.json";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
const rollupOptions = {
  external: ["vue","@vue/shared"], // 排除 vue 模块
  output: {
    // Provide global variables to use in the UMD build
    // for externalized deps
    globals: {
      vue: "Vue",
    },
  },
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ rollupTypes: true,rollupOptions:{
    } }),
    cssInjectedByJsPlugin(),
    {
      name: "write-package-file",
      writeBundle () {
        const destPath = path.resolve(__dirname, "dist", "package.json");
        pkg.name = "vue-layout-kit";
        pkg.private = false;
        fs.writeFileSync(destPath,JSON.stringify(pkg, null, 2));
      },
    },
  ],
  build:{
    target: "esnext",
    lib:{
      entry: [
        "index.ts",
        "layout-fit/layout-fit.ts",
      ],
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        const ext = format === "es" ? "mjs" : "js";
        if (entryName === "index") {
          return `${entryName}.${format}.${ext}`;
        }
        return `${entryName}/${entryName}.${format}.${ext}`;
      },
      name: "vue-layout-kit",
    },
    rollupOptions ,
  },
});
