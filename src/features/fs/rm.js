import { rm as _rm } from "node:fs/promises";
import { isFileExists } from "../utils/is_file_exists.js";

export const rm = async (src) => {
  const exists = await isFileExists(src);

  if (exists) {
    await _rm(src);
    console.log("file removed successfully");
  } else {
    console.error(`Operation failed, can not remove: ${src}`);
  }
};
