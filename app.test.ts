import { Simulator } from "./src/app";

it("will return the correct position givena set of command", () => {
  const commands = [1, 4, 1, 3, 2, 3, 2, 4, 1, 0];
  let simulator = new Simulator(4, 4, 2, 2);

  simulator.run(commands);
});
