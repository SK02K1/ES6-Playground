/*
Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
*/

// approach-1
const minDate1 = (date1, date2) => {
  const [d1, m1, y1] = date1.split('/');
  const [d2, m2, y2] = date2.split('/');

  if (y1 !== y2) {
    return y1 < y2 ? date1 : date2;
  } else if (m1 !== m2) {
    return m1 < m2 ? date1 : date2;
  } else {
    return d1 < d2 ? date1 : date2;
  }
};

// approach-2
const minDate2 = (date1, date2) => {
  const [d1, m1, y1] = date1.split('/');
  const [d2, m2, y2] = date2.split('/');

  return new Date(y1, m1 - 1, d1).getTime() > new Date(y2, m2 - 1, d2).getTime()
    ? date2
    : date1;
};

console.log(minDate1('02/05/2021', '24/01/2021'));
console.log(minDate2('02/05/2021', '24/01/2021'));
