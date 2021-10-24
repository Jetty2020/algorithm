// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const totalSpace = brown + yellow;

  for (let i = Math.floor(totalSpace / 2); i > 0; i--) {
    if (totalSpace % i !== 0) continue;

    const width = i;
    const height = totalSpace / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

console.log(solution(10, 2)); // [4,3]
// console.log(solution(8, 1)); // [3,3]
// console.log(solution(24, 24)); // [8,6]
