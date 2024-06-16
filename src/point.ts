export type Coordinate = number;

export enum Direction {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

export class Point {
  private _x: Coordinate;
  private _y: Coordinate;
  private _direction: Direction;

  public constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
    // Point always starts facing north
    this._direction = Direction.North;
  }

  public x(): Coordinate {
    return this._x;
  }

  public y(): Coordinate {
    return this._y;
  }

  public direction(): Direction {
    return this._direction;
  }

  public setY(y: number) {
    this._y = y;
  }

  public setX(x: number) {
    this._x = x;
  }

  public setDirection(direction: Direction) {
    this._direction = direction;
  }
}
