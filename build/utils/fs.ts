import fs from "node:fs/promises";
import { projectRoot } from  "./path";
import path from "node:path";
// 递归删除文件夹
export async function rmDir (folderPath: string): Promise<void> {
  folderPath = path.resolve(projectRoot, folderPath);
  try {
    await fs.rm(folderPath, { recursive: true, force: true });
  } catch (err) {
    console.error(`Error while deleting ${folderPath}.`, err);
  }
}
// 创建目录
export async function mkdir (folderPath: string): Promise<void> {
  folderPath = path.resolve(projectRoot, folderPath);
  try {
    await fs.mkdir(folderPath, { recursive: true });
    console.log(`Successfully created ${folderPath}`);
  } catch (err) {
    console.error(`Error while creating ${folderPath}.`, err);
  }
}
