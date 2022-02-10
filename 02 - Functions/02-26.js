/*
Write a JavaScript function to find longest substring in a given a string without repeating characters.
*/

function findLongestSubString(names){
    var string = "";
    var subString = "";
    var namestring=names.split("");

    for(var j=0;j<namestring.length;j++) {
        for(var i=j;i<namestring.length;i++)
            if(string.includes(namestring[i]))
                break;
            else
                string+=namestring[i];
         if(subString.length<string.length)
             subString=string;
         string="";
    }
    return subString;
}

console.log(findLongestSubString("frontendweb"));
console.log(findLongestSubString("helloaupp"));