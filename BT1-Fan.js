var Speeds;
(function (Speeds) {
    Speeds[Speeds["SLOW"] = 1] = "SLOW";
    Speeds[Speeds["MEDIUM"] = 2] = "MEDIUM";
    Speeds[Speeds["FAST"] = 3] = "FAST";
})(Speeds || (Speeds = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        if (speed === void 0) { speed = Speeds.SLOW; }
        if (on === void 0) { on = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = "blue"; }
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        if (this._on) {
            return "speed = ".concat(this._speed, ", radius = ").concat(this._radius, ", ").concat(this._color, ", fan is on");
        }
        else {
            return "fan is off";
        }
    };
    return Fan;
}());
var aFan = new Fan();
aFan.color = "red";
aFan.color;
aFan.speed = Speeds.MEDIUM;
console.log(aFan.speed);
console.log(aFan.toString());
var Fan1 = new Fan(Speeds.FAST, true, 10, "yellow");
console.log(Fan1.toString());
