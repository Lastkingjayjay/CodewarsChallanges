// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My solution 
const str = "world";
const str1 = "word";
const newStr = str.split("");
const newStr1 = str1.split("");

function solution(str) {
  return str.split("").reverse().join("");
  return str1.split("").reverse().join("");
}