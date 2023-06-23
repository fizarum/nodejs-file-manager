import { argv } from "node:process";
import { runCLI } from "./cli/cli.js";
/**
 * get username from argv
 */
const getUsername = (args) => {
  const usernameKeyPram = "--username=";
  const unauthorizedUser = "John Doe";

  const usernameParam = args.find((arg) => arg.includes(usernameKeyPram));
  let username = unauthorizedUser;

  if (usernameParam) {
    username = usernameParam.replace(usernameKeyPram, "");
    if (username.length === 0) {
      username = unauthorizedUser;
    }
  }
  return username;
};

const start = () => {
  const username = getUsername(argv);

  runCLI(username);
};

start();
