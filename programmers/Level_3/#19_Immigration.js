// https://programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  let max = Math.max(...times) * n;
  let min = 1;

  while (min <= max) {
    const mid = Math.floor((max + min) / 2);
    const sum = times.reduce((a, b) => (a += Math.floor(mid / b)), 0);

    if (sum >= n) max = mid - 1;
    else min = mid + 1;
  }

  return min;
}

console.log(solution(6, [7, 10])); // 28
