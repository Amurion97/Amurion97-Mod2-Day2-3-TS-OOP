enum Speeds {
    SLOW = 1,
    MEDIUM,
    FAST
}
class Fan {
    private _speed: number;
    private _on: boolean;
    private _radius: number;
    private _color: string;

    constructor(speed: number = Speeds.SLOW, on: boolean = false, radius: number = 5, color: string = "blue") {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    toString (): string {
        if (this._on) {
            return `speed = ${this._speed}, radius = ${this._radius}, ${this._color}, fan is on`

        } else {
            return "fan is off"
        }
    }
}
let aFan = new Fan();
aFan.color = "red";
aFan.color;
aFan.speed = Speeds.MEDIUM;
console.log(aFan.speed);
console.log(aFan.toString())
let Fan1: Fan = new Fan(Speeds.FAST, true,10, "yellow")
console.log(Fan1.toString())