import { EOL } from "node:os";

/**
 * Get EOL (default system End-Of-Line) and print it to console
 */
export const eol = () => {
  if (EOL === "\n") {
    console.log("POSIX EOL: \\n");
  } else {
    console.log("Windows EOL: \\r\\n");
  }
};
