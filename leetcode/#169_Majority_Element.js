// https://leetcode.com/problems/majority-element/

const majorityElement = (nums) => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement([3, 2, 3])); //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2
