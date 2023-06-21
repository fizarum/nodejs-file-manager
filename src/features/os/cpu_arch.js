import { arch as _arch } from "node:os";

/**
 * Get CPU architecture for which Node.js binary has compiled
 * and print it to console
 */
export const cpuArch = () => {
  console.log(`cpu architecture: ${_arch}`);
};
