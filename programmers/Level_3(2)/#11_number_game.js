// https://programmers.co.kr/learn/courses/30/lessons/12987

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (const a of A) {
    const max = B[B.length - 1];
    if (a < max) {
      answer++;
      B.pop();
    }
  }

  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // 0
