import { Direction, Simulator } from "./src/app";

// beforeEach(() => {
//   console.log = jest.fn();
// });
//
// afterAll(() => {});
it("will return the correct position givena set of command", () => {
  const commands = [1, 4, 1, 3, 2, 3, 2, 4, 1, 0];
  let simulator = new Simulator(4, 4, 2, 2);

  simulator.run(commands);

  expect(simulator.point.x()).toEqual(0);
  expect(simulator.point.y()).toEqual(1);
  expect(simulator.point.direction()).toEqual(Direction.North);
});
