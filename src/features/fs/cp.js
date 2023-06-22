import { createReadStream, createWriteStream } from "node:fs";
import { makeDstPath } from "../utils/make_dst_path.js";

/**
 * Copy file
 * @param src - fill path to file (including filename)
 * @param dst - only destination path
 * @param printResults - print success results of copy operation
 */
export const cp = async (src, dstDir, printResults) => {
  const dst = await makeDstPath(src, dstDir);

  if (dst) {
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
