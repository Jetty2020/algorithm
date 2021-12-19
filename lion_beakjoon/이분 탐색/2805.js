// https://www.acmicpc.net/problem/2805

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const M = +input[0].split(' ')[1];
  const arr = input[1].split(' ').map((v) => +v);
  let high = (low = 0);
  arr.forEach((v) => {
    if (v > high) high = v;
  });
  let mid,
    ans = 0;
  while (low <= high) {
    mid = ~~((high + low) / 2);
    let sum = 0;
    arr.forEach((v) => {
      let get = v - mid;
      if (get > 0) sum += get;
    });
    if (sum >= M) {
      if (mid > ans) ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

console.log(solution());
