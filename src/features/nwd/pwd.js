import { cwd } from "node:process";

/**
 * Print working directory
 */
export const pwd = () => {
  console.log(currentDir());
};

export const currentDir = () => {
  return cwd();
};
