var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.calculateDistance = function (point) {
        var dx = this.x - point.x;
        var dy = this.y - point.y;
        return Math.hypot(dx, dy);
    };
    return Point;
}());
var diemA = new Point(1, 2);
var diemB = new Point(3, 4);
console.log(diemA.calculateDistance(diemB));
