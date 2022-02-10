// 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(num) {
    var sum = 0;
    for(var i = 1; i<=num; i++){
        sum += i;
    }
    console.log(`The sum of 1 to ${num} is: ${sum}.`);
}

sumRange(3);
sumRange(12);
sumRange(20);
sumRange(9);