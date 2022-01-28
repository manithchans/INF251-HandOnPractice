/*
 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/
"use strict";
(function () {
    function capitalise(pickedSentence) {
        return pickedSentence.toUpperCase();
    }

    console.log(capitalise("hello"));
    console.log(capitalise("aupp"));
    console.log(capitalise("manith"));
})();