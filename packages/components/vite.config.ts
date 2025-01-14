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
        const packageDestPath = path.resolve(__dirname, "dist", "package.json");
        pkg.name = "vue-layout-kit";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete pkg.private;
        fs.writeFileSync(packageDestPath,JSON.stringify(pkg, null, 2));
        const licenseFile = path.resolve(__dirname,"../../", "LICENSE");
        const licenseDistFile = path.resolve(__dirname, "dist", "LICENSE");
        const readmeFile = path.resolve(__dirname,"../../", "README.md");
        const readmeDistFile = path.resolve(__dirname, "dist", "README.md");
        fs.copyFileSync(licenseFile, licenseDistFile);
        fs.copyFileSync(readmeFile, readmeDistFile);
      },
    },
  ],
  build:{
    target: "esnext",
    lib:{
      entry: [
        "index.ts",
      ],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      // fileName: (format, entryName) => {
      //   const ext = format === "es" ? "mjs" : "js";
      //   if (entryName === "index") {
      //     return `${entryName}.${format}.${ext}`;
      //   }
      //   return `lib/${entryName}/index.${format}.${ext}`;
      // },
      name: "vue-layout-kit",
    },
    rollupOptions ,
  },
});
