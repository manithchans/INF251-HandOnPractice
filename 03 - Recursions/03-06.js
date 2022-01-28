/*
Write a JavaScript program to get the first n Fibonacci numbers.
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
*/

function fibonacci (n) {
  if (n===1) return [0, 1];
  else 
  {
    var f = fibonacci(n - 1);
    f.push(f[f.length - 1] + f[f.length - 2]);
    return f;
  }
};

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(10));