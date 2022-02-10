/*
Write a merge sort program in JavaScript.
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]
*/

function mergeSort(arr){
   if (arr.length < 2){
      return arr;
   }
   var middle = Math.floor(arr.length / 2);
   var left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
   return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right){
   const newArr = [];
   while (left.length && right.length) {
      if (left[0] <= right[0]){
         newArr.push(left.shift());
      }
      else{
         newArr.push(right.shift());
      };
   }
   while (left.length){
      newArr.push(left.shift());
   };
   while (right.length){
      newArr.push(right.shift());
   };
   return newArr;
};

var arr = [34,7,23,32,5,62];
var arr2 = [12,4,19,0,10,3];
console.log(mergeSort(arr));
console.log(mergeSort(arr2));