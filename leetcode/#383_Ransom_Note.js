// https://leetcode.com/problems/ransom-note/

const canConstruct = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) return false;
  var arr = ransomNote.split('');
  var originMagLen = magazine.length;
  arr.forEach((item) => {
    magazine = magazine.replace(item, '');
  });
  if (originMagLen == magazine.length + arr.length) return true;
  else return false;
};

console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
