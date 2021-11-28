// https://www.acmicpc.net/problem/10972

// const input = [4, '1 2 3 4'];
// const input = [5, '5 4 3 2 1'];

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let n = input[0];
let m = input[1];

function next_permutation() {
  let tmp = [];
  let broke = -1;
  let min = -1;
  m = m.split(' ');
  for (let i = n - 1; i >= 0; i--) {
    if (min * 1 > m[i] * 1) {
      broke = i;
      break;
    }
    tmp.push(m[i]);
    min = m[i] * 1;
  }
  if (broke == -1) return -1;
  for (let i = 0; i < tmp.length; i++) {
    if (m[broke] * 1 < tmp[i] * 1) {
      let change = tmp.splice(i, 1, m[broke]);
      m[broke] = change.join('');
      break;
    }
  }
  return m.slice(0, broke + 1).join(' ') + ' ' + tmp.join(' ');
}
console.log(next_permutation());
