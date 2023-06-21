import { userInfo } from "node:os";

/**
 * Get home directory and print it to console
 */
export const homedir = () => {
  console.log(`home dir: ${userInfo().homedir}`);
};
