export class Point {
  constructor(public readonly x: number, public readonly y: number) {}

  getDistance(point?: Point): number {
    point = point ?? new Point(0, 0);
    return Math.sqrt(
      Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)
    );
  }

  compareByDistance(point: Point, origin?: Point): number {
    return this.getDistance(origin) - point.getDistance(origin);
  }

  toString(): string {
    return `[${this.x}, ${this.y}]`;
  }
}
