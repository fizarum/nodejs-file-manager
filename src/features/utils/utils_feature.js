import { compress } from "./compress.js";
import { decompress } from "./decompress.js";
import { hash } from "./hash.js";

export const utilsProcess = (command, args) => {
  const firstArg = args[0];
  const secondArg = args[1];

  switch (command) {
    case "hash":
      console.log("hash calculation");
      hash(firstArg);
      break;

    case "compress":
      compress(firstArg, secondArg);
      break;

    case "decompress":
      decompress(firstArg, secondArg);
      break;
  }
};
