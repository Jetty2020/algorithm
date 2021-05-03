// https://leetcode.com/problems/power-of-three/

const isPowerOfThree = (n) => {
  let ans = n;
  while (1) {
    if (ans <= 1) break;
    ans /= 3;
  }
  return ans === 1 ? true : false;
};

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
