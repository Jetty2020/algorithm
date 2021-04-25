// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

const twoSum = (numbers, target) => {
  for (let start = 0, end = numbers.length - 1; start < end; ) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) return [++start, ++end];
    else sum > target ? end-- : start++;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); //[1, 2]
console.log(twoSum([2, 3, 4], 6)); //[1, 3]
console.log(twoSum([-1, 0], -1)); //[1, 2]
