/*
Write a JavaScript function to compute the factors of a positive integer.
*/
"use strict";
(function () {
    function factors(pickedNumber) {
        var result = [];
        for(var i = 1; i<=pickedNumber; i++)
            if (pickedNumber % i === 0)
                result.push(i);

        return result;
    }

    console.log(factors(8));
    console.log(factors(12));
    console.log(factors(25));
})();