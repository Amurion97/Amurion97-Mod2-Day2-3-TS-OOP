function fibo(n: number): number {
    if (n === 1 || n === 2) {
        return 1
    } else {
        return fibo(n-1) + fibo(n-2);
    }
}
let sum = 0;
for (let i = 1; i < 10; i++) {
    console.log(i," : ",fibo(i));
    sum += fibo(i);
}
console.log("sum = ",sum);

