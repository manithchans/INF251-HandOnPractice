/*
Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
*/

const num = Math.ceil(Math.random() * 10);
const guessNum = prompt('Please guess the number between 1 and 10 inclusive');
 if (guessNum == num)
   console.log('Good Work!');
  else
   console.log('Not matched, the number was '+guessNum);