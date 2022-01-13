/*
Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80
*/

const areaOfHexagon = (a) => (3 * Math.sqrt(3) * a ** 2) / 2;

console.log(areaOfHexagon(10));
