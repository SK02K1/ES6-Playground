/*
Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *

*/

function printStar(numOfRows) {
  for (let i = 1; i <= numOfRows; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write('*');
    }
    console.log();
  }
}

printStar(5);
