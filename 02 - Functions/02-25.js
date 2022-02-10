/*
Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/


function Longest_Country_Name(arr) {
    var longest;
    var strSize = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > strSize) {
            strSize = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));