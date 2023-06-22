import { cat } from "./cat.js";
import { add } from "./add.js";
import { rm } from "./rm.js";
import { rn } from "./rn.js";
import { mv } from "./mv.js";
import { cp } from "./cp.js";

export const fsProcess = (command, args) => {
  const firstArg = args[0];
  const secondArg = args[1];

  switch (command) {
    case "cat":
      cat(firstArg);
      break;

    case "add":
      add(firstArg);
      break;

    case "rn":
      rn(firstArg, secondArg);
      break;

    case "cp":
      cp(firstArg, secondArg, true);
      break;

    case "mv":
      mv(firstArg, secondArg);
      break;

    case "rm":
      rm(firstArg);
      break;
  }
};
