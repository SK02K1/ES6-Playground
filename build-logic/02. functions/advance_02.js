/*
Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
*/

// approach-1
const toSentenceCase1 = (str) => {
  let newStr = '';
  let i = 0;
  while (i < str.length) {
    if (i === 0) {
      newStr += str[i].toUpperCase();
    } else if (str[i] === ' ') {
      newStr += ` ${str[i + 1].toUpperCase()}`;
      i += 1;
    } else {
      newStr += str[i];
    }
    i += 1;
  }
  return newStr;
};

console.log(toSentenceCase1('we are neoGrammers'));

// approach-2
const toSentenceCase2 = (str) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

console.log(toSentenceCase2('we are neoGrammers'));
