/*
Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
*/

// without predefined methods
const arrayLength1 = (arr) => {
  let length = 0;
  for (let i = 0; arr[i]; i++) {
    length += 1;
  }
  return length;
};

console.log(arrayLength1([1, 5, 3, 7, 8]));

// with predefined method
const arrayLength2 = (arr) => arr.length;

console.log(arrayLength2([1, 5, 3, 7, 8]));
