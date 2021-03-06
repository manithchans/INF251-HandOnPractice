/*
Write a JavaScript function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/
"use strict";
(function () {
    function amountToCoins(amount, coins) {
        if (amount === 0) {
            return [];
        }
        else {
            if (amount >= coins[0]) {
                var left = (amount - coins[0]);
                return [coins[0]].concat(amountToCoins(left, coins));
            }
            else {
                coins.shift();
                return amountToCoins(amount, coins);
            }
        }
    }

    console.log(amountToCoins(46, [25, 10, 5, 2,1]));
})();