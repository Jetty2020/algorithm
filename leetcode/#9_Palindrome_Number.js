// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

const isPalindrome = function (n) {
  if (n < 0) return false;
  let reverseN = 0;
  let m = n;
  
  while (m) {
    reverseN = reverseN * 10 + (m % 10);
    m = Math.floor(m / 10);
  }
  return (reverseN == n);
};

console.log(isPalindrome(12345654321));
console.log(isPalindrome(1534236469));