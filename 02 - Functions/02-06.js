/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

"use strict";
(function () {
    function longestWord(pickedSentence) {

        var strSplit = pickedSentence.split(' ');
        var longestWord = "";
        for (var i = 0; i < strSplit.length; i++) {
            if (strSplit[i].length > longestWord.length)
                longestWord = strSplit[i];
        }
        return longestWord;
    }

    console.log(longestWord("Front End Web Development!"));

})();