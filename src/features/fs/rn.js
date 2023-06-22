import { rename } from "node:fs/promises";
import { isFileExists } from "../utils/is_file_exists.js";

export const rn = async (src, dst) => {
  const isSrcExists = await isFileExists(src);
  const isDstExists = await isFileExists(dst);

  if (isSrcExists && !isDstExists) {
    await rename(src, dst);
    console.log("file renamed successfully");
  } else {
    console.error(`can not move file${src} to ${dst}`);
  }
};
