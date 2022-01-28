/*
Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
*/

function exponent(a, n) {
   if (n === 0) 
    return 1;
  else 
    return a * exponent(a, n-1);
};

console.log(exponent(3, 4));
console.log(exponent(13, 4));
console.log(exponent(4, 3));