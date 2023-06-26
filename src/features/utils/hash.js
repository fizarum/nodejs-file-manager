import { readFile } from "node:fs/promises";
import { isFileExists } from "./is_file_exists.js";
import { isFileDirectory } from "./is_file_dir.js";
//dynamic import
const { createHash } = await import("node:crypto");

/**
 * Calculate hash for file and print it into console
 * @param src - path to file
 */
export const hash = async (src) => {
  const fileExists = await isFileExists(src);
  const isDir = await isFileDirectory(src);

  if (fileExists && !isDir) {
    const hash = createHash("sha256");
    const digestFormat = "hex";

    try {
      const content = await readFile(src);
      hash.update(content);
      console.log(hash.digest(digestFormat));
    } catch (err) {
      console.log(err);
    }
  } else {
    console.error(`Operation failed, can not calculate hash, make sure that file:
'${src}' exists and its not a directory`);
  }
};
