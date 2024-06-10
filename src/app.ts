const width = 4;
const height = 4;

enum Direction {
  North = 1,
  East,
  South,
  West,
}

class Point {
  x: number;
  y: number;
  direction: Direction;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // Object always faces North to start with
    this.direction = Direction.North;
  }

  rotateCounterClockwise() {
    switch (this.direction) {
      case Direction.North:
        this.direction = Direction.West;
        break;
      case Direction.East:
        this.direction = Direction.North;
        break;
      case Direction.South:
        this.direction = Direction.East;
        break;
      case Direction.West:
        this.direction = Direction.South;
        break;
    }
  }
  rotateClockwise() {
    switch (this.direction) {
      case Direction.North:
        this.direction = Direction.East;
        break;
      case Direction.East:
        this.direction = Direction.South;
        break;
      case Direction.South:
        this.direction = Direction.West;
        break;
      case Direction.West:
        this.direction = Direction.North;
        break;
    }
  }

  stepBackward() {
    switch (this.direction) {
      case Direction.North:
        this.y += 1;
        break;
      case Direction.East:
        this.x -= 1;
        break;
      case Direction.South:
        this.y -= 1;
      case Direction.West:
        this.x += 1;
    }
  }
  stepForward() {
    switch (this.direction) {
      case Direction.North:
        this.y -= 1;
        break;
      case Direction.East:
        this.x += 1;
        break;
      case Direction.South:
        this.y += 1;
      case Direction.West:
        this.x -= 1;
    }
  }
}

let p = new Point(2, 2);

const commands = [1, 4, 1, 3, 2, 3, 2, 4, 1, 0];

commands.forEach((command) => {
  switch (command) {
    case 0:
      console.log(p);
      process.exit();
    case 1:
      p.stepForward();
      break;
    case 2:
      p.stepBackward();
      break;
    case 3:
      p.rotateClockwise();
      break;
    case 4:
      p.rotateCounterClockwise();
      break;
  }
});
