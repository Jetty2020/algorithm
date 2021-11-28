// https://www.acmicpc.net/problem/15649

const input = [3, 2];
const N = input.shift();
const M = input.shift();

const visited = new Array(N);
let output = [];
let result = '';

function dfs(cnt) {
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