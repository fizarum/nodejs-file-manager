import { cat } from "./cat.js";
import { add } from "./add.js";
import { rm } from "./rm.js";
import { rn } from "./rn.js";
import { mv } from "./mv.js";
import { cp } from "./cp.js";

export const fsProcess = async (command, args, onCommandCompleted) => {
  const firstArg = args[0];
  const secondArg = args[1];

  switch (command) {
    case "cat":
      await cat(firstArg);
      onCommandCompleted();
      break;

    case "add":
      await add(firstArg);
      onCommandCompleted();
      break;

    case "rn":
      await rn(firstArg, secondArg);
      onCommandCompleted();
      break;

    case "cp":
      await cp(firstArg, secondArg, true);
      onCommandCompleted();
      break;

    case "mv":
      await mv(firstArg, secondArg);
      onCommandCompleted();
      break;

    case "rm":
      await rm(firstArg);
      onCommandCompleted();
      break;
  }
};
