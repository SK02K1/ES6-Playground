/*
Write a program to take a number input from user and print multiplication table 12 times for that number.
*/

const printTable = (num) => {
  for (let i = 0; i < 12; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${num} * ${j} = ${num * j}`);
    }
    console.log('');
  }
};

printTable(5);
