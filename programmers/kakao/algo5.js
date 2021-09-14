//

function solution(info, edges) {
  const arr = Array(info.length)
    .fill()
    .map((_) => []);
  edges.forEach((ele) => {
    arr[ele[0]].push(ele[1]);
    arr[ele[1]].push(ele[0]);
  });
  console.log(arr);
  findRoute(info, arr, 0, -1, 0);
  return;
}
function findRoute(info, arr, pos, bans, nums) {
  console.log(info);
  let newNums = nums;
  if (info[pos] === 0) newNums++;
  else if (info[pos] === 1) newNums--;
  console.log(newNums);
  if (newNums === 0) return;
  for (let i = 0; i < arr[pos].length; i++) {
    if (bans !== arr[pos][i]) {
      if (info[pos] === 1) {
        findRoute(
          [...info.slice(0, pos), -1, ...info.slice(pos + 1)],
          arr,
          arr[pos][i],
          -1,
          newNums
        );
      } else {
        findRoute(
          [...info.slice(0, pos), -1, ...info.slice(pos + 1)],
          arr,
          arr[pos][i],
          pos,
          newNums
        );
      }
    }
  }
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
); // 5
// console.log(
//   solution(
//     [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
//     [
//       [0, 1],
//       [0, 2],
//       [1, 3],
//       [1, 4],
//       [2, 5],
//       [2, 6],
//       [3, 7],
//       [4, 8],
//       [6, 9],
//       [9, 10],
//     ]
//   )
// ); // 5
