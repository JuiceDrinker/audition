import { Direction } from "./src/point";
import { Simulator } from "./src/simulator";

beforeAll(() => {
  console.error = jest.fn();
  console.info = jest.fn();
  console.log = jest.fn();
});

afterAll(() => {
  jest.restoreAllMocks();
});

it("will return the correct position given a set of command", () => {
  const commands = [1, 4, 1, 3, 2, 3, 2, 4, 1, 0];
  let simulator = new Simulator(4, 4, 2, 2);

  simulator.run(commands);

  expect(simulator.point.x()).toEqual(0);
  expect(simulator.point.y()).toEqual(1);
  expect(simulator.point.direction()).toEqual(Direction.North);
});

it("will throw an Out of Bounds error given inocrrect commands", () => {
  const commands = [1];
  let simulator = new Simulator(4, 4, 0, 0);

  expect(() => simulator.run(commands)).toThrow("Out of bounds");
});
