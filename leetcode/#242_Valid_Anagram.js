// https://leetcode.com/problems/valid-anagram/

const isAnagram = (s, t) => {
  let sArray = s.split('').sort();
  let tArray = t.split('').sort();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (sArray[i] !== tArray[i]) return false;
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
