/*
Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
*/

const num1 = 8;
const num2 = 23;
const num3 = 17;

// approach-1
function findMax1(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    } else {
      return num3;
    }
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

// approach-2
function findMax2() {
  let max = arguments[0];
  for (let num of arguments) {
    if (num >= max) {
      max = num;
    }
  }
  return max;
}

// approach-3
const findMax3 = (...numbers) => Math.max(...numbers);

console.log(findMax1(num1, num2, num3));
console.log(findMax2(num1, num2, num3));
console.log(findMax3(num1, num2, num3));
