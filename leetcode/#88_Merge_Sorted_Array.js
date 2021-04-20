// https://leetcode.com/problems/merge-sorted-array/

const merge = (nums1, m, nums2, n) => {
  let ans = [];
  for (let i = 0; i < m; i++) {
    ans.push(nums1[i]);
  }
  for (let i = 0; i < n; i++) {
    ans.push(nums2[i]);
  }
  return ans.sort((a, b) => {
    return a - b;
  });
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1, 2, 2, 3, 5, 6]
console.log(merge([1], 1, [], 0)); //[1]
