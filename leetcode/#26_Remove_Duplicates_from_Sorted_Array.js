// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = (nums) => {
  let ans = nums.filter((num, i) => {
    return num !== nums[i + 1];
  });
  return `${ans.length}, ${ans}`
};

console.log(removeDuplicates([1, 1, 2])); //[1, 2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //[0, 1, 2, 3, 4]
