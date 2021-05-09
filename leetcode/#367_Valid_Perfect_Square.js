// https://leetcode.com/problems/valid-perfect-square/

const isPerfectSquare = (num) => {
  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) return true;
  }
  return false;
};

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
