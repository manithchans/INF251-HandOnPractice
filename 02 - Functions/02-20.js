/*
Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

function generateID(length) {
    var ID = "";
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        ID += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return ID;
}

console.log(generateID(5));
console.log(generateID(10));
console.log(generateID(3));