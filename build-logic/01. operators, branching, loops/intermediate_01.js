/*
Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

*/

function FizzBuzz() {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        arr[i - 1] = 'FizzBuzz';
      } else {
        arr[i - 1] = 'Fizz';
      }
    } else if (i % 5 === 0) {
      arr[i - 1] = 'Buzz';
    } else {
      arr[i - 1] = i;
    }
  }

  return arr;
}

console.log(FizzBuzz());