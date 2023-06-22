import { chdir } from "node:process";
import { isFileExists } from "../utils/is_file_exists.js";
import { isFileDirectory } from "../utils/is_file_dir.js";
import { pwd } from "./pwd.js";

/**
 * Go to dedicated folder from current directory
 */
export const cd = async (dst) => {
  const fileExists = await isFileExists(dst);
  const isDirectory = await isFileDirectory(dst);

  if (fileExists && isDirectory) {
    try {
      chdir(dst);
      pwd();
    } catch {
      console.error(`can not cd to: ${dst}`);
    }
  }
};
