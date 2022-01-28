/*
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
"use strict";
(function () {
    function primer(pickedNumber) {
        function checkNumber() {
            if (pickedNumber <= 1)
                return false;
            for (let i = 2; i < pickedNumber; i++)
                if (pickedNumber % i == 0)
                    return false;
            return true;
        }
        if (checkNumber()) return `${pickedNumber} is a prime number.`;
        else return `${pickedNumber} is a not prime number.`;
    }

    // check prime number from 0-100
    for (let i = 0; i <=100; i++)
        console.log(primer(i));
})();