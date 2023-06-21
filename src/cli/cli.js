import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { handle } from "./controller.js";

export const run = async () => {
  const cliInterface = createInterface({ input, output });

  console.log("Welcome to the File Manager, Username!");

  cliInterface.on("line", (str) => {
    handle(str);
  });
  cliInterface.on("close", () => {
    console.log("bye-bye, <username>");
  });
};

await run();
