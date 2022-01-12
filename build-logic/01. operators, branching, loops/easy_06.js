/*
Write program to take a month as an input from the user and find out whether the month has 31 days or not.
*/

const has31Days = [
  'january',
  'march',
  'may',
  'july',
  'august',
  'october',
  'december',
];

function checkMonth1(month) {
  let found = false;
  for (let i = 0; i < has31Days.length; i++) {
    if (month.toLowerCase() === has31Days[i]) {
      found = true;
      break;
    }
  }
  return found ? 'has 31 days' : "doesn't have 31 days";
}

const checkMonth2 = (month) =>
  has31Days.includes(month.toLowerCase())
    ? 'has 31 days'
    : "doesn't have 31 days";

console.log(checkMonth1('december'));
console.log(checkMonth2('december'));

console.log(checkMonth1('september'));
console.log(checkMonth2('september'));
