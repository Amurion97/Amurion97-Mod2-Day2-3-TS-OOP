var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this._startTime = new Date().getTime();
    }
    Object.defineProperty(StopWatch.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StopWatch.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        enumerable: false,
        configurable: true
    });
    StopWatch.prototype.start = function () {
        this._startTime = new Date().getTime();
    };
    StopWatch.prototype.stop = function () {
        this._endTime = new Date().getTime();
    };
    StopWatch.prototype.getElapsedTime = function () {
        this.stop();
        return this.endTime - this.startTime;
    };
    return StopWatch;
}());
function selectionSort(arr) {
    var _a;
    var currentValueNewIndex;
    for (var i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            _a = [arr[currentValueNewIndex], arr[i]], arr[i] = _a[0], arr[currentValueNewIndex] = _a[1];
        }
    }
    return arr;
}
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
var timer = new StopWatch();
selectionSort(arr);
console.log(timer.getElapsedTime(), "ms");
