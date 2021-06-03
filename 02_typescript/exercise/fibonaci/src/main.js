//In ra n số fibonacci
function fibonacci(n) {
    if (n == 1) {
        return [0, 1];
    }
    else {
        var array = fibonacci(n - 1);
        // @ts-ignore
        array.push(array[array.length - 1] + array[array.length - 2]);
        return array;
    }
}
console.log(fibonacci(8));
//Tính tổng 10 số fibonacci
// @ts-ignore
function fibonacciSum(number) {
    return number < 1 ? 0 : number <= 2 ? 1 : fibonacciSum(number - 1) + fibonacciSum(number - 2);
}
var sumFibonacci = 0;
for (var i = 0; i <= 10; i++) {
    sumFibonacci += fibonacciSum(i);
}
console.log(sumFibonacci);
