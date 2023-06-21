import { chdir } from "node:process";
import { pwd, currentDir } from "./pwd.js";

/**
 * Go upper from current directory
 */
export const up = async () => {
  chdir(currentDir() + "/..");
  pwd();
};
