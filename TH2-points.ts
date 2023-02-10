class Point {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    calculateDistance(point: Point): number {
        let dx: number = this.x - point.x;
        let dy: number = this.y - point.y;
        return Math.hypot(dx, dy);
    }
}

let diemA: Point = new Point(1,2);
let diemB: Point = new Point(3,4);
console.log(diemA.calculateDistance(diemB))
