import { rename } from "node:fs/promises";
import { isFileExists } from "./utils.js";

export const rn = async (src, dst) => {
  const isSrcExists = await isFileExists(src);
  const isDstExists = await isFileExists(dst);

  if (!isSrcExists || isDstExists) {
    throw new Error("FS operation failed");
  }

  await rename(src, dst);
};
