// https://leetcode.com/problems/power-of-four/

const isPowerOfFour = (n) => {
  let ans = n;
  while (1) {
    if (ans <= 1) break;
    ans /= 4;
  }
  return ans === 1 ? true : false;
};

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(1)); // true