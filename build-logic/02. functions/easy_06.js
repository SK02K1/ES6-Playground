/*
Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
*/

const typeOfTriangle = (angle1, angle2, angle3) => {
  if (angle1 + angle2 + angle3 !== 180) {
    return 'not valid angles';
  } else {
    if (angle1 === angle2 && angle1 === angle3) {
      return 'Equilateral';
    } else if (angle1 === angle3) {
      return 'Isosceles ';
    } else {
      return 'Scalene';
    }
  }
};

console.log(typeOfTriangle(30, 60, 90));
console.log(typeOfTriangle(20, 140, 20));
console.log(typeOfTriangle(60, 60, 60));
