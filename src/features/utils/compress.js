import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

/**
 * compress file to .gz archive
 */
export const compress = async (src) => {
  const dst = src + ".gz";

  const gzip = createGzip();

  const srcStream = createReadStream(src);
  const dstStream = createWriteStream(dst);

  await pipeline(srcStream, gzip, dstStream).catch((error) => {
    console.error(`error during compressing: ${error}`);
  });
};
