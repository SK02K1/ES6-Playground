/*
Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
*/

function getFactorial1(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
}
