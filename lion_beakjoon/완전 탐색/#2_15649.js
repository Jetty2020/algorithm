// https://www.acmicpc.net/problem/15649

// let [n, m] = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ');
// const solution = (input) => {
//   let [n, m] = input.toString().trim().split(' ');
//   let arr = [];
//   const fx = (arr) => {
//     if (arr.length === m) console.log(arr.join(' '))

//     // console.log(arr);
//   };
//   fx(arr)
//   return 0;
// };

// const input = [4, 2];
// const N = input.shift();
// const M = input.shift();


// console.log(solution('3 1'));
// console.log(solution('4 2'));
// console.log(solution('4 4'));

const input = [3, 2];
const N = input.shift();
const M = input.shift();

const visited = new Array(N);
let output = [];
let result = '';

function dfs(cnt) {
  console.log(cnt, output);
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(result);
// console.log(result.trim());