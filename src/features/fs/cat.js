import { isFileDirectory } from "../utils/is_file_dir.js";
import { isFileExists } from "../utils/is_file_exists.js";
import { createReadStream } from "node:fs";

/**
 * Read file and print it's content in console
 */
export const cat = async (src) => {
  const options = { encoding: "utf-8" };
  const exists = await isFileExists(src);
  const directory = await isFileDirectory(src);

  if (exists && !directory) {
    const stream = createReadStream(src, options);
    stream.on("data", (chunk) => {
      console.log(chunk);
    });
  } else {
    console.error(`can not read file: ${src}`);
  }
};
