/*
Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
*/

// approach-1
const mergeArray1 = (...arrays) => {
  const newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      newArray.push(arrays[i][j]);
    }
  }

  return newArray;
};

console.log(mergeArray1([1, 3, 5], [2, 4, 6]));

// approach-2
const mergeArray2 = (...arrays) => {
  const newArr = [];
  arrays.forEach((array) => newArr.push(...array));
  return newArr;
};

console.log(mergeArray2([1, 3, 5], [2, 4, 6]));

// approach-3
const mergeArray3 = (...arrays) =>
  arrays.reduce((newArr, arr) => [...newArr, ...arr]);

console.log(mergeArray3([1, 3, 5], [2, 4, 6]));

// approach-4
const mergeArray4 = (...arrays) => arrays.flat();
console.log(mergeArray4([1, 3, 5], [2, 4, 6]));
