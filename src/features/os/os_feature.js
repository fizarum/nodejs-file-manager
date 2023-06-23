import { cpuArch } from "./cpu_arch.js";
import { cpuInfo } from "./cpu_info.js";
import { eol } from "./eol.js";
import { homedir } from "./homedir.js";
import { username } from "./username.js";

export const osProcess = (_, args, onCommandCompleted) => {
  const arg = args[0];

  switch (arg) {
    case "--cpus":
      cpuInfo();
      onCommandCompleted();
      break;

    case "--homedir":
      console.log(`home dir: ${homedir()}`);
      onCommandCompleted();
      break;

    case "--username":
      username();
      onCommandCompleted();
      break;

    case "--architecture":
      cpuArch();
      onCommandCompleted();
      break;

    case "--EOL":
      eol();
      onCommandCompleted();
      break;

    default:
      console.error("Invalid input");
      break;
  }
};
