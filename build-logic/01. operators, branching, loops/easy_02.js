/*
Write a program to take a number input from user and determine whether the number is odd or even.
*/

const num1 = 5;
const num2 = 6;

// approach-1
function checkNum1(num) {
  return num % 2 === 0 ? 'even' : 'odd';
}

// approach-2
const checkNum2 = (num) => (num % 2 === 0 ? 'even' : 'odd');

console.log(checkNum1(num1));
console.log(checkNum1(num2));

console.log(checkNum2(num1));
console.log(checkNum2(num2));
