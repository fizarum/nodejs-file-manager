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
      await cd(args[0]);
      onCommandCompleted();
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
