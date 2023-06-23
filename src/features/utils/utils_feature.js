import { compress } from "./compress.js";
import { decompress } from "./decompress.js";
import { hash } from "./hash.js";

export const utilsProcess = async (command, args, onCommandCompleted) => {
  const firstArg = args[0];
  const secondArg = args[1];

  switch (command) {
    case "hash":
      await hash(firstArg);
      onCommandCompleted();
      break;

    case "compress":
      compress(firstArg, secondArg);
      onCommandCompleted();
      break;

    case "decompress":
      await decompress(firstArg, secondArg);
      onCommandCompleted();
      break;
  }
};
