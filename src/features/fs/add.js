import { writeFile } from "node:fs/promises";
import { isFileExists } from "../utils/is_file_exists.js";

/**
 * Create empty file in current working directory
 */
export const add = async (src) => {
  const exists = await isFileExists(src);

  if (!exists) {
    await writeFile(src, "");
    console.log("file created successfully");
  } else {
    console.error(`Operation failed, such file already exists: ${src}`);
  }
};
