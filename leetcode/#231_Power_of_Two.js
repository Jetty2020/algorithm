// https://leetcode.com/problems/power-of-two/

const isPowerOfTwo = (n) => {
  let ans = n;
  while (1) {
    if (ans === 1) return true;
    else if (ans < 1) return false;
    else ans /= 2;
  }
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false