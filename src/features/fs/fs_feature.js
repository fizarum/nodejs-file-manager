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
      if (firstArg) {
        await cat(firstArg);
        onCommandCompleted();
      } else {
        printInvalidMessage();
      }
      break;

    case "add":
      if (firstArg) {
        await add(firstArg);
        onCommandCompleted();
      } else {
        printInvalidMessage();
      }
      break;

    case "rn":
      if (firstArg && secondArg) {
        await rn(firstArg, secondArg);
        onCommandCompleted();
      } else {
        printInvalidMessage();
      }
      break;

    case "cp":
      if (firstArg && secondArg) {
        await cp(firstArg, secondArg, true);
        onCommandCompleted();
      } else {
        printInvalidMessage();
      }
      break;

    case "mv":
      if (firstArg && secondArg) {
        await mv(firstArg, secondArg);
        onCommandCompleted();
      } else {
        printInvalidMessage();
      }
      break;

    case "rm":
      if (firstArg) {
        await rm(firstArg);
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
