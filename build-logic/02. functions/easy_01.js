/*
Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8
*/

// approach-1
const power1 = (base, pow) => base ** pow;

// approach-2
const power2 = (base, pow) => Math.pow(base, pow);

console.log(power1(2, 3));
console.log(power2(2, 3));
