import { nwdProcess } from "../features/nwd/nwd_feature.js";
import { osProcess } from "../features/os/os_feature.js";

export const handle = (command) => {
  const filtered = command.trim();

  //to ignore command without printable symbols
  if (filtered.length == 0) return;

  const args = filtered.split(/\s+/);
  const comm = args.splice(0, 1)[0];

  switch (comm) {
    /* os section */
    case "os":
      osProcess(comm, args);
      break;

    /* Navigation & working directory (nwd) section */
    case "up":
      nwdProcess(comm, args);
      break;

    case "cd":
      nwdProcess(comm, args);
      break;

    case "ls":
      nwdProcess(comm, args);
      break;

    case "pwd":
      nwdProcess(comm, args);
      break;

    case ".exit":
      exitApp();
      break;

    //TODO: add rest of commands
    default:
      //TODO: complete
      console.log(`unrecognized command: ${comm}`);
      break;
  }
};
const exitApp = () => {
  console.log("bye-bye, <username>");
  process.exit(0);
};
