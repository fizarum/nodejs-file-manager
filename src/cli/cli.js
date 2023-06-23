import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { handle } from "./controller.js";
import { currentDir } from "../features/nwd/pwd.js";
import { homedir } from "../features/os/homedir.js";
import { cd } from "../features/nwd/cd.js";

export const runCLI = async (username) => {
  onStart(username);
  const cliInterface = createInterface({ input, output });

  cliInterface.on("line", (str) => {
    handle(str, onAfterCommand, () => onExit(username));
  });
  cliInterface.on("close", () => onExit(username));
};

const onStart = async (username) => {
  console.log(`Welcome to the File Manager, ${username}!`);
  await cd(homedir());
  console.log(`You are currently in ${currentDir()}`);
};

const onAfterCommand = () => {
  console.log(`You are currently in ${currentDir()}`);
};

const onExit = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};
