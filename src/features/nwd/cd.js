import { chdir } from "node:process";
import { isFileExists } from "../utils/is_file_exists.js";
import { isFileDirectory } from "../utils/is_file_dir.js";

/**
 * Go to dedicated folder from current directory
 */
export const cd = async (dst) => {
  const fileExists = await isFileExists(dst);
  const isDirectory = await isFileDirectory(dst);

  if (fileExists && isDirectory) {
    try {
      chdir(dst);
    } catch {
      console.error(`Operation failed, can not cd to: ${dst}`);
    }
  } else {
    console.error("Invalid input");
  }
};
