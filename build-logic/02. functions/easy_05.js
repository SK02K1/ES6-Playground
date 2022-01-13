/*
Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)
*/

// approach-1
function findMax1() {
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] >= max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax1(3, 5));
console.log(findMax1(3, 5, 9, 1));

// approach-2
const findMax2 = (...numbers) =>
  numbers.reduce((max, num) => (num >= max ? num : max));
console.log(findMax2(3, 5));
console.log(findMax2(3, 5, 9, 1));

// approach-3
const findMax3 = (...numbers) => Math.max(...numbers);
console.log(findMax3(3, 5));
console.log(findMax3(3, 5, 9, 1));
