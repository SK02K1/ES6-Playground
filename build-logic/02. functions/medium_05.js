/*
Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c
*/

// withour predefined method
const charAt1 = (str, index) => {
  if (index >= 0 && index < str.length) {
    return str[index];
  } else {
    return '';
  }
};

// predefined method
const charAt2 = (str, index) => str.charAt(index);

console.log(charAt1('neoGcamp', 4));
console.log(charAt2('neoGcamp', 4));
