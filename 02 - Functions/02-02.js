/*
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
"use strict";
(function isItPalindrome(word) {
    const reverseArrayValues = word.split('').reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(word == reverseString) {
        console.log(`${word} is a palindrome.`);
    }
    else {
        console.log(`${word} is not a palindrome.`);
    }

})("foxof");
