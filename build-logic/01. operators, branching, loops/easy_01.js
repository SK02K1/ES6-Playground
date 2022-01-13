/*
Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
*/

const num1 = 5;
const num2 = 13;
const num3 = 7;
const num4 = 21;
const num5 = 48;

// approach-1
function getSum1(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

// approach-2
function getSum2() {
  let sum = 0;
  for (let num of arguments) {
    sum += num;
  }
  return sum;
}

// approach-3
const getSum3 = (...numbers) => numbers.reduce((sum, num) => (sum += num), 0);

console.log(getSum1(num1, num2, num3, num4, num5));
console.log(getSum2(num1, num2, num3, num4, num5));
console.log(getSum3(num1, num2, num3, num4, num5));
