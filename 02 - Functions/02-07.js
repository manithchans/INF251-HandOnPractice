/*
 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/
"use strict";
(function () {
    function countVowels(pickedSentence) {

        const vowels = ["a", "e", "i", "o", "u"];
        let count = 0;
        for (let letter of pickedSentence.toLowerCase())
            if (vowels.includes(letter))
                count++;

        return count;
    }

    console.log(countVowels("AUPP"));
    console.log(countVowels("Manith"));
    console.log(countVowels("Front End Web Development"));


})();