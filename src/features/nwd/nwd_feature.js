import { up } from "./up.js";
import { cd } from "./cd.js";
import { ls } from "./ls.js";
import { pwd } from "./pwd.js";

export const nwdProcess = (command, args) => {
  switch (command) {
    case "up":
      up();
      break;

    case "cd":
      cd(args[0]);
      break;

    case "ls":
      ls();
      break;

    case "pwd":
      pwd();
      break;
  }
};
