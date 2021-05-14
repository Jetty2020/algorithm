// https://leetcode.com/problems/find-the-difference/

const findTheDifference = (s, t) => {
  let ans = '',
    sArr = s.split(''),
    tArr = t.split('');
  for (let i = 0; i < tArr.length; i++) {
    if (sArr.indexOf(tArr[i]) === -1) ans += tArr[i];
    else sArr[sArr.indexOf(tArr[i])] = 0;
  }
  return ans;
};

console.log(findTheDifference('abcd', 'abcde')); // 'e'
console.log(findTheDifference('', 'y')); // 'y'
console.log(findTheDifference('a', 'aa')); // 'a'
console.log(findTheDifference('ae', 'aea')); // 'a'
