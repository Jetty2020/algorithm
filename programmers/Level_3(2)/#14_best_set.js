// https://programmers.co.kr/learn/courses/30/lessons/12938

function solution(n, s) {
  if (s < n) return [-1];
  const ans = Array(n - (s % n)).fill(~~(s / n));
  ans.push(...Array(s % n).fill(~~(s / n) + 1));
  return ans;
}

console.log(solution(2, 9)); // [4,5]
console.log(solution(2, 1)); // [-1]
console.log(solution(2, 8)); // [4,4]
