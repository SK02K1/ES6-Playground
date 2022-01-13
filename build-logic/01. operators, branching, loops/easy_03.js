/*
Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
*/

const num1 = 129;
const num2 = 251;

// approach-1
function findMinMax1(num1, num2) {
  return num1 > num2 ? { max: num1, min: num2 } : { max: num2, min: num1 };
}

// approach-2
function findMinMax2() {
  return { max: Math.max(...arguments), min: Math.min(...arguments) };
}

// approach-3
const findMinMax3 = (...numbers) => ({
  max: Math.max(...numbers),
  min: Math.min(...numbers),
});

console.log(findMinMax1(num1, num2));
console.log(findMinMax2(num1, num2));
console.log(findMinMax3(num1, num2));
