/*
Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
*/

const checkWeekDay = (day) =>
  ['saturday', 'sunday'].includes(day.toLowerCase()) ? 'weekend' : 'weekday';

console.log(checkWeekDay('Tuesday'));
console.log(checkWeekDay('Sunday'));
