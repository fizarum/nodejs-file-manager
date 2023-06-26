import { unlink } from "node:fs/promises";
import { cp } from "./cp.js";

/**
 * Move file
 * @param src - path to file (including filename itself)
 * @param dstDir - path to destination dir (without filename!)
 */
export const mv = async (src, dstDir) => {
  await cp(src, dstDir).then(() => {
    unlink(src)
      .then(() => {
        console.log("file moved successfully");
      })
      .catch(() => {
        console.error(`Operation failed, can not move/copy file: ${src} to: ${dstDir}
make sure that source file exists & destination is directory`);
      });
  });
};
