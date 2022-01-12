/*
Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
*/

// approach-1
const replace1 = (arr, target, replaceBy) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] === target ? replaceBy : arr[i];
  }
  return newArr;
};

// approach-2
const replace2 = (arr, target, replaceBy) =>
  arr.map((item) => (item === target ? replaceBy : item));

console.log(replace1([1, 5, 3, 5, 6, 8], 5, 10));
console.log(replace2([1, 5, 3, 5, 6, 8], 5, 10));
