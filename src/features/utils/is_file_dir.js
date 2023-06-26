import { stat } from "node:fs/promises";

/** checks if given path is directory */
export const isFileDirectory = async (path) => {
  try {
    const fileStat = await stat(path);
    return fileStat.isDirectory();
  } catch {
    return false;
  }
};
