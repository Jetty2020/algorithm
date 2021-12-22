// https://www.acmicpc.net/problem/10870

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return solution(n - 1) + solution(n - 2);
}

console.log(solution(input));
