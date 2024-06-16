#!/usr/bin/env node
import yargs from "yargs";
import { Simulator } from "./simulator.js";

async function main() {
  const args = await yargs(process.argv.slice(2))
    .option("width", {
      alias: "w",
      describe: "Width of simulated table",
      demandOption: true,
      check(width: string) {
        if (isNaN(parseInt(width))) {
          return false;
        }
        return true;
      },
      type: "number",
    })
    .option("height", {
      alias: "h",
      describe: "Height of simulated table",
      demandOption: true,
      check(height: string) {
        if (isNaN(parseInt(height))) {
          return false;
        }
        return true;
      },
      type: "number",
    })
    .option("initialX", {
      alias: "x",
      describe: "Initial x-coordinate of point",
      demandOption: true,
      check(initialX: string) {
        if (isNaN(parseInt(initialX))) {
          return false;
        }
        return true;
      },
      type: "number",
    })
    .option("initialY", {
      alias: "y",
      describe: "Initial y-coordinate of point",
      demandOption: true,
      check(initialY: string) {
        if (isNaN(parseInt(initialY))) {
          return false;
        }
        return true;
      },
      type: "number",
    })
    .option("commands", {
      alias: "c",
      // TODO: Describe Protocol in README
      describe:
        "Set of commands to be simulated. See README For protocol description",
      array: true,
      demandOption: true,
      check: (commands: string[]) => {
        commands.every((command) => !isNaN(parseInt(command)));
      },
      coerce: (commands: string[]) =>
        commands.map((command) => parseInt(command)),
    })
    .parse();

  const { width, height, initialX, initialY, commands } = args;
  let simulator = new Simulator(width, height, initialX, initialY);

  simulator.run(commands);
}

main();
