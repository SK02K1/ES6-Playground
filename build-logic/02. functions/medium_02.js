/*
Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
*/

// approach-1
const indexOf1 = (arr, item) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return index;
};

const indexOf2 = (arr, item) => arr.indexOf(item);

console.log(indexOf1([1, 6, 3, 5, 8, 9], 3));
console.log(indexOf2([1, 6, 3, 5, 8, 9], 3));
