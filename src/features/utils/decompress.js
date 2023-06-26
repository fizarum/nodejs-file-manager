import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createBrotliDecompress } from "node:zlib";
import { makeDstPath } from "./make_dst_path.js";
import { removeExtension } from "./remove_extension.js";

/**
 * Decompress file
 */
export const decompress = async (src, dstDir) => {
  const dstDirty = await makeDstPath(src, dstDir);

  if (dstDirty) {
    const dst = removeExtension(dstDirty, ".br");

    const unzip = createBrotliDecompress();

    const srcStream = createReadStream(src);
    const dstStream = createWriteStream(dst);

    pipeline(srcStream, unzip, dstStream)
      .then(() => {
        console.log("decompression completed successfully");
      })
      .catch((error) => {
        console.error(`Operation failed, error during decompressing: ${error}`);
      });
  } else {
    console.error(
      "Operation failed, can not decompress file, make sure that source and destination are provided"
    );
  }
};
