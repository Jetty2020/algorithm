//

function solution(board, skill) {
  skill.forEach((ele) => {
    for (let i = ele[1]; i <= ele[3]; i++) {
      for (let j = ele[2]; j <= ele[4]; j++) {
        if (ele[0] === 1) board[i][j] -= ele[5];
        else board[i][j] += ele[5];
      }
    }
  });

  let count = 0;
  for (const row of board) {
    for (const e of row) {
      if (e > 0) count++;
    }
  }
  return count;
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
); // 10
console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
); // 6
