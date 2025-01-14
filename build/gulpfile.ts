// import { series, parallel } from "gulp";
import { series } from "gulp";
import {  run, withTaskName } from "./utils";
import { mkdir, rmDir } from "./utils/fs";
export default series(
  withTaskName("clean", async () => {
    // nodejs 删除 dist 文件夹
    await rmDir("./dist");
  }),
  withTaskName("build", async () => {
    run("pnpm run --filter ./packages --parallel build"); // 并行执行 packages 项目下的 build 命令
  }),
);
