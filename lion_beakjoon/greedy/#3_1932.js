// https://www.acmicpc.net/problem/1932

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let ans = 0;
  input.splice(0, 1);
  input = input
    .map((v) => v.split(' ').map((a) => +a))
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => a[1] - b[1]);
    let cnt = 0;
    let now = 0;
    for (let i = 0; i < input.length; i++) {
      if (now <= input[i][0]) {
        now = input[i][1];
        cnt++;
      }
    }
    ans = Math.max(cnt, ans);
  return ans;
}

console.log(solution());
