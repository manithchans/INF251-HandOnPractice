/*
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/

function findOccurrence(str, letter) {
 var count = 0;
 for (var i = 0; i < str.length; i++) 
    if (str.charAt(i) == letter) 
      count += 1;
  return count;
}

console.log(findOccurrence('FrontEndDevelopment', 'e'));