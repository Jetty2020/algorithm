// https://leetcode.com/problems/first-unique-character-in-a-string/

const firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    let index = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) index++;
      if (index === 2) break;
      if (j === s.length -1 && index === 1) return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
