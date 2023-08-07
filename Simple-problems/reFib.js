function fibonacciRecursive(n) {
    if (n <= 1) {
      return n;
    }
    
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  
  // Calculate the 10th Fibonacci number
  console.log(fibonacciRecursive(10)); // Output: 55

//   function fibonacciSeries(n) {
//     if (n == 0) {
//         return [0];
//     }
//     if (n == 1) {
//         return [0, 1];
//     }
//     const fibo = fibonacciSeries(n - 1);
//     fibo[n] = fibo[n - 1] + fibo[n - 2];
//     return fibo;
// }
// const fiboSeries = fibonacciSeries(10);
// console.log(fiboSeries);