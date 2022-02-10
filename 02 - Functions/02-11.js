/*
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/
"use strict";
(function () {
    function greLow(sampleArray) {
        sampleArray.sort((a, b) => a - b);
        var arrStart = [sampleArray[0]];
        var result = [];

        for (var j = 1; j < sampleArray.length; j++) {
            if (sampleArray[j - 1] !== sampleArray[j]) {
                arrStart.push(sampleArray[j]);
            }
        }
        result.push(arrStart[1], arrStart[arrStart.length - 2]);
        return result.join(',');
    }

    console.log(greLow([1, 5, 2, 3, 4]));
    
})();