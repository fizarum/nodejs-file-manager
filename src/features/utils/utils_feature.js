import { compress } from "./compress.js";
import { decompress } from "./decompress.js";
import { hash } from "./hash.js";

export const utilsProcess = async (command, args, onCommandCompleted) => {
  const firstArg = args[0];
  const secondArg = args[1];

  switch (command) {
    case "hash":
      if (firstArg) {
        await hash(firstArg);
        onCommandCompleted();
      } else {
        printInvalidMessage();
      }
      break;

    case "compress":
      if (firstArg && secondArg) {
        compress(firstArg, secondArg);
        onCommandCompleted();
      } else {
        printInvalidMessage();
      }
      break;

    case "decompress":
      if (firstArg && secondArg) {
        await decompress(firstArg, secondArg);
        onCommandCompleted();
      } else {
        printInvalidMessage();
      }
      break;
  }
};

const printInvalidMessage = () => {
  console.error("Invalid input");
};
