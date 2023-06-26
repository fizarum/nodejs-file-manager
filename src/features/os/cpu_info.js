import { cpus } from "node:os";

/**
 * Get host machine CPUs info (overall amount of CPUS plus model and
 * clock rate (in MHz) for each of them) and print it to console
 */
export const cpuInfo = () => {
  const coresInfo = cpus().map((c) => {
    return { model: c.model, speed: c.speed + " MHz" };
  });
  console.table(coresInfo);
};
