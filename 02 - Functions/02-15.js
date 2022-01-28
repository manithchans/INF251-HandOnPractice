/*
Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
*/
"use strict";
(function (b, n) {
    function expon(b, n) {
        var answer = 1;
        for (var i =1; i <= n; i++)
            answer = b * answer;        
        console.log(answer);
    }

    expon(2, 8);
    expon(22, 2);
    expon(10, 10);
    expon(4, 3);
        
})();