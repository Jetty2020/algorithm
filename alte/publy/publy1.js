//

function solution(office, k) {
  let ans = 0;
  function checkArea(x, y) {
    let sum = 0;
    for (let addX = 0; addX < k; addX++) {
      for (let addY = 0; addY < k; addY++) {
        sum += office[x + addX][y + addY];
      }
    }
    return sum;
  }
  let route = office.length - k + 1;
  for (let i = 0; i < route; i++) {
    for (let j = 0; j < route; j++) {
      let result = checkArea(i, j);
      if (ans < result) ans = result;
    }
  }
  return ans;
}

console.log(
  solution(
    [
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
    ],
    2
  )
); // 3
// console.log(
//   solution(
//     [
//       [1, 0, 0],
//       [0, 0, 1],
//       [1, 0, 0],
//     ],
//     2
//   )
// ); // 1
