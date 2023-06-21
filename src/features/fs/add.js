import { writeFile } from "node:fs/promises";
import { isFileExists } from "./utils.js";

export const add = async (src) => {
  const exists = await isFileExists(src);

  if (exists) {
    throw new Error("FS operation failed");
  }

  await writeFile(src, "");
};
