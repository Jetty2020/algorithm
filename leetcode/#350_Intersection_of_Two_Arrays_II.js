// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (nums1, nums2) => {
  let nlen1 = nums1.length,
    nlen2 = nums2.length,
    index = nums1.length > nums2.length,
    ans = [];
  if (index) {
    for (let i = 0; i < nlen2; i++) {
      for (let j = 0; j < nlen1; j++) {
        if (nums2[i] === nums1[j]) {
          ans.push(nums2[i]);
          nums1[j] = -1;
          break;
        }
      }
    }
  } else {
    for (let i = 0; i < nlen1; i++) {
      for (let j = 0; j < nlen2; j++) {
        if (nums1[i] === nums2[j]) {
          ans.push(nums1[i]);
          nums2[j] = -1;
          break;
        }
      }
    }
  }
  return ans;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
