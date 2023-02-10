class StopWatch {
    private _startTime: number;
    private _endTime: number;

    constructor() {
        this._startTime = new Date().getTime();
    }

    get startTime(): number {
        return this._startTime;
    }

    get endTime(): number {
        return this._endTime;
    }

    start(): void {
        this._startTime = new Date().getTime();
    }

    stop(): void {
        this._endTime = new Date().getTime();
    }

    getElapsedTime(): number {
        this.stop();
        return this.endTime - this.startTime;
    }
}

function selectionSort(arr: number[]): number[] {
    let currentValueNewIndex: number;
    for (let i:number = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j:number = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
             [arr[i], arr[currentValueNewIndex]] = [arr[currentValueNewIndex], arr[i]];
        }
    }

    return arr;
}
const arr: number[] = [];
for (let i:number = 0; i<100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
let timer: StopWatch = new StopWatch();
selectionSort(arr);
console.log(timer.getElapsedTime(),"ms");