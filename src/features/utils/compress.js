import { createBrotliCompress } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

import { makeDstPath } from "./make_dst_path.js";

/**
 * compress file to .gz archive
 * @param src - path to file (including filename)
 * @param dstDir - path to destination directory
 */
export const compress = async (src, dstDir) => {
  const dstPath = await makeDstPath(src, dstDir);

  if (dstPath) {
    const dst = dstPath + ".br";
    const gzip = createBrotliCompress();

    const readStream = createReadStream(src);
    const writeStream = createWriteStream(dst);

    pipeline(readStream, gzip, writeStream)
      .then(() => {
        console.log("compression completed successfully");
      })
      .catch((error) => {
        console.error(`Operation failed, error during compressing: ${error}`);
      });
  } else {
    console.error(
      "Operation failed, can not compress file, make sure that source and destination are provided"
    );
  }
};
