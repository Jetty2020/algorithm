// https://leetcode.com/problems/single-number/

const singleNumber = (nums) => {
  return nums.reduce((prev, curr) => prev ^ curr);
};

console.log(singleNumber([2, 2, 1])); //1
console.log(singleNumber([4, 1, 2, 1, 2])); //4
console.log(singleNumber([1])); //1
