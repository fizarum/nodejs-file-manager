import { cpus } from "node:os";

/**
 * Get host machine CPUs info (overall amount of CPUS plus model and
 * clock rate (in GHz) for each of them) and print it to console
 */
export const cpuInfo = () => {
  const coresInfo = cpus()
    .map(
      (cpu, index) =>
        `\u2502 ${index + 1}\t\u2502 model: ${cpu.model} \u2502 speed: ${
          cpu.speed
        } MHz \u2502`
    )
    .join("\n");
  console.log(coresInfo);
};
