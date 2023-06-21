import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { rename } from "node:fs/promises";
import { createUnzip } from "node:zlib";

export const decompress = async (src) => {
  if (src.endWith(".gz")) {
    const dst = src.substring(0, src.length - 3);
    const unzip = createUnzip();

    //we have to rename given archive to target file_name + ".gz"
    //otherwise decompression will return empty content
    await rename(archive, src);

    const srcStream = createReadStream(src);
    const dstStream = createWriteStream(dst);

    await pipeline(srcStream, unzip, dstStream).catch((error) => {
      console.error(`error during uncompressing: ${error}`);
    });
  }
};
