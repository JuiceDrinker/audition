import { createOutOfBoundsError } from "./error.js";
import { Coordinate, Direction, Point } from "./point.js";

export class Simulator {
  tableWidth: number;
  tableHeight: number;
  point: Point;

  constructor(
    tableWidth: number,
    tableHeight: number,
    initialX: Coordinate,
    initialY: Coordinate,
  ) {
    this.point = new Point(initialX, initialY);
    this.tableHeight = tableHeight;
    this.tableWidth = tableWidth;
  }

  run(commands: number[]) {
    for (const command of commands) {
      console.log(
        "Currently at - x: %d, y: %d. Facing %s",
        this.point.x(),
        this.point.y(),
        this.point.direction(),
      );
      switch (command) {
        case 0:
          return console.log("[%d, %d]", this.point.x(), this.point.y());
        case 1:
          this.stepForward();
          break;
        case 2:
          this.stepBackward();
          break;
        case 3:
          this.rotateClockwise();
          break;
        case 4:
          this.rotateCounterClockwise();
          break;
      }
    }
  }

  public stepBackward() {
    let newY: number;
    let newX: number;
    switch (this.point.direction()) {
      case Direction.North:
        newY = this.point.y() + 1;
        if (newY < 0 || newY > this.tableHeight) {
          throw createOutOfBoundsError();
        }
        this.point.setY(newY);
        break;
      case Direction.East:
        newX = this.point.x() - 1;
        if (newX > this.tableWidth || newX < 0) {
          throw createOutOfBoundsError();
        }
        this.point.setX(newX);
        break;
      case Direction.South:
        newY = this.point.y() - 1;
        if (newY < 0 || newY > this.tableHeight) {
          throw createOutOfBoundsError();
        }
        this.point.setY(newY);
        break;
      case Direction.West:
        newX = this.point.x() - 1;
        if (newX > this.tableWidth || newX < 0) {
          throw createOutOfBoundsError();
        }
        this.point.setX(newX);
        break;
    }

    console.info("Stepping backward...");
  }

  public stepForward() {
    let newY: number;
    let newX: number;
    switch (this.point.direction()) {
      case Direction.North:
        newY = this.point.y() - 1;
        if (newY < 0 || newY > this.tableHeight) {
          throw createOutOfBoundsError();
        }
        this.point.setY(newY);
        break;
      case Direction.East:
        newX = this.point.x() + 1;
        if (newX > this.tableWidth || newX < 0) {
          throw createOutOfBoundsError();
        }
        this.point.setX(newX);
        break;
      case Direction.South:
        newY = this.point.y() + 1;
        if (newY < 0 || newY > this.tableHeight) {
          throw createOutOfBoundsError();
        }
        this.point.setY(newY);
        break;
      case Direction.West:
        newX = this.point.x() - 1;
        if (newX > this.tableWidth || newX < 0) {
          throw createOutOfBoundsError();
        }
        this.point.setX(newX);
        break;
    }
    console.info("Stepping forward...");
  }

  public rotateCounterClockwise() {
    switch (this.point.direction()) {
      case Direction.North:
        this.point.setDirection(Direction.West);
        break;
      case Direction.East:
        this.point.setDirection(Direction.North);
        break;
      case Direction.South:
        this.point.setDirection(Direction.East);
        break;
      case Direction.West:
        this.point.setDirection(Direction.South);
        break;
    }
    console.info("Rotating counter-clockwise");
  }

  public rotateClockwise() {
    switch (this.point.direction()) {
      case Direction.North:
        this.point.setDirection(Direction.East);
        break;
      case Direction.East:
        this.point.setDirection(Direction.South);
        break;
      case Direction.South:
        this.point.setDirection(Direction.West);
        break;
      case Direction.West:
        this.point.setDirection(Direction.North);
        break;
    }
    console.info("Rotating clockwise");
  }
}
