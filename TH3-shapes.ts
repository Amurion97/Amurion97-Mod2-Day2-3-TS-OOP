class Shape {
    private _color: string;
    private _filled: boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get filled(): boolean {
        return this._filled;
    }

    set filled(value: boolean) {
        this._filled = value;
    }
}
class Circle extends Shape {
    private _radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    getArea ():number {
        return (this.radius**2)*Math.PI;
    }

    getPerimeter(): number {
        return (this.radius*2)*Math.PI;
    }
}

let circleA: Circle = new Circle("yellow", true, 5);
console.log(circleA.getArea());
console.log(circleA.getPerimeter());

