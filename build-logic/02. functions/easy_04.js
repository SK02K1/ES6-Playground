/*
Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript)
*/

// approach-1
function findMin1() {
  let min = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] <= min) {
      min = arguments[i];
    }
  }
  return min;
}

// approach-2
const findMin2 = (...numbers) =>
  numbers.reduce((min, num) => (num <= min ? num : min));

// approach-3
const findMin3 = (...numbers) => Math.min(...numbers);

console.log(findMin1(2, 4, 5, 8, 1));
console.log(findMin2(2, 4, 5, 8, 1));
