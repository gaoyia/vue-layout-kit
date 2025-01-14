import { spawn } from "child_process";
import { projectRoot } from "./path";
import type { TaskFunction } from "gulp";
export const withTaskName = <T extends TaskFunction>(name: string, fn: T): T => {
  return Object.assign(fn, { displayName: name });
};
export const run = async (cmd: string) => {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, {
      cwd: projectRoot,
      shell: true,
      stdio: "inherit", // 将子进程输出共享到父进程的控制台
      windowsHide: true,
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
};
