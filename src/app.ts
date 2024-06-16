#!/usr/bin/env node
import { Simulator } from "./simulator.js";
import { getSimulatorParams } from "./util.js";

async function main() {
  const { width, height, initialX, initialY, commands } =
    await getSimulatorParams();

  let simulator = new Simulator(width, height, initialX, initialY);

  try {
    simulator.run(commands);
  } catch (e) {
    if (e.message == "Out of bounds") {
      console.log([-1, -1]);
    } else {
      console.error(e);
    }
  }
}

await main();
