/*
Write a JavaScript function to  get the number of occurrences of each letter in specified string.
*/

function getOccur(string) {
    let string1 = string.split("").sort().join("");
    let count = 1;
    for (let i = 0; i < string.length; i++) {
      if (string1[i] == string1[i + 1]) {
        count++;
      } else {
        console.log(string1[i] + " " + count);
        count = 1;
      }
    }
  }

getOccur("frontendwebdevelopment");