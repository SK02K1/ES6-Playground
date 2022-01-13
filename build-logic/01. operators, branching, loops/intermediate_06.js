/*
Write a Program to take a number input from user and find if the number is Prime or not.
*/

const checkPrime = (num) => {
  let isPrime = true;
  if (num < 0) {
    return 'not prime';
  } else {
    for (let i = 2; i < num - 1; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime ? 'prime' : 'not prime';
};

console.log(checkPrime(5));
console.log(checkPrime(12));
