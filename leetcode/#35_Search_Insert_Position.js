// https://leetcode.com/problems/search-insert-position/

const searchInsert = (nums, target) => {
  let i = 0,
    ans;
  while (1) {
    if (nums[i] >= target) {
      ans = i;
      break;
    } else if (i === nums.length) {
      ans = i;
      break;
    }
    i++;
  }
  return ans;
};

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
console.log(searchInsert([1, 3, 5, 6], 0)); //0
console.log(searchInsert([1], 0)); //0
