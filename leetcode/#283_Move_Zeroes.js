// https://leetcode.com/problems/move-zeroes/

const moveZeroes = (nums) => {
  if (nums.indexOf(0) === -1) return nums;
  let ans = [],
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count += 1;
    else ans.push(nums[i]);
  }
  for (let j = 0; j < count; j++) {
    ans.push(0);
  }
  return ans;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([1])); // [1]
