// https://www.acmicpc.net/problem/2309

let nums = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((i) => parseInt(i));

let arr;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (nums.reduce((sum, item) => sum + item, 0) === nums[i] + nums[j] + 100) {
      arr = nums.filter((item) => item !== nums[i] && item !== nums[j]);
      break;
    }
  }
  if (!!arr) break;
}
arr.sort((a, b) => a - b);
for (let i = 0; i < 7; i++) console.log(arr[i]);
