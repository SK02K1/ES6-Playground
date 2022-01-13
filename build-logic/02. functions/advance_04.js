/*
Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
*/

const reverseCharactersOfWord = (str) => {
  return str
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
};

console.log(reverseCharactersOfWord('we are neoGrammers'));
