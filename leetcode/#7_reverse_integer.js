// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

const reverse = function (x) {
  let i = x;
  if (x > 0x7FFFFFFF || x < -0x80000000) { //0x7FFFFFFF = 2^31 - 1, -0x80000000 = -2^31
    return 0;
  }
  if (x < 0) {
    i = -i;
    const string_i = String(i);
    let reverse_i = string_i.split("").reverse().join("");
    return Number(-reverse_i);
  } else {
    const string_i = String(i);
    let reverse_i = string_i.split("").reverse().join("");
    return Number(reverse_i);
  }
};

// More efficient
// function reverse(n) {
//   var reverseN = 0;
//   var sign = n < 0;
//   n = Math.abs(n);
//   while (n) {
//     reverseN = reverseN * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return reverseN > 0x7fffffff ? 0 : sign ? -reverseN : reverseN;
// }

console.log(reverse(1534236469));
console.log(reverse(2147483648));
