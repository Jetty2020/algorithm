// https://programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const ans = [];
  const rotateBoard = (bo, qu) => {
    while (qu.length) {
      const coor = qu.shift().map((ele) => ele - 1);
      let direction = 0;
      let temp = undefined;
      let now = coor.slice(0, 2);
      let corner = [
        bo[coor[0]][coor[3]],
        bo[coor[2]][coor[3]],
        bo[coor[2]][coor[1]],
      ];
      let min = Infinity;
      while (1) {
        let mo = bo[now[0]][now[1]];
        bo[now[0]][now[1]] = temp;
        temp = mo;
        if (~corner.indexOf(temp)) direction++;
        if (direction === 0) now[1] += 1;
        else if (direction === 1) now[0] += 1;
        else if (direction === 2) now[1] -= 1;
        else now[0] -= 1;
        if (temp) min = Math.min(temp, min);
        if (!temp) break;
      }
      ans.push(min);
    }
  };
  const board = Array(rows)
    .fill(0)
    .map((_, idx) =>
      Array(columns)
        .fill(idx)
        .map((_, i) => i + idx * columns + 1)
    );
  rotateBoard(board, queries);
  return ans;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
); // [8, 10, 25]
// console.log(
//   solution(3, 3, [
//     [1, 1, 2, 2],
//     [1, 2, 2, 3],
//     [2, 1, 3, 2],
//     [2, 2, 3, 3],
//   ])
// ); // [1, 1, 5, 3]
// console.log(solution(100, 97, [[1, 1, 100, 97]])); // [1]
