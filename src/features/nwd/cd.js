import { chdir } from "node:process";
import { isFileExists } from "../utils/is_file_exists.js";
import { isFileDirectory } from "../utils/is_file_dir.js";

/**
 * Go to dedicated folder from current directory
 */
export const cd = async (dst) => {
  if (isFileExists(dst) && isFileDirectory(dst)) {
    try {
      chdir(dst);
    } catch {
      console.error(`can not cd to: ${dst}`);
    }
  }
};
