/*
Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
*/

function printFibonacci(numOfChar) {
  let num1 = 0;
  let num2 = 1;
  console.log(num1);
  console.log(num1 + num2);
  for (let i = 0; i < numOfChar - 2; i++) {
    let num3 = num1 + num2;
    console.log(num3);
    num1 = num2;
    num2 = num3;
  }
}
printFibonacci(9);
