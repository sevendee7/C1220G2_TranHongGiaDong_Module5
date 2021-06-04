//In ra n số fibonacci
function fibonacci(n: number): Array<number> {
    if (n == 1) {
        return [0, 1];
    } else {
        let array: Array<number> = fibonacci(n - 1);
        // @ts-ignore
        array.push(array[array.length - 1] + array[array.length - 2]);
        return array;
    }
}
//Ví dụ n = 8
console.log(fibonacci(8));


//Tính tổng 10 số fibonacci
// @ts-ignore
function getFibonacciByIndex(index: number) {
    return index < 1 ? 0 : index <= 2 ? 1 : getFibonacciByIndex(index - 1) + getFibonacciByIndex(index - 2);
}

let sumFibonacci: number = 0;
for (let i = 0; i <= 10; i++) {
    sumFibonacci += getFibonacciByIndex(i)
}
console.log(sumFibonacci);
