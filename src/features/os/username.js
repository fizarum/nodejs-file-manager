import { userInfo } from "node:os";

/**
 * Get current system user name
 */
export const username = () => {
  console.log(`system username: ${userInfo().username}`);
};
