// https://www.acmicpc.net/problem/2839

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution() {
  input *= 1;
  let cnt = 0;
  for (let i = 0; i < 3; i++) {
    if (input - cnt * 5 < 0) {
      return -1;
    } else if (input - cnt * 5 === 0) {
      break;
    }
    if (!((input - cnt * 5) % 3)) break;
    cnt++;
  }
  let rest = (input - cnt * 5) % 15;
  cnt += Math.floor((input - rest) / 15) * 3;
  return cnt + rest / 3;
}

console.log(solution());
