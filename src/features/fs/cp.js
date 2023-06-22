import { basename } from "node:path";
import { isFileDirectory } from "../utils/is_file_dir.js";
import { isFileExists } from "../utils/is_file_exists.js";
import { createReadStream, createWriteStream } from "node:fs";

/**
 * Copy file
 * @param src - fill path to file (including filename)
 * @param dst - only destination path
 * @param printResults - print success results of copy operation
 */
export const cp = async (src, dstDir, printResults) => {
  const srcExists = await isFileExists(src);
  const isDstExists = await isFileExists(dstDir);
  const isDstDir = await isFileDirectory(dstDir);

  if (srcExists && isDstExists && isDstDir) {
    const filename = basename(src);
    const dst = dstDir + "/" + filename;

    const readStream = createReadStream(src);
    const writeStream = createWriteStream(dst);

    readStream.on("error", showErrorForStreamOperations);
    writeStream.on("error", showErrorForStreamOperations);
    if (printResults === true) {
      readStream.on("close", () => {
        console.log("file copied successfully");
      });
    }

    readStream.pipe(writeStream);
  } else {
    showErrorForFileOperations(src, dstDir);
  }
};

const showErrorForStreamOperations = () => {
  console.error("error during move/copy operation");
};

const showErrorForFileOperations = (src, dstDir) => {
  console.error(`can not move/copy file: ${src} to ${dstDir}
make sure that source file exists & destination is directory`);
};
