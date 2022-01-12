/*
Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
*/

const num1 = 35;
const num2 = 29;
const num3 = 46;

// approach-1
function findMin1(n1, n2, n3) {
  if (n1 < n2) {
    if (n1 < n3) {
      return n1;
    } else {
      return n3;
    }
  } else if (n2 < n3) {
    return n2;
  } else {
    return n3;
  }
}

// appraoch-2
function findMin2() {
  let min = arguments[0];
  for (let num of arguments) {
    if (num <= min) {
      min = num;
    }
  }
  return min;
}

// approach-3
const findMin3 = (...numbers) => Math.min(...numbers);

console.log(findMin1(num1, num2, num3));
console.log(findMin2(num1, num2, num3));
console.log(findMin3(num1, num2, num3));
