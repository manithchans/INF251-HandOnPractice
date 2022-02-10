/*
Write a JavaScript program to check whether a number is even or not.
*/

function checkIsEven(num) {
    if (num < 0) {
        num = Math.abs(num);
    }
    else if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else {
        num = num - 2;
        return checkIsEven(num);
    }
}

console.log(checkIsEven(2));
console.log(checkIsEven(8));
console.log(checkIsEven(13));
console.log(checkIsEven(111));