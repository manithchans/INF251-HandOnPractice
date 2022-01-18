/*
 Write a JavaScript program to rotate the string 'w3resource' 
 in right direction by periodically removing one letter from 
 the end of the string and attaching it to the front.
*/

"use strict";
function wordRotate(word) {
    var length = word.length;
    var newText = word[length-1];
    for (var i = 0; i < length - 1; i++){
        newText = newText.concat(word[i]);
    };
    return newText;
};

console.log(`${wordRotate("w3resource")}`);