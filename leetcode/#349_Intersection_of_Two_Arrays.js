// https://leetcode.com/problems/intersection-of-two-arrays/

const intersection = (nums1, nums2) => {
  let nlen1 = nums1.length,
    nlen2 = nums2.length,
    index = nums1.length > nums2.length,
    ans = [];
  if (index) {
    for (let i = 0; i < nlen2; i++) {
      if (ans.indexOf(nums2[i]) < 0) {
        for (let j = 0; j < nlen1; j++) {
          if (nums2[i] === nums1[j]) {
            ans.push(nums2[i]);
            break;
          }
        }
      }
    }
  } else {
    for (let i = 0; i < nlen1; i++) {
      if (ans.indexOf(nums1[i]) < 0) {
        for (let j = 0; j < nlen2; j++) {
          if (nums1[i] === nums2[j]) {
            ans.push(nums1[i]);
            break;
          }
        }
      }
    }
  }
  return ans;
};

// console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
console.log(
  intersection(
    [
      61,
      24,
      20,
      58,
      95,
      53,
      17,
      32,
      45,
      85,
      70,
      20,
      83,
      62,
      35,
      89,
      5,
      95,
      12,
      86,
      58,
      77,
      30,
      64,
      46,
      13,
      5,
      92,
      67,
      40,
      20,
      38,
      31,
      18,
      89,
      85,
      7,
      30,
      67,
      34,
      62,
      35,
      47,
      98,
      3,
      41,
      53,
      26,
      66,
      40,
      54,
      44,
      57,
      46,
      70,
      60,
      4,
      63,
      82,
      42,
      65,
      59,
      17,
      98,
      29,
      72,
      1,
      96,
      82,
      66,
      98,
      6,
      92,
      31,
      43,
      81,
      88,
      60,
      10,
      55,
      66,
      82,
      0,
      79,
      11,
      81,
    ],
    [
      5,
      25,
      4,
      39,
      57,
      49,
      93,
      79,
      7,
      8,
      49,
      89,
      2,
      7,
      73,
      88,
      45,
      15,
      34,
      92,
      84,
      38,
      85,
      34,
      16,
      6,
      99,
      0,
      2,
      36,
      68,
      52,
      73,
      50,
      77,
      44,
      61,
      48,
    ]
  )
); // [9, 4]
