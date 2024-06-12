var width = 4;
var height = 4;
var Direction;
(function (Direction) {
  Direction[(Direction["North"] = 1)] = "North";
  Direction[(Direction["East"] = 2)] = "East";
  Direction[(Direction["South"] = 3)] = "South";
  Direction[(Direction["West"] = 4)] = "West";
})(Direction || (Direction = {}));
var Point = /** @class */ (function () {
  function Point(x, y) {
    this.x = x;
    this.y = y;
    // Object always faces North to start with
    this.direction = Direction.North;
  }
  Point.prototype.rotateCounterClockwise = function () {
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
  };
  Point.prototype.rotateClockwise = function () {
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
  };
  Point.prototype.stepBackward = function () {
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
  };
  Point.prototype.stepForward = function () {
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
  };
  return Point;
})();
var p = new Point(2, 2);
var commands = [1, 4, 1, 3, 2, 3, 2, 4, 1, 0];
commands.forEach(function (command) {
  switch (command) {
    case 0:
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
console.log(p);
