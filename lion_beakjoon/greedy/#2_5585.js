// https://www.acmicpc.net/problem/5585

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution() {
  input = 1000 - input;
  let ans = 0;
  if (input > 499) {
    ans += Math.floor(input / 500);
    input %= 500;
  }
  if (input > 99) {
    ans += Math.floor(input / 100);
    input %= 100;
  }
  if (input > 49) {
    ans += Math.floor(input / 50);
    input %= 50;
  }
  if (input > 9) {
    ans += Math.floor(input / 10);
    input %= 10;
  }
  if (input > 4) {
    ans += Math.floor(input / 5);
    input %= 5;
  }
  return ans + input;
}

console.log(solution());
