/*
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
"use strict";
(function () {
    function sorter(pickedWord) {
        var newArr = pickedWord.split("");
        var result = newArr.sort().join("");
        return result;
    }
    console.log("Original String: FrontEndWebDevelopment");
    console.log(sorter("FrontEndWebDevelopment"));

})();