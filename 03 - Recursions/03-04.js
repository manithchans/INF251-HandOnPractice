/*
Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 
*/

function sum(arr) {
    if (arr.length == 1) return arr[0];
    else
        return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4, 5, 6]));
console.log(sum([5, 6, 7, 8, 9, 10]));
console.log(sum([11, 22, 33, 44, 55, 66]));
