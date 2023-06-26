import { nwdProcess } from "../features/nwd/nwd_feature.js";
import { osProcess } from "../features/os/os_feature.js";
import { fsProcess } from "../features/fs/fs_feature.js";
import { utilsProcess } from "../features/utils/utils_feature.js";
import { username } from "../features/os/username.js";

export const handle = (command, afterCommandCallback, onExit) => {
  const filtered = command.trim();

  //to ignore command without printable symbols
  if (filtered.length == 0) return;

  const args = filtered.split(/\s+/);
  const comm = args.splice(0, 1)[0];

  switch (comm) {
    /* os section */
    case "os":
      osProcess(comm, args, afterCommandCallback);
      break;

    /* Navigation & working directory (nwd) section */
    case "up":
      nwdProcess(comm, args, afterCommandCallback);
      break;

    case "cd":
      nwdProcess(comm, args, afterCommandCallback);
      break;

    case "ls":
      nwdProcess(comm, args, afterCommandCallback);
      break;

    case "pwd":
      nwdProcess(comm, args, afterCommandCallback);
      break;

    /* Basic operations with files section */
    case "cat":
      fsProcess(comm, args, afterCommandCallback);
      break;

    case "add":
      fsProcess(comm, args, afterCommandCallback);
      break;

    case "rn":
      fsProcess(comm, args, afterCommandCallback);
      break;

    case "cp":
      fsProcess(comm, args, afterCommandCallback);
      break;

    case "mv":
      fsProcess(comm, args, afterCommandCallback);
      break;

    case "rm":
      fsProcess(comm, args, afterCommandCallback);
      break;

    /* utils (hash, zip) section */
    case "hash":
      utilsProcess(comm, args, afterCommandCallback);
      break;

    case "compress":
      utilsProcess(comm, args, afterCommandCallback);
      break;

    case "decompress":
      utilsProcess(comm, args, afterCommandCallback);
      break;

    /* rest commands section*/
    case ".exit":
      onExit(username);
      process.exit(0);

    default:
      console.log(`Invalid input`);
      break;
  }
};
