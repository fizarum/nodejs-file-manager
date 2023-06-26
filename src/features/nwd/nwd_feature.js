import { up } from "./up.js";
import { cd } from "./cd.js";
import { ls } from "./ls.js";
import { pwd } from "./pwd.js";

export const nwdProcess = async (command, args, onCommandCompleted) => {
  switch (command) {
    case "up":
      await up();
      onCommandCompleted();
      break;

    case "cd":
      const arg = args[0];
      if (arg) {
        await cd(arg);
        onCommandCompleted();
      } else {
        console.error("Invalid input");
      }
      break;

    case "ls":
      await ls();
      onCommandCompleted();
      break;

    case "pwd":
      pwd();
      onCommandCompleted();
      break;
  }
};
