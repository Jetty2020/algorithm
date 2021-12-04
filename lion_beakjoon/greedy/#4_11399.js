// https://www.acmicpc.net/problem/11399

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let ans = 0;
  let arr = input[1]
    .split(' ')
    .map((v) => +v)
    .sort((a, b) => a - b);
  arr.forEach((v, i) => {
    ans += v * (arr.length - i);
  });
  return ans;
}

console.log(solution());
