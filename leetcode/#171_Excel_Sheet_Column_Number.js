// https://leetcode.com/problems/excel-sheet-column-number/

const titleToNumber = (text) => {
  const base = 'A'.charCodeAt(0) - 1;
  const n = text.length;
  let number = 0;
  for (let i = 0; i < n; i++)
    number += (text.charCodeAt(i) - base) * Math.pow(26, n - i - 1);
  return number;
};

console.log(titleToNumber('A')); //1
console.log(titleToNumber('AB')); //28
console.log(titleToNumber('ZY')); //701
console.log(titleToNumber('FXSHRXW')); //2147483647
