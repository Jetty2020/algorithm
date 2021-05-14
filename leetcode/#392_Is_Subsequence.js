// https://leetcode.com/problems/is-subsequence/

const isSubsequence = (s, t) => {
  let i = 0,
    j = 0;
  while (i < s.length) {
    if (j === t.length) return false;
    if (s[i] === t[j]) i++;
    j++;
  }
  return true;
};

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
