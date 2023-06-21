import { rm as _rm } from "node:fs/promises";
import { isFileExists } from "./utils.js";

export const rm = async (src) => {
  const exists = await isFileExists(src);

  if (!exists) {
    throw new Error("FS operation failed");
  }

  await _rm(src);
};
