import { basename } from "node:path";
import { isFileExists } from "./is_file_exists.js";
import { isFileDirectory } from "./is_file_dir.js";

/**
 * takes only filename from src and add it to destination path
 * @param src - path to file (with filename)
 * @param dstDir - destination directory (only directory)
 * @returns new path or null in case of some fs errors
 */
export const makeDstPath = async (src, dstDir) => {
  const srcExists = await isFileExists(src);
  const isDstExists = await isFileExists(dstDir);
  const isDstDir = await isFileDirectory(dstDir);

  if (srcExists && isDstExists && isDstDir) {
    const filename = basename(src);
    return dstDir + "/" + filename;
  } else {
    return null;
  }
};
