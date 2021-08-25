// https://programmers.co.kr/learn/courses/30/lessons/67259

function solution(board) {
  const N = board.length;
  const costs = new Array(N + 2)
    .fill()
    .map((_) => new Array(N + 2).fill(Infinity));
  const new_board = new Array(N + 2)
    .fill()
    .map((_) => new Array(N + 2).fill(1));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  const queue = [[1, 1, '', 0]];
  const directions = [0, 1, 3];

  while (queue.length) {
    const [Y, X, direction, price] = queue.shift();
    if (costs[Y][X] >= price) {
      costs[Y][X] = price;

      for (const dir of directions) {
        const direct = (direction + dir) % 4;
        const [next_Y, next_X] = getDirection(Y, X, direct);

        if (!new_board[next_Y][next_X]) {
          const cost = price + (direction === '' || dir === 0 ? 100 : 600);
          queue.push([next_Y, next_X, direct, cost]);
        }
      }
    }
  }

  return costs[N][N];
}

const getDirection = (Y, X, dir) => {
  if (dir === 0) return [Y, X + 1];
  else if (dir === 1) return [Y + 1, X];
  else if (dir === 2) return [Y, X - 1];
  else return [Y - 1, X];
};

console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // 900
// console.log(
//   solution([
//     [0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 1],
//     [0, 0, 1, 0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0],
//   ])
// ); // 3800
// console.log(
//   solution([
//     [0, 0, 1, 0],
//     [0, 0, 0, 0],
//     [0, 1, 0, 1],
//     [1, 0, 0, 0],
//   ])
// ); // 2100
// console.log(
//   solution([
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 0],
//     [0, 0, 1, 0, 0, 0],
//     [1, 0, 0, 1, 0, 1],
//     [0, 1, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0],
//   ])
// ); // 3200
