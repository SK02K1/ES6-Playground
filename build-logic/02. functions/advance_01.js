/*
Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
*/

// approach-1
const encodeString1 = (str, shiftBy) => {
  let encodedString = '';
  for (let i = 0; i < str.length; i++) {
    encodedString += String.fromCharCode(str[i].charCodeAt(0) + shiftBy);
  }

  return encodedString;
};

// approach-2
const encodeString2 = (str, shiftBy) =>
  [...str].reduce(
    (encodedString, char) =>
      (encodedString += String.fromCharCode(char.charCodeAt(0) + shiftBy)),
    ''
  );

// approach-3
const encodeString3 = (str, shiftBy) =>
  [...str]
    .map((char) => String.fromCharCode(char.charCodeAt(0) + shiftBy))
    .join('');

console.log(encodeString1('neogcamp', 2));
console.log(encodeString2('neogcamp', 2));
console.log(encodeString3('neogcamp', 2));
