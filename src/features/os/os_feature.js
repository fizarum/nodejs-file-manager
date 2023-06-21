import { cpuArch } from "./cpu_arch.js";
import { cpuInfo } from "./cpu_info.js";
import { homedir } from "./homedir.js";
import { username } from "./username.js";

export const osProcess = (_, args) => {
  const arg = args[0];
  switch (arg) {
    case "--cpus":
      cpuInfo();
      break;

    case "--homedir":
      homedir();
      break;

    case "--username":
      username();
      break;

    case "--architecture":
      cpuArch();
      break;
  }
};
