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
  if (x < 0) {
    i = -i;
    const string_i = String(i);
    let reverse_i = string_i.split("").reverse().join("");
    reverse_i = Number(-reverse_i);
    return reverse_i < -0x80000000 ? 0 : reverse_i;
  } else {
    const string_i = String(i);
    let reverse_i = string_i.split("").reverse().join("");
    reverse_i = Number(reverse_i);
    return reverse_i > 0x7fffffff ? 0 : reverse_i;
  }
};

// More efficient

function reverse2(n) {
  var reverseN = 0;
  var sign = n < 0;
  n = Math.abs(n);
  while (n) {
    reverseN = reverseN * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  if (reverseN > 0x7fffffff) {
    return 0;
  } else {
    return sign ? -reverseN : reverseN;
  }
}

console.log(reverse(15342364));
console.log(reverse(-15342364));
console.log(reverse(2147483648));

console.log(reverse2(15342364));
console.log(reverse2(-15342364));
console.log(reverse2(2147483648));
