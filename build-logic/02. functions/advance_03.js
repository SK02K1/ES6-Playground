/*
Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
*/

// approach-1
const sortArray1 = (arr) => {
  const items = [...arr];
  const sortedArr = [];
  while (items.length !== 0) {
    const [min] = items.splice(items.indexOf(Math.min(...items)), 1);
    sortedArr.push(min);
  }
  return sortedArr;
};

console.log(sortArray1([100, 83, 32, 9, 45, 61]));

// approach-2
const sortArray2 = (arr) => [...arr].sort((a, b) => a - b);

console.log(sortArray2([100, 83, 32, 9, 45, 61]));
