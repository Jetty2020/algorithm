// https://leetcode.com/problems/plus-one/

const plusOne = (digits) => {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  return digits.unshift(1);
};

// console.log(plusOne([1, 2, 3])); //[1, 2, 4]
// console.log(plusOne([4, 3, 2, 1])); //[4, 3, 2, 2]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); //[1]
