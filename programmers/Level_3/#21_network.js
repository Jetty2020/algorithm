// https://programmers.co.kr/learn/courses/30/lessons/42627

function solution(n, computers) {
  let answer = 0;
  const visited = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, visited, computers);
      answer++;
    }
  }
  return answer;
}

const dfs = (node, visited, computers) => {
  visited[node] = true;
  for (let i = 0; i < computers.length; i++) {
    if (computers[node][i] === 1 && !visited[i]) dfs(i, visited, computers);
  }
};

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// ); // 1
