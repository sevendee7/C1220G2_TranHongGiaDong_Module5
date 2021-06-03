//In ra n số fibonacci
function fibonacci(n: number): Array<Number> {
    if (n == 1) {
        return [0, 1];
    } else {
        let array: Array<Number> = fibonacci(n - 1);
        // @ts-ignore
        array.push(array[array.length - 1] + array[array.length - 2]);
        return array;
    }
}
//Ví dụ n = 8
console.log(fibonacci(8));


//Tính tổng 10 số fibonacci
// @ts-ignore
function fibonacciSum(number: number) {
    return number < 1 ? 0 : number <= 2 ? 1 : fibonacciSum(number - 1) + fibonacciSum(number - 2);
}

let sumFibonacci = 0;
for (let i = 0; i <= 10; i++) {
    sumFibonacci += fibonacciSum(i)
}
console.log(sumFibonacci);
