import { readdir } from "node:fs/promises";
import { currentDir } from "./pwd.js";

/**
 * Print in console list of all files and folders in current directory
 */
export const ls = async () => {
  const files = await readdir(currentDir(), { withFileTypes: true });

  const dirs = files.filter((file) => file.isDirectory());
  const restFiles = files.filter((file) => !file.isDirectory());

  dirs.sort((dir1, dir2) => dir1.name - dir2.name > 0);
  restFiles.sort((file1, file2) => file1.name - file2.name > 0);
  const sortedFiles = dirs.concat(restFiles);

  const result = sortedFiles
    .map((file, index) => {
      const fileType = getFileType(file);
      return `\u2502 ${index}\t\u2502 ${fileType}\t\u2502 ${file.name}`;
    })
    .join("\n");

  console.log(result);
};

/**
 * @param file - Dirent type object
 * @returns printable file type
 *
 */
const getFileType = (file) => {
  if (file.isDirectory()) {
    return "dir";
  }

  if (file.isFile()) {
    return "file";
  }

  return "n/a";
};
