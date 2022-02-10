/*
Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
*/

function findGCD(x, y){
    if (y === 0) {
        return x;
    }

    return findGCD(y, x % y);
}

console.log(findGCD(2154, 458));
console.log(findGCD(336, 360));