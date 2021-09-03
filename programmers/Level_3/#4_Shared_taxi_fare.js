// https://programmers.co.kr/learn/courses/30/lessons/72413

function solution(n, s, a, b, fares) {
  const board = new Array(n).fill().map((_) => new Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) board[i][i] = 0;

  fares.forEach((pos) => {
    const [x, y, weight] = pos;
    board[x - 1][y - 1] = weight;
    board[y - 1][x - 1] = weight;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j])
          board[i][j] = board[i][k] + board[k][j];
      }
    }
  }

  let answer = board[s - 1][a - 1] + board[s - 1][b - 1];
  for (let i = 0; i < n; i++) {
    const shortest = board[s - 1][i] + board[i][a - 1] + board[i][b - 1];
    answer = Math.min(answer, shortest);
  }

  return answer;
}

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
); // 82
// console.log(
//   solution(7, 3, 4, 1, [
//     [5, 7, 9],
//     [4, 6, 4],
//     [3, 6, 1],
//     [3, 2, 3],
//     [2, 1, 6],
//   ])
// ); // 14
// console.log(
//   solution(6, 4, 5, 6, [
//     [2, 6, 6],
//     [6, 3, 7],
//     [4, 6, 7],
//     [6, 5, 11],
//     [2, 5, 12],
//     [5, 3, 20],
//     [2, 4, 8],
//     [4, 3, 9],
//   ])
// ); // 18
