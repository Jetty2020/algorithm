// https://programmers.co.kr/learn/courses/30/lessons/12927

function solution(n, works) {
  if (works.reduce((a, b) => a + b, 0) <= n) return 0;

  const sorted = works.sort((a, b) => b - a);

  while (n) {
    const max = sorted[0];
    for (let i = 0; i < works.length; i++) {
      if (sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      if (!n) break;
    }
  }
  return sorted.reduce((a, b) => a + Math.pow(b, 2), 0);
}

console.log(solution(4, [4, 3, 3])); // 12
// console.log(solution(1, [2, 1, 2])); // 6
// console.log(solution(3, [1, 1])); // 0
