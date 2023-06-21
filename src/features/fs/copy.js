import { _cp } from "node:fs/promises";
import { isFileExists } from "./utils.js";

/**
 * @param src - fill path to file (including filename)
 * @param dst - only destination path
 */
export const cp = async (src, dst) => {
  //TODO: complete getting filename from path
  const options = { recursive: true };

  const isSrcExists = await isFileExists(src);
  const isDstExists = await isFileExists(dst);

  if (!isSrcExists || isDstExists) {
    throw new Error("FS operation failed");
  }
  await _cp(src, dst, options);
};
