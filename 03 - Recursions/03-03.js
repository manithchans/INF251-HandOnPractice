/*
Write a JavaScript program to get the integers in range (x, y).
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/

function rangeBetween(start_num, end_num) {
  if (end_num - start_num === 2) return [start_num + 1];
  else {
    var list = rangeBetween(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(rangeBetween(2,4));
console.log(rangeBetween(1,7));
console.log(rangeBetween(10,40));
console.log(rangeBetween(100,124));
