// https://programmers.co.kr/learn/courses/30/lessons/60061

function solution(n, build_frame) {
  const answer = [];

  for (const frame of build_frame) {
    const [x, y, fr, isInstall] = frame;

    if (isInstall) buildFrame(answer, x, y, fr);
    else destroyFrame(answer, x, y, fr);
  }

  return answer.sort((a, b) =>
    a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]
  );
}

const checkPillar = (ans, x, y) => {
  if (y === 0) return true;
  else if (ans.find(([a, b, fr]) => a === x && b === y - 1 && fr === 0))
    return true;
  else if (ans.find(([a, b, fr]) => a === x && b === y && fr === 1))
    return true;
  else if (ans.find(([a, b, fr]) => a === x - 1 && b === y && fr === 1))
    return true;
  return false;
};

const checkPlate = (ans, x, y) => {
  if (ans.find(([a, b, fr]) => a === x && b === y - 1 && fr === 0)) return true;
  else if (ans.find(([a, b, fr]) => a === x + 1 && b === y - 1 && fr === 0))
    return true;
  else if (
    ans.find(([a, b, fr]) => a === x + 1 && b === y && fr === 1) &&
    ans.find(([a, b, fr]) => a === x - 1 && b === y && fr === 1)
  )
    return true;
  return false;
};

const buildFrame = (ans, x, y, frame) => {
  if (frame) {
    if (checkPlate(ans, x, y)) ans.push([x, y, frame]);
  } else {
    if (checkPillar(ans, x, y)) ans.push([x, y, frame]);
  }
};

const destroyFrame = (ans, x, y, frame) => {
  const copy = ans.slice();
  const idx = ans.findIndex(([a, b, fr]) => a === x && b === y && fr === frame);

  copy.splice(idx, 1);

  for (const frs of copy) {
    const [xpos, ypos, fr] = frs;

    if (fr) {
      if (!checkPlate(copy, xpos, ypos)) return;
    } else {
      if (!checkPillar(copy, xpos, ypos)) return;
    }
  }

  ans.splice(idx, 1);
};

console.log(
  solution(5, [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [2, 1, 0, 1],
    [2, 2, 1, 1],
    [5, 0, 0, 1],
    [5, 1, 0, 1],
    [4, 2, 1, 1],
    [3, 2, 1, 1],
  ])
); // [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]
// console.log(
//   solution(5, [
//     [0, 0, 0, 1],
//     [2, 0, 0, 1],
//     [4, 0, 0, 1],
//     [0, 1, 1, 1],
//     [1, 1, 1, 1],
//     [2, 1, 1, 1],
//     [3, 1, 1, 1],
//     [2, 0, 0, 0],
//     [1, 1, 1, 0],
//     [2, 2, 0, 1],
//   ])
// ); // [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]]
